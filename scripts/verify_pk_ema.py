#!/usr/bin/env python3
"""Cross-check Wikipedia-derived PK values against EU SmPCs (EMA EPAR product information, = ChPL in Polish).

  python3 verify_pk_ema.py fetch   # network: EMA medicines report + product-information PDFs (section 5.2)
  python3 verify_pk_ema.py parse   # offline : data/processed/pk-verification-ema.json (+ coverage)

Scope: centrally authorised human medicines (EMA "Medicines output" JSON report). National-only
products (e.g. most older generics registered only in Poland) are not covered.

Matching (no inference): a compound matches an EMA product when the product's INN (single active
substance, no combinations) equals the ChEMBL preferred name, the catalogue name or an alias
(case-insensitive, common salt words removed). Among matching products the reference product is
chosen: status Authorised, not generic/biosimilar, earliest marketing authorisation.

Cache (data/enrichment/ema/): `medicines.jsonl` (trimmed EMA report rows used for matching) and
`smpc-pk.jsonl` (only the half-life / protein-binding sentences of SmPC section 5.2 + document
URLs). PDFs are not stored. EMA content: (c) European Medicines Agency, reproduction authorised
provided the source is acknowledged.

Comparison rules are identical to verify_pk_fda.py (t1/2 within x0.5-1.5, protein binding +/-10 pp).
"""
from __future__ import annotations

import argparse
import json
import re
import subprocess
import tempfile
import time
import urllib.error
import urllib.request
from collections import Counter
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime

from pv_common import PROCESSED, ROOT
from verify_pk_fda import HL_SENT, PB_SENT, UNIT_H, compare, eligible, hl_values, inputs, load, pb_values

OUT = ROOT / "data/enrichment/ema"
MEDS, CACHE = OUT / "medicines.jsonl", OUT / "smpc-pk.jsonl"
REPORT = "https://www.ema.europa.eu/en/documents/report/medicines-output-medicines_json-report_en.json"
DOC = "https://www.ema.europa.eu/{lang}/documents/product-information/{slug}-epar-product-information_{lang}.pdf"
UA = "Mozilla/5.0 (Pharma-vault/3.3; educational pharmacology research; https://github.com/mmlsk/Pharma-vault)"
SALT = re.compile(r"\b(hydrochloride|dihydrochloride|hydrobromide|sodium|disodium|potassium|calcium|magnesium|mesilate|mesylate|"
                  r"maleate|fumarate|hemifumarate|succinate|tartrate|citrate|phosphate|sulfate|sulphate|acetate|besilate|"
                  r"besylate|tosilate|monohydrate|dihydrate|trihydrate|hemihydrate|anhydrous|bromide|chloride|hyclate|"
                  r"embonate|pamoate|arginine|lysine|meglumine|tromethamine|dipropionate|propionate|furoate)\b", re.I)
KEEP = ["name_of_medicine", "ema_product_number", "international_non_proprietary_name_common_name", "active_substance",
        "atc_code_human", "medicine_status", "generic", "biosimilar", "marketing_authorisation_date",
        "last_updated_date", "medicine_url", "revision_number"]


def norm(s: str) -> str:
    s = SALT.sub(" ", (s or "").lower())
    return re.sub(r"[^a-z0-9]+", " ", s).strip()


def is_single(r: dict) -> bool:
    inn = r["international_non_proprietary_name_common_name"] or ""
    return bool(inn) and not re.search(r"/|,|;|\band\b|\+", inn)


def get(url: str, binary: bool = False):
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as fh:
                data = fh.read()
                return (data, fh.geturl()) if binary else json.loads(data)
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return (None, None) if binary else None
            time.sleep(3 * 2 ** attempt)
        except Exception:  # noqa: BLE001
            time.sleep(3 * 2 ** attempt)
    return (None, None) if binary else None


def head(url: str):
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as fh:
                return fh.geturl()
        except urllib.error.HTTPError as e:
            if e.code == 404:
                return None
            time.sleep(3 * 2 ** attempt)
        except Exception:  # noqa: BLE001
            time.sleep(3 * 2 ** attempt)
    return None


def load_meds() -> list[dict]:
    return [json.loads(l) for l in MEDS.read_text(encoding="utf-8").splitlines()] if MEDS.exists() else []


def ma_date(r: dict):
    try:
        return datetime.strptime(r["marketing_authorisation_date"], "%d/%m/%Y").date().isoformat()
    except (TypeError, ValueError):
        return "9999"


def match(pk: dict, ch: dict, cat: dict, meds: list[dict]) -> dict:
    """compound_id -> chosen reference product (authorised, single INN)."""
    by_inn: dict[str, list] = {}
    for r in meds:
        if r["medicine_status"] == "Authorised" and is_single(r):
            by_inn.setdefault(norm(r["international_non_proprietary_name_common_name"]), []).append(r)
    out = {}
    for cid in sorted(pk):
        if not eligible(pk[cid]):
            continue
        c = cat[cid]
        names = [(ch.get(cid) or {}).get("identity", {}).get("pref-name") or "", re.sub(r"\s*\(.*?\)", "", c["name"]),
                 pk[cid].get("source-title") or ""] + list(c.get("aliases") or [])
        for n in names:
            prods = by_inn.get(norm(n)) if len(norm(n)) > 3 else None
            if prods:
                prods = sorted(prods, key=lambda r: (r["generic"] == "Yes" or r["biosimilar"] == "Yes", ma_date(r), r["ema_product_number"]))
                out[cid] = {"product": prods[0], "matched-name": n, "n-products": len(prods)}
                break
    return out


def section_52(text: str) -> str:
    """First 'Pharmacokinetic properties' section of the SmPC (Annex I) up to 5.3."""
    m = re.search(r"\n\s*5\.2\.?\s+Pharmacokinetic properties\s*\n(.*?)\n\s*5\.3\.?\s+Preclinical", text, re.S | re.I)
    return re.sub(r"\s+", " ", m.group(1)) if m else ""


def sentences(text: str, rx) -> list[str]:
    return [s.strip() for s in re.split(r"(?<=[.;])\s+(?=[A-Z(])", text) if rx.search(s)][:16]


def fetch_one(item) -> dict:
    cid, m = item
    p = m["product"]
    slug = p["medicine_url"].rstrip("/").rsplit("/", 1)[-1]
    rec = {"compound_id": cid, "matched-name": m["matched-name"], "product": p["name_of_medicine"],
           "ema-number": p["ema_product_number"], "inn": p["international_non_proprietary_name_common_name"],
           "atc": p["atc_code_human"], "epar-url": p["medicine_url"], "last-updated": p["last_updated_date"],
           "retrieved": date.today().isoformat(), "n-products": m["n-products"]}
    data, final = get(DOC.format(lang="en", slug=slug), binary=True)
    if not data or not data.startswith(b"%PDF"):
        return rec | {"smpc-url": None}
    with tempfile.NamedTemporaryFile(suffix=".pdf") as fh:
        fh.write(data)
        fh.flush()
        text = subprocess.run(["pdftotext", "-layout", fh.name, "-"], capture_output=True, text=True).stdout
    sec = section_52(text)
    pl_final = head(DOC.format(lang="pl", slug=slug))
    rec |= {"smpc-url": final, "chpl-url": pl_final if pl_final and pl_final.endswith("_pl.pdf") else None,
            "section-5-2-found": bool(sec), "half_life_sentences": sentences(sec, HL_SENT),
            "protein_binding_sentences": sentences(sec, PB_SENT)}
    return rec


def fetch() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    rep = get(REPORT)
    rows = [{k: r.get(k) for k in KEEP} for r in rep["data"] if r.get("category") == "Human"]
    rows.sort(key=lambda r: r["ema_product_number"] or "")
    with open(MEDS, "w", encoding="utf-8") as fh:
        for r in rows:
            fh.write(json.dumps(r, ensure_ascii=False, sort_keys=True) + "\n")
    pk, ch, cat = inputs()
    m = match(pk, ch, cat, rows)
    done = load(CACHE)
    todo = [(cid, x) for cid, x in sorted(m.items()) if cid not in done or not done[cid].get("smpc-url")
            or done[cid].get("ema-number") != x["product"]["ema_product_number"]]
    print(f"human products={len(rows)} matched={len(m)} cached={len(done)} todo={len(todo)}", flush=True)
    with ThreadPoolExecutor(3) as ex:
        for i, rec in enumerate(ex.map(fetch_one, todo)):
            done[rec["compound_id"]] = rec
            if i % 25 == 0:
                print(f"  {i}/{len(todo)}", flush=True)
                write_cache(done)
    write_cache(done)


def write_cache(done: dict) -> None:
    with open(CACHE, "w", encoding="utf-8") as fh:
        for k in sorted(done):
            fh.write(json.dumps(done[k], ensure_ascii=False, sort_keys=True) + "\n")


def parse() -> None:
    pk, ch, _ = inputs()
    smpc = load(CACHE)
    out = []
    for cid in sorted(smpc):
        s, r = smpc[cid], pk.get(cid)
        if not r or not eligible(r):
            continue
        chatc = sorted(a["code"] for a in (ch.get(cid) or {}).get("atc", []))
        rec = {"compound_id": cid, "source": "EMA SmPC (EPAR product information, section 5.2)", "checked": s["retrieved"],
               "product": s["product"], "ema-number": s["ema-number"], "inn": s["inn"], "epar-url": s["epar-url"],
               "smpc-url": s.get("smpc-url"), "chpl-url": s.get("chpl-url"), "ema-atc": s["atc"],
               "atc-agrees-chembl": (s["atc"] in chatc) if (s["atc"] and chatc) else None, "fields": {}}
        if not s.get("smpc-url") or not s.get("section-5-2-found"):
            rec["status"] = "no-smpc-text"
            out.append(rec)
            continue
        hl = r.get("half-life") or {}
        if hl.get("value") is not None and hl.get("unit") in UNIT_H:
            k = UNIT_H[hl["unit"]]
            vals = hl_values(s["half_life_sentences"])
            rec["fields"]["half-life"] = {"status": compare(hl["value"] * k, (hl["value-max"] or hl["value"]) * k, vals, "hl"),
                                          "wikipedia-h": [round(hl["value"] * k, 3), round((hl["value-max"] or hl["value"]) * k, 3)],
                                          "smpc-values-h": sorted({round(v, 3) for v in vals})[:12],
                                          "evidence": s["half_life_sentences"][:3]}
        pb = r.get("protein-binding") or {}
        if pb.get("value") is not None:
            vals = pb_values(s["protein_binding_sentences"])
            rec["fields"]["protein-binding"] = {"status": compare(pb["value"], pb.get("value-max"), vals, "pb"),
                                                "wikipedia-pct": [pb["value"], pb.get("value-max") or pb["value"]],
                                                "smpc-values-pct": sorted(set(vals))[:12], "evidence": s["protein_binding_sentences"][:3]}
        sts = [f["status"] for f in rec["fields"].values()]
        rec["status"] = "discrepant" if "discrepant" in sts else "consistent" if "consistent" in sts else "no-smpc-value"
        out.append(rec)
    (PROCESSED / "pk-verification-ema.json").write_text(json.dumps(out, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    fc = Counter((f, v["status"]) for r in out for f, v in r["fields"].items())
    cov = {"matched_products": len(smpc), "checked": len(out),
           "status": dict(sorted(Counter(r["status"] for r in out).items())),
           "per_field": {f"{a}:{b}": n for (a, b), n in sorted(fc.items())},
           "with_polish_chpl": sum(1 for r in out if r["chpl-url"]),
           "atc_agrees_chembl": dict(Counter(str(r["atc-agrees-chembl"]) for r in out))}
    (ROOT / "data/enrichment/pk-verification-ema-coverage.json").write_text(json.dumps(cov, indent=1, sort_keys=True) + "\n")
    print(json.dumps(cov, indent=1))


if __name__ == "__main__":
    a = argparse.ArgumentParser()
    a.add_argument("stage", choices=["fetch", "parse"])
    {"fetch": fetch, "parse": parse}[a.parse_args().stage]()
