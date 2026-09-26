---
type: compound
schema-version: 2
compound-id: nitrofurantoin-compound
name: Nitrofurantoin
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
  value: 0.33
  value-max: 1.7
  unit: h
  notes: 0.33–1.7hours
protein-binding:
  value: 60.0
  value-max: 77.0
  unit: percent
  notes: 60–77% (primarily albumin)
bioavailability:
  value: 20.0
  value-max: 94.0
  notes: ~20–94%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.25
  notes: Almost exclusively urine (4–59% over 3–30hours; ~20–25% unchanged) and bile
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
  title: Nitrofurantoin
  url: https://en.wikipedia.org/w/index.php?title=Nitrofurantoin&oldid=1365942340
  revision: 1365942340
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Nitrofurantoin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nitrofurantoin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Urinary-specific agent concentrated in urine but with negligible tissue levels, so it treats cystitis and never pyelonephritis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nitrofurantoin*](https://en.wikipedia.org/w/index.php?title=Nitrofurantoin&oldid=1365942340) (revision 1365942340, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.33–1.7 h | 0.33–1.7hours |
| Protein binding | 60–77 % | 60–77% (primarily albumin) |
| Bioavailability | 20–94 % | ~20–94% |
| Excretion | - · fe 0.25 | Almost exclusively urine (4–59% over 3–30hours; ~20–25% unchanged) and bile |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
