---
type: compound
schema-version: 2
compound-id: cefuroxime-compound
name: Cefuroxime
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
  value: 80.0
  value-max: null
  unit: min
  notes: 80 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% on an empty stomach, up to 52% if taken after food
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 1.0
  notes: Urine 66–100% unchanged
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
  title: Cefuroxime
  url: https://en.wikipedia.org/w/index.php?title=Cefuroxime&oldid=1352009481
  revision: 1352009481
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cefuroxime

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefuroxime-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Second-generation cephalosporin with improved stability to staphylococcal and some gram-negative beta-lactamases. Available orally as the axetil ester.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefuroxime*](https://en.wikipedia.org/w/index.php?title=Cefuroxime&oldid=1352009481) (revision 1352009481, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 80 min | 80 minutes |
| Bioavailability | 37 % | 37% on an empty stomach, up to 52% if taken after food |
| Excretion | mainly urinary · fe 1 | Urine 66–100% unchanged |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
