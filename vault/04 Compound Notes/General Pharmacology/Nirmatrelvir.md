---
type: compound
schema-version: 2
compound-id: nirmatrelvir-compound
name: Nirmatrelvir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: SARS coronavirus 3C-like proteinase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4802135
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
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL4802135
  pref-name: NIRMATRELVIR
  molecule-type: Small molecule
  first-approval: 2023
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL3927
    name: Replicase polyprotein 1a
    action: INHIBITOR
  properties:
    full-mwt: 499.53
    mw-freebase: 499.53
    alogp: 1.1
    psa: 131.4
    hba: 5
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C23H32F3N5O4
  identity-check: structure-confirmed
---

# Nirmatrelvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nirmatrelvir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4802135](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4802135/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

SARS-CoV-2 main protease inhibitor, given with ritonavir purely to keep its concentrations high enough to work.

## Mechanism

SARS coronavirus 3C-like proteinase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2023

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 499.53 | 1.1 | 131.4 | 3/5 | 0 | C23H32F3N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Replicase polyprotein 1a (CHEMBL3927)|Replicase polyprotein 1a]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
