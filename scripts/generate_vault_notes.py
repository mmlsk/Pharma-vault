#!/usr/bin/env python3
"""Generate Obsidian compound stubs from data/processed/substances.json.

One note per substance in  vault/04 Compound Notes/<Cluster>/<Name>.md

Safety rule: a note whose frontmatter `review-status` is anything other than
`stub` is treated as human-curated and is NEVER overwritten. Only stubs are
(re)generated, so running the script repeatedly is safe and deterministic.
Use --prune to delete stubs whose compound id no longer exists in the catalogue.
"""
from __future__ import annotations

import argparse
import json
import re

import yaml

from pv_common import COMPOUND_NOTES, PROCESSED, safe_filename

TRIAGE_TO_HUB = {
    "endocrine-feedback-disruption": "Hormonal Axis Suppression",
    "cardiovascular-load": "Stimulant and Cardiovascular Load",
    "evidence-limited": "Experimental and Evidence-Limited Compounds",
    "identity-contamination": "Experimental and Evidence-Limited Compounds",
    "growth-plate": "Experimental and Evidence-Limited Compounds",
    "serotonergic-or-dopaminergic-load": "Serotonin Toxicity",
    "sedation-respiratory-depression": "Respiratory Depression and Fatal Overdose",
}
TRIAGE_TO_PATHWAY = {
    "cyp-interactions": "CYP450 Metabolism",
    "glucose-metabolism": "Glucose and Incretin Signaling",
    "endocrine-feedback-disruption": "HPG and GH-IGF-1 Axes",
}
CHOLINERGIC = re.compile(r"cholin|acetylcholinesterase|muscarinic|nicotinic", re.I)
FRONTMATTER = re.compile(r"^---\n(.*?)\n---\n", re.S)


def frontmatter(r: dict) -> dict:
    return {
        "type": "compound",
        "schema-version": 2,
        "compound-id": r["compound_id"],
        "name": r["name"],
        "aliases": r["aliases"],
        "cluster": r["cluster"],
        "group": r["group"],
        "class": None,
        "subclass": None,
        "mechanism": r["mechanism"] or None,
        "pathways": [],
        "indications": [],
        "off-label-contexts": [],
        "regulatory-status": None,
        "evidence-level": None,
        "review-status": "stub",
        "chembl-id": r["chembl_id"] or None,
        "chembl-max-phase": int(r["chembl_max_phase"]) if r["chembl_max_phase"] else None,
        "half-life": {"value": None, "unit": None, "notes": None},
        "protein-binding": {"value": None, "unit": "percent", "notes": None},
        "active-metabolites": [],
        "renal-clearance": {"primary-route": None, "fraction-excreted-unchanged": None, "notes": None},
        "hepatic-clearance": {"primary-route": None, "extraction-ratio": None, "notes": None},
        "dosage-ranges": {},
        "cyp-interactions": {"substrates": [], "inhibitors": [], "inducers": [], "transporters": [], "notes": None},
        "contraindications": [],
        "major-interactions": [],
        "monitoring": [],
        "risk-domains": [],
        "group-risk-triage": r["group_risk_triage"],
        "source-status": "source-summary-only",
        "last-reviewed": None,
        "tags": r["tags"] + ["stub"],
    }


def body(r: dict) -> str:
    hubs = ["Stacking and Interaction Risks"]
    for t in r["group_risk_triage"]:
        if t in TRIAGE_TO_HUB and TRIAGE_TO_HUB[t] not in hubs:
            hubs.append(TRIAGE_TO_HUB[t])
    if CHOLINERGIC.search(r["description"] + " " + r["mechanism"]):
        hubs.append("Cholinergic Load")
    pathways = sorted({TRIAGE_TO_PATHWAY[t] for t in r["group_risk_triage"] if t in TRIAGE_TO_PATHWAY})

    lines = [
        f"# {r['name']}", "",
        "> [!warning] Source-derived stub",
        "> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.",
        "> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.",
        "", "## Identity", "",
        f"- **Compound ID:** `{r['compound_id']}`",
        f"- **Source group:** {r['group_label']} (`{r['group']}`)",
        f"- **Cluster:** [[{r['cluster']}]]",
    ]
    if r["aliases"]:
        lines.append(f"- **Aliases:** {', '.join(r['aliases'])}")
    if r["chembl_id"]:
        lines.append(f"- **ChEMBL:** [{r['chembl_id']}](https://www.ebi.ac.uk/chembl/compound_report_card/{r['chembl_id']}/)"
                     f" · max phase {r['chembl_max_phase'] or 'n/a'}")
    lines += ["", "## Source summary", "", r["description"] or "_No description in source._", ""]
    if r["mechanism"]:
        lines += ["## Mechanism", "", f"{r['mechanism']} _(ChEMBL curated mechanism, as quoted by the source)._", ""]
    lines += [
        "## Evidence boundaries", "",
        "- Evidence tier: _not assigned_ - see [[Evidence Tiers]].",
        "- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.", "",
        "## Pharmacokinetics", "",
        "_To be curated - see [[Pharmacokinetics Summary]] for field conventions._", "",
        "## Safety routing", "",
        "Group-level triage (not compound-specific): " + (", ".join(f"`{t}`" for t in r["group_risk_triage"]) or "-"),
        "",
        *[f"- [[{h}]]" for h in hubs],
        *[f"- [[{p}]]" for p in pathways],
        "",
    ]
    return "\n".join(lines)


def existing_notes() -> dict[str, tuple]:
    found = {}
    for p in COMPOUND_NOTES.rglob("*.md"):
        m = FRONTMATTER.match(p.read_text(encoding="utf-8"))
        if m:
            fm = yaml.safe_load(m.group(1)) or {}
            if fm.get("compound-id"):
                found[fm["compound-id"]] = (p, fm.get("review-status"))
    return found


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--prune", action="store_true", help="delete orphaned stubs")
    args = ap.parse_args()

    rows = json.loads((PROCESSED / "substances.json").read_text(encoding="utf-8"))
    existing = existing_notes()
    used, written, kept = set(), 0, 0
    for r in rows:
        folder = COMPOUND_NOTES / r["cluster"]
        fname = safe_filename(r["name"])
        if (r["cluster"], fname.lower()) in used:  # duplicate label -> disambiguate by id
            fname = f"{fname} ({r['compound_id']})"
        used.add((r["cluster"], fname.lower()))

        prev = existing.get(r["compound_id"])
        if prev and prev[1] != "stub":
            kept += 1
            continue
        target = folder / f"{fname}.md"
        if prev and prev[0] != target:
            prev[0].unlink()
        folder.mkdir(parents=True, exist_ok=True)
        fm = yaml.safe_dump(frontmatter(r), sort_keys=False, allow_unicode=True, width=1000)
        target.write_text(f"---\n{fm}---\n\n{body(r)}", encoding="utf-8")
        written += 1

    pruned = 0
    if args.prune:
        ids = {r["compound_id"] for r in rows}
        for cid, (path, status) in existing.items():
            if cid not in ids and status == "stub":
                path.unlink()
                pruned += 1
    print(f"stubs_written={written} curated_kept={kept} pruned={pruned}")


if __name__ == "__main__":
    main()
