---
type: compound
schema-version: 2
compound-id: islatravir-compound
name: Islatravir
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value: 50.0
  value-max: 60.0
  unit: h
  notes: ~50–60 hours (parent drug)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Limited; intracellular phosphorylation to active metabolite (ISL-TP)
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Islatravir
  url: https://en.wikipedia.org/w/index.php?title=Islatravir&oldid=1362098777
  revision: 1362098777
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Islatravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `islatravir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Nucleoside reverse transcriptase translocation inhibitor with an intracellular half-life long enough to support monthly or longer dosing.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Islatravir*](https://en.wikipedia.org/w/index.php?title=Islatravir&oldid=1362098777) (revision 1362098777, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50–60 h | ~50–60 hours (parent drug) |
| Metabolism | - | Limited; intracellular phosphorylation to active metabolite (ISL-TP) |
| Excretion | mainly urinary | Renal |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
