---
type: compound
schema-version: 2
compound-id: ivacaftor-compound
name: Ivacaftor (Kalydeco)
aliases:
- Ivacaftor
- Kalydeco
cluster: General Pharmacology
group: immunology
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
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hrs (single dose)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 88% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A
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
- immunosuppression-infection
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Ivacaftor
  url: https://en.wikipedia.org/w/index.php?title=Ivacaftor&oldid=1353014600
  revision: 1353014600
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ivacaftor (Kalydeco)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ivacaftor-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Ivacaftor, Kalydeco

## Source summary

A CFTR potentiator that increases the open probability of channels already at the cell surface. It transformed outcomes for gating mutations such as G551D and was the first drug to treat the underlying defect in cystic fibrosis rather than its consequences.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ivacaftor*](https://en.wikipedia.org/w/index.php?title=Ivacaftor&oldid=1353014600) (revision 1353014600, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hrs (single dose) |
| Protein binding | 99 % | 99% |
| Metabolism | hepatic | CYP3A |
| Excretion | mainly non-renal | 88% faeces |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
