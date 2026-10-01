---
type: compound
schema-version: 2
compound-id: telavancin-compound
name: Telavancin
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
chembl-id: CHEMBL507870
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: null
  unit: h
  notes: 9 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%, mostly to albumin
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 76% in urine, <1% in feces
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
  title: Telavancin
  url: https://en.wikipedia.org/w/index.php?title=Telavancin&oldid=1329507747
  revision: 1329507747
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL507870
  pref-name: TELAVANCIN
  molecule-type: Protein
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01XA03
  targets: []
  properties:
    full-mwt: 1755.66
    mw-freebase: 1755.66
    full-molformula: C80H106Cl2N11O27P
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Telavancin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `telavancin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL507870](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL507870/) · max phase 4 · id via Wikipedia infobox

## Source summary

Lipoglycopeptide with dual cell wall and membrane activity, limited in practice by nephrotoxicity and a fetal risk signal.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC J01XA03:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Glycopeptide antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1755.66 | - | - | -/- | - | C80H106Cl2N11O27P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Telavancin*](https://en.wikipedia.org/w/index.php?title=Telavancin&oldid=1329507747) (revision 1329507747, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9 h | 9 hours |
| Protein binding | 90 % | 90%, mostly to albumin |
| Bioavailability | - | N/A |
| Excretion | - | 76% in urine, <1% in feces |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dalbavancin]], [[Oritavancin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
