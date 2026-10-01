---
type: compound
schema-version: 2
compound-id: dusigitumab-compound
name: Dusigitumab
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: insulin-like growth factor I inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2109355
chembl-max-phase: 2
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
  parent-id: CHEMBL2109355
  pref-name: DUSIGITUMAB
  molecule-type: Antibody
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL3217394
    name: Insulin-like growth factor 1
    action: INHIBITOR
  - id: CHEMBL3712957
    name: Insulin-like growth factor 2
    action: INHIBITOR
  properties: {}
---

# Dusigitumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dusigitumab-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL2109355](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2109355/) · max phase 2 · id via exact ChEMBL name match - confirm

## Source summary

Dusigitumab is a phase 2 compound catalogued by ChEMBL. Its curated mechanism is insulin-like growth factor I inhibitor; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

insulin-like growth factor I inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Antibody

**Targets (ChEMBL curated mechanisms):**

- [[Insulin-like growth factor 1 (CHEMBL3217394)|Insulin-like growth factor 1]] - inhibitor · SINGLE PROTEIN
- [[Insulin-like growth factor 2 (CHEMBL3712957)|Insulin-like growth factor 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Xentuzumab]] (Insulin-like growth factor 1; Insulin-like growth factor 2)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
