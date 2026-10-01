---
type: compound
schema-version: 2
compound-id: nitrofurantoin-compound
name: Nitrofurantoin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL572
chembl-max-phase: 4
half-life:
  value: 0.33
  value-max: 1.7
  unit: h
  notes: 0.33–1.7 hours
protein-binding:
  value: 60.0
  value-max: 77.0
  unit: percent
  notes: 60–77% (primarily albumin)
bioavailability:
  value: 20.0
  value-max: 94.0
  notes: ~20–94%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.25
  notes: Almost exclusively urine (4–59% over 3–30 hours; ~20–25% unchanged) and bile
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Nitrofurantoin
  url: https://en.wikipedia.org/w/index.php?title=Nitrofurantoin&oldid=1365942340
  revision: 1365942340
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL572
  pref-name: NITROFURANTOIN
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XE01
  - J01XE51
  targets:
  - id: CHEMBL2364041
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 238.16
    mw-freebase: 238.16
    alogp: 0.07
    psa: 118.05
    hba: 6
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.35
    full-molformula: C8H6N4O5
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 87505f8f-2056-4e55-adf5-5b7309081d7c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=87505f8f-2056-4e55-adf5-5b7309081d7c
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Nitrofurantoin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nitrofurantoin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL572](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL572/) · max phase 4 · id via Wikipedia infobox

## Source summary

Urinary-specific agent concentrated in urine but with negligible tissue levels, so it treats cystitis and never pyelonephritis.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **ATC J01XE01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Nitrofuran derivatives
- **ATC J01XE51:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Nitrofuran derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 238.16 | 0.07 | 118.05 | 1/6 | 0 | C8H6N4O5 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL2364041)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nitrofurantoin*](https://en.wikipedia.org/w/index.php?title=Nitrofurantoin&oldid=1365942340) (revision 1365942340, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.33–1.7 h | 0.33–1.7 hours |
| Protein binding | 60–77 % | 60–77% (primarily albumin) |
| Bioavailability | 20–94 % | ~20–94% |
| Excretion | - · fe 0.25 | Almost exclusively urine (4–59% over 3–30 hours; ~20–25% unchanged) and bile |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 87505f8f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=87505f8f-2056-4e55-adf5-5b7309081d7c), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Metronidazole]] (DNA)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
