---
type: compound
schema-version: 2
compound-id: molnupiravir-compound
name: Molnupiravir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: RNA disrupting agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4650320
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
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL4650320
  pref-name: MOLNUPIRAVIR
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AB18
  targets:
  - id: CHEMBL5604041
    name: RNA
    action: DISRUPTING AGENT
  properties:
    full-mwt: 329.31
    mw-freebase: 329.31
    alogp: -1.72
    psa: 146.37
    hba: 9
    hbd: 4
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.29
    full-molformula: C13H19N3O7
---

# Molnupiravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `molnupiravir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4650320](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4650320/) · max phase 3 · id via Wikipedia infobox

## Source summary

Oral ribonucleoside prodrug that works by error catastrophe rather than chain termination, which is both its mechanism and its main safety concern.

## Mechanism

RNA disrupting agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug
- **ATC J05AB18:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleosides and nucleotides excl. reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 329.31 | -1.72 | 146.37 | 4/9 | 0 | C13H19N3O7 |

**Targets (ChEMBL curated mechanisms):**

- [[RNA (CHEMBL5604041)|RNA]] - disrupting agent · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aciclovir]], [[Ganciclovir]], [[Remdesivir]], [[Valaciclovir]], [[Valganciclovir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
