---
type: compound
schema-version: 2
compound-id: medroxyprogesterone-acetate-compound
name: Medroxyprogesterone Acetate
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
chembl-id: CHEMBL717
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 33.0
  unit: h
  notes: 'By mouth: 12–33 hours; IM (aq. susp.): ~50 days; SC (aq. susp.): ~40 days'
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 88% (to albumin)
bioavailability:
  value: 100.0
  value-max: null
  notes: 'By mouth: ~100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (as conjugates)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (hydroxylation (CYP3A4), reduction, conjugation)
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Medroxyprogesterone acetate
  url: https://en.wikipedia.org/w/index.php?title=Medroxyprogesterone_acetate&oldid=1373552256
  revision: 1373552256
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL717
  pref-name: MEDROXYPROGESTERONE ACETATE
  molecule-type: Small molecule
  first-approval: 1959
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G03AC06
  - G03DA02
  - L02AB02
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 386.53
    mw-freebase: 386.53
    alogp: 4.66
    psa: 60.44
    hba: 4
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C24H34O4
pk-verification:
  source: fda-label
  status: discrepant
  set-id: a0a92717-c1cb-40eb-a95a-1c5dfd32cfc0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0a92717-c1cb-40eb-a95a-1c5dfd32cfc0
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Medroxyprogesterone Acetate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `medroxyprogesterone-acetate-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL717](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL717/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL717).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1959
- **Flags:** black-box warning
- **ATC G03AC06:** GENITO URINARY SYSTEM AND SEX HORMONES › HORMONAL CONTRACEPTIVES FOR SYSTEMIC USE › Progestogens
- **ATC G03DA02:** GENITO URINARY SYSTEM AND SEX HORMONES › PROGESTOGENS › Pregnen (4) derivatives
- **ATC L02AB02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONES AND RELATED AGENTS › Progestogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 386.53 | 4.66 | 60.44 | 0/4 | 0 | C24H34O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Medroxyprogesterone acetate*](https://en.wikipedia.org/w/index.php?title=Medroxyprogesterone_acetate&oldid=1373552256) (revision 1373552256, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–33 h | By mouth: 12–33 hours; IM (aq. susp.): ~50 days; SC (aq. susp.): ~40 days |
| Protein binding | 88 % | 88% (to albumin) |
| Bioavailability | 100 % | By mouth: ~100% |
| Metabolism | hepatic | Liver (hydroxylation (CYP3A4), reduction, conjugation) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (as conjugates) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set a0a92717…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a0a92717-c1cb-40eb-a95a-1c5dfd32cfc0), label version 20260904. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 1200)
> - protein-binding: consistent (label values: 86)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor)
- **Same ATC subgroup:** [[Desogestrel]], [[Drospirenone]], [[Etonogestrel]], [[Hydroxyprogesterone Caproate]], [[Levonorgestrel]], [[Megestrol Acetate]], [[Norethindrone]], [[Progesterone (micronised)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
