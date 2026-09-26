---
type: compound
schema-version: 2
compound-id: cephalexin-compound
name: Cephalexin
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
  value: 0.6
  value-max: 1.2
  unit: h
  notes: 0.6–1.2 hours
protein-binding:
  value: 15.0
  value-max: null
  unit: percent
  notes: 15%
bioavailability:
  value: null
  value-max: null
  notes: Well absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 80% excreted unchanged in urine within 6 hours of administration
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
  title: Cefalexin
  url: https://en.wikipedia.org/w/index.php?title=Cefalexin&oldid=1374815637
  revision: 1374815637
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cephalexin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cephalexin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Oral first-generation cephalosporin used for skin and soft tissue infection and for uncomplicated urinary infection in pregnancy.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefalexin*](https://en.wikipedia.org/w/index.php?title=Cefalexin&oldid=1374815637) (revision 1374815637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.6–1.2 h | 0.6–1.2 hours |
| Protein binding | 15 % | 15% |
| Bioavailability | - | Well absorbed |
| Metabolism | - | 80% excreted unchanged in urine within 6 hours of administration |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
