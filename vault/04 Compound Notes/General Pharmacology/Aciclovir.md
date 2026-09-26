---
type: compound
schema-version: 2
compound-id: acyclovir-compound
name: Aciclovir
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
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours
protein-binding:
  value: 9.0
  value-max: 33.0
  unit: percent
  notes: 9–33%
bioavailability:
  value: 15.0
  value-max: 20.0
  notes: 15–20% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.9
  notes: Kidney (62–90% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Aciclovir
  url: https://en.wikipedia.org/w/index.php?title=Aciclovir&oldid=1376498922
  revision: 1376498922
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Aciclovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acyclovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The drug that made herpes treatable, and the classic example of selective activation: it is only phosphorylated in virus-infected cells.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aciclovir*](https://en.wikipedia.org/w/index.php?title=Aciclovir&oldid=1376498922) (revision 1376498922, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Protein binding | 9–33 % | 9–33% |
| Bioavailability | 15–20 % | 15–20% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary · fe 0.9 | Kidney (62–90% as unchanged drug) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
