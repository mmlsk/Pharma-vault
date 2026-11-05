#!/usr/bin/env python3
"""Map ICD-10 (CeZ PL) & ICD-11 (WHO) clinical indications to compounds.

Usage:
  python3 enrich_indications.py parse   # offline: validate & process data/curated/compound_indications.json -> data/processed/indications.json
"""
from __future__ import annotations

import argparse
import json
from collections import defaultdict
from pathlib import Path

from pv_common import PROCESSED, ROOT

CURATED_IND = ROOT / "data/curated/compound_indications.json"
OUT = PROCESSED / "indications.json"
COVERAGE = ROOT / "data/enrichment/indications-coverage.json"


def parse() -> None:
    if not CURATED_IND.exists():
        print(f"Brak pliku: {CURATED_IND}")
        return

    substances_file = PROCESSED / "substances.json"
    if not substances_file.exists():
        print("Brak data/processed/substances.json - uruchom: make catalog")
        return

    substances = json.loads(substances_file.read_text(encoding="utf-8"))
    valid_cids = {s["compound_id"] for s in substances}

    raw_indications = json.loads(CURATED_IND.read_text(encoding="utf-8"))

    by_compound = defaultdict(list)
    by_disease = defaultdict(lambda: {
        "icd10_code": "",
        "icd10_name_pl": "",
        "icd11_code": "",
        "icd_chapter": "",
        "compounds": []
    })

    matched_records = 0
    for item in raw_indications:
        cid = item.get("compound_id")
        if cid not in valid_cids:
            continue
        matched_records += 1
        icd10 = item.get("icd10_code")
        by_compound[cid].append({
            "icd10": icd10,
            "icd10_name_pl": item.get("icd10_name_pl"),
            "icd11": item.get("icd11_code"),
            "chapter": item.get("icd_chapter"),
            "status": item.get("status"),
            "evidence_tier": item.get("evidence_tier")
        })

        dis = by_disease[icd10]
        dis["icd10_code"] = icd10
        dis["icd10_name_pl"] = item.get("icd10_name_pl")
        dis["icd11_code"] = item.get("icd11_code")
        dis["icd_chapter"] = item.get("icd_chapter")
        dis["compounds"].append({
            "compound_id": cid,
            "status": item.get("status"),
            "evidence_tier": item.get("evidence_tier")
        })

    payload = {
        "by_compound": by_compound,
        "by_disease": by_disease
    }
    OUT.write_text(json.dumps(payload, indent=2, ensure_ascii=False), encoding="utf-8")

    coverage = {
        "total_records": len(raw_indications),
        "valid_matched_records": matched_records,
        "unique_compounds": len(by_compound),
        "unique_diseases": len(by_disease)
    }
    COVERAGE.write_text(json.dumps(coverage, indent=2), encoding="utf-8")
    print(f"ICD Indications: Zmapowano {matched_records} wskazań ({len(by_disease)} jednostek chorobowych) na {len(by_compound)} substancji -> {OUT.name}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Process ICD-10/11 clinical indications")
    parser.add_argument("cmd", choices=["parse"], nargs="?", default="parse")
    args = parser.parse_args()
    if args.cmd == "parse":
        parse()


if __name__ == "__main__":
    main()
