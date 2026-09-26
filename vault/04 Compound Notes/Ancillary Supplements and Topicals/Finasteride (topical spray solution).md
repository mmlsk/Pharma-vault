---
type: compound
schema-version: 2
compound-id: finasteride-topical-compound
name: Finasteride (topical spray solution)
aliases:
- Finasteride
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
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 'Adults: 5–6 hours; Elderly: >8 hours'
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 65.0
  value-max: null
  notes: 65%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 57%; Urine: 40%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, ALDH)
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
  title: Finasteride
  url: https://en.wikipedia.org/w/index.php?title=Finasteride&oldid=1374991546
  revision: 1374991546
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Finasteride (topical spray solution)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `finasteride-topical-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Finasteride

## Source summary

Topical 5-alpha reductase inhibitor formulated to act on follicles with far lower plasma exposure than the oral tablet.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Finasteride*](https://en.wikipedia.org/w/index.php?title=Finasteride&oldid=1374991546) (revision 1374991546, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | Adults: 5–6 hours; Elderly: >8 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 65 % | 65% |
| Metabolism | hepatic | Liver (CYP3A4, ALDH) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces: 57%; Urine: 40% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
