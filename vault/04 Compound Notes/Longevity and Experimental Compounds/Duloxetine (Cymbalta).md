---
type: compound
schema-version: 2
compound-id: duloxetine-compound
name: Duloxetine (Cymbalta)
aliases:
- Duloxetine
- Cymbalta
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
  value: 10.0
  value-max: 12.0
  unit: h
  notes: 10–12 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: ~95%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50% (32–80%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 70% in urine, 20% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, two P450 isozymes, CYP2D6 and CYP1A2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Duloxetine
  url: https://en.wikipedia.org/w/index.php?title=Duloxetine&oldid=1371441880
  revision: 1371441880
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Duloxetine (Cymbalta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `duloxetine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Duloxetine, Cymbalta

## Source summary

SNRI used for depression, anxiety, and neuropathic pain; withdrawal, liver, blood-pressure, and sexual effects matter.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Duloxetine*](https://en.wikipedia.org/w/index.php?title=Duloxetine&oldid=1371441880) (revision 1371441880, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–12 h | 10–12 hours |
| Protein binding | 95 % | ~95% |
| Bioavailability | 50 % | ~50% (32–80%) |
| Metabolism | hepatic | Liver, two P450 isozymes, CYP2D6 and CYP1A2 |
| CYP (metabolised by) | CYP1A2, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | 70% in urine, 20% in feces |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
