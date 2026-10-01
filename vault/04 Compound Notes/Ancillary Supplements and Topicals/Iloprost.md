---
type: compound
schema-version: 2
compound-id: iloprost-compound
name: Iloprost
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
  value: 20.0
  value-max: 30.0
  unit: min
  notes: 20–30 minutes
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%
bioavailability:
  value: null
  value-max: null
  notes: Not determined
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (68%) and fecal (12%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Via β-oxidation to inactive tetranor-iloprost
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
  title: Iloprost
  url: https://en.wikipedia.org/w/index.php?title=Iloprost&oldid=1329257849
  revision: 1329257849
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 34036fc0-6832-d066-e063-6394a90a18a4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Ventavis
  ema-number: EMEA/H/C/000474
  url: https://www.ema.europa.eu/en/documents/product-information/ventavis-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ventavis-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Iloprost

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `iloprost-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Synthetic prostacyclin analogue, inhaled or intravenous, for pulmonary arterial hypertension.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Iloprost*](https://en.wikipedia.org/w/index.php?title=Iloprost&oldid=1329257849) (revision 1329257849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–30 min | 20–30 minutes |
| Protein binding | 60 % | 60% |
| Bioavailability | - | Not determined |
| Metabolism | hepatic | Via β-oxidation to inactive tetranor-iloprost |
| Excretion | mainly urinary | Kidney (68%) and fecal (12%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 34036fc0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4), label version 20260813. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.333, 0.5)
> - protein-binding: consistent (label values: 60)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ventavis*](https://www.ema.europa.eu/en/documents/product-information/ventavis-epar-product-information_en.pdf) (EMEA/H/C/000474) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ventavis-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.05, 0.083, 0.25, 0.417, 0.5, 2)
> - protein-binding: consistent (SmPC values: 60, 75)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
