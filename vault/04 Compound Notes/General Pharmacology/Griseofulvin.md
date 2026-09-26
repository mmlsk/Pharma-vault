---
type: compound
schema-version: 2
compound-id: griseofulvin-compound
name: Griseofulvin
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
  value: 9.0
  value-max: 21.0
  unit: h
  notes: 9–21 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: 70.0
  notes: Highly variable (25 to 70%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (demethylation and glucuronidation)
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
  title: Griseofulvin
  url: https://en.wikipedia.org/w/index.php?title=Griseofulvin&oldid=1338049828
  revision: 1338049828
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Griseofulvin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `griseofulvin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The original oral antifungal for dermatophytosis, concentrating in keratin so treatment lasts as long as the nail or hair takes to grow out.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Griseofulvin*](https://en.wikipedia.org/w/index.php?title=Griseofulvin&oldid=1338049828) (revision 1338049828, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–21 h | 9–21 hours |
| Bioavailability | 25–70 % | Highly variable (25 to 70%) |
| Metabolism | hepatic | Liver (demethylation and glucuronidation) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
