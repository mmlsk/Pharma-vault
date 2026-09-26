---
type: compound
schema-version: 2
compound-id: adefovir-compound
name: Adefovir
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
  value: 7.5
  value-max: null
  unit: h
  notes: 7.5 hours
protein-binding:
  value: 4.0
  value-max: null
  unit: percent
  notes: <4%
bioavailability:
  value: 59.0
  value-max: null
  notes: 59%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
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
  title: Adefovir
  url: https://en.wikipedia.org/w/index.php?title=Adefovir&oldid=1329238271
  revision: 1329238271
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Adefovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `adefovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Nucleotide analogue for hepatitis B, dose-limited by nephrotoxicity and now largely superseded by tenofovir.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Adefovir*](https://en.wikipedia.org/w/index.php?title=Adefovir&oldid=1329238271) (revision 1329238271, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.5 h | 7.5 hours |
| Protein binding | 4 % | <4% |
| Bioavailability | 59 % | 59% |
| Excretion | mainly urinary | Urine |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
