---
type: compound
schema-version: 2
compound-id: andexanet-compound
name: Andexanet Alfa
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Apixaban sequestering agent; Rivaroxaban sequestering agent; Tissue factor pathway inhibitor inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3301583
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
- cardiovascular-load
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- chembl-profile
- chembl-name-match
- identity-inn-ema
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3301583
  pref-name: ANDEXANET ALFA
  molecule-type: Protein
  first-approval: 2019
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - V03AB38
  targets:
  - id: CHEMBL4495555
    name: Rivaroxaban
    action: SEQUESTERING AGENT
  - id: CHEMBL4495556
    name: Apixaban
    action: SEQUESTERING AGENT
  - id: CHEMBL3713062
    name: Tissue factor pathway inhibitor
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
---

# Andexanet Alfa

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `andexanet-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL3301583](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3301583/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Recombinant decoy factor Xa that reverses apixaban and rivaroxaban by binding them, with a rebound once the infusion ends.

## Mechanism

Apixaban sequestering agent; Rivaroxaban sequestering agent; Tissue factor pathway inhibitor inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2019
- **Flags:** black-box warning
- **ATC V03AB38:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Antidotes

**Targets (ChEMBL curated mechanisms):**

- [[Rivaroxaban (CHEMBL4495555)|Rivaroxaban]] - sequestering agent · SMALL MOLECULE
- [[Apixaban (CHEMBL4495556)|Apixaban]] - sequestering agent · SMALL MOLECULE
- [[Tissue factor pathway inhibitor (CHEMBL3713062)|Tissue factor pathway inhibitor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Flumazenil]], [[Fomepizole]], [[Glutathione]], [[Idarucizumab]], [[Methylene Blue]], [[NAC (N-Acetylcysteine)]], [[Naloxone]], [[Phentolamine]], [[Physostigmine]], [[Potassium Iodide (SSKI-KI)|Potassium Iodide (SSKI/KI)]], [[Pralidoxime]], [[Protamine Sulfate]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
