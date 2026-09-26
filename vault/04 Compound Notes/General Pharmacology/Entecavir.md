---
type: compound
schema-version: 2
compound-id: entecavir-compound
name: Entecavir
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
  value: 128.0
  value-max: 149.0
  unit: h
  notes: 128–149 hours
protein-binding:
  value: 13.0
  value-max: null
  unit: percent
  notes: 13% (in vitro)
bioavailability:
  value: null
  value-max: null
  notes: n/a (≥70)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 62–73%
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: negligible/nil
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
  title: Entecavir
  url: https://en.wikipedia.org/w/index.php?title=Entecavir&oldid=1339067882
  revision: 1339067882
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Entecavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `entecavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Guanosine analogue for hepatitis B with a very high genetic barrier to resistance in treatment-naive patients.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Entecavir*](https://en.wikipedia.org/w/index.php?title=Entecavir&oldid=1339067882) (revision 1339067882, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 128–149 h | 128–149 hours |
| Protein binding | 13 % | 13% (in vitro) |
| Bioavailability | - | n/a (≥70) |
| Metabolism | - | negligible/nil |
| Excretion | mainly urinary | Kidney 62–73% |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
