---
type: compound
schema-version: 2
compound-id: tioconazole-compound
name: Tioconazole
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Cytochrome P450 51 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200438
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
- cyp-interactions
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- chembl-profile
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1200438
  pref-name: TIOCONAZOLE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AC07
  - G01AF08
  targets:
  - id: CHEMBL1780
    name: Lanosterol 14-alpha demethylase
    action: INHIBITOR
  properties:
    full-mwt: 387.72
    mw-freebase: 387.72
    alogp: 5.86
    psa: 27.05
    hba: 4
    hbd: 0
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.53
    full-molformula: C16H13Cl3N2OS
---

# Tioconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tioconazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1200438](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200438/) · max phase 4 · id via Wikipedia infobox

## Source summary

Topical imidazole formulated for single-dose vaginal candidiasis and for onychomycosis as a nail solution.

## Mechanism

Cytochrome P450 51 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **ATC D01AC07:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Imidazole and triazole derivatives
- **ATC G01AF08:** GENITO URINARY SYSTEM AND SEX HORMONES › ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS › Imidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 387.72 | 5.86 | 27.05 | 0/4 | 1 | C16H13Cl3N2OS |

**Targets (ChEMBL curated mechanisms):**

- [[Lanosterol 14-alpha demethylase (CHEMBL1780)|Lanosterol 14-alpha demethylase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Fluconazole]] (Lanosterol 14-alpha demethylase), [[Posaconazole]] (Lanosterol 14-alpha demethylase), [[Voriconazole]] (Lanosterol 14-alpha demethylase)
- **Same ATC subgroup:** [[Bifonazole]], [[Econazole]], [[Fluconazole]], [[Metronidazole]], [[Sertaconazole]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
