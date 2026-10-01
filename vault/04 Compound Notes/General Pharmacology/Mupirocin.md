---
type: compound
schema-version: 2
compound-id: mupirocin-compound
name: Mupirocin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Isoleucyl-tRNA synthetase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL719
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 40.0
  unit: min
  notes: 20 to 40 minutes
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
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
  title: Mupirocin
  url: https://en.wikipedia.org/w/index.php?title=Mupirocin&oldid=1360195352
  revision: 1360195352
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL719
  pref-name: MUPIROCIN
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D06AX09
  - R01AX06
  targets:
  - id: CHEMBL1982
    name: Isoleucine--tRNA ligase
    action: INHIBITOR
  - id: CHEMBL2364671
    name: Isoleucine--tRNA ligase
    action: INHIBITOR
  properties:
    full-mwt: 500.63
    mw-freebase: 500.63
    alogp: 2.59
    psa: 146.05
    hba: 8
    hbd: 4
    rtb: 16
    num-ro5-violations: 1
    qed-weighted: 0.11
    full-molformula: C26H44O9
pk-verification:
  source: fda-label
  status: consistent
  set-id: 831060e6-17ef-b0a0-e053-2991aa0aeb4f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=831060e6-17ef-b0a0-e053-2991aa0aeb4f
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Mupirocin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mupirocin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL719](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL719/) · max phase 4 · id via Wikipedia infobox

## Source summary

Topical agent for staphylococcal impetigo and nasal MRSA decolonisation, with a target no systemic antibiotic shares.

## Mechanism

Isoleucyl-tRNA synthetase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **ATC D06AX09:** DERMATOLOGICALS › ANTIBIOTICS FOR TOPICAL USE › Other antibiotics for topical use
- **ATC R01AX06:** RESPIRATORY SYSTEM › DECONGESTANTS AND OTHER NASAL PREPARATIONS FOR TOPICAL USE › Other nasal preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 500.63 | 2.59 | 146.05 | 4/8 | 1 | C26H44O9 |

**Targets (ChEMBL curated mechanisms):**

- [[Isoleucine--tRNA ligase (CHEMBL1982)|Isoleucine--tRNA ligase]] - inhibitor · SINGLE PROTEIN
- [[Isoleucine--tRNA ligase (CHEMBL2364671)|Isoleucine--tRNA ligase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mupirocin*](https://en.wikipedia.org/w/index.php?title=Mupirocin&oldid=1360195352) (revision 1360195352, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–40 min | 20 to 40 minutes |
| Protein binding | 97 % | 97% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 831060e6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=831060e6-17ef-b0a0-e053-2991aa0aeb4f), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.333, 0.5, 0.667, 1.333)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amikacin]], [[Bacitracin]], [[Chloramphenicol]], [[Ipratropium]], [[Retinol]], [[Rifaximin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
