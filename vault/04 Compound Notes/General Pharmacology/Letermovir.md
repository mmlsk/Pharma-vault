---
type: compound
schema-version: 2
compound-id: letermovir-compound
name: Letermovir
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
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 98.2
  value-max: null
  unit: percent
  notes: 98.2%
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% (estimate)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 93.3% via feces, <2% via kidneys
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: glucuronidation (UGT1A1/1A3) to a minor extent
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
  title: Letermovir
  url: https://en.wikipedia.org/w/index.php?title=Letermovir&oldid=1335510246
  revision: 1335510246
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Letermovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `letermovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

CMV prophylactic with a target unique to that virus, avoiding the marrow toxicity that limited valganciclovir prophylaxis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Letermovir*](https://en.wikipedia.org/w/index.php?title=Letermovir&oldid=1335510246) (revision 1335510246, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 98.2 % | 98.2% |
| Bioavailability | 37 % | 37% (estimate) |
| Metabolism | hepatic | glucuronidation (UGT1A1/1A3) to a minor extent |
| Excretion | - | 93.3% via feces, <2% via kidneys |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
