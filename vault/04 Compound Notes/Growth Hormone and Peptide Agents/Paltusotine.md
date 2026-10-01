---
type: compound
schema-version: 2
compound-id: paltusotine-compound
name: Paltusotine
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Somatostatin receptor 2 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL5267842
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- chembl-profile
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL5267842
  pref-name: PALTUSOTINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1804
    name: Somatostatin receptor type 2
    action: AGONIST
  properties:
    full-mwt: 456.5
    mw-freebase: 456.5
    alogp: 5.35
    psa: 86.17
    hba: 5
    hbd: 2
    rtb: 3
    num-ro5-violations: 1
    qed-weighted: 0.43
    full-molformula: C27H22F2N4O
  identity-check: structure-confirmed
---

# Paltusotine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `paltusotine-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL5267842](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5267842/) · max phase 3 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral nonpeptide somatostatin receptor type 2 agonist developed for acromegaly.

## Mechanism

Somatostatin receptor 2 agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 456.5 | 5.35 | 86.17 | 2/5 | 1 | C27H22F2N4O |

**Targets (ChEMBL curated mechanisms):**

- [[Somatostatin receptor type 2 (CHEMBL1804)|Somatostatin receptor type 2]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Vapreotide]] (Somatostatin receptor type 2)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
