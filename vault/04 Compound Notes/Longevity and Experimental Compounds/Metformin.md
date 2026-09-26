---
type: compound
schema-version: 2
compound-id: metformin-compound
name: Metformin
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
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
  value: 4.0
  value-max: 8.7
  unit: h
  notes: 4–8.7 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Minimal
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Not by liver
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Metformin
  url: https://en.wikipedia.org/w/index.php?title=Metformin&oldid=1372113244
  revision: 1372113244
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Metformin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metformin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

First-line type 2 diabetes drug that activates AMPK and reduces hepatic glucose output; widely studied off-label for longevity given its AMPK/mTOR-opposing metabolic profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metformin*](https://en.wikipedia.org/w/index.php?title=Metformin&oldid=1372113244) (revision 1372113244, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–8.7 h | 4–8.7 hours |
| Protein binding | - | Minimal |
| Bioavailability | 50–60 % | 50–60% |
| Metabolism | hepatic | Not by liver |
| Excretion | mainly urinary | Urine (90%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
