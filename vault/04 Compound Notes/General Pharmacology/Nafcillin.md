---
type: compound
schema-version: 2
compound-id: nafcillin-compound
name: Nafcillin
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
  value: 0.5
  value-max: null
  unit: h
  notes: 0.5 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Biliary and renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: <30% hepatic
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
  title: Nafcillin
  url: https://en.wikipedia.org/w/index.php?title=Nafcillin&oldid=1320208042
  revision: 1320208042
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Nafcillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nafcillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Antistaphylococcal penicillin resistant to staphylococcal penicillinase, hepatically cleared so usable in renal failure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nafcillin*](https://en.wikipedia.org/w/index.php?title=Nafcillin&oldid=1320208042) (revision 1320208042, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.5 h | 0.5 hours |
| Protein binding | 90 % | 90% |
| Metabolism | hepatic | <30% hepatic |
| Excretion | - | Biliary and renal |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
