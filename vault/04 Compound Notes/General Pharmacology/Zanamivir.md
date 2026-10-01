---
type: compound
schema-version: 2
compound-id: zanamivir-compound
name: Zanamivir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Neuraminidase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL222813
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 5.1
  unit: h
  notes: 2.5–5.1 hours
protein-binding:
  value: 10.0
  value-max: null
  unit: percent
  notes: <10%
bioavailability:
  value: 2.0
  value-max: null
  notes: 2% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Negligible
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Zanamivir
  url: https://en.wikipedia.org/w/index.php?title=Zanamivir&oldid=1363171383
  revision: 1363171383
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL222813
  pref-name: ZANAMIVIR
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AH01
  targets:
  - id: CHEMBL2051
    name: Neuraminidase
    action: INHIBITOR
  - id: CHEMBL3377
    name: Neuraminidase
    action: INHIBITOR
  properties:
    full-mwt: 332.31
    mw-freebase: 332.31
    alogp: -3.58
    psa: 198.22
    hba: 7
    hbd: 8
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.18
    full-molformula: C12H20N4O7
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: b4e68930-4e6d-4d27-b1f0-abf60d12e28d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b4e68930-4e6d-4d27-b1f0-abf60d12e28d
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Dectova
  ema-number: EMEA/H/C/004102
  url: https://www.ema.europa.eu/en/documents/product-information/dectova-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zanamivir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zanamivir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL222813](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL222813/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhaled neuraminidase inhibitor with negligible oral bioavailability, delivered straight to the airway epithelium instead.

## Mechanism

Neuraminidase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **ATC J05AH01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Neuraminidase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 332.31 | -3.58 | 198.22 | 8/7 | 1 | C12H20N4O7 |

**Targets (ChEMBL curated mechanisms):**

- [[Neuraminidase (CHEMBL2051)|Neuraminidase]] - inhibitor · SINGLE PROTEIN
- [[Neuraminidase (CHEMBL3377)|Neuraminidase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zanamivir*](https://en.wikipedia.org/w/index.php?title=Zanamivir&oldid=1363171383) (revision 1363171383, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–5.1 h | 2.5–5.1 hours |
| Protein binding | 10 % | <10% |
| Bioavailability | 2 % | 2% (oral) |
| Metabolism | - | Negligible |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set b4e68930…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=b4e68930-4e6d-4d27-b1f0-abf60d12e28d), label version 20260723. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 10)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Dectova*](https://www.ema.europa.eu/en/documents/product-information/dectova-epar-product-information_en.pdf) (EMEA/H/C/004102). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2, 3, 12, 20)
> - protein-binding: consistent (SmPC values: 10)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Oseltamivir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
