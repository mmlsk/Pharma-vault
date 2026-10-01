---
type: compound
schema-version: 2
compound-id: mepolizumab-compound
name: Mepolizumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Interleukin-5 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2108429
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 20 (16–22) days
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: None
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% (estimate)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Proteolytic enzymes
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-inn-ema
pk-source:
  type: wikipedia-infobox
  title: Mepolizumab
  url: https://en.wikipedia.org/w/index.php?title=Mepolizumab&oldid=1332048535
  revision: 1332048535
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2108429
  pref-name: MEPOLIZUMAB
  molecule-type: Antibody
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R03DX09
  targets:
  - id: CHEMBL1169600
    name: Interleukin-5
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
---

# Mepolizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mepolizumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2108429](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2108429/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-IL-5 antibody for severe eosinophilic asthma, eosinophilic granulomatosis with polyangiitis and hypereosinophilic syndrome.

## Mechanism

Interleukin-5 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2015
- **ATC R03DX09:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Other systemic drugs for obstructive airway diseases

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-5 (CHEMBL1169600)|Interleukin-5]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mepolizumab*](https://en.wikipedia.org/w/index.php?title=Mepolizumab&oldid=1332048535) (revision 1332048535, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 20 (16–22) days |
| Protein binding | - | None |
| Bioavailability | 80 % | 80% (estimate) |
| Metabolism | - | Proteolytic enzymes |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Reslizumab]] (Interleukin-5)
- **Same ATC subgroup:** [[Benralizumab]], [[Omalizumab (Xolair)]], [[Reslizumab]], [[Roflumilast]], [[Roflumilast (topical)]], [[Roflumilast Foam (Zoryve)]], [[Tezepelumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
