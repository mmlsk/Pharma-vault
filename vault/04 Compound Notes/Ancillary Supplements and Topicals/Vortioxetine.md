---
type: compound
schema-version: 2
compound-id: vortioxetine-compound
name: Vortioxetine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value: 66.0
  value-max: null
  unit: h
  notes: 66 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98–99%
bioavailability:
  value: 75.0
  value-max: null
  notes: 75% (peak at 7–11 hours)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 59% in urine, 26% in feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, primarily CYP2D6-mediated oxidation
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Vortioxetine
  url: https://en.wikipedia.org/w/index.php?title=Vortioxetine&oldid=1365717923
  revision: 1365717923
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vortioxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vortioxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vortioxetine*](https://en.wikipedia.org/w/index.php?title=Vortioxetine&oldid=1365717923) (revision 1365717923, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 66 h | 66 hours |
| Protein binding | 98–99 % | 98–99% |
| Bioavailability | 75 % | 75% (peak at 7–11 hours) |
| Metabolism | hepatic | Liver, primarily CYP2D6-mediated oxidation |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | 59% in urine, 26% in feces |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
