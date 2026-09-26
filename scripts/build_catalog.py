#!/usr/bin/env python3
"""Build the canonical substances catalogue from the raw source catalogue.

Input : data/raw/pharmapedia-source/CompoundCatalog.source.js.txt (COMPOUND_CATALOG)
Output: data/processed/substances.csv        - one row per substance (canonical table)
        data/processed/substances.json       - same data, machine-friendly
        data/processed/group-summary.csv     - counts per source group / vault cluster
        data/processed/alias-collisions.csv  - names that resolve to more than one id
        data/processed/manifest.json         - provenance, counts, input SHA-256
        data/processed/substances.xlsx       - optional (--xlsx), not versioned

The build is deterministic: the same input always yields byte-identical output.
Nothing clinical is inferred - only fields present in the source are parsed.
"""
from __future__ import annotations

import argparse
import csv
import hashlib
import json
import re
import sys
from collections import Counter, defaultdict

from pv_common import GROUP_RISK_TRIAGE, GROUP_TO_CLUSTER, PROCESSED, RAW_CATALOG, ROOT, normalize

STR_FIELD = re.compile(r'(\w+):\s*"((?:[^"\\]|\\.)*)"')
ARR_FIELD = re.compile(r'(\w+):\s*\[((?:[^\]"]|"(?:[^"\\]|\\.)*")*)\]')
ARR_ITEM = re.compile(r'"((?:[^"\\]|\\.)*)"')
PAREN = re.compile(r"^(.*?)\s*\(([^()]+)\)\s*$")
# Parenthetical fragments that describe route/formulation rather than a name.
NOT_A_NAME = re.compile(
    r"%|\b(oral|topical|injectable|injection|gel|cream|solution|nasal|spray|tablet|patch|"
    r"ointment|foam|lotion|shampoo|drops|ophthalmic|sublingual|transdermal|extended|release)\b", re.I)
CHEMBL_ID = re.compile(r"\b(CHEMBL\d+)\b")
PHASE = re.compile(r"\bis a phase (\d) compound catalogued by ChEMBL")
MECH_PHASE = re.compile(r"Its curated mechanism is (.+?);")
MECH_APPROVED = re.compile(r"^(.+?); approved/marketed compound catalogued by ChEMBL")

COLUMNS = [
    "compound_id", "name", "group", "group_label", "cluster", "aliases", "description",
    "mechanism", "mechanism_source", "chembl_id", "chembl_max_phase", "class", "pathways",
    "evidence_level", "review_status", "regulatory_status", "group_risk_triage",
    "risk_domains", "contraindications", "major_interactions", "monitoring", "tags", "source",
]


def js_unescape(s: str) -> str:
    return json.loads('"' + s + '"')


def block(text: str, const: str) -> str:
    start = text.index(f"export const {const}")
    return text[start:text.index("\n];", start)]


def parse_objects(body: str) -> list[dict]:
    out = []
    for line in body.splitlines():
        line = line.strip()
        if not line.startswith("{ id:"):
            continue
        obj = {k: js_unescape(v) for k, v in STR_FIELD.findall(ARR_FIELD.sub("", line))}
        for k, v in ARR_FIELD.findall(line):
            obj[k] = [js_unescape(x) for x in ARR_ITEM.findall(v)]
        out.append(obj)
    return out


def derive_aliases(label: str, explicit: list[str]) -> list[str]:
    aliases = list(explicit)
    m = PAREN.match(label)
    if m:  # "Winstrol (Stanozolol)" -> ["Winstrol", "Stanozolol"]
        aliases.append(m.group(1).strip())
        aliases += [p.strip() for p in re.split(r"[,/;]", m.group(2)) if not NOT_A_NAME.search(p)]
    seen, result = {normalize(label)}, []
    for a in aliases:
        key = normalize(a)
        if a and key and key not in seen:
            seen.add(key)
            result.append(a)
    return result


def chembl_fields(desc: str) -> dict:
    f = {"chembl_id": "", "chembl_max_phase": "", "mechanism": "", "mechanism_source": ""}
    if "catalogued by ChEMBL" not in desc:
        return f
    if m := CHEMBL_ID.search(desc):
        f["chembl_id"] = m.group(1)
    if m := PHASE.search(desc):
        f["chembl_max_phase"] = m.group(1)
    elif "approved/marketed compound catalogued by ChEMBL" in desc:
        f["chembl_max_phase"] = "4"
    m = MECH_PHASE.search(desc) or MECH_APPROVED.search(desc)
    if m:
        f["mechanism"] = m.group(1).strip()
        f["mechanism_source"] = "ChEMBL curated mechanism (via source description)"
    return f


def build() -> tuple[list[dict], dict]:
    raw = RAW_CATALOG.read_bytes()
    text = raw.decode("utf-8")
    groups = {g["id"]: g["label"] for g in parse_objects(block(text, "COMPOUND_GROUPS"))}
    items = parse_objects(block(text, "COMPOUND_CATALOG"))

    ids = Counter(i["id"] for i in items)
    dup_ids = sorted(k for k, v in ids.items() if v > 1)
    unknown_groups = sorted({i["group"] for i in items} - set(groups))
    if dup_ids or unknown_groups:
        sys.exit(f"Integrity error: duplicate ids={dup_ids} unknown groups={unknown_groups}")

    rows = []
    for i in sorted(items, key=lambda x: x["id"]):
        g = i["group"]
        rows.append({
            "compound_id": i["id"],
            "name": i["label"],
            "group": g,
            "group_label": groups[g],
            "cluster": GROUP_TO_CLUSTER[g],
            "aliases": derive_aliases(i["label"], i.get("aliases", [])),
            "description": i.get("desc", ""),
            **chembl_fields(i.get("desc", "")),
            "class": "", "pathways": [], "evidence_level": "",
            "review_status": "stub", "regulatory_status": "",
            "group_risk_triage": GROUP_RISK_TRIAGE[g],
            "risk_domains": [], "contraindications": [], "major_interactions": [], "monitoring": [],
            "tags": ["compound", "source-derived", f"group/{g}"],
            "source": "pharmapedia-source/CompoundCatalog",
        })

    # Alias collisions: a normalised name (label or alias) pointing at >1 id.
    index = defaultdict(set)
    for r in rows:
        for n in [r["name"], *r["aliases"]]:
            index[normalize(n)].add(r["compound_id"])
    collisions = sorted((k, sorted(v)) for k, v in index.items() if len(v) > 1)

    manifest = {
        "input": str(RAW_CATALOG.relative_to(ROOT)),
        "input_sha256": hashlib.sha256(raw).hexdigest(),
        "substances": len(rows),
        "groups": len(groups),
        "clusters": len(set(GROUP_TO_CLUSTER.values())),
        "with_explicit_aliases": sum(1 for i in items if i.get("aliases")),
        "with_chembl_mechanism": sum(1 for r in rows if r["mechanism"]),
        "alias_collisions": len(collisions),
        "per_group": dict(sorted(Counter(r["group"] for r in rows).items())),
    }
    return rows, {"manifest": manifest, "groups": groups, "collisions": collisions}


def flat(v):
    return "; ".join(v) if isinstance(v, list) else v


def write(rows: list[dict], meta: dict, xlsx: bool) -> None:
    PROCESSED.mkdir(parents=True, exist_ok=True)
    with open(PROCESSED / "substances.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=COLUMNS, lineterminator="\n")
        w.writeheader()
        w.writerows({k: flat(r[k]) for k in COLUMNS} for r in rows)
    (PROCESSED / "substances.json").write_text(
        json.dumps(rows, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")

    counts = Counter(r["group"] for r in rows)
    with open(PROCESSED / "group-summary.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh, lineterminator="\n")
        w.writerow(["group", "group_label", "cluster", "substances"])
        for g, label in meta["groups"].items():
            w.writerow([g, label, GROUP_TO_CLUSTER[g], counts[g]])

    names = {r["compound_id"]: r["name"] for r in rows}
    with open(PROCESSED / "alias-collisions.csv", "w", newline="", encoding="utf-8") as fh:
        w = csv.writer(fh, lineterminator="\n")
        w.writerow(["normalized_name", "compound_ids", "labels"])
        for key, ids in meta["collisions"]:
            w.writerow([key, "; ".join(ids), "; ".join(names[i] for i in ids)])

    (PROCESSED / "manifest.json").write_text(json.dumps(meta["manifest"], indent=2) + "\n")

    if xlsx:
        from openpyxl import Workbook
        wb = Workbook()
        ws = wb.active
        ws.title = "Substances"
        ws.append(COLUMNS)
        for r in rows:
            ws.append([flat(r[k]) for k in COLUMNS])
        ws.freeze_panes = "A2"
        ws.auto_filter.ref = ws.dimensions
        gs = wb.create_sheet("Group Summary")
        gs.append(["group", "group_label", "cluster", "substances"])
        for g, label in meta["groups"].items():
            gs.append([g, label, GROUP_TO_CLUSTER[g], counts[g]])
        wb.save(PROCESSED / "substances.xlsx")


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--xlsx", action="store_true", help="also write substances.xlsx")
    args = ap.parse_args()
    rows, meta = build()
    write(rows, meta, args.xlsx)
    m = meta["manifest"]
    print(f"substances={m['substances']} groups={m['groups']} clusters={m['clusters']} "
          f"chembl_mechanisms={m['with_chembl_mechanism']} alias_collisions={m['alias_collisions']}")


if __name__ == "__main__":
    main()
