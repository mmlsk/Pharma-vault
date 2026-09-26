---
type: compound
schema-version: 2
compound-id: ivermectin-compound
name: Ivermectin
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
  value: 20.8
  value-max: null
  unit: h
  notes: 38.9 ± 20.8 h
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: null
  value-max: null
  notes: not determined
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces; <1% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP450)
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
  title: Ivermectin
  url: https://en.wikipedia.org/w/index.php?title=Ivermectin&oldid=1376285411
  revision: 1376285411
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ivermectin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ivermectin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Avermectin antiparasitic that made onchocerciasis control possible, and the subject of a large low-quality COVID-19 literature that better trials did not support.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ivermectin*](https://en.wikipedia.org/w/index.php?title=Ivermectin&oldid=1376285411) (revision 1376285411, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20.8 h | 38.9 ± 20.8 h |
| Protein binding | 93 % | 93% |
| Bioavailability | - | not determined |
| Metabolism | hepatic | Liver (CYP450) |
| Excretion | - | Feces; <1% urine |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
