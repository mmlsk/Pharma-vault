---
type: cluster
tags: [cluster, nps]
---

# Novel Psychoactive Substances

**Scope:** forensic / designer NPS families from the expansion backlog — novel synthetic opioids (nitazenes, brorphine), designer benzodiazepines, synthetic cathinones and phenethylamines, arylcyclohexylamine dissociatives, synthetic cannabinoid receptor agonists and semi-synthetic cannabinoids. Added in v3.2 **only** when the name resolved to a single structure in ChEMBL or PubChem (`data/curated/additions.csv`).

> [!danger] Why this cluster exists
> These notes are for **recognition and harm awareness** (identity, receptor targets, toxicity routing). They contain no dosing guidance. Products sold under these names are frequently mislabelled or adulterated — identity in a note is the *intended* molecule, not what a sample contains.

## Interpretation
- Potency is the dominant hazard: nitazenes and many designer benzodiazepines are active at microgram–low-milligram amounts, so small weighing errors matter; combined opioid + benzodiazepine (+ alcohol) exposure drives fatal respiratory depression.
- Evidence tier is usually `E-forensic-NPS` (case reports, toxicology series, receptor pharmacology), see [[Evidence Tiers]].
- Most have **no** FDA label, so automated PK cross-checks do not apply.

## Safety hubs
- [[Respiratory Depression and Fatal Overdose]]
- [[Serotonin Toxicity]]
- [[Stimulant and Cardiovascular Load]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Stacking and Interaction Risks]]

## Compounds
```dataview
TABLE WITHOUT ID file.link AS Compound, chembl-id AS ChEMBL, group-risk-triage AS Triage
FROM "04 Compound Notes"
WHERE type = "compound" AND cluster = "Novel Psychoactive Substances"
SORT file.name ASC
```

Back to [[Compound Clusters MOC]]
