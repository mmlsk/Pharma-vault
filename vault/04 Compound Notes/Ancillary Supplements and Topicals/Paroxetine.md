---
type: compound
schema-version: 2
compound-id: paroxetine-compound
name: Paroxetine
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
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 93.0
  value-max: 95.0
  unit: percent
  notes: 93–95%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.02
  notes: Kidney (64%; 2% unchanged and 62% as metabolites), faecal (36%; <1% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive, liver (mostly CYP2D6-mediated)
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
  title: Paroxetine
  url: https://en.wikipedia.org/w/index.php?title=Paroxetine&oldid=1373241436
  revision: 1373241436
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Paroxetine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `paroxetine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Paroxetine*](https://en.wikipedia.org/w/index.php?title=Paroxetine&oldid=1373241436) (revision 1373241436, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 93–95 % | 93–95% |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Extensive, liver (mostly CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.02 | Kidney (64%; 2% unchanged and 62% as metabolites), faecal (36%; <1% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
