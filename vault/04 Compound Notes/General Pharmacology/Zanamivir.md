---
type: compound
schema-version: 2
compound-id: zanamivir-compound
name: Zanamivir
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
  value: 2.5
  value-max: 5.1
  unit: h
  notes: 2.5–5.1 hours
protein-binding:
  value: 10.0
  value-max: null
  unit: percent
  notes: <10%
bioavailability:
  value: 2.0
  value-max: null
  notes: 2% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Negligible
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
  title: Zanamivir
  url: https://en.wikipedia.org/w/index.php?title=Zanamivir&oldid=1363171383
  revision: 1363171383
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Zanamivir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zanamivir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Inhaled neuraminidase inhibitor with negligible oral bioavailability, delivered straight to the airway epithelium instead.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zanamivir*](https://en.wikipedia.org/w/index.php?title=Zanamivir&oldid=1363171383) (revision 1363171383, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–5.1 h | 2.5–5.1 hours |
| Protein binding | 10 % | <10% |
| Bioavailability | 2 % | 2% (oral) |
| Metabolism | - | Negligible |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
