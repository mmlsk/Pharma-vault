---
type: compound
schema-version: 2
compound-id: baloxavir-compound
name: Baloxavir Marboxil
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Polymerase acidic protein inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297503
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
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL4297503
  pref-name: BALOXAVIR MARBOXIL
  molecule-type: Small molecule
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AX25
  targets:
  - id: CHEMBL1169598
    name: Polymerase acidic protein
    action: INHIBITOR
  - id: CHEMBL2028641
    name: Polymerase acidic protein
    action: INHIBITOR
  properties:
    full-mwt: 571.56
    mw-freebase: 571.56
    alogp: 3.39
    psa: 99.54
    hba: 10
    hbd: 0
    rtb: 4
    num-ro5-violations: 1
    qed-weighted: 0.34
    full-molformula: C27H23F2N3O7S
  identity-check: structure-confirmed
---

# Baloxavir Marboxil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `baloxavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4297503](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297503/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Single-dose influenza antiviral with a mechanism upstream of neuraminidase, blocking transcription rather than release.

## Mechanism

Polymerase acidic protein inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2018
- **Flags:** prodrug
- **ATC J05AX25:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Other antivirals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 571.56 | 3.39 | 99.54 | 0/10 | 1 | C27H23F2N3O7S |

**Targets (ChEMBL curated mechanisms):**

- [[Polymerase acidic protein (CHEMBL1169598)|Polymerase acidic protein]] - inhibitor · SINGLE PROTEIN
- [[Polymerase acidic protein (CHEMBL2028641)|Polymerase acidic protein]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bulevirtide (Hepcludex)]], [[Enfuvirtide]], [[Favipiravir]], [[Fostemsavir]], [[Ibalizumab]], [[Lenacapavir]], [[Letermovir]], [[Maribavir]], [[Tecovirimat]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
