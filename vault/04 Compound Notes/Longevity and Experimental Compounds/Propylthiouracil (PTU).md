---
type: compound
schema-version: 2
compound-id: propylthiouracil-compound
name: Propylthiouracil (PTU)
aliases:
- Propylthiouracil
- PTU
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Thyroid peroxidase inhibitor; Type I iodothyronine deiodinase (Type-I 5'-deiodinase) (DIOI) (Type 1 DI) (5DI) inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1518
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%-95%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: '?'
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: '?'
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Propylthiouracil
  url: https://en.wikipedia.org/w/index.php?title=Propylthiouracil&oldid=1367461604
  revision: 1367461604
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1518
  pref-name: PROPYLTHIOURACIL
  molecule-type: Small molecule
  first-approval: 1947
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H03BA02
  targets:
  - id: CHEMBL1839
    name: Thyroid peroxidase
    action: INHIBITOR
  - id: CHEMBL2019
    name: Type I iodothyronine deiodinase
    action: INHIBITOR
  properties:
    full-mwt: 170.24
    mw-freebase: 170.24
    alogp: 1.38
    psa: 48.65
    hba: 2
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.66
    full-molformula: C7H10N2OS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: d819e532-09ac-434a-84a6-636c4204c7aa
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d819e532-09ac-434a-84a6-636c4204c7aa
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Propylthiouracil (PTU)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `propylthiouracil-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Propylthiouracil, PTU
- **ChEMBL:** [CHEMBL1518](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1518/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Older thionamide that also blocks peripheral T4 to T3 conversion; now reserved because of hepatotoxicity.

## Mechanism

Thyroid peroxidase inhibitor; Type I iodothyronine deiodinase (Type-I 5'-deiodinase) (DIOI) (Type 1 DI) (5DI) inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1947
- **Flags:** black-box warning
- **ATC H03BA02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTITHYROID PREPARATIONS › Thiouracils

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 170.24 | 1.38 | 48.65 | 2/2 | 0 | C7H10N2OS |

**Targets (ChEMBL curated mechanisms):**

- [[Thyroid peroxidase (CHEMBL1839)|Thyroid peroxidase]] - inhibitor · SINGLE PROTEIN
- [[Type I iodothyronine deiodinase (CHEMBL2019)|Type I iodothyronine deiodinase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Propylthiouracil*](https://en.wikipedia.org/w/index.php?title=Propylthiouracil&oldid=1367461604) (revision 1367461604, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Bioavailability | 80 % | 80%-95% |
| Metabolism | - | ? |
| Excretion | - | ? |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set d819e532…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d819e532-09ac-434a-84a6-636c4204c7aa), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Methimazole (Tapazole)]] (Thyroid peroxidase)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
