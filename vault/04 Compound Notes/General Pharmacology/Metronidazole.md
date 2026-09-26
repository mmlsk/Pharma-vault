---
type: compound
schema-version: 2
compound-id: metronidazole-compound
name: Metronidazole
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
  value: 8.0
  value-max: null
  unit: h
  notes: 8 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% (by mouth), 60–80% (rectal), 20–25% (vaginal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (77%), faeces (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Metronidazole
  url: https://en.wikipedia.org/w/index.php?title=Metronidazole&oldid=1374900844
  revision: 1374900844
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Metronidazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metronidazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Nitroimidazole active only against organisms with an anaerobic reducing environment, covering anaerobic bacteria and several protozoa.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metronidazole*](https://en.wikipedia.org/w/index.php?title=Metronidazole&oldid=1374900844) (revision 1374900844, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 80 % | 80% (by mouth), 60–80% (rectal), 20–25% (vaginal) |
| Metabolism | hepatic | Liver |
| Metabolites | - | Hydroxymetronidazole |
| Excretion | mainly urinary | Urine (77%), faeces (14%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
