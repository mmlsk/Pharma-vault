---
type: compound
schema-version: 2
compound-id: maribavir-compound
name: Maribavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Phosphotransferase pUL97 inhibitor; Serine/threonine-protein kinase BGLF4 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL515408
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
  parent-id: CHEMBL515408
  pref-name: MARIBAVIR
  molecule-type: Small molecule
  first-approval: 2021
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AX10
  targets:
  - id: CHEMBL3833483
    name: Serine/threonine-protein kinase BGLF4
    action: INHIBITOR
  - id: CHEMBL1287608
    name: Serine/threonine protein kinase UL97
    action: INHIBITOR
  properties:
    full-mwt: 376.24
    mw-freebase: 376.24
    alogp: 1.77
    psa: 99.77
    hba: 7
    hbd: 4
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C15H19Cl2N3O4
---

# Maribavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `maribavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL515408](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL515408/) · max phase 4 · id via Wikipedia infobox

## Source summary

Oral CMV antiviral for refractory or resistant infection, inhibiting the same UL97 kinase that activates ganciclovir, which makes the two antagonistic.

## Mechanism

Phosphotransferase pUL97 inhibitor; Serine/threonine-protein kinase BGLF4 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2021
- **ATC J05AX10:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Other antivirals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 376.24 | 1.77 | 99.77 | 4/7 | 0 | C15H19Cl2N3O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Serine-threonine-protein kinase BGLF4 (CHEMBL3833483)|Serine/threonine-protein kinase BGLF4]] - inhibitor · SINGLE PROTEIN
- [[Serine-threonine protein kinase UL97 (CHEMBL1287608)|Serine/threonine protein kinase UL97]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Baloxavir Marboxil]], [[Bulevirtide (Hepcludex)]], [[Enfuvirtide]], [[Favipiravir]], [[Fostemsavir]], [[Ibalizumab]], [[Lenacapavir]], [[Letermovir]], [[Tecovirimat]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
