---
type: compound
schema-version: 2
compound-id: oxytocin-compound
name: Oxytocin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: null
chembl-max-phase: null
half-life:
  value: 1.0
  value-max: 6.0
  unit: min
  notes: 1–6 min (IV); ~2 h (intranasal)
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Biliary and kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and other oxytocinases
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Oxytocin
  url: https://en.wikipedia.org/w/index.php?title=Oxytocin&oldid=1375895379
  revision: 1375895379
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Oxytocin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oxytocin-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]

## Source summary

Neuropeptide hormone increasingly studied for a direct role in muscle stem cell regeneration alongside its social/reproductive functions.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oxytocin*](https://en.wikipedia.org/w/index.php?title=Oxytocin&oldid=1375895379) (revision 1375895379, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–6 min | 1–6 min (IV); ~2 h (intranasal) |
| Protein binding | 30 % | 30% |
| Metabolism | hepatic | Liver and other oxytocinases |
| Excretion | mainly non-renal | Biliary and kidney |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
