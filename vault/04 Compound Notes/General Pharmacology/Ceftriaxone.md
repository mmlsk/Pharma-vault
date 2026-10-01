---
type: compound
schema-version: 2
compound-id: ceftriaxone-compound
name: Ceftriaxone
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
chembl-id: CHEMBL161
chembl-max-phase: 4
half-life:
  value: 5.8
  value-max: 8.7
  unit: h
  notes: 5.8–8.7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: n/a
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 33–67% kidney, 35–45% biliary
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Negligible
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
  title: Ceftriaxone
  url: https://en.wikipedia.org/w/index.php?title=Ceftriaxone&oldid=1360557064
  revision: 1360557064
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL161
  pref-name: CEFTRIAXONE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DD04
  - J01DD54
  targets: []
  properties:
    full-mwt: 554.59
    mw-freebase: 554.59
    alogp: -1.2
    psa: 215.22
    hba: 15
    hbd: 4
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.13
    full-molformula: C18H18N8O7S3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 86ec0a92-a552-4a6d-9125-a54f95e43392
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=86ec0a92-a552-4a6d-9125-a54f95e43392
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ceftriaxone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ceftriaxone-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL161](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL161/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Third-generation cephalosporin with a long half-life allowing once-daily dosing and good cerebrospinal fluid penetration, making it the empirical choice in bacterial meningitis.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC J01DD04:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Third-generation cephalosporins
- **ATC J01DD54:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Third-generation cephalosporins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 554.59 | -1.2 | 215.22 | 4/15 | 2 | C18H18N8O7S3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ceftriaxone*](https://en.wikipedia.org/w/index.php?title=Ceftriaxone&oldid=1360557064) (revision 1360557064, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8–8.7 h | 5.8–8.7 hours |
| Bioavailability | - | n/a |
| Metabolism | - | Negligible |
| Excretion | mainly urinary | 33–67% kidney, 35–45% biliary |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 86ec0a92…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=86ec0a92-a552-4a6d-9125-a54f95e43392), label version 20260618. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5.8, 8.7, 23, 25, 46, 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ceftazidime]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
