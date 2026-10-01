---
type: compound
schema-version: 2
compound-id: piperacillin-compound
name: Piperacillin
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
chembl-id: CHEMBL702
chembl-max-phase: 4
half-life:
  value: 36.0
  value-max: 72.0
  unit: min
  notes: 36–72 minutes
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: 0.0
  value-max: null
  notes: 0% oral
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.8
  notes: 20% in bile, 80% unchanged in urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Largely not metabolized
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
  title: Piperacillin
  url: https://en.wikipedia.org/w/index.php?title=Piperacillin&oldid=1289430734
  revision: 1289430734
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL702
  pref-name: PIPERACILLIN
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01CA12
  targets: []
  properties:
    full-mwt: 517.56
    mw-freebase: 517.56
    alogp: -0.24
    psa: 156.43
    hba: 7
    hbd: 3
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.34
    full-molformula: C23H27N5O7S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Piperacillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `piperacillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL702](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL702/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Ureidopenicillin with antipseudomonal activity, used almost exclusively combined with tazobactam. A mainstay of empirical therapy for hospital-acquired sepsis and neutropenic fever.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **ATC J01CA12:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Penicillins with extended spectrum

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 517.56 | -0.24 | 156.43 | 3/7 | 1 | C23H27N5O7S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Piperacillin*](https://en.wikipedia.org/w/index.php?title=Piperacillin&oldid=1289430734) (revision 1289430734, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36–72 min | 36–72 minutes |
| Protein binding | 30 % | 30% |
| Bioavailability | 0 % | 0% oral |
| Metabolism | - | Largely not metabolized |
| Excretion | mainly urinary · fe 0.8 | 20% in bile, 80% unchanged in urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amoxicillin]], [[Ampicillin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
