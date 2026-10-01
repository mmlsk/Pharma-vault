---
type: compound
schema-version: 2
compound-id: tobramycin-compound
name: Tobramycin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: 70S ribosome inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1747
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hrs
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Not bound
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Exclusively via kidneys
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized
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
  title: Tobramycin
  url: https://en.wikipedia.org/w/index.php?title=Tobramycin&oldid=1329508925
  revision: 1329508925
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1747
  pref-name: TOBRAMYCIN
  molecule-type: Small molecule
  first-approval: 1975
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01GB01
  - S01AA12
  targets:
  - id: CHEMBL2364022
    name: 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 467.52
    mw-freebase: 467.52
    alogp: -6.3
    psa: 268.17
    hba: 14
    hbd: 10
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.17
    full-molformula: C18H37N5O9
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5563e8af-c6c9-42a2-974d-7d364a47f00a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5563e8af-c6c9-42a2-974d-7d364a47f00a
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Tobramycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tobramycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1747](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1747/) · max phase 4 · id via Wikipedia infobox

## Source summary

Aminoglycoside with better antipseudomonal potency than gentamicin, widely used inhaled in cystic fibrosis where systemic exposure stays low.

## Mechanism

70S ribosome inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1975
- **Flags:** black-box warning
- **ATC J01GB01:** ANTIINFECTIVES FOR SYSTEMIC USE › AMINOGLYCOSIDE ANTIBACTERIALS › Other aminoglycosides
- **ATC S01AA12:** SENSORY ORGANS › ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 467.52 | -6.3 | 268.17 | 10/14 | 2 | C18H37N5O9 |

**Targets (ChEMBL curated mechanisms):**

- [[70S ribosome (CHEMBL2364022)|70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tobramycin*](https://en.wikipedia.org/w/index.php?title=Tobramycin&oldid=1329508925) (revision 1329508925, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hrs |
| Protein binding | - | Not bound |
| Metabolism | - | Not metabolized |
| Excretion | - | Exclusively via kidneys |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5563e8af…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5563e8af-c6c9-42a2-974d-7d364a47f00a), label version 20260729. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amikacin]], [[Ampicillin]], [[Azithromycin]], [[Bacitracin]], [[Chloramphenicol]], [[Erythromycin]], [[Plazomicin]], [[Polymyxin B]], [[Tetracycline]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
