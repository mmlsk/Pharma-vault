---
type: compound
schema-version: 2
compound-id: anagliptin-compound
name: Anagliptin
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Dipeptidyl peptidase IV inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1929396
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
- glucose-metabolism
- gastrointestinal
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- chembl-profile
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1929396
  pref-name: ANAGLIPTIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL284
    name: Dipeptidyl peptidase 4
    action: INHIBITOR
  properties:
    full-mwt: 383.46
    mw-freebase: 383.46
    alogp: 0.65
    psa: 115.42
    hba: 7
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C19H25N7O2
  identity-check: structure-confirmed
---

# Anagliptin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL1929396](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1929396/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits DPP-4 to prolong endogenous incretin signaling and glucose-dependent insulin release.

## Mechanism

Dipeptidyl peptidase IV inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 383.46 | 0.65 | 115.42 | 2/7 | 0 | C19H25N7O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Dipeptidyl peptidase 4 (CHEMBL284)|Dipeptidyl peptidase 4]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bisegliptin]] (Dipeptidyl peptidase 4), [[Dutogliptin]] (Dipeptidyl peptidase 4), [[Evogliptin]] (Dipeptidyl peptidase 4), [[Gemigliptin]] (Dipeptidyl peptidase 4), [[Gosogliptin]] (Dipeptidyl peptidase 4), [[Linagliptin (Tradjenta)]] (Dipeptidyl peptidase 4), [[Omarigliptin]] (Dipeptidyl peptidase 4), [[Teneligliptin]] (Dipeptidyl peptidase 4), [[Vildagliptin]] (Dipeptidyl peptidase 4)

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
