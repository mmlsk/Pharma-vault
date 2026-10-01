---
type: compound
schema-version: 2
compound-id: treprostinil-compound
name: Treprostinil
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
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.04
  notes: Urine (79% of administered dose is excreted as 4% unchanged drug and 64% as identified metabolites); feces (13%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Substantially metabolized by the liver
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Treprostinil
  url: https://en.wikipedia.org/w/index.php?title=Treprostinil&oldid=1329070006
  revision: 1329070006
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6c80bb38-e8db-4138-9f0d-dbbf9c673185
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6c80bb38-e8db-4138-9f0d-dbbf9c673185
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Trepulmix
  ema-number: EMEA/H/C/005207
  url: https://www.ema.europa.eu/en/documents/product-information/trepulmix-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Treprostinil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `treprostinil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Prostacyclin analogue stable enough for subcutaneous, inhaled and oral delivery, unlike epoprostenol.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Treprostinil*](https://en.wikipedia.org/w/index.php?title=Treprostinil&oldid=1329070006) (revision 1329070006, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Substantially metabolized by the liver |
| Excretion | - · fe 0.04 | Urine (79% of administered dose is excreted as 4% unchanged drug and 64% as identified metabolites); feces (13%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6c80bb38…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6c80bb38-e8db-4138-9f0d-dbbf9c673185), label version 20260702. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Trepulmix*](https://www.ema.europa.eu/en/documents/product-information/trepulmix-epar-product-information_en.pdf) (EMEA/H/C/005207). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1.32, 1.42, 2.93, 4.61, 6, 72)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
