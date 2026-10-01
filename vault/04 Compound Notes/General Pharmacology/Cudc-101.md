---
type: compound
schema-version: 2
compound-id: cudc-101-compound
name: Cudc-101
aliases: []
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: Epidermal growth factor receptor erbB1 inhibitor; Histone deacetylase inhibitor; Receptor protein-tyrosine kinase erbB-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL598797
chembl-max-phase: 1
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
- cytotoxicity
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- chembl-profile
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL598797
  pref-name: CUDC-101
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL203
    name: Epidermal growth factor receptor
    action: INHIBITOR
  - id: CHEMBL1824
    name: Receptor tyrosine-protein kinase erbB-2
    action: INHIBITOR
  - id: CHEMBL2093865
    name: Histone deacetylase
    action: INHIBITOR
  properties:
    full-mwt: 434.5
    mw-freebase: 434.5
    alogp: 4.2
    psa: 105.6
    hba: 7
    hbd: 3
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.18
    full-molformula: C24H26N4O4
  identity-check: structure-confirmed
---

# Cudc-101

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cudc-101-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL598797](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL598797/) · max phase 1 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Cudc-101 is a named HDAC research compound with a curated biochemical result against HDAC6. ChEMBL records IC50 5.1 nM in the selected assay; that describes target potency, not a proven clinical benefit.

## Mechanism

Epidermal growth factor receptor erbB1 inhibitor; Histone deacetylase inhibitor; Receptor protein-tyrosine kinase erbB-2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 434.5 | 4.2 | 105.6 | 3/7 | 0 | C24H26N4O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Epidermal growth factor receptor (CHEMBL203)|Epidermal growth factor receptor]] - inhibitor · SINGLE PROTEIN
- [[Receptor tyrosine-protein kinase erbB-2 (CHEMBL1824)|Receptor tyrosine-protein kinase erbB-2]] - inhibitor · SINGLE PROTEIN
- [[Histone deacetylase (CHEMBL2093865)|Histone deacetylase]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dacomitinib]] (Epidermal growth factor receptor; Receptor tyrosine-protein kinase erbB-2), [[Abexinostat]] (Histone deacetylase), [[Belinostat]] (Histone deacetylase), [[Entinostat]] (Histone deacetylase), [[Fimepinostat]] (Histone deacetylase), [[Gefitinib]] (Epidermal growth factor receptor), [[Masoprocol]] (Receptor tyrosine-protein kinase erbB-2), [[Osimertinib]] (Epidermal growth factor receptor), [[Quisinostat]] (Histone deacetylase), [[Tacedinaline]] (Histone deacetylase)

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
