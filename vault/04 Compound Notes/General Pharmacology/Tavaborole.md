---
type: compound
schema-version: 2
compound-id: tavaborole-compound
name: Tavaborole
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Leucine-tRNA ligase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL443052
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
  parent-id: CHEMBL443052
  pref-name: TAVABOROLE
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AE24
  targets:
  - id: CHEMBL3307222
    name: Leucine-tRNA ligase
    action: INHIBITOR
  properties:
    full-mwt: 151.93
    mw-freebase: 151.93
    full-molformula: C7H6BFO2
  identity-check: structure-confirmed
---

# Tavaborole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tavaborole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL443052](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL443052/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Topical benzoxaborole for onychomycosis, small enough to penetrate nail plate where the azoles cannot.

## Mechanism

Leucine-tRNA ligase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC D01AE24:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Other antifungals for topical use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 151.93 | - | - | -/- | - | C7H6BFO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Leucine-tRNA ligase (CHEMBL3307222)|Leucine-tRNA ligase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amorolfine]], [[Butenafine]], [[Flucytosine]], [[Naftifine]], [[Salicylic Acid]], [[Terbinafine (oral, Lamisil)]], [[Undecylenic Acid]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
