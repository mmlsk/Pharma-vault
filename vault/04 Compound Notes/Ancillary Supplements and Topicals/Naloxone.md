---
type: compound
schema-version: 2
compound-id: naloxone-compound
name: Naloxone
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
  value: 1.0
  value-max: 1.5
  unit: h
  notes: 1–1.5 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 2.0
  value-max: null
  notes: 2% (by mouth, 90% absorption but high first-pass metabolism); 43–54% (intranasal); 98% (intramuscular, subcutaneous)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, bile
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
  title: Naloxone
  url: https://en.wikipedia.org/w/index.php?title=Naloxone&oldid=1375186586
  revision: 1375186586
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Naloxone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naloxone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Short-acting opioid antagonist for overdose reversal; its half-life is shorter than most opioids, so re-narcotisation is a real risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naloxone*](https://en.wikipedia.org/w/index.php?title=Naloxone&oldid=1375186586) (revision 1375186586, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–1.5 h | 1–1.5 h |
| Bioavailability | 2 % | 2% (by mouth, 90% absorption but high first-pass metabolism); 43–54% (intranasal); 98% (intramuscular, subcutaneous) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine, bile |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
