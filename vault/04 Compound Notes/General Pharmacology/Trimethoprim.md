---
type: compound
schema-version: 2
compound-id: trimethoprim-compound
name: Trimethoprim
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
  value: 8.0
  value-max: 12.0
  unit: h
  notes: 8–12 hours
protein-binding:
  value: 44.0
  value-max: null
  unit: percent
  notes: 44%
bioavailability:
  value: 90.0
  value-max: 100.0
  notes: 90–100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (50–60%), faeces (4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Trimethoprim
  url: https://en.wikipedia.org/w/index.php?title=Trimethoprim&oldid=1376490173
  revision: 1376490173
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Trimethoprim

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `trimethoprim-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Bacterial dihydrofolate reductase inhibitor used alone for urinary infection and with sulfamethoxazole for broader cover.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Trimethoprim*](https://en.wikipedia.org/w/index.php?title=Trimethoprim&oldid=1376490173) (revision 1376490173, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–12 h | 8–12 hours |
| Protein binding | 44 % | 44% |
| Bioavailability | 90–100 % | 90–100% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney (50–60%), faeces (4%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
