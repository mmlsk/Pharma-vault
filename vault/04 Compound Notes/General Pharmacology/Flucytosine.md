---
type: compound
schema-version: 2
compound-id: flucytosine-compound
name: Flucytosine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Thymidylate synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1463
chembl-max-phase: 4
half-life:
  value: 2.4
  value-max: 4.8
  unit: h
  notes: 2.4 to 4.8 hours
protein-binding:
  value: 2.9
  value-max: 4.0
  unit: percent
  notes: 2.9 to 4%
bioavailability:
  value: 75.0
  value-max: 90.0
  notes: 75 to 90% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (90%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: minimal, in the GI tract
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Flucytosine
  url: https://en.wikipedia.org/w/index.php?title=Flucytosine&oldid=1364374893
  revision: 1364374893
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1463
  pref-name: FLUCYTOSINE
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D01AE21
  - J02AX01
  targets:
  - id: CHEMBL4665
    name: Thymidylate synthase
    action: INHIBITOR
  - id: CHEMBL2364680
    name: Thymidylate synthase
    action: INHIBITOR
  properties:
    full-mwt: 129.09
    mw-freebase: 129.09
    alogp: -0.51
    psa: 71.77
    hba: 3
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C4H4FN3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: bfc817db-ab65-5cd7-e053-2995a90a8ee8
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bfc817db-ab65-5cd7-e053-2995a90a8ee8
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Flucytosine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flucytosine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1463](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1463/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Pyrimidine analogue used only in combination, because resistance develops rapidly when it is given alone. The partner in cryptococcal meningitis induction therapy.

## Mechanism

Thymidylate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971
- **Flags:** black-box warning
- **ATC D01AE21:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Other antifungals for topical use
- **ATC J02AX01:** ANTIINFECTIVES FOR SYSTEMIC USE › ANTIMYCOTICS FOR SYSTEMIC USE › Other antimycotics for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 129.09 | -0.51 | 71.77 | 2/3 | 0 | C4H4FN3O |

**Targets (ChEMBL curated mechanisms):**

- [[Thymidylate synthase (CHEMBL4665)|Thymidylate synthase]] - inhibitor · SINGLE PROTEIN
- [[Thymidylate synthase (CHEMBL2364680)|Thymidylate synthase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flucytosine*](https://en.wikipedia.org/w/index.php?title=Flucytosine&oldid=1364374893) (revision 1364374893, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4–4.8 h | 2.4 to 4.8 hours |
| Protein binding | 2.9–4 % | 2.9 to 4% |
| Bioavailability | 75–90 % | 75 to 90% (by mouth) |
| Metabolism | - | minimal, in the GI tract |
| Excretion | mainly urinary | kidney (90%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set bfc817db…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bfc817db-ab65-5cd7-e053-2995a90a8ee8), label version 20260108. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.4, 4.8, 7.4, 29.9, 85, 250)
> - protein-binding: consistent (label values: 2.9, 4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amorolfine]], [[Butenafine]], [[Naftifine]], [[Salicylic Acid]], [[Tavaborole]], [[Terbinafine (oral, Lamisil)]], [[Undecylenic Acid]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
