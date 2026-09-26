"""Shared constants and helpers for Pharma-vault build scripts.

Canonical flow (see docs/adr/0001-canonical-source-of-truth.md):

    data/raw/  ->  scripts/build_catalog.py  ->  data/processed/substances.csv
                                              ->  scripts/generate_vault_notes.py  ->  vault/04 Compound Notes/
                                              ->  scripts/validate.py              ->  validation report
"""
from __future__ import annotations

import re
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RAW_CATALOG = ROOT / "data/raw/pharmapedia-source/CompoundCatalog.source.js.txt"
PROCESSED = ROOT / "data/processed"
CURATED = ROOT / "data/curated"
VAULT = ROOT / "vault"
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
}

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


def normalize(name: str) -> str:
    """Normalisation key used for alias-collision detection."""
    s = unicodedata.normalize("NFKD", name).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]", "", s.lower())


def safe_filename(label: str) -> str:
    s = INVALID_FILENAME.sub("-", label).strip().strip(".")
    return re.sub(r"\s+", " ", s)[:120] or "unnamed"
