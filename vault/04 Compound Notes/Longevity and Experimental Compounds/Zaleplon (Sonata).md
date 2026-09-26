---
type: compound
schema-version: 2
compound-id: zaleplon-compound
name: Zaleplon (Sonata)
aliases:
- Zaleplon
- Sonata
cluster: Longevity and Experimental Compounds
group: longevity
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
  notes: 1 hour
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 30.0
  value-max: null
  notes: 30% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver aldehyde oxidase (91%), CYP3A4 (9%)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Zaleplon
  url: https://en.wikipedia.org/w/index.php?title=Zaleplon&oldid=1347114340
  revision: 1347114340
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Zaleplon (Sonata)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zaleplon-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Zaleplon, Sonata

## Source summary

Very short-acting GABA-A hypnotic for sleep-onset insomnia; dependence and complex sleep behaviors remain possible.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zaleplon*](https://en.wikipedia.org/w/index.php?title=Zaleplon&oldid=1347114340) (revision 1347114340, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour |
| Bioavailability | 30 % | 30% (oral) |
| Metabolism | hepatic | Liver aldehyde oxidase (91%), CYP3A4 (9%) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | No active metabolites |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
