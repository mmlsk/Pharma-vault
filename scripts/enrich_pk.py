#!/usr/bin/env python3
"""Pharmacokinetic enrichment from Wikipedia `{{Infobox drug}}` templates.

Two deterministic stages, so the network step is separate from the parsing step:

  python3 enrich_pk.py fetch   # network -> data/enrichment/wikipedia-infobox.jsonl (raw fields + revision id)
  python3 enrich_pk.py parse   # cache  -> data/processed/pk.json + pk.csv (structured, with provenance)

Safety rules (clinical data must not be invented):
  * a page is accepted only if it contains `{{Infobox drug}}`;
  * if both the catalogue and the infobox carry a ChEMBL id and they differ, the page is rejected;
  * half-lives reported for animals (rat, mouse, dog, ...) are NOT stored as numbers - only as notes;
  * every parsed value keeps the original cleaned text and a permanent revision URL;
  * CYP enzymes found in the *metabolism* field are recorded as substrates ("metabolised by"),
    never as inhibitors/inducers - those roles require curated sources (SmPC/FDA label).
The output feeds `generate_vault_notes.py`; curated notes (review-status != stub) are never touched.
"""
from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from datetime import date

from pv_common import PROCESSED, ROOT

ENRICH = ROOT / "data/enrichment"
CACHE = ENRICH / "wikipedia-infobox.jsonl"
API = "https://en.wikipedia.org/w/api.php"
UA = "Pharma-vault/3.1 (https://github.com/mmlsk/Pharma-vault; educational pharmacology research)"
FIELDS = ["elimination_half-life", "protein_bound", "metabolism", "metabolites", "excretion",
          "bioavailability", "onset", "duration_of_action", "ChEMBL", "CAS_number", "PubChem",
          "legal_status", "routes_of_administration", "drug_class"]
NON_HUMAN = re.compile(r"\b(rats?|mice|mouse|murine|dogs?|canine|monkeys?|primates?|rabbits?|pigs?|animals?|in vitro|preclinical)\b", re.I)


# --------------------------------------------------------------------------- fetch
def candidates(r: dict) -> list[str]:
    name = r["name"].strip()
    out = [re.sub(r"\s*\(.*?\)\s*", " ", name).strip()]
    out += re.findall(r"\((.*?)\)", name)
    out += [name] + list(r["aliases"])
    seen, res = set(), []
    for c in out:
        c = c.strip()
        if c and c.lower() not in seen and len(c) < 120:
            seen.add(c.lower())
            res.append(c)
    return res


def infobox(text: str) -> str | None:
    m = re.search(r"\{\{\s*(Infobox drug|Drugbox)\b", text, re.I)
    if not m:
        return None
    i, depth = m.start(), 0
    while i < len(text):
        if text.startswith("{{", i):
            depth += 1
            i += 2
        elif text.startswith("}}", i):
            depth -= 1
            i += 2
            if depth == 0:
                return text[m.start():i]
        else:
            i += 1
    return None


def split_fields(box: str) -> dict:
    """Split top-level `| key = value` pairs of a template (ignores | inside [[ ]] and {{ }})."""
    body, parts, buf, d = box[2:-2], [], [], 0
    i = 0
    while i < len(body):
        two = body[i:i + 2]
        if two in ("{{", "[["):
            d += 1; buf.append(two); i += 2; continue
        if two in ("}}", "]]"):
            d -= 1; buf.append(two); i += 2; continue
        if body[i] == "|" and d == 0:
            parts.append("".join(buf)); buf = []
        else:
            buf.append(body[i])
        i += 1
    parts.append("".join(buf))
    out = {}
    for p in parts[1:]:
        if "=" in p:
            k, v = p.split("=", 1)
            k = k.strip()
            if k in FIELDS and v.strip():
                out[k] = v.strip()
    return out


def api(titles: list[str]) -> dict:
    q = urllib.parse.urlencode({
        "action": "query", "prop": "revisions", "rvprop": "content|ids", "rvslots": "main",
        "format": "json", "formatversion": 2, "redirects": 1, "titles": "|".join(titles)})
    for attempt in range(5):
        try:
            req = urllib.request.Request(f"{API}?{q}", headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as fh:
                return json.load(fh)
        except Exception as exc:  # noqa: BLE001 - retry on any transient error
            time.sleep(2 ** attempt)
            last = exc
    raise RuntimeError(last)


def fetch(batch: int = 40) -> None:
    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    ENRICH.mkdir(parents=True, exist_ok=True)
    done = {}
    if CACHE.exists():
        for line in CACHE.read_text(encoding="utf-8").splitlines():
            rec = json.loads(line)
            done[rec["compound_id"]] = rec
    todo = {r["compound_id"]: candidates(r) for r in rows if r["compound_id"] not in done}
    level = 0
    while todo and level < 6:
        asks = {cid: c[level] for cid, c in todo.items() if level < len(c)}
        titles = sorted(set(asks.values()))
        pages = {}
        for i in range(0, len(titles), batch):
            data = api(titles[i:i + batch])["query"]
            norm = {n["from"]: n["to"] for n in data.get("normalized", [])}
            redir = {n["from"]: n["to"] for n in data.get("redirects", [])}
            by_title = {p["title"]: p for p in data["pages"]}
            for t in titles[i:i + batch]:
                t2 = norm.get(t, t)
                t2 = redir.get(t2, t2)
                pages[t] = by_title.get(t2)
            time.sleep(0.5)
        for cid, title in asks.items():
            p = pages.get(title)
            if not p or p.get("missing") or "revisions" in p and not p["revisions"]:
                continue
            rev = p["revisions"][0]
            box = infobox(rev["slots"]["main"].get("content", ""))
            if not box:
                continue
            done[cid] = {"compound_id": cid, "query": title, "title": p["title"], "revid": rev["revid"],
                         "retrieved": date.today().isoformat(), "fields": split_fields(box)}
            todo.pop(cid)
        print(f"level={level} matched={len(done)} remaining={len(todo)}", flush=True)
        todo = {cid: c for cid, c in todo.items() if level + 1 < len(c)} | {}
        level += 1
    with open(CACHE, "w", encoding="utf-8") as fh:
        for cid in sorted(done):
            fh.write(json.dumps(done[cid], ensure_ascii=False, sort_keys=True) + "\n")
    print(f"cached={len(done)} -> {CACHE.relative_to(ROOT)}")


# --------------------------------------------------------------------------- parse
def clean(v: str) -> str:
    v = re.sub(r"<!--.*?-->", "", v, flags=re.S)
    v = re.sub(r"<ref[^>/]*/>", "", v)
    v = re.sub(r"<ref[^>]*>.*?</ref>", "", v, flags=re.S)
    v = re.sub(r"\{\{\s*(?:ndash|snd|spaced ndash)\s*\}\}", "–", v, flags=re.I)
    v = re.sub(r"\{\{\s*(?:nbsp|thinsp)\s*\}\}", " ", v, flags=re.I)
    v = re.sub(r"\{\{\s*(?:Val|val)\s*\|([^{}]*)\}\}", lambda m: _val(m.group(1)), v)
    v = re.sub(r"\{\{\s*(?:Unbulleted list|ubl|Plainlist|plainlist|flatlist|hlist)\s*\|([^{}]*)\}\}",
               lambda m: "; ".join(x.strip() for x in m.group(1).split("|") if "=" not in x), v, flags=re.I)
    v = re.sub(r"\{\{\s*(?:abbr|abbrlink)\s*\|([^|{}]*)\|[^{}]*\}\}", r"\1", v, flags=re.I)
    v = re.sub(r"\{\{\s*(?:nowrap|small|sub|sup)\s*\|([^{}]*)\}\}", r"\1", v, flags=re.I)
    for _ in range(3):
        v = re.sub(r"\{\{[^{}]*\}\}", "", v)
    v = re.sub(r"\[\[(?:[^|\]]*\|)?([^\]]*)\]\]", r"\1", v)
    v = re.sub(r"<br\s*/?>", "; ", v, flags=re.I)
    v = re.sub(r"<[^>]+>", "", v)
    v = v.replace("''", "").replace("&ndash;", "–").replace("&mdash;", "—").replace("&nbsp;", " ").replace("&minus;", "−")
    v = re.sub(r"^\s*[*#]\s*", "", v, flags=re.M)
    v = re.sub(r"\s*\n\s*", "; ", v)
    v = re.sub(r"\s{2,}", " ", v).strip(" ;,")
    return v


def _val(args: str) -> str:
    parts = [p.strip() for p in args.split("|")]
    unit = next((p.split("=", 1)[1] for p in parts if p.startswith("u=") or p.startswith("ul=")), "")
    nums = [p for p in parts if "=" not in p]
    s = " ".join("–" if n in ("-", "–", "to") else n for n in nums).replace(" – ", "–")
    return f"{s} {unit}".strip()


NUM = r"(\d+(?:[.,]\d+)?)"
UNITS = {"min": "min", "minute": "min", "minutes": "min", "mins": "min", "s": None, "sec": None, "seconds": None,
         "h": "h", "hr": "h", "hrs": "h", "hour": "h", "hours": "h",
         "d": "d", "day": "d", "days": "d", "wk": "wk", "week": "wk", "weeks": "wk"}
HL = re.compile(NUM + r"\s*(?:(?:–|-|—|to)\s*" + NUM + r")?\s*(minutes?|mins?|min|hours?|hrs?|hr|h|days?|d|weeks?|wk|seconds|sec|s)\b", re.I)
PCT = re.compile(r"(?:[<>≤≥~]|approximately\s+)?" + NUM + r"\s*(?:(?:–|-|—|to)\s*" + NUM + r")?\s*%")
CYP = re.compile(r"\bCYP\s?(\d{1,2}[A-Z]\d{1,2})\b")


SD = re.compile(r"\s*(?:±|\+/-|\+/−|\+-)\s*" + NUM)


def strip_sd(text: str) -> str:
    """'1.54 ± 0.63 h' -> '1.54 h' (a ± spread is a dispersion, never the central value)."""
    return SD.sub("", text)


def f(x):
    return float(x.replace(",", "."))


def parse_half_life(text: str) -> dict:
    seg = strip_sd(text.split(";")[0])
    m = HL.search(seg) or HL.search(strip_sd(text))
    if not m:
        return {"value": None, "unit": None, "value-max": None, "notes": text}
    unit = UNITS.get(m.group(3).lower())
    lo, hi = f(m.group(1)), (f(m.group(2)) if m.group(2) else None)
    if NON_HUMAN.search(text) or unit is None:
        return {"value": None, "unit": None, "value-max": None,
                "notes": f"{text} [not stored as a number: non-human or sub-minute data]"}
    return {"value": lo, "unit": unit, "value-max": hi if hi and hi > lo else None, "notes": text}


ANIMAL = re.compile(NON_HUMAN.pattern.replace("|in vitro", ""), re.I)  # plasma protein binding is legitimately measured in vitro


def parse_percent(text: str, lo_max=100, allow_in_vitro: bool = False) -> tuple:
    if (ANIMAL if allow_in_vitro else NON_HUMAN).search(text):  # animal (/ in-vitro) figures stay as text only
        return None, None
    m = PCT.search(strip_sd(text))
    if not m:
        return None, None
    lo, hi = f(m.group(1)), (f(m.group(2)) if m.group(2) else None)
    if lo > lo_max or (hi and hi > lo_max):
        return None, None
    return lo, (hi if hi and hi > lo else None)


def _route_pct(t: str, words: str) -> float | None:
    """Percentage attached to a route keyword, e.g. 'urine: 80%' or '80% in urine'."""
    m = re.search(r"(?:" + words + r")\w*[^;%\d]{0,40}?" + NUM + r"\s*%", t) \
        or re.search(NUM + r"\s*%[^;\d]{0,25}(?:" + words + r")", t)
    if not m:
        return None
    num = next(g for g in m.groups() if g and re.match(r"\d", g))
    v = f(num)
    return v if v <= 100 else None


def parse_excretion(text: str) -> dict:
    t = text.lower()
    up = _route_pct(t, "urin|renal|kidney")
    fp = _route_pct(t, "fec|faec|bil|stool")
    fe = None
    m = re.search(NUM + r"\s*%[^;\d]{0,30}(?:unchanged|intact|as parent)", t) \
        or re.search(r"(?:unchanged|intact)[^;%\d]{0,30}?" + NUM + r"\s*%", t)
    if m and f(m.group(1)) <= 100:
        fe = round(f(m.group(1)) / 100, 3)
    primary = None
    if up is not None and up >= 50:
        primary = True
    elif fp is not None and fp >= 50:
        primary = False
    elif re.match(r"^\s*(urine|urinary|renal|kidney)", t) and not re.search(r"fec|faec|bil", t):
        primary = True
    elif re.match(r"^\s*(fec|faec|bil)", t) and not re.search(r"urin|renal", t):
        primary = False
    if fe is not None and fe <= 0.1 and primary:
        primary = None  # renally excreted mostly as metabolites - leave for curation
    return {"primary-route": primary, "fraction-excreted-unchanged": fe, "notes": text}


_MOLS: dict | None = None


def _parent(cid: str) -> str | None:
    """Parent molecule from the ChEMBL cache written by enrich_chembl.py (None if unknown)."""
    global _MOLS
    if _MOLS is None:
        p = ENRICH / "chembl/molecules.jsonl"
        _MOLS = {}
        if p.exists():
            for line in p.read_text(encoding="utf-8").splitlines():
                m = json.loads(line)
                _MOLS[m["molecule_chembl_id"]] = (m.get("molecule_hierarchy") or {}).get("parent_chembl_id") or m["molecule_chembl_id"]
    return _MOLS.get(cid)


def parse_record(rec: dict, catalogue: dict) -> dict | None:
    flds = {k: clean(v) for k, v in rec["fields"].items()}
    flds = {k: v for k, v in flds.items() if v}
    cat = catalogue[rec["compound_id"]]
    ib = re.sub(r"\D", "", flds.get("ChEMBL", ""))
    mine = re.sub(r"\D", "", cat.get("chembl_id") or "")
    match = "exact" if ib and mine and ib == mine else None
    if ib and mine and ib != mine:
        pa, pb_ = _parent("CHEMBL" + ib), _parent("CHEMBL" + mine)
        if not (pa and pa == pb_):
            return {"compound_id": rec["compound_id"], "rejected": f"ChEMBL mismatch (catalogue {mine} vs page {ib}; parents {pb_} / {pa})"}
        match = "parent"  # salt/ester vs parent molecule - same active moiety
    pk_keys = ["elimination_half-life", "protein_bound", "metabolism", "metabolites", "excretion", "bioavailability"]
    if not any(k in flds for k in pk_keys):
        return None
    out = {"compound_id": rec["compound_id"], "source-title": rec["title"], "revid": rec["revid"],
           "source-url": f"https://en.wikipedia.org/w/index.php?title={urllib.parse.quote(rec['title'].replace(' ', '_'))}&oldid={rec['revid']}",
           "retrieved": rec["retrieved"], "chembl-confirmed": bool(match)}
    if match == "parent":
        out["chembl-match"] = "parent"
    if "elimination_half-life" in flds:
        out["half-life"] = parse_half_life(flds["elimination_half-life"])
    if "protein_bound" in flds:
        lo, hi = parse_percent(flds["protein_bound"], allow_in_vitro=True)
        out["protein-binding"] = {"value": lo, "value-max": hi, "unit": "percent" if lo is not None else None,
                                  "notes": flds["protein_bound"]}
    if "bioavailability" in flds:
        lo, hi = parse_percent(flds["bioavailability"])
        out["bioavailability"] = {"value": lo, "value-max": hi, "notes": flds["bioavailability"]}
    met = flds.get("metabolism", "")
    if met:
        hep = bool(re.search(r"liver|hepat|cyp|ugt|glucuronid|oxidation|hydroxylation|demethyl", met, re.I))
        out["hepatic-clearance"] = {"primary-route": True if hep else None, "extraction-ratio": None, "notes": met}
        cyps = sorted({"CYP" + c for c in CYP.findall(met)})
        out["cyp-interactions"] = {"substrates": cyps, "inhibitors": [], "inducers": [], "transporters": [],
                                   "notes": ("Metabolised by " + ", ".join(cyps) + " (from metabolism field); "
                                             "inhibitor/inducer roles not assessed") if cyps else None}
    if "metabolites" in flds:
        out["metabolites-text"] = flds["metabolites"]
    if "excretion" in flds:
        out["renal-clearance"] = parse_excretion(flds["excretion"])
    for k in ("onset", "duration_of_action", "routes_of_administration", "drug_class"):
        if k in flds:
            out[k.replace("_", "-")] = flds[k]
    return out


def parse() -> None:
    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    catalogue = {r["compound_id"]: r for r in rows}
    recs = [json.loads(l) for l in CACHE.read_text(encoding="utf-8").splitlines()]
    parsed, rejected = [], []
    for rec in recs:
        if rec["compound_id"] not in catalogue:
            continue
        p = parse_record(rec, catalogue)
        if p is None:
            continue
        (rejected if "rejected" in p else parsed).append(p)
    parsed.sort(key=lambda x: x["compound_id"])
    (PROCESSED / "pk.json").write_text(json.dumps(parsed, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    cols = ["compound_id", "source-title", "half-life", "half-life-max", "half-life-unit", "protein-binding",
            "bioavailability", "renal-primary", "fe-unchanged", "hepatic-primary", "cyp-substrates", "source-url"]
    with open(PROCESSED / "pk.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh, lineterminator="\n")
        w.writerow(cols)
        for p in parsed:
            hl, pb, ba = p.get("half-life", {}), p.get("protein-binding", {}), p.get("bioavailability", {})
            rc, hc, cy = p.get("renal-clearance", {}), p.get("hepatic-clearance", {}), p.get("cyp-interactions", {})
            w.writerow([p["compound_id"], p["source-title"], hl.get("value"), hl.get("value-max"), hl.get("unit"),
                        pb.get("value"), ba.get("value"), rc.get("primary-route"), rc.get("fraction-excreted-unchanged"),
                        hc.get("primary-route"), "; ".join(cy.get("substrates", [])), p["source-url"]])
    with open(ENRICH / "rejected.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh, lineterminator="\n")
        w.writerow(["compound_id", "reason"])
        w.writerows([[r["compound_id"], r["rejected"]] for r in sorted(rejected, key=lambda x: x["compound_id"])])
    n = lambda key, sub="value": sum(1 for p in parsed if (p.get(key) or {}).get(sub) is not None)
    stats = {"catalogue": len(rows), "infobox_matched": len(recs), "with_pk_fields": len(parsed),
             "rejected_chembl_mismatch": len(rejected), "half_life_numeric": n("half-life"),
             "protein_binding_numeric": n("protein-binding"), "bioavailability_numeric": n("bioavailability"),
             "renal_primary_set": n("renal-clearance", "primary-route"),
             "fe_unchanged": n("renal-clearance", "fraction-excreted-unchanged"),
             "hepatic_primary_set": n("hepatic-clearance", "primary-route"),
             "cyp_substrates": sum(1 for p in parsed if (p.get("cyp-interactions") or {}).get("substrates")),
             "chembl_confirmed": sum(1 for p in parsed if p["chembl-confirmed"])}
    (ENRICH / "pk-coverage.json").write_text(json.dumps(stats, indent=1) + "\n")
    print(json.dumps(stats, indent=1))


if __name__ == "__main__":
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("stage", choices=["fetch", "parse"])
    a = ap.parse_args()
    fetch() if a.stage == "fetch" else parse()
    sys.exit(0)
