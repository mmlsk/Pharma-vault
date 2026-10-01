---
type: compound
schema-version: 2
compound-id: maraviroc-compound
name: Maraviroc
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
chembl-id: CHEMBL1201187
chembl-max-phase: null
half-life:
  value: 14.0
  value-max: 18.0
  unit: h
  notes: 14–18 hours (mean 16 hours)
protein-binding:
  value: 76.0
  value-max: null
  unit: percent
  notes: ~76%
bioavailability:
  value: 23.0
  value-max: null
  notes: 23%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (76%), urine (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP, predominantly CYP3A)
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
- chembl-profile
- identity-stereo-check
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Maraviroc
  url: https://en.wikipedia.org/w/index.php?title=Maraviroc&oldid=1329260707
  revision: 1329260707
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201187
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 513.68
    mw-freebase: 513.68
    alogp: 5.95
    psa: 63.05
    hba: 5
    hbd: 1
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.47
    full-molformula: C29H41F2N5O
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5c4a1da5-a8e1-4038-970d-fb15c189c35e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5c4a1da5-a8e1-4038-970d-fb15c189c35e
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Celsentri
  ema-number: EMEA/H/C/000811
  url: https://www.ema.europa.eu/en/documents/product-information/celsentri-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/celsentri-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Maraviroc

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `maraviroc-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201187](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201187/) · max phase n/a · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Inhibits HIV integrase strand transfer as a component of combination antiretroviral therapy.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 513.68 | 5.95 | 63.05 | 1/5 | 2 | C29H41F2N5O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Maraviroc*](https://en.wikipedia.org/w/index.php?title=Maraviroc&oldid=1329260707) (revision 1329260707, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–18 h | 14–18 hours (mean 16 hours) |
| Protein binding | 76 % | ~76% |
| Bioavailability | 23 % | 23% |
| Metabolism | hepatic | Liver (CYP, predominantly CYP3A) |
| Metabolites | - | Secondary amine formed by N-dealkylation (major) |
| Excretion | mainly non-renal | Feces (76%), urine (20%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5c4a1da5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5c4a1da5-a8e1-4038-970d-fb15c189c35e), label version 20260708. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 76)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Celsentri*](https://www.ema.europa.eu/en/documents/product-information/celsentri-epar-product-information_en.pdf) (EMEA/H/C/000811) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/celsentri-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 13.2)
> - protein-binding: consistent (SmPC values: 76)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
