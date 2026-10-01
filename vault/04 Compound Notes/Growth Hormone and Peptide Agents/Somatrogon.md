---
type: compound
schema-version: 2
compound-id: somatrogon-compound
name: Somatrogon
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Growth hormone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297830
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
  parent-id: CHEMBL4297830
  pref-name: SOMATROGON
  molecule-type: Protein
  first-approval: 2022
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01AC08
  targets:
  - id: CHEMBL1976
    name: Growth hormone receptor
    action: AGONIST
  properties: {}
---

# Somatrogon

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `somatrogon-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL4297830](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297830/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Long-acting growth hormone analog dosed weekly instead of daily.

## Mechanism

Growth hormone receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2022
- **ATC H01AC08:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTERIOR PITUITARY LOBE HORMONES AND ANALOGUES › Somatropin and somatropin agonists

**Targets (ChEMBL curated mechanisms):**

- [[Growth hormone receptor (CHEMBL1976)|Growth hormone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lonapegsomatropin]] (Growth hormone receptor), [[Pegvisomant (Somavert)]] (Growth hormone receptor), [[Somapacitan]] (Growth hormone receptor), [[Somatrem]] (Growth hormone receptor), [[Somatropin (Human Growth Hormone)]] (Growth hormone receptor)
- **Same ATC subgroup:** [[Lonapegsomatropin]], [[Mecasermin (Increlex)]], [[Mecasermin Rinfabate]], [[MGF (Mechano Growth Factor)]], [[Sermorelin]], [[Somapacitan]], [[Somatrem]], [[Somatropin (Human Growth Hormone)]], [[Tesamorelin]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
