---
type: compound
schema-version: 2
compound-id: foscarnet-compound
name: Foscarnet
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
  value: 3.3
  value-max: 6.8
  unit: h
  notes: 3.3–6.8 hours
protein-binding:
  value: 14.0
  value-max: 17.0
  unit: percent
  notes: 14–17%
bioavailability:
  value: null
  value-max: null
  notes: NA
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
  title: Foscarnet
  url: https://en.wikipedia.org/w/index.php?title=Foscarnet&oldid=1373275641
  revision: 1373275641
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Foscarnet

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `foscarnet-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Pyrophosphate analogue needing no activation at all, which is why it works against thymidine-kinase-deficient aciclovir-resistant herpes and UL97-mutant CMV.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Foscarnet*](https://en.wikipedia.org/w/index.php?title=Foscarnet&oldid=1373275641) (revision 1373275641, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.3–6.8 h | 3.3–6.8 hours |
| Protein binding | 14–17 % | 14–17% |
| Bioavailability | - | NA |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
