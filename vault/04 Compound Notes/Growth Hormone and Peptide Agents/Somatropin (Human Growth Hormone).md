---
type: compound
schema-version: 2
compound-id: somatropin-compound
name: Somatropin (Human Growth Hormone)
aliases:
- Somatropin
- Human Growth Hormone
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
chembl-id: CHEMBL1201621
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
- identity-inn-ema
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1201621
  pref-name: SOMATROPIN
  molecule-type: Protein
  first-approval: 1976
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01AC01
  targets:
  - id: CHEMBL1976
    name: Growth hormone receptor
    action: AGONIST
  properties: {}
  identity-check: inn-match-ema
---

# Somatropin (Human Growth Hormone)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `somatropin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Somatropin, Human Growth Hormone
- **ChEMBL:** [CHEMBL1201621](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201621/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Recombinant human growth hormone, identical to the body's own GH; the reference compound every GH secretagogue in this app's Peptides section is trying to indirectly stimulate.

## Mechanism

Growth hormone receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1976
- **ATC H01AC01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › ANTERIOR PITUITARY LOBE HORMONES AND ANALOGUES › Somatropin and somatropin agonists

**Targets (ChEMBL curated mechanisms):**

- [[Growth hormone receptor (CHEMBL1976)|Growth hormone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lonapegsomatropin]] (Growth hormone receptor), [[Pegvisomant (Somavert)]] (Growth hormone receptor), [[Somapacitan]] (Growth hormone receptor), [[Somatrem]] (Growth hormone receptor), [[Somatrogon]] (Growth hormone receptor)
- **Same ATC subgroup:** [[Lonapegsomatropin]], [[Mecasermin (Increlex)]], [[Mecasermin Rinfabate]], [[MGF (Mechano Growth Factor)]], [[Sermorelin]], [[Somapacitan]], [[Somatrem]], [[Somatrogon]], [[Tesamorelin]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
