---
type: compound
schema-version: 2
compound-id: warfarin-compound
name: Warfarin (Coumadin)
aliases:
- Warfarin
- Coumadin
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
  value-max: null
  unit: d
  notes: 7 days (active half-life is 20-60 hours)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 79.0
  value-max: 100.0
  notes: 79–100% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (92%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2C9, 2C19, 2C8, 2C18, 1A2 and 3A4'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Warfarin
  url: https://en.wikipedia.org/w/index.php?title=Warfarin&oldid=1368670593
  revision: 1368670593
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Warfarin (Coumadin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `warfarin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Warfarin, Coumadin

## Source summary

Vitamin K antagonist anticoagulant with a narrow therapeutic window, extensive food/drug interactions, and INR monitoring requirements.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Warfarin*](https://en.wikipedia.org/w/index.php?title=Warfarin&oldid=1368670593) (revision 1368670593, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 d | 7 days (active half-life is 20-60 hours) |
| Protein binding | 99 % | 99% |
| Bioavailability | 79–100 % | 79–100% (by mouth) |
| Metabolism | hepatic | Liver: CYP2C9, 2C19, 2C8, 2C18, 1A2 and 3A4 |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (92%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
