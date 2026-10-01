---
type: compound
schema-version: 2
compound-id: proguanil-compound
name: Proguanil
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
chembl-id: CHEMBL1377
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 21.0
  unit: h
  notes: 12–21 hours
protein-binding:
  value: 75.0
  value-max: null
  unit: percent
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: By liver (CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Proguanil
  url: https://en.wikipedia.org/w/index.php?title=Proguanil&oldid=1338892608
  revision: 1338892608
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1377
  pref-name: PROGUANIL
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01BB01
  - P01BB51
  targets: []
  properties:
    full-mwt: 253.74
    mw-freebase: 253.74
    alogp: 2.21
    psa: 83.79
    hba: 2
    hbd: 5
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.41
    full-molformula: C11H16ClN5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Proguanil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `proguanil-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1377](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1377/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Biguanide prodrug whose active metabolite is an antifolate, paired with atovaquone for prophylaxis and treatment.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **Flags:** prodrug
- **ATC P01BB01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Biguanides
- **ATC P01BB51:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Biguanides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 253.74 | 2.21 | 83.79 | 5/2 | 0 | C11H16ClN5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Proguanil*](https://en.wikipedia.org/w/index.php?title=Proguanil&oldid=1338892608) (revision 1338892608, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–21 h | 12–21 hours |
| Protein binding | 75 % | 75% |
| Metabolism | hepatic | By liver (CYP2C19) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | cycloguanil and 4-chlorophenylbiguanide |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
