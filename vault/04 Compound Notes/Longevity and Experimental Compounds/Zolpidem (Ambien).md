---
type: compound
schema-version: 2
compound-id: zolpidem-compound
name: Zolpidem (Ambien)
aliases:
- Zolpidem
- Ambien
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
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 70.0
  value-max: null
  notes: 70% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (56%); fecal (34%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver through CYP3A4 (~60%), CYP2C9 (~20%), and CYP1A2 (~14%)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zolpidem
  url: https://en.wikipedia.org/w/index.php?title=Zolpidem&oldid=1369645518
  revision: 1369645518
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Zolpidem (Ambien)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zolpidem-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Zolpidem, Ambien

## Source summary

Nonbenzodiazepine GABA-A hypnotic with next-day impairment, dependence, and boxed-warning complex sleep behaviors.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zolpidem*](https://en.wikipedia.org/w/index.php?title=Zolpidem&oldid=1369645518) (revision 1369645518, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 92 % | 92% |
| Bioavailability | 70 % | 70% (by mouth) |
| Metabolism | hepatic | Liver through CYP3A4 (~60%), CYP2C9 (~20%), and CYP1A2 (~14%) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | (ZCA) zolpidem 6-carboxylic acid; (ZPCA) zolpidem phenyl-4-carboxylic acid |
| Excretion | mainly urinary | Kidney (56%); fecal (34%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
