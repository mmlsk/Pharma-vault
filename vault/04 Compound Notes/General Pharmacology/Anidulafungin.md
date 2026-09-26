---
type: compound
schema-version: 2
compound-id: anidulafungin-compound
name: Anidulafungin
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
  value: 27.0
  value-max: null
  unit: h
  notes: 27 hours; 40–50 hours (terminal)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: Extensive (>99%)
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous use only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces (~30%), urine (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver metabolism not observed, CYP system not involved
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
  title: Anidulafungin
  url: https://en.wikipedia.org/w/index.php?title=Anidulafungin&oldid=1359987880
  revision: 1359987880
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Anidulafungin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anidulafungin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Echinocandin cleared by spontaneous chemical degradation rather than by any enzyme, so no dose adjustment is needed in hepatic or renal failure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anidulafungin*](https://en.wikipedia.org/w/index.php?title=Anidulafungin&oldid=1359987880) (revision 1359987880, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27 h | 27 hours; 40–50 hours (terminal) |
| Protein binding | 99 % | Extensive (>99%) |
| Bioavailability | 100 % | 100% (intravenous use only) |
| Metabolism | hepatic | Liver metabolism not observed, CYP system not involved |
| Excretion | - | Feces (~30%), urine (<1%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
