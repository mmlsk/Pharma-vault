---
type: compound
schema-version: 2
compound-id: boceprevir-compound
name: Boceprevir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Hepatitis C virus serine protease, NS3/NS4A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL218394
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
- chembl-name-match
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL218394
  pref-name: BOCEPREVIR
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AP03
  targets:
  - id: CHEMBL2095231
    name: Hepatitis C virus serine protease, NS3/NS4A
    action: INHIBITOR
  properties:
    full-mwt: 519.69
    mw-freebase: 519.69
    alogp: 1.71
    psa: 150.7
    hba: 5
    hbd: 4
    rtb: 8
    num-ro5-violations: 1
    qed-weighted: 0.36
    full-molformula: C27H45N5O5
---

# Boceprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `boceprevir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL218394](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL218394/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

First-generation hepatitis C protease inhibitor, added to interferon and ribavirin in 2011 and obsolete within three years.

## Mechanism

Hepatitis C virus serine protease, NS3/NS4A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **ATC J05AP03:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 519.69 | 1.71 | 150.7 | 4/5 | 1 | C27H45N5O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Hepatitis C virus serine protease, NS3-NS4A (CHEMBL2095231)|Hepatitis C virus serine protease, NS3/NS4A]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Glecaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Grazoprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Telaprevir]] (Hepatitis C virus serine protease, NS3/NS4A), [[Voxilaprevir]] (Hepatitis C virus serine protease, NS3/NS4A)
- **Same ATC subgroup:** [[Daclatasvir]], [[Elbasvir]], [[Grazoprevir]], [[Ribavirin]], [[Simeprevir]], [[Sofosbuvir]], [[Telaprevir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
