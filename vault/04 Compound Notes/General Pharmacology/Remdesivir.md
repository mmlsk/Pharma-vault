---
type: compound
schema-version: 2
compound-id: remdesivir-compound
name: Remdesivir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: RNA-directed RNA polymerase L inhibitor; Replicase polyprotein 1ab inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4065616
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
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL4065616
  pref-name: REMDESIVIR
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AB16
  targets:
  - id: CHEMBL4303062
    name: RNA-directed RNA polymerase L
    action: INHIBITOR
  - id: CHEMBL4523582
    name: Replicase polyprotein 1ab
    action: INHIBITOR
  properties:
    full-mwt: 602.59
    mw-freebase: 602.59
    alogp: 2.31
    psa: 203.55
    hba: 13
    hbd: 4
    rtb: 13
    num-ro5-violations: 2
    qed-weighted: 0.16
    full-molformula: C27H35N6O8P
---

# Remdesivir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `remdesivir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4065616](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4065616/) · max phase 4 · id via Wikipedia infobox

## Source summary

Adenosine analogue prodrug given intravenously for COVID-19, the first antiviral shown to shorten recovery time in that disease.

## Mechanism

RNA-directed RNA polymerase L inhibitor; Replicase polyprotein 1ab inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **Flags:** black-box warning, prodrug
- **ATC J05AB16:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 602.59 | 2.31 | 203.55 | 4/13 | 2 | C27H35N6O8P |

**Targets (ChEMBL curated mechanisms):**

- [[RNA-directed RNA polymerase L (CHEMBL4303062)|RNA-directed RNA polymerase L]] - inhibitor · SINGLE PROTEIN
- [[Replicase polyprotein 1ab (CHEMBL4523582)|Replicase polyprotein 1ab]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aciclovir]], [[Ganciclovir]], [[Molnupiravir]], [[Valaciclovir]], [[Valganciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
