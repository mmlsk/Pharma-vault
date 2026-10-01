---
type: compound
schema-version: 2
compound-id: levonorgestrel-compound
name: Levonorgestrel
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1389
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: 32.0
  unit: h
  notes: 24–32 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98% (50% to albumin, 48% to SHBG)
bioavailability:
  value: 95.0
  value-max: null
  notes: 95% (range 85–100%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 20–67%; Feces: 21–34%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (reduction, hydroxylation, conjugation)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Levonorgestrel
  url: https://en.wikipedia.org/w/index.php?title=Levonorgestrel&oldid=1352426285
  revision: 1352426285
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1389
  pref-name: LEVONORGESTREL
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03AC03
  - G03AD01
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 312.45
    mw-freebase: 312.45
    alogp: 3.88
    psa: 37.3
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C21H28O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Levonorgestrel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levonorgestrel-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1389](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1389/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1389).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC G03AC03:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Progestogens
- **ATC G03AD01:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Emergency contraceptives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 312.45 | 3.88 | 37.3 | 1/2 | 0 | C21H28O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levonorgestrel*](https://en.wikipedia.org/w/index.php?title=Levonorgestrel&oldid=1352426285) (revision 1352426285, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24–32 h | 24–32 hours |
| Protein binding | 98 % | 98% (50% to albumin, 48% to SHBG) |
| Bioavailability | 95 % | 95% (range 85–100%) |
| Metabolism | hepatic | Liver (reduction, hydroxylation, conjugation) |
| Metabolites | - | • 5α-Dihydro-LNG |
| Excretion | - | Urine: 20–67%; Feces: 21–34% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Medroxyprogesterone Acetate]] (Progesterone receptor)
- **Same ATC subgroup:** [[Desogestrel]], [[Drospirenone]], [[Etonogestrel]], [[Medroxyprogesterone Acetate]], [[Megestrol Acetate]], [[Norethindrone]], [[Ulipristal]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
