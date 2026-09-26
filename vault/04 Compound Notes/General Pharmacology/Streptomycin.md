---
type: compound
schema-version: 2
compound-id: streptomycin-compound
name: Streptomycin
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
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5 to 6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 84.0
  value-max: null
  notes: 84% to 88% IM (est.) 0% by mouth
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Streptomycin
  url: https://en.wikipedia.org/w/index.php?title=Streptomycin&oldid=1364906430
  revision: 1364906430
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Streptomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `streptomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The first aminoglycoside and the first effective antituberculous drug, now used mainly for plague, tularaemia and resistant tuberculosis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Streptomycin*](https://en.wikipedia.org/w/index.php?title=Streptomycin&oldid=1364906430) (revision 1364906430, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5 to 6 hours |
| Bioavailability | 84 % | 84% to 88% IM (est.) 0% by mouth |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
