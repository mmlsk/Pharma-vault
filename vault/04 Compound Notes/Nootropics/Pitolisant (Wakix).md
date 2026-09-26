---
type: compound
schema-version: 2
compound-id: pitolisant-compound
name: Pitolisant (Wakix)
aliases:
- Pitolisant
- Wakix
cluster: Nootropics
group: nootropic
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
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 91.0
  value-max: 96.0
  unit: percent
  notes: 91-96 %
bioavailability:
  value: 90.0
  value-max: null
  notes: 90 %
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Pitolisant
  url: https://en.wikipedia.org/w/index.php?title=Pitolisant&oldid=1367387265
  revision: 1367387265
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pitolisant (Wakix)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pitolisant-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Pitolisant, Wakix

## Source summary

Histamine H3 inverse agonist for narcolepsy. Promotes wakefulness by raising central histamine rather than through dopamine, so it is non-scheduled.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pitolisant*](https://en.wikipedia.org/w/index.php?title=Pitolisant&oldid=1367387265) (revision 1367387265, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 91–96 % | 91-96 % |
| Bioavailability | 90 % | 90 % |
| Metabolism | hepatic | CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
