---
type: compound
schema-version: 2
compound-id: osimertinib-compound
name: Osimertinib
aliases: []
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
  value: 48.0
  value-max: null
  unit: h
  notes: 48 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Probably high
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (68%), urine (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Oxidation (CYP3A)
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
  title: Osimertinib
  url: https://en.wikipedia.org/w/index.php?title=Osimertinib&oldid=1372172312
  revision: 1372172312
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Osimertinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `osimertinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Osimertinib*](https://en.wikipedia.org/w/index.php?title=Osimertinib&oldid=1372172312) (revision 1372172312, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 48 h | 48 hours |
| Protein binding | - | Probably high |
| Metabolism | hepatic | Oxidation (CYP3A) |
| Excretion | mainly non-renal | Feces (68%), urine (14%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
