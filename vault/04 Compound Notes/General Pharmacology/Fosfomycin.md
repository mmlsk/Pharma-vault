---
type: compound
schema-version: 2
compound-id: fosfomycin-compound
name: Fosfomycin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1757
chembl-max-phase: 4
half-life:
  value: 5.7
  value-max: null
  unit: h
  notes: 5.7 hours (mean)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Nil
bioavailability:
  value: 30.0
  value-max: 37.0
  notes: 30–37% (by mouth, fosfomycin tromethamine); varies with food intake
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, unchanged
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Fosfomycin
  url: https://en.wikipedia.org/w/index.php?title=Fosfomycin&oldid=1358847915
  revision: 1358847915
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1757
  pref-name: FOSFOMYCIN
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XX01
  - S02AA17
  targets: []
  properties:
    full-mwt: 138.06
    mw-freebase: 138.06
    alogp: -0.09
    psa: 70.06
    hba: 2
    hbd: 2
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C3H7O4P
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fosfomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosfomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1757](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1757/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Single-dose oral agent for uncomplicated cystitis, and intravenously a partner drug for resistant gram-negative infection.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC J01XX01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Other antibacterials
- **ATC S02AA17:** SENSORY ORGANS › ANTIINFECTIVES › Antiinfectives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 138.06 | -0.09 | 70.06 | 2/2 | 0 | C3H7O4P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosfomycin*](https://en.wikipedia.org/w/index.php?title=Fosfomycin&oldid=1358847915) (revision 1358847915, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.7 h | 5.7 hours (mean) |
| Protein binding | - | Nil |
| Bioavailability | 30–37 % | 30–37% (by mouth, fosfomycin tromethamine); varies with food intake |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney, unchanged |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bacitracin]], [[Chloramphenicol]], [[Ciprofloxacin]], [[Gepotidacin]], [[Lefamulin]], [[Linezolid]], [[Ofloxacin]], [[Polymyxin B]], [[Tedizolid]], [[Tetracycline]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
