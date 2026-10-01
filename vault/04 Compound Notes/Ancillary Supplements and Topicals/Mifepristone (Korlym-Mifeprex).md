---
type: compound
schema-version: 2
compound-id: mifepristone-compound
name: Mifepristone (Korlym/Mifeprex)
aliases:
- Mifepristone
- Korlym
- Mifeprex
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
  value: null
  unit: null
  notes: null
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 69.0
  value-max: null
  notes: 69%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 83%; urine: 9%'
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Mifepristone
  url: https://en.wikipedia.org/w/index.php?title=Mifepristone&oldid=1375990318
  revision: 1375990318
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: b63fad9b-7f12-4400-9019-b0586054e534
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b63fad9b-7f12-4400-9019-b0586054e534
  checked: '2026-10-01'
  fields:
    protein-binding: consistent
---

# Mifepristone (Korlym/Mifeprex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mifepristone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Mifepristone, Korlym, Mifeprex

## Source summary

Glucocorticoid and progesterone receptor antagonist; blocks cortisol action rather than cortisol synthesis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mifepristone*](https://en.wikipedia.org/w/index.php?title=Mifepristone&oldid=1375990318) (revision 1375990318, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 98 % | 98% |
| Bioavailability | 69 % | 69% |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Feces: 83%; urine: 9% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b63fad9b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b63fad9b-7f12-4400-9019-b0586054e534), label version 20260606. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - protein-binding: consistent (label values: 98)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
