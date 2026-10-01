---
type: compound
schema-version: 2
compound-id: vaborbactam-compound
name: Vaborbactam
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Carbepenem-hydrolyzing beta-lactamase KPC inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3317857
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
  parent-id: CHEMBL3317857
  pref-name: VABORBACTAM
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL6132
    name: Carbapenem-hydrolyzing beta-lactamase KPC
    action: INHIBITOR
  properties:
    full-mwt: 297.14
    mw-freebase: 297.14
    full-molformula: C12H16BNO5S
  identity-check: structure-confirmed
---

# Vaborbactam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vaborbactam-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3317857](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3317857/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Cyclic boronate beta-lactamase inhibitor paired with meropenem, targeted specifically at KPC carbapenemases.

## Mechanism

Carbepenem-hydrolyzing beta-lactamase KPC inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 297.14 | - | - | -/- | - | C12H16BNO5S |

**Targets (ChEMBL curated mechanisms):**

- [[Carbapenem-hydrolyzing beta-lactamase KPC (CHEMBL6132)|Carbapenem-hydrolyzing beta-lactamase KPC]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
