---
type: compound
schema-version: 2
compound-id: gepotidacin-compound
name: Gepotidacin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial DNA gyrase inhibitor; Topoisomerase IV inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3317856
chembl-max-phase: 3
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
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3317856
  pref-name: GEPOTIDACIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XX13
  targets:
  - id: CHEMBL2363076
    name: Topoisomerase IV
    action: INHIBITOR
  - id: CHEMBL2311224
    name: Bacterial DNA gyrase
    action: INHIBITOR
  properties:
    full-mwt: 448.53
    mw-freebase: 448.53
    alogp: 1.09
    psa: 94.28
    hba: 9
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.62
    full-molformula: C24H28N6O3
---

# Gepotidacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gepotidacin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3317856](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3317856/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

First-in-class triazaacenaphthylene, a bacterial topoisomerase inhibitor with a novel binding mode approved for uncomplicated urinary infection.

## Mechanism

Bacterial DNA gyrase inhibitor; Topoisomerase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC J01XX13:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Other antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 448.53 | 1.09 | 94.28 | 1/9 | 0 | C24H28N6O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Topoisomerase IV (CHEMBL2363076)|Topoisomerase IV]] - inhibitor · PROTEIN COMPLEX
- [[Bacterial DNA gyrase (CHEMBL2311224)|Bacterial DNA gyrase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ciprofloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Norfloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Prulifloxacin]] (Bacterial DNA gyrase; Topoisomerase IV), [[Ofloxacin]] (Bacterial DNA gyrase)
- **Same ATC subgroup:** [[Bacitracin]], [[Fosfomycin]], [[Lefamulin]], [[Linezolid]], [[Tedizolid]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
