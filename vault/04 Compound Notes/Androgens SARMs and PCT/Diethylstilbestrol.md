---
type: compound
schema-version: 2
compound-id: diethylstilbestrol-compound
name: Diethylstilbestrol
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
chembl-id: CHEMBL411
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: '>95%'
bioavailability:
  value: null
  value-max: null
  notes: Well-absorbed
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation, oxidation, glucuronidation
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
  title: Diethylstilbestrol
  url: https://en.wikipedia.org/w/index.php?title=Diethylstilbestrol&oldid=1371162065
  revision: 1371162065
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL411
  pref-name: DIETHYLSTILBESTROL
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G03CB02
  - G03CC05
  - L02AA01
  targets:
  - id: CHEMBL206
    name: Estrogen receptor
    action: AGONIST
  properties:
    full-mwt: 268.36
    mw-freebase: 268.36
    alogp: 4.83
    psa: 40.46
    hba: 2
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C18H20O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Diethylstilbestrol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diethylstilbestrol-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL411](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL411/) · max phase 4 · id via source catalogue

## Source summary

Estrogen receptor alpha agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL411).

## Mechanism

Estrogen receptor alpha agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC G03CB02:** GENITO URINARY SYSTEM AND SEX HORMONES › ESTROGENS › Synthetic estrogens, plain
- **ATC G03CC05:** GENITO URINARY SYSTEM AND SEX HORMONES › ESTROGENS › Estrogens, combinations with other drugs
- **ATC L02AA01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONES AND RELATED AGENTS › Estrogens

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 268.36 | 4.83 | 40.46 | 2/2 | 0 | C18H20O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL206)|Estrogen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diethylstilbestrol*](https://en.wikipedia.org/w/index.php?title=Diethylstilbestrol&oldid=1371162065) (revision 1371162065, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours |
| Protein binding | 95 % | >95% |
| Bioavailability | - | Well-absorbed |
| Metabolism | hepatic | Hydroxylation, oxidation, glucuronidation |
| Metabolites | - | • (Z,Z)-Dienestrol; • Paroxypropione; • Glucuronides |
| Excretion | - | Urine, feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dienestrol]] (Estrogen receptor), [[Elacestrant]] (Estrogen receptor), [[Enclomiphene]] (Estrogen receptor), [[Estradiol]] (Estrogen receptor), [[Estradiol Acetate]] (Estrogen receptor), [[Estradiol Cypionate]] (Estrogen receptor), [[Estradiol Valerate]] (Estrogen receptor), [[Estrone]] (Estrogen receptor), [[Ethinyl Estradiol]] (Estrogen receptor), [[Fulvestrant (Faslodex)]] (Estrogen receptor), [[Giredestrant]] (Estrogen receptor), [[Mestranol]] (Estrogen receptor)
- **Same ATC subgroup:** [[Dienestrol]], [[Diethylstilbestrol Diphosphate]], [[Estriol]], [[Estrone]], [[Ethinyl Estradiol]], [[Polyestradiol Phosphate]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
