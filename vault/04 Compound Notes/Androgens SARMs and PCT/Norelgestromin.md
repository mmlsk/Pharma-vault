---
type: compound
schema-version: 2
compound-id: norelgestromin-compound
name: Norelgestromin
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
chembl-id: CHEMBL1200807
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 37.0
  unit: h
  notes: 17–37 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99% (to albumin but not to SHBG)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (oxime to ketone reaction, hydroxylation, conjugation)
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
  title: Norelgestromin
  url: https://en.wikipedia.org/w/index.php?title=Norelgestromin&oldid=1374433236
  revision: 1374433236
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1200807
  pref-name: NORELGESTROMIN
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 327.47
    mw-freebase: 327.47
    alogp: 4.14
    psa: 52.82
    hba: 3
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C21H29NO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Norelgestromin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norelgestromin-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200807](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200807/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1200807).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 327.47 | 4.14 | 52.82 | 2/3 | 0 | C21H29NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Norelgestromin*](https://en.wikipedia.org/w/index.php?title=Norelgestromin&oldid=1374433236) (revision 1374433236, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–37 h | 17–37 hours |
| Protein binding | 99 % | 99% (to albumin but not to SHBG) |
| Metabolism | hepatic | Liver (oxime to ketone reaction, hydroxylation, conjugation) |
| Metabolites | - | • Levonorgestrel |
| Excretion | - | Urine and feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
