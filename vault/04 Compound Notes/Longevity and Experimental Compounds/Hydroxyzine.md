---
type: compound
schema-version: 2
compound-id: hydroxyzine-compound
name: Hydroxyzine
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
  value: 20.0
  value-max: null
  unit: h
  notes: 'Adults: 20.0 hours; Elderly: 29.3 hours; Children: 7.1 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Not known
bioavailability:
  value: null
  value-max: null
  notes: Not known
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver by CYP3A4 and CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Hydroxyzine
  url: https://en.wikipedia.org/w/index.php?title=Hydroxyzine&oldid=1373263093
  revision: 1373263093
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Hydroxyzine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxyzine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

Sedating first-generation antihistamine used for anxiety and pruritus; anticholinergic burden and QT prolongation make chronic sleep use unattractive.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxyzine*](https://en.wikipedia.org/w/index.php?title=Hydroxyzine&oldid=1373263093) (revision 1373263093, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | Adults: 20.0 hours; Elderly: 29.3 hours; Children: 7.1 hours |
| Protein binding | - | Not known |
| Bioavailability | - | Not known |
| Metabolism | hepatic | Liver by CYP3A4 and CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Cetirizine, others |
| Excretion | - | Urine, feces |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
