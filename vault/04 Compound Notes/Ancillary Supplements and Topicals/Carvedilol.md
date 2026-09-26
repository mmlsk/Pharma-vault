---
type: compound
schema-version: 2
compound-id: carvedilol-compound
name: Carvedilol
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
  value: 7.0
  value-max: 10.0
  unit: h
  notes: 7–10 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 25.0
  value-max: 35.0
  notes: 25–35%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (16%), feces (60%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Carvedilol
  url: https://en.wikipedia.org/w/index.php?title=Carvedilol&oldid=1365729504
  revision: 1365729504
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Carvedilol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carvedilol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Non-selective alpha/beta blocker with antioxidant activity and the strongest heart-failure evidence of the class.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carvedilol*](https://en.wikipedia.org/w/index.php?title=Carvedilol&oldid=1365729504) (revision 1365729504, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–10 h | 7–10 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 25–35 % | 25–35% |
| Metabolism | hepatic | Liver (CYP2D6, CYP2C9) |
| CYP (metabolised by) | CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Urine (16%), feces (60%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
