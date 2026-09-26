---
type: compound
schema-version: 2
compound-id: losartan-compound
name: Losartan
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
  value: 1.5
  value-max: 2.0
  unit: h
  notes: 1.5–2 hours
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7% (primarily albumin)
bioavailability:
  value: 25.0
  value-max: 35.0
  notes: 25–35%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney 13–25%, bile duct 50–60%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Losartan
  url: https://en.wikipedia.org/w/index.php?title=Losartan&oldid=1361505549
  revision: 1361505549
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Losartan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `losartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

The reference ARB, with the largest hypertension outcome dataset in the class (LIFE).

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Losartan*](https://en.wikipedia.org/w/index.php?title=Losartan&oldid=1361505549) (revision 1361505549, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2 h | 1.5–2 hours |
| Protein binding | 99.7 % | 99.7% (primarily albumin) |
| Bioavailability | 25–35 % | 25–35% |
| Metabolism | hepatic | Liver (CYP2C9, CYP3A4) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney 13–25%, bile duct 50–60% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
