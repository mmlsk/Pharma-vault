---
type: compound
schema-version: 2
compound-id: avelumab-compound
name: Avelumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Programmed cell death 1 ligand 1 other
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3833373
chembl-max-phase: 4
half-life:
  value: 6.1
  value-max: null
  unit: d
  notes: 6.1 days
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
pk-source:
  type: wikipedia-infobox
  title: Avelumab
  url: https://en.wikipedia.org/w/index.php?title=Avelumab&oldid=1292952219
  revision: 1292952219
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3833373
  pref-name: AVELUMAB
  molecule-type: Antibody
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FF04
  targets:
  - id: CHEMBL3580522
    name: Programmed cell death 1 ligand 1
    action: OTHER
  properties: {}
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Avelumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `avelumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3833373](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3833373/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Anti-PD-L1 antibody retaining a wild-type Fc, so it can also mediate antibody-dependent killing of PD-L1-positive tumour cells.

## Mechanism

Programmed cell death 1 ligand 1 other _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2017
- **ATC L01FF04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Programmed cell death 1 ligand 1 (CHEMBL3580522)|Programmed cell death 1 ligand 1]] - other · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Avelumab*](https://en.wikipedia.org/w/index.php?title=Avelumab&oldid=1292952219) (revision 1292952219, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.1 d | 6.1 days |
| Metabolism | - | Proteolysis |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Atezolizumab]] (Programmed cell death 1 ligand 1), [[Durvalumab]] (Programmed cell death 1 ligand 1)
- **Same ATC subgroup:** [[Atezolizumab]], [[Cemiplimab]], [[Dostarlimab]], [[Durvalumab]], [[Nivolumab]], [[Pembrolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
