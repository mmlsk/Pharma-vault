---
type: compound
schema-version: 2
compound-id: vasopressin-drug-compound
name: Vasopressin (IV)
aliases:
- Vasopressin
- IV
cluster: Cardiovascular and Lipid Agents
group: cardio
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
  value: 10.0
  value-max: 20.0
  unit: min
  notes: 10–20 minutes
protein-binding:
  value: 1.0
  value-max: null
  unit: percent
  notes: 1%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Predominantly in the liver and kidneys
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Vasopressin
  url: https://en.wikipedia.org/w/index.php?title=Vasopressin&oldid=1368665481
  revision: 1368665481
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vasopressin (IV)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vasopressin-drug-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **Aliases:** Vasopressin, IV

## Source summary

Second-line vasopressor in septic shock, acting on a receptor system entirely separate from the adrenergic one.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vasopressin*](https://en.wikipedia.org/w/index.php?title=Vasopressin&oldid=1368665481) (revision 1368665481, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–20 min | 10–20 minutes |
| Protein binding | 1 % | 1% |
| Metabolism | hepatic | Predominantly in the liver and kidneys |
| Excretion | mainly urinary | Urine |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
