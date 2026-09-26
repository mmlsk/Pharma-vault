---
type: compound
schema-version: 2
compound-id: telavancin-compound
name: Telavancin
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
  value: 9.0
  value-max: null
  unit: h
  notes: 9 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%, mostly to albumin
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 76% in urine, <1% in feces
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
  title: Telavancin
  url: https://en.wikipedia.org/w/index.php?title=Telavancin&oldid=1329507747
  revision: 1329507747
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Telavancin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `telavancin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Lipoglycopeptide with dual cell wall and membrane activity, limited in practice by nephrotoxicity and a fetal risk signal.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Telavancin*](https://en.wikipedia.org/w/index.php?title=Telavancin&oldid=1329507747) (revision 1329507747, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9 h | 9 hours |
| Protein binding | 90 % | 90%, mostly to albumin |
| Bioavailability | - | N/A |
| Excretion | - | 76% in urine, <1% in feces |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
