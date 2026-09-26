---
type: compound
schema-version: 2
compound-id: nifurtimox-compound
name: Nifurtimox
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
  value: 1.19
  value-max: null
  unit: h
  notes: 2.95 ± 1.19 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Low
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, very low
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (Cytochrome P450 oxidase (CYP) involved)
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
  title: Nifurtimox
  url: https://en.wikipedia.org/w/index.php?title=Nifurtimox&oldid=1373219699
  revision: 1373219699
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Nifurtimox

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nifurtimox-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Nitrofuran for Chagas disease and, combined with eflornithine, for late-stage African trypanosomiasis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nifurtimox*](https://en.wikipedia.org/w/index.php?title=Nifurtimox&oldid=1373219699) (revision 1373219699, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.19 h | 2.95 ± 1.19 hours |
| Bioavailability | - | Low |
| Metabolism | hepatic | Liver (Cytochrome P450 oxidase (CYP) involved) |
| Excretion | mainly urinary | Kidney, very low |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
