---
type: compound
schema-version: 2
compound-id: ampicillin-compound
name: Ampicillin
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
  value: 1.0
  value-max: null
  unit: h
  notes: Approx. 1 hour
protein-binding:
  value: 15.0
  value-max: 25.0
  unit: percent
  notes: 15 to 25%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62% ±17% (parenteral); < 30–55% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 75 to 85% kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 12 to 50%
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
  title: Ampicillin
  url: https://en.wikipedia.org/w/index.php?title=Ampicillin&oldid=1364413005
  revision: 1364413005
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ampicillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ampicillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The parenteral aminopenicillin, retaining unique activity against Listeria and Enterococcus faecalis. Poor oral absorption is why amoxicillin displaced it outside hospital.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ampicillin*](https://en.wikipedia.org/w/index.php?title=Ampicillin&oldid=1364413005) (revision 1364413005, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | Approx. 1 hour |
| Protein binding | 15–25 % | 15 to 25% |
| Bioavailability | 62 % | 62% ±17% (parenteral); < 30–55% (oral) |
| Metabolism | - | 12 to 50% |
| Metabolites | - | Penicilloic acid |
| Excretion | mainly urinary | 75 to 85% kidney |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
