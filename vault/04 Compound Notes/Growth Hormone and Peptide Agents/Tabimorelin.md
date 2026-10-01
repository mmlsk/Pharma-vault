---
type: compound
schema-version: 2
compound-id: tabimorelin-compound
name: Tabimorelin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Cytochrome P450 3A4 inhibitor; Ghrelin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL281764
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
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL281764
  pref-name: TABIMORELIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL4616
    name: Growth hormone secretagogue receptor type 1
    action: AGONIST
  - id: CHEMBL340
    name: Cytochrome P450 3A4
    action: INHIBITOR
  properties:
    full-mwt: 528.7
    mw-freebase: 528.7
    alogp: 3.71
    psa: 95.74
    hba: 4
    hbd: 2
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.37
    full-molformula: C32H40N4O3
  identity-check: structure-confirmed
---

# Tabimorelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tabimorelin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL281764](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL281764/) · max phase 2 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Early oral GH secretagogue abandoned after liver enzyme elevations in longer dosing.

## Mechanism

Cytochrome P450 3A4 inhibitor; Ghrelin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 528.7 | 3.71 | 95.74 | 2/4 | 1 | C32H40N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Growth hormone secretagogue receptor type 1 (CHEMBL4616)|Growth hormone secretagogue receptor type 1]] - agonist · SINGLE PROTEIN
- [[Cytochrome P450 3A4 (CHEMBL340)|Cytochrome P450 3A4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Capromorelin]] (Growth hormone secretagogue receptor type 1), [[Macimorelin (Macrilen)]] (Growth hormone secretagogue receptor type 1), [[Pf-5190457]] (Growth hormone secretagogue receptor type 1), [[Relamorelin]] (Growth hormone secretagogue receptor type 1), [[Tzp-102]] (Growth hormone secretagogue receptor type 1)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
