---
type: compound
schema-version: 2
compound-id: netupitant-compound
name: Netupitant
aliases: []
cluster: General Pharmacology
group: gi
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
  value: 88.0
  value-max: null
  unit: h
  notes: 88 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 60.0
  value-max: null
  notes: '>60% (estimated)'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 71% (faeces)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: mainly CYP3A4; also CYP2D6 and CYP2C9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Netupitant
  url: https://en.wikipedia.org/w/index.php?title=Netupitant&oldid=1368522106
  revision: 1368522106
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Netupitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `netupitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

NK-1 antagonist co-formulated with palonosetron as a single oral capsule covering both emetic phases.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Netupitant*](https://en.wikipedia.org/w/index.php?title=Netupitant&oldid=1368522106) (revision 1368522106, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 88 h | 88 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 60 % | >60% (estimated) |
| Metabolism | hepatic | mainly CYP3A4; also CYP2D6 and CYP2C9 |
| CYP (metabolised by) | CYP2C9, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | 71% (faeces) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
