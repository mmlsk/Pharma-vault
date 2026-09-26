---
type: compound
schema-version: 2
compound-id: sulfamethoxazole-compound
name: Sulfamethoxazole
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
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic acetylation and glucuronidation
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
  title: Sulfamethoxazole
  url: https://en.wikipedia.org/w/index.php?title=Sulfamethoxazole&oldid=1321678938
  revision: 1321678938
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sulfamethoxazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sulfamethoxazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The sulfonamide half of co-trimoxazole, a PABA analogue exploiting the fact that bacteria must synthesise folate rather than take it up.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sulfamethoxazole*](https://en.wikipedia.org/w/index.php?title=Sulfamethoxazole&oldid=1321678938) (revision 1321678938, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 70 % | 70% |
| Metabolism | hepatic | Hepatic acetylation and glucuronidation |
| Excretion | mainly urinary | Renal |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
