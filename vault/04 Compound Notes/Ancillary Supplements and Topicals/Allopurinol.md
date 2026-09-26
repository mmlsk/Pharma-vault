---
type: compound
schema-version: 2
compound-id: allopurinol-compound
name: Allopurinol
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
  value: 2.0
  value-max: null
  unit: h
  notes: 2 h (oxipurinol 18–30 h)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Negligible
bioavailability:
  value: 20.0
  value-max: null
  notes: 78±20%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (80% oxipurinol, 10% allopurinol ribosides)
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
  title: Allopurinol
  url: https://en.wikipedia.org/w/index.php?title=Allopurinol&oldid=1356288153
  revision: 1356288153
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Allopurinol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `allopurinol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Xanthine oxidase inhibitor for gout; also a major interaction hazard with azathioprine.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Allopurinol*](https://en.wikipedia.org/w/index.php?title=Allopurinol&oldid=1356288153) (revision 1356288153, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 h (oxipurinol 18–30 h) |
| Protein binding | - | Negligible |
| Bioavailability | 20 % | 78±20% |
| Metabolism | hepatic | Liver (80% oxipurinol, 10% allopurinol ribosides) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
