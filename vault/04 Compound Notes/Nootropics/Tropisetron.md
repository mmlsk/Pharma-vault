---
type: compound
schema-version: 2
compound-id: tropisetron-compound
name: Tropisetron
aliases: []
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
  value: 6.0
  value-max: 8.0
  unit: h
  notes: 6–8 hours
protein-binding:
  value: 71.0
  value-max: null
  unit: percent
  notes: 71%
bioavailability:
  value: 60.0
  value-max: 80.0
  notes: ~60–80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney, Feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP1A2, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tropisetron
  url: https://en.wikipedia.org/w/index.php?title=Tropisetron&oldid=1374431947
  revision: 1374431947
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tropisetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tropisetron-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]

## Source summary

Prescription 5-HT3 receptor antagonist used for nausea and vomiting. Cognitive interest centers on alpha-7 nicotinic receptor activity, but it is not an established nootropic.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tropisetron*](https://en.wikipedia.org/w/index.php?title=Tropisetron&oldid=1374431947) (revision 1374431947, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 h | 6–8 hours |
| Protein binding | 71 % | 71% |
| Bioavailability | 60–80 % | ~60–80% |
| Metabolism | hepatic | Liver (CYP3A4, CYP1A2, CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney, Feces |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
