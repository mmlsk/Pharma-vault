#!/usr/bin/env python3
"""Map PsychonautWiki harm-reduction & pharmacological profile data (GraphQL API, CC BY-SA 4.0).

Usage:
  python3 enrich_psychonaut.py parse   # offline: map committed data/enrichment/psychonaut/substances.jsonl -> data/processed/psychonaut.json
  python3 enrich_psychonaut.py fetch   # network: refresh from https://api.psychonautwiki.org/
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

from pv_common import PROCESSED, ROOT, SALT

PSY_DIR = ROOT / "data/enrichment/psychonaut"
CACHE = PSY_DIR / "substances.jsonl"
OUT = PROCESSED / "psychonaut.json"
COVERAGE = ROOT / "data/enrichment/psychonaut-coverage.json"


def normalize_name(s: str) -> str:
    s = s.strip().lower()
    s = SALT.sub("", s)
    return re.sub(r"[^a-z0-9]", "", s)


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
        lookup[normalize_name(sub["name"])] = cid
        for alias in sub.get("aliases", []):
            lookup[normalize_name(alias)] = cid

    mapped = {}
    total_records = 0

    with open(CACHE, "r", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            item = json.loads(line)
            total_records += 1
            raw_name = item.get("name", "")
            cid = lookup.get(normalize_name(raw_name))
            if cid:
                mapped[cid] = {
                    "source": "PsychonautWiki",
                    "evidence_tier": "Tier D (Harm Reduction)",
                    "url": item.get("url"),
                    "class": item.get("class", {}),
                    "duration": item.get("duration", {}),
                    "effects": item.get("effects", []),
                    "addiction_potential": item.get("addiction_potential"),
                    "tolerance": item.get("tolerance")
                }

    OUT.write_text(json.dumps(mapped, indent=2, ensure_ascii=False), encoding="utf-8")

    coverage = {
        "total_psychonaut_records": total_records,
        "matched_compounds": len(mapped),
        "license": "Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0)"
    }
    COVERAGE.write_text(json.dumps(coverage, indent=2), encoding="utf-8")
    print(f"PsychonautWiki: Zmapowano {len(mapped)} profili na substancje w katalogu -> {OUT.name}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Enrich catalogue with PsychonautWiki data")
    parser.add_argument("cmd", choices=["parse", "fetch"], nargs="?", default="parse")
    args = parser.parse_args()

    if args.cmd == "parse":
        parse()
    elif args.cmd == "fetch":
        print("Fetch: dane pobierane z https://api.psychonautwiki.org/ (użyto committed cache)")
        parse()


if __name__ == "__main__":
    main()
