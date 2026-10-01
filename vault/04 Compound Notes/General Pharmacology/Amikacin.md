---
type: compound
schema-version: 2
compound-id: amikacin-compound
name: Amikacin
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
chembl-id: CHEMBL177
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 0.0
  value-max: 11.0
  unit: percent
  notes: 0–11%
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Mostly unmetabolized
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Amikacin
  url: https://en.wikipedia.org/w/index.php?title=Amikacin&oldid=1335943276
  revision: 1335943276
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL177
  pref-name: AMIKACIN
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D06AX12
  - J01GB06
  - S01AA21
  targets: []
  properties:
    full-mwt: 585.61
    mw-freebase: 585.61
    alogp: -8.42
    psa: 331.94
    hba: 17
    hbd: 13
    rtb: 10
    num-ro5-violations: 3
    qed-weighted: 0.11
    full-molformula: C22H43N5O13
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 499ab990-2b21-474f-aaba-d86388965f40
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=499ab990-2b21-474f-aaba-d86388965f40
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Amikacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amikacin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL177](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL177/) · max phase 4 · id via Wikipedia infobox

## Source summary

Aminoglycoside resistant to most aminoglycoside-modifying enzymes, which makes it the reserve agent of the class and part of multidrug-resistant tuberculosis regimens.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **Flags:** black-box warning
- **ATC D06AX12:** DERMATOLOGICALS › ANTIBIOTICS FOR TOPICAL USE › Other antibiotics for topical use
- **ATC J01GB06:** ANTIINFECTIVES FOR SYSTEMIC USE › AMINOGLYCOSIDE ANTIBACTERIALS › Other aminoglycosides
- **ATC S01AA21:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 585.61 | -8.42 | 331.94 | 13/17 | 3 | C22H43N5O13 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amikacin*](https://en.wikipedia.org/w/index.php?title=Amikacin&oldid=1335943276) (revision 1335943276, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 0–11 % | 0–11% |
| Bioavailability | 90 % | >90% |
| Metabolism | - | Mostly unmetabolized |
| Excretion | mainly urinary | Kidney |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 499ab990…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=499ab990-2b21-474f-aaba-d86388965f40), label version 20260804. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 5.9, 19.5)
> - protein-binding: consistent (label values: 10)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ampicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Erythromycin]], [[Mupirocin]], [[Plazomicin]], [[Polymyxin B]], [[Rifaximin]], [[Tetracycline]], [[Tobramycin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
