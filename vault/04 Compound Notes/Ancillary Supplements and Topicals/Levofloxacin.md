---
type: compound
schema-version: 2
compound-id: levofloxacin-compound
name: Levofloxacin
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
chembl-id: CHEMBL33
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 8.8
  unit: h
  notes: 6.0–8.8 hours
protein-binding:
  value: 24.0
  value-max: 38.0
  unit: percent
  notes: 24–38%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.87
  notes: 'Urine: 87% unchanged, <5% metabolites; Feces: <4%'
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (<5%)
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Levofloxacin
  url: https://en.wikipedia.org/w/index.php?title=Levofloxacin&oldid=1361375143
  revision: 1361375143
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL33
  pref-name: LEVOFLOXACIN ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 361.37
    mw-freebase: 361.37
    alogp: 1.54
    psa: 75.01
    hba: 6
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C18H20FN3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5a65b2bc-9edc-f193-e063-6394a90a0104
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Quinsair
  ema-number: EMEA/H/C/002789
  url: https://www.ema.europa.eu/en/documents/product-information/quinsair-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Levofloxacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levofloxacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL33](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL33/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits bacterial DNA gyrase or topoisomerase IV; tendon, neurologic, cardiac, and resistance risks limit indiscriminate use.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 361.37 | 1.54 | 75.01 | 1/6 | 0 | C18H20FN3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levofloxacin*](https://en.wikipedia.org/w/index.php?title=Levofloxacin&oldid=1361375143) (revision 1361375143, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8.8 h | 6.0–8.8 hours |
| Protein binding | 24–38 % | 24–38% |
| Bioavailability | 99 % | 99% |
| Metabolism | - | Minimal (<5%) |
| Metabolites | - | • Desmethyllevofloxacin; • Levofloxacin-N-oxide |
| Excretion | mainly urinary · fe 0.87 | Urine: 87% unchanged, <5% metabolites; Feces: <4% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5a65b2bc…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5a65b2bc-9edc-f193-e063-6394a90a0104), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6, 6.1, 7.5, 7.6, 8, 24)
> - protein-binding: consistent (label values: 24, 38)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Quinsair*](https://www.ema.europa.eu/en/documents/product-information/quinsair-epar-product-information_en.pdf) (EMEA/H/C/002789). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 6, 7, 8)
> - protein-binding: consistent (SmPC values: 30, 40)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
