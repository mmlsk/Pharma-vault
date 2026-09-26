---
type: compound
schema-version: 2
compound-id: fosfomycin-compound
name: Fosfomycin
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
  value: 5.7
  value-max: null
  unit: h
  notes: 5.7 hours (mean)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Nil
bioavailability:
  value: 30.0
  value-max: 37.0
  notes: 30–37% (by mouth, fosfomycin tromethamine); varies with food intake
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, unchanged
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Fosfomycin
  url: https://en.wikipedia.org/w/index.php?title=Fosfomycin&oldid=1358847915
  revision: 1358847915
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fosfomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosfomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Single-dose oral agent for uncomplicated cystitis, and intravenously a partner drug for resistant gram-negative infection.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosfomycin*](https://en.wikipedia.org/w/index.php?title=Fosfomycin&oldid=1358847915) (revision 1358847915, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.7 h | 5.7 hours (mean) |
| Protein binding | - | Nil |
| Bioavailability | 30–37 % | 30–37% (by mouth, fosfomycin tromethamine); varies with food intake |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney, unchanged |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
