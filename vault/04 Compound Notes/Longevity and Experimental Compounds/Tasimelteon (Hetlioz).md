---
type: compound
schema-version: 2
compound-id: tasimelteon-compound
name: Tasimelteon (Hetlioz)
aliases:
- Tasimelteon
- Hetlioz
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
  value: 0.9
  value-max: 1.7
  unit: h
  notes: 0.9–1.7 h / 0.8–5.9 h (terminal)
protein-binding:
  value: 89.0
  value-max: 90.0
  unit: percent
  notes: 89–90%
bioavailability:
  value: null
  value-max: null
  notes: not determined in humans
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 80% in urine, 4% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: extensive liver, primarily CYP1A2 and CYP3A4-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tasimelteon
  url: https://en.wikipedia.org/w/index.php?title=Tasimelteon&oldid=1329184391
  revision: 1329184391
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tasimelteon (Hetlioz)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tasimelteon-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Tasimelteon, Hetlioz

## Source summary

MT1/MT2 agonist approved for non-24-hour sleep-wake disorder and nighttime sleep disturbance in Smith-Magenis syndrome.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tasimelteon*](https://en.wikipedia.org/w/index.php?title=Tasimelteon&oldid=1329184391) (revision 1329184391, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.9–1.7 h | 0.9–1.7 h / 0.8–5.9 h (terminal) |
| Protein binding | 89–90 % | 89–90% |
| Bioavailability | - | not determined in humans |
| Metabolism | hepatic | extensive liver, primarily CYP1A2 and CYP3A4-mediated |
| CYP (metabolised by) | CYP1A2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 80% in urine, 4% in feces |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
