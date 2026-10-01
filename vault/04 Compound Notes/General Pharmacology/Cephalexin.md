---
type: compound
schema-version: 2
compound-id: cephalexin-compound
name: Cephalexin
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
chembl-id: CHEMBL1727
chembl-max-phase: 4
half-life:
  value: 0.6
  value-max: 1.2
  unit: h
  notes: 0.6–1.2 hours
protein-binding:
  value: 15.0
  value-max: null
  unit: percent
  notes: 15%
bioavailability:
  value: null
  value-max: null
  notes: Well absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 80% excreted unchanged in urine within 6 hours of administration
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
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Cefalexin
  url: https://en.wikipedia.org/w/index.php?title=Cefalexin&oldid=1374815637
  revision: 1374815637
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1727
  pref-name: CEPHALEXIN ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 347.4
    mw-freebase: 347.4
    alogp: 0.44
    psa: 112.73
    hba: 5
    hbd: 3
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C16H17N3O4S
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: e54df878-c235-4aa3-af33-fe5287c73138
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e54df878-c235-4aa3-af33-fe5287c73138
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Cephalexin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cephalexin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1727](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1727/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Oral first-generation cephalosporin used for skin and soft tissue infection and for uncomplicated urinary infection in pregnancy.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 347.4 | 0.44 | 112.73 | 3/5 | 0 | C16H17N3O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefalexin*](https://en.wikipedia.org/w/index.php?title=Cefalexin&oldid=1374815637) (revision 1374815637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.6–1.2 h | 0.6–1.2 hours |
| Protein binding | 15 % | 15% |
| Bioavailability | - | Well absorbed |
| Metabolism | - | 80% excreted unchanged in urine within 6 hours of administration |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e54df878…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e54df878-c235-4aa3-af33-fe5287c73138), label version 20260914. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 10, 15)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
