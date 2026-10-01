---
type: compound
schema-version: 2
compound-id: norethindrone-compound
name: Norethindrone
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
chembl-id: CHEMBL1162
chembl-max-phase: 4
half-life:
  value: 5.2
  value-max: 12.8
  unit: h
  notes: 5.2–12.8 hours (mean 8.0 hours)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: '97%:; Albumin: 61%;; SHBG: 36%'
bioavailability:
  value: 47.0
  value-max: 73.0
  notes: 47–73% (mean 64%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mainly CYP3A4 (liver); also 5α-/5β-reductase, 3α-/3β-HSD, and aromatase
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
  title: Norethisterone
  url: https://en.wikipedia.org/w/index.php?title=Norethisterone&oldid=1373583252
  revision: 1373583252
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1162
  pref-name: NORETHINDRONE
  molecule-type: Small molecule
  first-approval: 1962
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G03AC01
  - G03DC02
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 298.43
    mw-freebase: 298.43
    alogp: 3.49
    psa: 37.3
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C20H26O2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 0d2f8fea-3675-40d2-afd9-9fcb148dbd4b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0d2f8fea-3675-40d2-afd9-9fcb148dbd4b
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Norethindrone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norethindrone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1162](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1162/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1162).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1962
- **Flags:** black-box warning
- **ATC G03AC01:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Progestogens
- **ATC G03DC02:** GENITO URINARY SYSTEM AND SEX HORMONES › PROGESTOGENS › Estren derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 298.43 | 3.49 | 37.3 | 1/2 | 0 | C20H26O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Norethisterone*](https://en.wikipedia.org/w/index.php?title=Norethisterone&oldid=1373583252) (revision 1373583252, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.2–12.8 h | 5.2–12.8 hours (mean 8.0 hours) |
| Protein binding | 97 % | 97%:; Albumin: 61%;; SHBG: 36% |
| Bioavailability | 47–73 % | 47–73% (mean 64%) |
| Metabolism | hepatic | Mainly CYP3A4 (liver); also 5α-/5β-reductase, 3α-/3β-HSD, and aromatase |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 0d2f8fea…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0d2f8fea-3675-40d2-afd9-9fcb148dbd4b), label version 20260131. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor)
- **Same ATC subgroup:** [[Desogestrel]], [[Drospirenone]], [[Ethynodiol Diacetate]], [[Etonogestrel]], [[Levonorgestrel]], [[Medroxyprogesterone Acetate]], [[Megestrol Acetate]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
