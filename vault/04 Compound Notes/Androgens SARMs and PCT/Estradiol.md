---
type: compound
schema-version: 2
compound-id: estradiol-compound
name: Estradiol
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL135
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
  primary-route: null
  extraction-ratio: null
  notes: null
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
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- chembl-profile
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL135
  pref-name: ESTRADIOL
  molecule-type: Small molecule
  first-approval: 1975
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G03CA03
  targets:
  - id: CHEMBL206
    name: Estrogen receptor
    action: AGONIST
  properties:
    full-mwt: 272.39
    mw-freebase: 272.39
    alogp: 3.61
    psa: 40.46
    hba: 2
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C18H24O2
  identity-check: structure-confirmed
---

# Estradiol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `estradiol-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL135](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL135/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

The primary and most potent naturally occurring estrogen; used clinically in HRT, and the downstream hormone that aromatase produces from testosterone -- the target that AIs like anastrozole work to suppress.

## Mechanism

Estrogen receptor alpha agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1975
- **Flags:** black-box warning
- **ATC G03CA03:** GENITO URINARY SYSTEM AND SEX HORMONES › ESTROGENS › Natural and semisynthetic estrogens, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 272.39 | 3.61 | 40.46 | 2/2 | 0 | C18H24O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL206)|Estrogen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dienestrol]] (Estrogen receptor), [[Diethylstilbestrol]] (Estrogen receptor), [[Elacestrant]] (Estrogen receptor), [[Enclomiphene]] (Estrogen receptor), [[Estradiol Acetate]] (Estrogen receptor), [[Estradiol Cypionate]] (Estrogen receptor), [[Estradiol Valerate]] (Estrogen receptor), [[Estrone]] (Estrogen receptor), [[Ethinyl Estradiol]] (Estrogen receptor), [[Fulvestrant (Faslodex)]] (Estrogen receptor), [[Giredestrant]] (Estrogen receptor), [[Mestranol]] (Estrogen receptor)
- **Same ATC subgroup:** [[Chlorotrianisene]], [[Estriol]], [[Estrogens, Conjugated]], [[Estrone]], [[Ethinyl Estradiol]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
