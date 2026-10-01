---
type: compound
schema-version: 2
compound-id: niclosamide-compound
name: Niclosamide
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1448
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
- identity-confirmed
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1448
  pref-name: NICLOSAMIDE
  molecule-type: Small molecule
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P02DA01
  targets:
  - id: CHEMBL2366043
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2366044
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 327.12
    mw-freebase: 327.12
    alogp: 3.86
    psa: 92.47
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.66
    full-molformula: C13H8Cl2N2O4
  identity-check: structure-confirmed
---

# Niclosamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `niclosamide-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1448](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1448/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Anticestodal salicylanilide that uncouples mitochondrial phosphorylation in the worm, now widely repurposed in oncology and metabolic research.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1982
- **ATC P02DA01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTICESTODALS › Salicylic acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 327.12 | 3.86 | 92.47 | 2/4 | 0 | C13H8Cl2N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL2366043)|DNA]] - inhibitor · NUCLEIC-ACID
- [[DNA (CHEMBL2366044)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
