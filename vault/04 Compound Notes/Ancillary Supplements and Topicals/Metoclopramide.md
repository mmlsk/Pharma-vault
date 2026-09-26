---
type: compound
schema-version: 2
compound-id: metoclopramide-compound
name: Metoclopramide
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
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5–6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 15.0
  value-max: null
  notes: 80 ± 15% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 70–85%; Feces: 2%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Metoclopramide
  url: https://en.wikipedia.org/w/index.php?title=Metoclopramide&oldid=1345658309
  revision: 1345658309
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Metoclopramide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metoclopramide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Dopamine-antagonist antinausea/prokinetic drug; a well-documented side effect is raising prolactin, the opposite of what dopamine agonists like cabergoline do -- a real illustration of the same pathway working in both directions.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metoclopramide*](https://en.wikipedia.org/w/index.php?title=Metoclopramide&oldid=1345658309) (revision 1345658309, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5–6 hours |
| Bioavailability | 15 % | 80 ± 15% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine: 70–85%; Feces: 2% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
