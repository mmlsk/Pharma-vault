---
type: compound
schema-version: 2
compound-id: eszopiclone-compound
name: Eszopiclone (Lunesta)
aliases:
- Eszopiclone
- Lunesta
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
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: 52.0
  value-max: 59.0
  unit: percent
  notes: 52–59%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver oxidation and demethylation (CYP3A4 and CYP2E1-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Eszopiclone
  url: https://en.wikipedia.org/w/index.php?title=Eszopiclone&oldid=1346285069
  revision: 1346285069
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Eszopiclone (Lunesta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eszopiclone-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Eszopiclone, Lunesta

## Source summary

Nonbenzodiazepine GABA-A hypnotic for insomnia; dysgeusia, next-day impairment, dependence, and complex sleep behaviors are important risks.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eszopiclone*](https://en.wikipedia.org/w/index.php?title=Eszopiclone&oldid=1346285069) (revision 1346285069, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Protein binding | 52–59 % | 52–59% |
| Metabolism | hepatic | Liver oxidation and demethylation (CYP3A4 and CYP2E1-mediated) |
| CYP (metabolised by) | CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
