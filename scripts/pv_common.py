"""Shared constants and helpers for Pharma-vault build scripts.

Canonical flow (see docs/adr/0001-canonical-source-of-truth.md):

    data/raw/  ->  scripts/build_catalog.py  ->  data/processed/substances.csv
                                              ->  scripts/generate_vault_notes.py  ->  vault/04 Compound Notes/
                                              ->  scripts/validate.py              ->  validation report
"""
from __future__ import annotations

import json
import re
import unicodedata
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
RAW_CATALOG = ROOT / "data/raw/pharmapedia-source/CompoundCatalog.source.js.txt"
PROCESSED = ROOT / "data/processed"
CURATED = ROOT / "data/curated"
VAULT = ROOT / "vault"
VAULT_ROOT = VAULT
COMPOUND_NOTES = VAULT / "04 Compound Notes"
SCHEMA = ROOT / "schemas/compound-frontmatter.v2.schema.json"

# Source groups (COMPOUND_GROUPS in the raw catalog) -> vault compound clusters.
# The first seven clusters are the ones established in the original vault;
# "General Pharmacology" is added for groups the original seven did not cover.
GROUP_TO_CLUSTER = {
    "nootropic": "Nootropics",
    "neuropsych": "Nootropics",
    "glp1": "Metabolic and Incretin Agents",
    "gh": "Growth Hormone and Peptide Agents",
    "peptides": "Growth Hormone and Peptide Agents",
    "fgfr": "Growth Hormone and Peptide Agents",
    "steroids": "Androgens SARMs and PCT",
    "sarms": "Androgens SARMs and PCT",
    "pct": "Androgens SARMs and PCT",
    "cardio": "Cardiovascular and Lipid Agents",
    "longevity": "Longevity and Experimental Compounds",
    "ancillary": "Ancillary Supplements and Topicals",
    "derm": "Ancillary Supplements and Topicals",
    "antiinfective": "General Pharmacology",
    "immunology": "General Pharmacology",
    "analgesia": "General Pharmacology",
    "gi": "General Pharmacology",
    "oncology": "General Pharmacology",
    # v3.2: curated-addition-only group (forensic NPS from the expansion backlog)
    "nps": "Novel Psychoactive Substances",
}

# Groups that exist only through data/curated/additions.csv (not in the raw source).
ADDED_GROUPS = {"nps": "Novel Psychoactive Substances (forensic NPS, curated addition)"}

# Group-level *triage* labels only. They route a compound to a safety hub for
# review; they are NOT compound-level clinical facts and must be replaced by
# curated `risk-domains` during review.
GROUP_RISK_TRIAGE = {
    "steroids": ["endocrine-feedback-disruption", "cardiovascular-load"],
    "sarms": ["endocrine-feedback-disruption", "identity-contamination", "evidence-limited"],
    "pct": ["endocrine-feedback-disruption"],
    "gh": ["endocrine-feedback-disruption", "glucose-metabolism"],
    "peptides": ["evidence-limited", "identity-contamination"],
    "glp1": ["glucose-metabolism", "gastrointestinal"],
    "fgfr": ["evidence-limited", "growth-plate"],
    "ancillary": ["needs-compound-review"],
    "longevity": ["evidence-limited"],
    "nootropic": ["cns-activity", "evidence-limited"],
    "antiinfective": ["cyp-interactions"],
    "immunology": ["immunosuppression-infection"],
    "cardio": ["cardiovascular-load"],
    "neuropsych": ["cns-activity", "serotonergic-or-dopaminergic-load"],
    "analgesia": ["sedation-respiratory-depression"],
    "gi": ["needs-compound-review"],
    "derm": ["needs-compound-review"],
    "oncology": ["cytotoxicity"],
    "nps": ["cns-activity", "identity-contamination", "evidence-limited"],
}

EVIDENCE_TIERS = [
    "A-approved",
    "B-human-controlled",
    "C-early-human",
    "D-preclinical",
    "E-forensic-NPS",
    "F-vendor-only",
    "X-identity-disputed",
]

INVALID_FILENAME = re.compile(r'[\\/:*?"<>|#^\[\]]')
FRONTMATTER = re.compile(r"^---\n(.*?)\n---\n", re.S)
SALT = re.compile(
    r"\b(acetate|anhydrous|arginine|besilate|besylate|bromide|butyrate|calcium|chloride|citrate|cypionate|decanoate|"
    r"dihydrate|dihydrochloride|dimesylate|dipropionate|disodium|edisylate|embonate|enanthate|fumarate|furoate|"
    r"gluconate|hemifumarate|hemihydrate|hyclate|hydrate|hydrobromide|hydrochloride|lactate|lysine|magnesium|malate|"
    r"maleate|meglumine|mesilate|mesylate|monohydrate|nitrate|oxalate|pamoate|phosphate|potassium|propionate|"
    r"saccharate|sodium|succinate|sulfate|sulphate|tartrate|tosilate|tosylate|trihydrate|tromethamine|undecanoate)\b",
    re.I,
)
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


def parse_frontmatter(text: str) -> str | None:
    m = FRONTMATTER.match(text)
    return m.group(1) if m else None


def load_jsonl(path: Path, key: str | None = None):
    p = Path(path)
    if not p.exists():
        return {} if key else []
    rows = [json.loads(l) for l in p.read_text(encoding="utf-8").splitlines() if l.strip()]
    return {r[key]: r for r in rows} if key else rows


def hubs_and_pathways(r: dict, pk: dict | None = None) -> tuple[list[str], list[str]]:
    triage = r.get("group_risk_triage") or []
    text = f"{r.get('description', '')} {r.get('mechanism', '')}"
    hubs = ["Stacking and Interaction Risks"]
    for t in triage:
        if t in TRIAGE_TO_HUB and TRIAGE_TO_HUB[t] not in hubs:
            hubs.append(TRIAGE_TO_HUB[t])
    if CHOLINERGIC.search(text) and "Cholinergic Load" not in hubs:
        hubs.append("Cholinergic Load")
    pws = {TRIAGE_TO_PATHWAY[t] for t in triage if t in TRIAGE_TO_PATHWAY}
    cyp = (pk or {}).get("cyp-interactions")
    if cyp.get("substrates") if isinstance(cyp, dict) else cyp:
        pws.add("CYP450 Metabolism")
    return hubs, sorted(pws)


def existing_notes() -> dict[str, tuple]:
    found = {}
    for p in COMPOUND_NOTES.rglob("*.md"):
        m = FRONTMATTER.match(p.read_text(encoding="utf-8"))
        if m:
            fm = yaml.safe_load(m.group(1)) or {}
            if fm.get("compound-id"):
                found[fm["compound-id"]] = (p, fm.get("review-status"))
    return found


def assign_note_filenames(rows: list[dict], existing_notes_map: dict | None = None) -> dict[str, str]:
    if existing_notes_map is None:
        existing_notes_map = existing_notes()
    used: set[str] = set()
    fnames: dict[str, str] = {}
    for r in rows:
        cid = r["compound_id"]
        base = safe_filename(r["name"])
        prev = existing_notes_map.get(cid) if existing_notes_map else None
        prev_stem = prev[0].stem if isinstance(prev, tuple) else (prev.stem if isinstance(prev, Path) else None)
        is_reviewed = isinstance(prev, tuple) and prev[1] != "stub"
        if is_reviewed and prev_stem and not prev_stem.endswith(f" ({cid})"):
            fname = prev_stem
        else:
            fname = base
        if fname.lower() in used:
            fname = f"{base} ({cid})"
        used.add(fname.lower())
        fnames[cid] = fname
    return fnames


def normalize(name: str) -> str:
    """Normalisation key used for alias-collision detection."""
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", s.lower())


def safe_filename(label: str) -> str:
    s = INVALID_FILENAME.sub("-", label).strip().strip(".")
    return re.sub(r"\s+", " ", s)[:120] or "unnamed"


def load_pk_annotations() -> dict[str, list[dict]]:
    """Loads curated PK discrepancy annotations (data/curated/pk-annotations.csv) by compound_id."""
    p = CURATED / "pk-annotations.csv"
    if not p.exists():
        return {}
    import csv
    from collections import defaultdict
    out = defaultdict(list)
    with open(p, encoding="utf-8") as fh:
        for r in csv.DictReader(fh):
            out[r["compound_id"]].append(r)
    return dict(out)

