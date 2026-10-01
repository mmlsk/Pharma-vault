---
type: compound
schema-version: 2
compound-id: drospirenone-compound
name: Drospirenone
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
chembl-id: CHEMBL1509
chembl-max-phase: 4
half-life:
  value: 25.0
  value-max: 33.0
  unit: h
  notes: 25–33 hours
protein-binding:
  value: 95.0
  value-max: 97.0
  unit: percent
  notes: 95–97% (to albumin)
bioavailability:
  value: 66.0
  value-max: 85.0
  notes: 66–85%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP450-independent (reduction, sulfation, and cleavage of lactone ring), some CYP3A4 contribution)
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
  title: Drospirenone
  url: https://en.wikipedia.org/w/index.php?title=Drospirenone&oldid=1363293250
  revision: 1363293250
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1509
  pref-name: DROSPIRENONE
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03AC10
  targets:
  - id: CHEMBL1994
    name: Mineralocorticoid receptor
    action: ANTAGONIST
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 366.5
    mw-freebase: 366.5
    alogp: 4.31
    psa: 43.37
    hba: 3
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C24H30O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: db32bc55-f295-4d87-9dbb-0a2f45573dcf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=db32bc55-f295-4d87-9dbb-0a2f45573dcf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Drospirenone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `drospirenone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1509](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1509/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1509).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **ATC G03AC10:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Progestogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 366.5 | 4.31 | 43.37 | 0/3 | 0 | C24H30O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Mineralocorticoid receptor (CHEMBL1994)|Mineralocorticoid receptor]] - antagonist · SINGLE PROTEIN
- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Drospirenone*](https://en.wikipedia.org/w/index.php?title=Drospirenone&oldid=1363293250) (revision 1363293250, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25–33 h | 25–33 hours |
| Protein binding | 95–97 % | 95–97% (to albumin) |
| Bioavailability | 66–85 % | 66–85% |
| Metabolism | hepatic | Liver (mostly CYP450-independent (reduction, sulfation, and cleavage of lactone ring), some CYP3A4 contribution) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Drospirenone acid; • 4,5-Dihydrodrospirenone 3-sulfate |
| Excretion | - | Urine, feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set db32bc55…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=db32bc55-f295-4d87-9dbb-0a2f45573dcf), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 30)
> - protein-binding: consistent (label values: 95, 97)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Apararenone]] (Mineralocorticoid receptor), [[Asoprisnil]] (Progesterone receptor), [[Balcinrenone]] (Mineralocorticoid receptor), [[Canrenone]] (Mineralocorticoid receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Desoxycorticosterone Acetate]] (Mineralocorticoid receptor), [[Desoxycorticosterone Pivalate]] (Mineralocorticoid receptor), [[Dydrogesterone]] (Progesterone receptor), [[Eplerenone]] (Mineralocorticoid receptor)
- **Same ATC subgroup:** [[Desogestrel]], [[Etonogestrel]], [[Levonorgestrel]], [[Medroxyprogesterone Acetate]], [[Megestrol Acetate]], [[Norethindrone]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
