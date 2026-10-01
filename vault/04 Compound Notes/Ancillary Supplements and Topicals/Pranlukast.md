---
type: compound
schema-version: 2
compound-id: pranlukast-compound
name: Pranlukast
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cysteinyl leukotriene receptor 1 antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL21333
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (mainly CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Pranlukast
  url: https://en.wikipedia.org/w/index.php?title=Pranlukast&oldid=1332213073
  revision: 1332213073
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL21333
  pref-name: PRANLUKAST
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R03DC02
  targets:
  - id: CHEMBL1798
    name: Cysteinyl leukotriene receptor 1
    action: ANTAGONIST
  properties:
    full-mwt: 481.51
    mw-freebase: 481.51
    alogp: 4.63
    psa: 123.0
    hba: 7
    hbd: 2
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.29
    full-molformula: C27H23N5O4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pranlukast

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pranlukast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL21333](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL21333/) · max phase 4 · id via source catalogue

## Source summary

Cysteinyl leukotriene receptor 1 antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL21333).

## Mechanism

Cysteinyl leukotriene receptor 1 antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC R03DC02:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Leukotriene receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 481.51 | 4.63 | 123.0 | 2/7 | 0 | C27H23N5O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Cysteinyl leukotriene receptor 1 (CHEMBL1798)|Cysteinyl leukotriene receptor 1]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pranlukast*](https://en.wikipedia.org/w/index.php?title=Pranlukast&oldid=1332213073) (revision 1332213073, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours |
| Metabolism | hepatic | Hepatic (mainly CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Zafirlukast]] (Cysteinyl leukotriene receptor 1)
- **Same ATC subgroup:** [[Ibudilast]], [[Montelukast (Singulair)]], [[Zafirlukast]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
