---
type: compound
schema-version: 2
compound-id: prednisone-compound
name: Prednisone
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
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3 to 4 hours in adults. 1 to 2 hours in children
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 70.0
  value-max: null
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: prednisolone (liver)
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
  title: Prednisone
  url: https://en.wikipedia.org/w/index.php?title=Prednisone&oldid=1347320163
  revision: 1347320163
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Prednisone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `prednisone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Oral glucocorticoid prodrug converted to prednisolone in the liver; the workhorse anti-inflammatory steroid.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Prednisone*](https://en.wikipedia.org/w/index.php?title=Prednisone&oldid=1347320163) (revision 1347320163, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3 to 4 hours in adults. 1 to 2 hours in children |
| Bioavailability | 70 % | 70% |
| Metabolism | hepatic | prednisolone (liver) |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
