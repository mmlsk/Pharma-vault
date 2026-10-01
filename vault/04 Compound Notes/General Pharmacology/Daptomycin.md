---
type: compound
schema-version: 2
compound-id: daptomycin-compound
name: Daptomycin
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value-max: 11.0
  unit: h
  notes: 7–11 hours (up to 28 hours in renal impairment)
protein-binding:
  value: 90.0
  value-max: 95.0
  unit: percent
  notes: 90–95%
bioavailability:
  value: null
  value-max: null
  notes: n/a
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (78%; primarily as unchanged drug); faeces (5.7%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- pk-fda-discrepant
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Daptomycin
  url: https://en.wikipedia.org/w/index.php?title=Daptomycin&oldid=1369612979
  revision: 1369612979
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: discrepant
  set-id: e6fef9de-e357-4fa3-8839-f483edf1b4d0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6fef9de-e357-4fa3-8839-f483edf1b4d0
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Cubicin
  ema-number: EMEA/H/C/000637
  url: https://www.ema.europa.eu/en/documents/product-information/cubicin-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/cubicin-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Daptomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `daptomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Cyclic lipopeptide that is rapidly bactericidal against gram-positive organisms but inactivated by pulmonary surfactant, so it can never be used for pneumonia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Daptomycin*](https://en.wikipedia.org/w/index.php?title=Daptomycin&oldid=1369612979) (revision 1369612979, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–11 h | 7–11 hours (up to 28 hours in renal impairment) |
| Protein binding | 90–95 % | 90–95% |
| Bioavailability | - | n/a |
| Excretion | mainly urinary | Kidney (78%; primarily as unchanged drug); faeces (5.7%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set e6fef9de…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e6fef9de-e357-4fa3-8839-f483edf1b4d0), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 0, 24)
> - protein-binding: consistent (label values: 84, 86, 88)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Cubicin*](https://www.ema.europa.eu/en/documents/product-information/cubicin-epar-product-information_en.pdf) (EMEA/H/C/000637) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/cubicin-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 0, 0.5, 1, 24)
> - protein-binding: consistent (SmPC values: 90)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
