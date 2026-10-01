---
type: compound
schema-version: 2
compound-id: reslizumab-compound
name: Reslizumab
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
chembl-id: CHEMBL2107884
chembl-max-phase: 4
half-life:
  value: 24.0
  value-max: null
  unit: d
  notes: ~24 days
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
  notes: Proteolysis
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Reslizumab
  url: https://en.wikipedia.org/w/index.php?title=Reslizumab&oldid=1317754918
  revision: 1317754918
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2107884
  pref-name: RESLIZUMAB
  molecule-type: Antibody
  first-approval: 2016
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - R03DX08
  targets:
  - id: CHEMBL1169600
    name: Interleukin-5
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: 053b9158-2a5b-48b9-bf47-5fa78a35ec33
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=053b9158-2a5b-48b9-bf47-5fa78a35ec33
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Reslizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `reslizumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2107884](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2107884/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Intravenous anti-IL-5 antibody dosed by weight, used in severe eosinophilic asthma where the subcutaneous agents are insufficient.

## Mechanism

Interleukin-5 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2016
- **Flags:** black-box warning
- **ATC R03DX08:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Other systemic drugs for obstructive airway diseases

**Targets (ChEMBL curated mechanisms):**

- [[Interleukin-5 (CHEMBL1169600)|Interleukin-5]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Reslizumab*](https://en.wikipedia.org/w/index.php?title=Reslizumab&oldid=1317754918) (revision 1317754918, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 d | ~24 days |
| Metabolism | - | Proteolysis |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 053b9158…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=053b9158-2a5b-48b9-bf47-5fa78a35ec33), label version 20200229. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 576)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mepolizumab]] (Interleukin-5)
- **Same ATC subgroup:** [[Benralizumab]], [[Mepolizumab]], [[Omalizumab (Xolair)]], [[Roflumilast]], [[Roflumilast (topical)]], [[Roflumilast Foam (Zoryve)]], [[Tezepelumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
