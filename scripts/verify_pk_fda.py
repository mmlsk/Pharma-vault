#!/usr/bin/env python3
"""Cross-check Wikipedia-derived PK values against FDA structured product labels (openFDA).

  python3 verify_pk_fda.py fetch   # network: openFDA drug/label -> data/enrichment/openfda/label-pk.jsonl
  python3 verify_pk_fda.py parse   # offline : data/processed/pk-verification.json (+ coverage)

Only the sentences of the label's "pharmacokinetics" / "clinical_pharmacology" sections that mention
half-life or protein binding are cached (US labels are public domain), with set_id + effective_time.

Comparison rules (deliberately tolerant - labels report different populations, enantiomers and
metabolites; the goal is to catch parser errors and gross mismatches, not to adjudicate):
  * half-life   : consistent if ANY label value (h) lies within [0.5 x lo, 1.5 x hi] of the Wikipedia range;
  * protein bind: consistent if ANY label percentage lies within +/- 10 pp of the Wikipedia range;
  * discrepant  : label has numbers for the field but none is within tolerance -> Review Queue;
  * no-label-value: a label was found but gives no number for the field.
Status never promotes a note to `verified`: that remains a human decision.
"""
from __future__ import annotations

import argparse
import json
import re
import time
import urllib.parse
import urllib.error
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import date

from enrich_pk import strip_sd
from pv_common import PROCESSED, ROOT

OUT = ROOT / "data/enrichment/openfda"
CACHE = OUT / "label-pk.jsonl"
API = "https://api.fda.gov/drug/label.json"
NUM = r"(\d+(?:\.\d+)?)"
HL_SENT = re.compile(r"half[- ]li(?:fe|ves)|\bt\s?(?:1/2|½)|\bt1/2\b|terminal (?:elimination|phase)", re.I)
PB_SENT = re.compile(r"(protein[- ]bound|bound to (?:human )?(?:plasma|serum)|protein binding|plasma protein)", re.I)
HL_VAL = re.compile(NUM + r"\s*(?:(?:to|-|–|and)\s*" + NUM + r")?\s*(hours?|hrs?|h|minutes?|min|days?)\b", re.I)
PB_VAL = re.compile(NUM + r"\s*(?:(?:to|-|–|and)\s*" + NUM + r")?\s*%")
TO_H = {"h": 1, "hr": 1, "hrs": 1, "hour": 1, "hours": 1, "min": 1 / 60, "minute": 1 / 60, "minutes": 1 / 60, "day": 24, "days": 24}
UNIT_H = {"min": 1 / 60, "h": 1, "d": 24, "wk": 168}


def sentences(text: str, rx) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.;])\s+(?=[A-Z(])", text) if rx.search(s)][:16]


def query(name: str) -> dict | None:
    q = urllib.parse.urlencode({"search": f'openfda.generic_name.exact:"{name.upper()}"', "limit": 5,
                                "sort": "effective_time:desc"})
    for attempt in range(5):
        try:
            with urllib.request.urlopen(f"{API}?{q}", timeout=60) as fh:
                return json.load(fh)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(2 ** attempt)
        except Exception:  # noqa: BLE001
            time.sleep(2 ** attempt)
    return None


def names_for(cid: str, pk: dict, ch: dict, cat: dict) -> list[str]:
    out = []
    if ch.get(cid, {}).get("identity", {}).get("pref-name"):
        out.append(ch[cid]["identity"]["pref-name"])
    out.append(pk["source-title"])
    out.append(re.sub(r"\s*\(.*?\)", "", cat[cid]["name"]))
    seen, res = set(), []
    for n in out:
        n = n.strip()
        if n and n.lower() not in seen and len(n) > 3:
            seen.add(n.lower())
            res.append(n)
    return res


def fetch_one(item) -> dict:
    cid, names = item
    for n in names:
        data = query(n)
        for r in (data or {}).get("results", []):
            text = " ".join(r.get("pharmacokinetics") or r.get("clinical_pharmacology") or [])
            if not text:
                continue
            return {"compound_id": cid, "query": n, "set_id": r.get("set_id"), "effective_time": r.get("effective_time"),
                    "generic_name": (r.get("openfda") or {}).get("generic_name", [None])[0],
                    "section": "pharmacokinetics" if r.get("pharmacokinetics") else "clinical_pharmacology",
                    "half_life_sentences": sentences(text, HL_SENT), "protein_binding_sentences": sentences(text, PB_SENT),
                    "retrieved": date.today().isoformat()}
    return {"compound_id": cid, "query": names[0] if names else None, "set_id": None, "retrieved": date.today().isoformat()}


def load(p):
    return {json.loads(l)["compound_id"]: json.loads(l) for l in p.read_text(encoding="utf-8").splitlines()} if p.exists() else {}


def inputs():
    pk = {r["compound_id"]: r for r in json.loads((PROCESSED / "pk.json").read_text(encoding="utf-8"))}
    chp = PROCESSED / "chembl.json"
    ch = {r["compound_id"]: r for r in json.loads(chp.read_text(encoding="utf-8"))} if chp.exists() else {}
    cat = {r["compound_id"]: r for r in json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))}
    return pk, ch, cat


def eligible(r: dict) -> bool:
    return bool((r.get("half-life") or {}).get("value") is not None or (r.get("protein-binding") or {}).get("value") is not None)


def fetch() -> None:
    pk, ch, cat = inputs()
    done = load(CACHE)
    todo = [(cid, names_for(cid, r, ch, cat)) for cid, r in sorted(pk.items()) if eligible(r) and cid not in done]
    print(f"cached={len(done)} todo={len(todo)}", flush=True)
    OUT.mkdir(parents=True, exist_ok=True)
    with ThreadPoolExecutor(4) as ex:
        for i, rec in enumerate(ex.map(fetch_one, todo)):
            done[rec["compound_id"]] = rec
            if i % 100 == 0:
                print(f"  {i}/{len(todo)} labels={sum(1 for d in done.values() if d.get('set_id'))}", flush=True)
    with open(CACHE, "w", encoding="utf-8") as fh:
        for k in sorted(done):
            fh.write(json.dumps(done[k], ensure_ascii=False, sort_keys=True) + "\n")


def hl_values(sents: list[str]) -> list[float]:
    vals = []
    for s in sents:
        for m in HL_VAL.finditer(strip_sd(s)):
            k = TO_H.get(m.group(3).lower())
            if k:
                vals += [float(m.group(1)) * k] + ([float(m.group(2)) * k] if m.group(2) else [])
    return vals


def pb_values(sents: list[str]) -> list[float]:
    vals = []
    for s in sents:
        for m in PB_VAL.finditer(strip_sd(s)):
            vals += [float(g) for g in m.groups() if g and float(g) <= 100]
    return vals


def compare(lo, hi, vals, kind) -> str:
    if not vals:
        return "no-label-value"
    hi = hi if hi is not None else lo
    if kind == "hl":
        ok = any(0.5 * lo <= v <= 1.5 * hi for v in vals)
    else:
        ok = any(lo - 10 <= v <= hi + 10 for v in vals)
    return "consistent" if ok else "discrepant"


def parse() -> None:
    pk, _, _ = inputs()
    labels = load(CACHE)
    out = []
    for cid in sorted(pk):
        r, lab = pk[cid], labels.get(cid)
        if not eligible(r) or not lab:
            continue
        rec = {"compound_id": cid, "source": "openFDA drug label (US SPL)", "checked": lab["retrieved"]}
        if not lab.get("set_id"):
            rec |= {"status": "no-label", "fields": {}}
            out.append(rec)
            continue
        rec |= {"set-id": lab["set_id"], "effective-time": lab["effective_time"], "label-generic-name": lab["generic_name"],
                "url": f"https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid={lab['set_id']}", "fields": {}}
        hl = r.get("half-life") or {}
        if hl.get("value") is not None and hl.get("unit") in UNIT_H:
            k = UNIT_H[hl["unit"]]
            vals = hl_values(lab["half_life_sentences"])
            st = compare(hl["value"] * k, (hl["value-max"] or hl["value"]) * k, vals, "hl")
            rec["fields"]["half-life"] = {"status": st, "wikipedia-h": [round(hl["value"] * k, 3), round((hl["value-max"] or hl["value"]) * k, 3)],
                                          "label-values-h": sorted({round(v, 3) for v in vals})[:12],
                                          "evidence": lab["half_life_sentences"][:3]}
        pb = r.get("protein-binding") or {}
        if pb.get("value") is not None:
            vals = pb_values(lab["protein_binding_sentences"])
            st = compare(pb["value"], pb.get("value-max"), vals, "pb")
            rec["fields"]["protein-binding"] = {"status": st, "wikipedia-pct": [pb["value"], pb.get("value-max") or pb["value"]],
                                                "label-values-pct": sorted(set(vals))[:12], "evidence": lab["protein_binding_sentences"][:3]}
        sts = [f["status"] for f in rec["fields"].values()]
        rec["status"] = ("discrepant" if "discrepant" in sts else "consistent" if "consistent" in sts else "no-label-value")
        out.append(rec)
    (PROCESSED / "pk-verification.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    fc = Counter((f, v["status"]) for r in out for f, v in r["fields"].items())
    cov = {"eligible_pk_records": sum(1 for r in pk.values() if eligible(r)), "checked": len(out),
           "status": dict(sorted(Counter(r["status"] for r in out).items())),
           "per_field": {f"{a}:{b}": n for (a, b), n in sorted(fc.items())}}
    (ROOT / "data/enrichment/pk-verification-coverage.json").write_text(json.dumps(cov, indent=1) + "\n")
    print(json.dumps(cov, indent=1))


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("stage", choices=["fetch", "parse"])
    {"fetch": fetch, "parse": parse}[a.parse_args().stage]()
