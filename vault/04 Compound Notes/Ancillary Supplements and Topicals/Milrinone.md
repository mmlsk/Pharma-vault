---
type: compound
schema-version: 2
compound-id: milrinone-compound
name: Milrinone
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
  value: 2.3
  value-max: null
  unit: h
  notes: 2.3 hours (mean, in CHF)
protein-binding:
  value: 70.0
  value-max: 80.0
  unit: percent
  notes: 70 to 80%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.85
  notes: Kidney (85% as unchanged drug) within 24 hours
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (12%)
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
  title: Milrinone
  url: https://en.wikipedia.org/w/index.php?title=Milrinone&oldid=1329359957
  revision: 1329359957
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Milrinone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `milrinone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Selective PDE3 inhibitor used intravenously as an inodilator in acute decompensated heart failure. Raises cardiac cAMP; the same mechanism drives its arrhythmia risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Milrinone*](https://en.wikipedia.org/w/index.php?title=Milrinone&oldid=1329359957) (revision 1329359957, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.3 h | 2.3 hours (mean, in CHF) |
| Protein binding | 70–80 % | 70 to 80% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (12%) |
| Excretion | mainly urinary · fe 0.85 | Kidney (85% as unchanged drug) within 24 hours |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
