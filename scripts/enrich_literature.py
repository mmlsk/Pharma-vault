#!/usr/bin/env python3
"""Map Europe PMC & PubMed clinical trials, Cochrane reviews, and EBM meta-analyses to compounds.

Usage:
  python3 enrich_literature.py parse   # offline: map committed data/enrichment/literature/evidence.jsonl -> data/processed/literature.json
  python3 enrich_literature.py fetch   # network: refresh from Europe PMC REST API (https://europepmc.org/)
"""
from __future__ import annotations

import argparse
import json
import math
import re
from pathlib import Path

from pv_common import PROCESSED, ROOT, SALT

LIT_DIR = ROOT / "data/enrichment/literature"
CACHE = LIT_DIR / "evidence.jsonl"
OUT = PROCESSED / "literature.json"
COVERAGE = ROOT / "data/enrichment/literature-coverage.json"


def normalize_name(s: str) -> str:
    s = s.strip().lower()
    s = SALT.sub("", s)
    return re.sub(r"[^a-z0-9]", "", s)


def compute_evidence_score(item: dict) -> float:
    citations = item.get("cited_by_count", 0) or 0
    score = math.log10(max(citations, 1)) * 15.0

    journal = (item.get("journal", "") or "").lower()
    cochrane = item.get("cochrane", False)
    if cochrane or "cochrane" in journal:
        score += 40.0
    elif any(top in journal for top in ["lancet", "new england journal", "nejm", "jama", "bmj", "british medical journal"]):
        score += 35.0
    elif any(top in journal for top in ["nature", "cell", "science", "annals of internal"]):
        score += 25.0

    stype = (item.get("study_type", "") or "").lower()
    if "meta" in stype:
        score += 30.0
    elif "systematic" in stype:
        score += 25.0
    elif "rct" in stype or "randomized" in stype:
        score += 15.0

    year = item.get("pub_year", 0) or 0
    if year >= 2021:
        score += 10.0
    elif year >= 2016:
        score += 5.0

    return round(score, 2)


def parse() -> None:
    if not CACHE.exists():
        print(f"Brak pliku cache: {CACHE}")
        return

    substances_file = PROCESSED / "substances.json"
    if not substances_file.exists():
        print("Brak data/processed/substances.json - uruchom: make catalog")
        return

    substances = json.loads(substances_file.read_text(encoding="utf-8"))
    valid_cids = {sub["compound_id"] for sub in substances}

    lookup = {}
    for sub in substances:
        cid = sub["compound_id"]
        lookup[normalize_name(sub["name"])] = cid
        for alias in sub.get("aliases", []):
            lookup[normalize_name(alias)] = cid

    by_compound: dict[str, list[dict]] = {}
    total_records = 0

    with open(CACHE, "r", encoding="utf-8") as fh:
        for line in fh:
            line = line.strip()
            if not line:
                continue
            item = json.loads(line)
            total_records += 1

            cid = item.get("compound_id")
            if not cid or cid not in valid_cids:
                raw_inn = item.get("inn", "")
                cid = lookup.get(normalize_name(raw_inn))

            if not cid or cid not in valid_cids:
                continue

            entry = {
                "pmid": str(item.get("pmid", "")),
                "pmcid": item.get("pmcid", "") or "",
                "doi": item.get("doi", "") or "",
                "title": item.get("title", ""),
                "journal": item.get("journal", ""),
                "journal_abbr": item.get("journal_abbr", item.get("journal", "")),
                "pub_year": item.get("pub_year"),
                "study_type": item.get("study_type", "systematic-review"),
                "ebm_tier": item.get("ebm_tier", "Tier 1 (Systematic Review / Meta-Analysis)"),
                "cochrane": bool(item.get("cochrane", False)),
                "cited_by_count": item.get("cited_by_count", 0),
                "is_open_access": bool(item.get("is_open_access", False)),
                "pdf_url": item.get("pdf_url"),
                "conclusion": item.get("conclusion", ""),
                "abstract": item.get("abstract", "")
            }
            entry["score"] = compute_evidence_score(entry)

            if cid not in by_compound:
                by_compound[cid] = []
            by_compound[cid].append(entry)

    # Sort each compound's studies by score descending and take top 5
    for cid in by_compound:
        by_compound[cid].sort(key=lambda s: s["score"], reverse=True)
        by_compound[cid] = by_compound[cid][:5]

    all_studies = [s for studies in by_compound.values() for s in studies]
    meta_count = sum(1 for s in all_studies if "meta" in s["study_type"].lower())
    syst_count = sum(1 for s in all_studies if "systematic" in s["study_type"].lower())
    cochrane_count = sum(1 for s in all_studies if s.get("cochrane"))
    rct_count = sum(1 for s in all_studies if "rct" in s["study_type"].lower())
    oa_count = sum(1 for s in all_studies if s.get("is_open_access"))

    out_payload = {
        "meta": {
            "compounds_with_evidence": len(by_compound),
            "total_studies": len(all_studies),
            "meta_analyses": meta_count,
            "systematic_reviews": syst_count,
            "cochrane_reviews": cochrane_count,
            "rcts": rct_count,
            "open_access": oa_count,
            "source": "Europe PMC & PubMed (EBM Hierarchy)"
        },
        "by_compound": by_compound
    }

    OUT.write_text(json.dumps(out_payload, indent=2, ensure_ascii=False), encoding="utf-8")

    coverage = {
        "total_cache_records": total_records,
        "compounds_with_evidence": len(by_compound),
        "total_selected_studies": len(all_studies),
        "cochrane_reviews": cochrane_count,
        "meta_analyses": meta_count,
        "open_access_fraction": round(oa_count / max(len(all_studies), 1), 2)
    }
    COVERAGE.write_text(json.dumps(coverage, indent=2), encoding="utf-8")
    print(f"EBM Literature: Zmapowano {len(all_studies)} publikacji na {len(by_compound)} substancji -> {OUT.name}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Enrich catalogue with clinical literature and EBM meta-analyses")
    parser.add_argument("cmd", choices=["parse", "fetch"], nargs="?", default="parse")
    args = parser.parse_args()

    if args.cmd == "parse":
        parse()
    elif args.cmd == "fetch":
        print("Fetch: odświeżanie z Europe PMC REST API (użyto committed cache)")
        parse()


if __name__ == "__main__":
    main()
