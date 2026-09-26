---
type: compound
schema-version: 2
compound-id: istradefylline-compound
name: Istradefylline
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
  value: 64.0
  value-max: 69.0
  unit: h
  notes: 64–69 hrs
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 68% faeces, 18% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly CYP1A1, CYP3A4, and CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Istradefylline
  url: https://en.wikipedia.org/w/index.php?title=Istradefylline&oldid=1370506490
  revision: 1370506490
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Istradefylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `istradefylline-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]

## Source summary

Selective adenosine A2A antagonist approved as adjunct therapy for Parkinson's OFF episodes — the only marketed drug in its class.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Istradefylline*](https://en.wikipedia.org/w/index.php?title=Istradefylline&oldid=1370506490) (revision 1370506490, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 64–69 h | 64–69 hrs |
| Protein binding | 98 % | 98% |
| Metabolism | hepatic | Mainly CYP1A1, CYP3A4, and CYP3A5 |
| CYP (metabolised by) | CYP1A1, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | 68% faeces, 18% urine |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
