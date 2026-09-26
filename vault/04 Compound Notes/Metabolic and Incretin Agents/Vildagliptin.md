---
type: compound
schema-version: 2
compound-id: vildagliptin-compound
name: Vildagliptin
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
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2 to 3 hours
protein-binding:
  value: 9.3
  value-max: null
  unit: percent
  notes: 9.3%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly hydrolysis to inactive metabolite; CYP450 not appreciably involved
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
  title: Vildagliptin
  url: https://en.wikipedia.org/w/index.php?title=Vildagliptin&oldid=1367270801
  revision: 1367270801
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vildagliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vildagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vildagliptin*](https://en.wikipedia.org/w/index.php?title=Vildagliptin&oldid=1367270801) (revision 1367270801, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2 to 3 hours |
| Protein binding | 9.3 % | 9.3% |
| Bioavailability | 85 % | 85% |
| Metabolism | hepatic | Mainly hydrolysis to inactive metabolite; CYP450 not appreciably involved |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
