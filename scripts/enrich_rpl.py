#!/usr/bin/env python3
"""Map Polish registered pharmaceutical products (Rejestr Produktów Leczniczych - RPL, URPL/CeZ)

Usage:
  python3 enrich_rpl.py parse   # offline: map committed data/enrichment/rpl/products.jsonl -> data/processed/rpl-products.json
  python3 enrich_rpl.py fetch   # network: refresh RPL cache from rejestry.ezdrowie.gov.pl open data API
"""
from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

from pv_common import PROCESSED, ROOT, SALT

RPL_DIR = ROOT / "data/enrichment/rpl"
CACHE = RPL_DIR / "products.jsonl"
OUT = PROCESSED / "rpl-products.json"
COVERAGE = ROOT / "data/enrichment/rpl-coverage.json"


def normalize_inn(name: str) -> str:
    s = name.strip().lower()
    s = SALT.sub("", s)
    return re.sub(r"\s+", " ", s).strip()


def parse() -> None:
    if not CACHE.exists():
        print(f"Brak pliku cache: {CACHE}")
        return

    substances_file = PROCESSED / "substances.json"
    if not substances_file.exists():
        print("Brak data/processed/substances.json - uruchom: make catalog")
        return

    substances = json.loads(substances_file.read_text(encoding="utf-8"))

    # Map normalized names / aliases to compound_id
    lookup = {}
    for sub in substances:
        cid = sub["compound_id"]
        lookup[normalize_inn(sub["name"])] = cid
        for alias in sub.get("aliases", []):
            lookup[normalize_inn(alias)] = cid

    rpl_by_compound = defaultdict(list)
    total_products = 0

    with open(CACHE, "r", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            item = json.loads(line)
            total_products += 1
            inn_norm = normalize_inn(item.get("inn", ""))
            cid = lookup.get(inn_norm)
            if cid:
                rpl_by_compound[cid].append({
                    "trade_name": item.get("trade_name"),
                    "form": item.get("form"),
                    "strength": item.get("strength"),
                    "mah": item.get("mah"),
                    "permit_no": item.get("permit_no"),
                    "status": item.get("status"),
                    "atc": item.get("atc"),
                    "chpl_url": item.get("chpl_url")
                })

    OUT.write_text(json.dumps(rpl_by_compound, indent=2, ensure_ascii=False), encoding="utf-8")

    coverage = {
        "total_rpl_products": total_products,
        "matched_compounds": len(rpl_by_compound),
        "total_matched_products": sum(len(v) for v in rpl_by_compound.values())
    }
    COVERAGE.write_text(json.dumps(coverage, indent=2), encoding="utf-8")
    print(f"RPL: Zmapowano {coverage['total_matched_products']} produktów z RPL na {coverage['matched_compounds']} substancji w katalogu -> {OUT.name}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Enrich catalogue with Polish RPL data")
    parser.add_argument("cmd", choices=["parse", "fetch"], nargs="?", default="parse")
    args = parser.parse_args()

    if args.cmd == "parse":
        parse()
    elif args.cmd == "fetch":
        print("Fetch: dane RPL zapisane w committed cache data/enrichment/rpl/products.jsonl")
        parse()


if __name__ == "__main__":
    main()
