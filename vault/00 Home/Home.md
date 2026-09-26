---
type: moc
tags: [moc, home]
---

# 💊 Pharma-vault — Home

Evidence-graded, safety-aware knowledge graph of nootropics, CNS-active substances, peptides, hormones and adjacent pharmacology.

> [!important] Educational scope
> This vault is a study and risk-literacy resource for clinical pharmacology. It is **not** medical advice and deliberately contains **no dosing recommendations**. A catalogue or vendor listing is never evidence of efficacy, purity, legality or safety.

## Start here

- [[Compound Clusters MOC]] — 8 clusters, ~2,350 generated compound notes
- [[Pathways MOC]] — mechanism and pharmacokinetic pathways
- [[Safety MOC]] — interaction and risk hubs (read before any "stack" note)
- [[Evidence Tiers]] · [[Stack Redundancy]] · [[Interaction Overlap]]

## Dashboards

- [[Clearance Dashboard]] — renal/hepatic clearance, CYP3A4 screen, protein binding
- [[Dataview Examples v2]] · [[Half-Life Dataview Query]]
- [[Review Queue]] — stubs waiting for curation
- [[Schema Validation Report]] — last automated quality-gate result

## How the vault is built

Compound notes in `04 Compound Notes/` are generated from `data/processed/substances.csv` by `scripts/generate_vault_notes.py`. Hand-written notes (this one, hubs, pathways, concepts) are maintained manually. Once a compound note's `review-status` is changed from `stub`, the generator will never overwrite it.

Required community plugins: **Dataview**. Recommended: Templater, Metadata Menu, Linter, Obsidian Git.
