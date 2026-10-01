---
type: compound
schema-version: 2
compound-id: atezolizumab-compound
name: Atezolizumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Programmed cell death 1 ligand 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3707227
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
- immunosuppression-infection
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- chembl-profile
- chembl-name-match
- identity-inn-ema
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3707227
  pref-name: ATEZOLIZUMAB
  molecule-type: Antibody
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FF05
  targets:
  - id: CHEMBL3580522
    name: Programmed cell death 1 ligand 1
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
---

# Atezolizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atezolizumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3707227](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3707227/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-PD-L1 antibody, blocking the ligand rather than the receptor and leaving PD-L2 signalling intact.

## Mechanism

Programmed cell death 1 ligand 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2016
- **ATC L01FF05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Programmed cell death 1 ligand 1 (CHEMBL3580522)|Programmed cell death 1 ligand 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Avelumab]] (Programmed cell death 1 ligand 1), [[Durvalumab]] (Programmed cell death 1 ligand 1)
- **Same ATC subgroup:** [[Avelumab]], [[Cemiplimab]], [[Dostarlimab]], [[Durvalumab]], [[Nivolumab]], [[Pembrolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
