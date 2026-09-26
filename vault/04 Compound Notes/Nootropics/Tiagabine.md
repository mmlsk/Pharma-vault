---
type: compound
schema-version: 2
compound-id: tiagabine-compound
name: Tiagabine
aliases: []
cluster: Nootropics
group: neuropsych
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
  value: 4.5
  value-max: 9.0
  unit: h
  notes: '4.5–9.0 hours; Enzyme-induced patients: 2–3 hours'
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.03
  notes: 'Feces: 63%; Urine: 25% (<3% unchanged)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, possibly other CYP450 enzymes, glucuronidation
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Tiagabine
  url: https://en.wikipedia.org/w/index.php?title=Tiagabine&oldid=1368825659
  revision: 1368825659
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tiagabine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tiagabine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

GABA reuptake inhibitor for focal epilepsy, notable for provoking non-convulsive status in patients without epilepsy.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tiagabine*](https://en.wikipedia.org/w/index.php?title=Tiagabine&oldid=1368825659) (revision 1368825659, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–9 h | 4.5–9.0 hours; Enzyme-induced patients: 2–3 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | CYP3A4, possibly other CYP450 enzymes, glucuronidation |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-Oxotiagabine, others |
| Excretion | mainly non-renal · fe 0.03 | Feces: 63%; Urine: 25% (<3% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
