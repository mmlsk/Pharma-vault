---
type: compound
schema-version: 2
compound-id: chlorotrianisene-compound
name: Chlorotrianisene
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor beta modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200761
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Mono-O-demethylation (liver CYP450)
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
  title: Chlorotrianisene
  url: https://en.wikipedia.org/w/index.php?title=Chlorotrianisene&oldid=1367639948
  revision: 1367639948
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1200761
  pref-name: CHLOROTRIANISENE
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03CA06
  targets:
  - id: CHEMBL242
    name: Estrogen receptor beta
    action: MODULATOR
  properties:
    full-mwt: 380.87
    mw-freebase: 380.87
    alogp: 5.87
    psa: 27.69
    hba: 3
    hbd: 0
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.5
    full-molformula: C23H21ClO3
---

# Chlorotrianisene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorotrianisene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200761](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200761/) · max phase 4 · id via source catalogue

## Source summary

Estrogen receptor beta modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL1200761).

## Mechanism

Estrogen receptor beta modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC G03CA06:** GENITO URINARY SYSTEM AND SEX HORMONES › ESTROGENS › Natural and semisynthetic estrogens, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 380.87 | 5.87 | 27.69 | 0/3 | 1 | C23H21ClO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor beta (CHEMBL242)|Estrogen receptor beta]] - modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlorotrianisene*](https://en.wikipedia.org/w/index.php?title=Chlorotrianisene&oldid=1367639948) (revision 1367639948, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Metabolism | hepatic | Mono-O-demethylation (liver CYP450) |
| Metabolites | - | Desmethylchlorotrianisene |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mf101]] (Estrogen receptor beta)
- **Same ATC subgroup:** [[Estradiol]], [[Estriol]], [[Estrogens, Conjugated]], [[Estrone]], [[Ethinyl Estradiol]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
