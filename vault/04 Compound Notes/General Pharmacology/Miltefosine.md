---
type: compound
schema-version: 2
compound-id: miltefosine-compound
name: Miltefosine
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
  value: 6.0
  value-max: 8.0
  unit: d
  notes: 6 to 8 days and 31 days
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: ~98%
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Primarily fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Slow hepatic (non-CYP-dependent)
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
  title: Miltefosine
  url: https://en.wikipedia.org/w/index.php?title=Miltefosine&oldid=1374210502
  revision: 1374210502
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Miltefosine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `miltefosine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The first oral treatment for visceral leishmaniasis, an alkylphosphocholine originally developed as an anticancer agent and strongly teratogenic.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Miltefosine*](https://en.wikipedia.org/w/index.php?title=Miltefosine&oldid=1374210502) (revision 1374210502, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 d | 6 to 8 days and 31 days |
| Protein binding | 98 % | ~98% |
| Bioavailability | - | High |
| Metabolism | hepatic | Slow hepatic (non-CYP-dependent) |
| Excretion | - | Primarily fecal |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
