---
type: compound
schema-version: 2
compound-id: sulbactam-compound
name: Sulbactam
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
chembl-id: CHEMBL403
chembl-max-phase: 4
half-life:
  value: 0.65
  value-max: 1.2
  unit: h
  notes: 0.65–1.20 hrs
protein-binding:
  value: 29.0
  value-max: null
  unit: percent
  notes: 29%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly kidneys (41–66% within 8 hrs)
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Sulbactam
  url: https://en.wikipedia.org/w/index.php?title=Sulbactam&oldid=1366237601
  revision: 1366237601
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL403
  pref-name: SULBACTAM
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01CG01
  targets: []
  properties:
    full-mwt: 233.24
    mw-freebase: 233.24
    alogp: -0.79
    psa: 91.75
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C8H11NO5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sulbactam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sulbactam-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL403](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL403/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Beta-lactamase inhibitor that is also, uniquely in this group, a direct antibacterial against Acinetobacter baumannii.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **ATC J01CG01:** ANTIINFECTIVES FOR SYSTEMIC USE › BETA-LACTAM ANTIBACTERIALS, PENICILLINS › Beta-lactamase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 233.24 | -0.79 | 91.75 | 1/4 | 0 | C8H11NO5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sulbactam*](https://en.wikipedia.org/w/index.php?title=Sulbactam&oldid=1366237601) (revision 1366237601, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.65–1.2 h | 0.65–1.20 hrs |
| Protein binding | 29 % | 29% |
| Excretion | - | Mainly kidneys (41–66% within 8 hrs) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Tazobactam]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
