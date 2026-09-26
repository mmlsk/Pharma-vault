---
type: compound
schema-version: 2
compound-id: gemigliptin-compound
name: Gemigliptin
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
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
  value: null
  value-max: null
  unit: null
  notes: '3.6 h (rat), 5.2 h (dog), 5.4 h (monkey) [not stored as a number: non-human or sub-minute data]'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 94.0
  value-max: null
  notes: 94% (rat), 73% (dog), 26% (monkey)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Gemigliptin
  url: https://en.wikipedia.org/w/index.php?title=Gemigliptin&oldid=1371811053
  revision: 1371811053
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Gemigliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gemigliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gemigliptin*](https://en.wikipedia.org/w/index.php?title=Gemigliptin&oldid=1371811053) (revision 1371811053, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 3.6 h (rat), 5.2 h (dog), 5.4 h (monkey) [not stored as a number: non-human or sub-minute data] |
| Bioavailability | 94 % | 94% (rat), 73% (dog), 26% (monkey) |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
