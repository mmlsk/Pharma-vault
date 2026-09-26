---
type: compound
schema-version: 2
compound-id: tesofensine-compound
name: Tesofensine
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
  value: 220.0
  value-max: null
  unit: h
  notes: 220 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Not applicable
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: '15–20% renal; hepatic: CYP3A4'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tesofensine
  url: https://en.wikipedia.org/w/index.php?title=Tesofensine&oldid=1374173975
  revision: 1374173975
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tesofensine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tesofensine-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

Investigational triple monoamine-reuptake inhibitor with substantial weight-loss signals but dose-related heart-rate and blood-pressure concerns; not broadly approved.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tesofensine*](https://en.wikipedia.org/w/index.php?title=Tesofensine&oldid=1374173975) (revision 1374173975, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 220 h | 220 hours |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | 15–20% renal; hepatic: CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Not applicable |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
