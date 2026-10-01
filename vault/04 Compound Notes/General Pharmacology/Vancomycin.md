---
type: compound
schema-version: 2
compound-id: vancomycin-compound
name: Vancomycin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Peptidoglycan inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL262777
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 h to 11 h (adults, normal renal function); 6 d to 10 d (adults, impaired renal function)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Negligible (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: urine (IV), feces (oral)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Excreted unchanged
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Vancomycin
  url: https://en.wikipedia.org/w/index.php?title=Vancomycin&oldid=1372674281
  revision: 1372674281
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL262777
  pref-name: VANCOMYCIN
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A07AA09
  - J01XA01
  - S01AA28
  targets:
  - id: CHEMBL3041361
    name: Peptidoglycan
    action: INHIBITOR
  properties:
    full-mwt: 1449.27
    mw-freebase: 1449.27
    full-molformula: C66H75Cl2N9O24
pk-verification:
  source: fda-label
  status: consistent
  set-id: 72e9c5e2-07cc-4a8b-ba64-b2e7619ea560
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=72e9c5e2-07cc-4a8b-ba64-b2e7619ea560
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Vancomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vancomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL262777](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL262777/) · max phase 4 · id via Wikipedia infobox

## Source summary

Glycopeptide binding the cell wall substrate rather than the enzyme, and the historical standard for MRSA. Requires level monitoring because efficacy and nephrotoxicity both track exposure.

## Mechanism

Peptidoglycan inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **Flags:** black-box warning
- **ATC A07AA09:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFECTIVES › Antibiotics
- **ATC J01XA01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Glycopeptide antibacterials
- **ATC S01AA28:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1449.27 | - | - | -/- | - | C66H75Cl2N9O24 |

**Targets (ChEMBL curated mechanisms):**

- [[Peptidoglycan (CHEMBL3041361)|Peptidoglycan]] - inhibitor · MACROMOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vancomycin*](https://en.wikipedia.org/w/index.php?title=Vancomycin&oldid=1372674281) (revision 1372674281, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 h to 11 h (adults, normal renal function); 6 d to 10 d (adults, impaired renal function) |
| Bioavailability | - | Negligible (oral) |
| Metabolism | - | Excreted unchanged |
| Excretion | - | urine (IV), feces (oral) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 72e9c5e2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=72e9c5e2-07cc-4a8b-ba64-b2e7619ea560), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 6, 180)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amikacin]], [[Amphotericin B]], [[Ampicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Dalbavancin]], [[Erythromycin]], [[Fidaxomicin]], [[Oritavancin]], [[Paromomycin]], [[Polymyxin B]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
