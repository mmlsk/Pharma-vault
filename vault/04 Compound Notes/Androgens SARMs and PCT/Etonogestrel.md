---
type: compound
schema-version: 2
compound-id: etonogestrel-compound
name: Etonogestrel
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
chembl-id: CHEMBL1531
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: 38.0
  unit: h
  notes: 21–38 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: ≥98% (66% to albumin, 32% to SHBG)
bioavailability:
  value: 100.0
  value-max: null
  notes: 'Implant: 100%; Vaginal ring: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (major), feces (minor)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Etonogestrel
  url: https://en.wikipedia.org/w/index.php?title=Etonogestrel&oldid=1372664488
  revision: 1372664488
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1531
  pref-name: ETONOGESTREL
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03AC08
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 324.46
    mw-freebase: 324.46
    alogp: 4.05
    psa: 37.3
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.58
    full-molformula: C22H28O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 487f8a62-e142-457c-97cc-2e398fde7594
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=487f8a62-e142-457c-97cc-2e398fde7594
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Etonogestrel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etonogestrel-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1531](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1531/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1531).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC G03AC08:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Progestogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 324.46 | 4.05 | 37.3 | 1/2 | 0 | C22H28O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etonogestrel*](https://en.wikipedia.org/w/index.php?title=Etonogestrel&oldid=1372664488) (revision 1372664488, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21–38 h | 21–38 hours |
| Protein binding | 98 % | ≥98% (66% to albumin, 32% to SHBG) |
| Bioavailability | 100 % | Implant: 100%; Vaginal ring: 100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine (major), feces (minor) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 487f8a62…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=487f8a62-e142-457c-97cc-2e398fde7594), label version 20260528. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 25)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor), [[Medroxyprogesterone Acetate]] (Progesterone receptor)
- **Same ATC subgroup:** [[Desogestrel]], [[Drospirenone]], [[Levonorgestrel]], [[Medroxyprogesterone Acetate]], [[Megestrol Acetate]], [[Norethindrone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
