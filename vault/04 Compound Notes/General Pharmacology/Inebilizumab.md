---
type: compound
schema-version: 2
compound-id: inebilizumab-compound
name: Inebilizumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: B-lymphocyte antigen CD19 binding agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2109334
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
- immunosuppression-infection
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- chembl-profile
- chembl-name-match
- identity-inn-ema
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2109334
  pref-name: INEBILIZUMAB
  molecule-type: Antibody
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AG10
  targets:
  - id: CHEMBL3390821
    name: B-lymphocyte antigen CD19
    action: BINDING AGENT
  properties: {}
  identity-check: inn-match-ema
---

# Inebilizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `inebilizumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2109334](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2109334/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-CD19 antibody depleting a broader B-cell range than CD20 agents, including plasmablasts, approved for neuromyelitis optica.

## Mechanism

B-lymphocyte antigen CD19 binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2020
- **ATC L04AG10:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Monoclonal antibodies

**Targets (ChEMBL curated mechanisms):**

- [[B-lymphocyte antigen CD19 (CHEMBL3390821)|B-lymphocyte antigen CD19]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Blinatumomab]] (B-lymphocyte antigen CD19)
- **Same ATC subgroup:** [[Alemtuzumab]], [[Anifrolumab]], [[Belimumab]], [[Natalizumab]], [[Ocrelizumab]], [[Ofatumumab]], [[Teprotumumab]], [[Vedolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
