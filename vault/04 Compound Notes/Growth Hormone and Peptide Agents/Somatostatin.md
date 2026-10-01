---
type: compound
schema-version: 2
compound-id: somatostatin-compound
name: Somatostatin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Somatostatin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1823872
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
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1823872
  pref-name: SOMATOSTATIN
  molecule-type: Protein
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CB01
  targets:
  - id: CHEMBL2111436
    name: Somatostatin receptor
    action: AGONIST
  properties:
    full-mwt: 1637.91
    mw-freebase: 1637.91
    full-molformula: C76H104N18O19S2
---

# Somatostatin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `somatostatin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1823872](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1823872/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

The endogenous brake on growth hormone release -- the hormone octreotide was built to imitate.

## Mechanism

Somatostatin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **ATC H01CB01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Somatostatin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1637.91 | - | - | -/- | - | C76H104N18O19S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Somatostatin receptor (CHEMBL2111436)|Somatostatin receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lanreotide]], [[Octreotide]], [[Pasireotide]], [[Vapreotide]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
