---
type: compound
schema-version: 2
compound-id: fenoprofen-compound
name: Fenoprofen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1297
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (~90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Major urinary metabolites are fenoprofen glucuronide and 4′-hydroxyfenoprofen glucuronide.
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
  title: Fenoprofen
  url: https://en.wikipedia.org/w/index.php?title=Fenoprofen&oldid=1316039569
  revision: 1316039569
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1297
  pref-name: FENOPROFEN
  molecule-type: Small molecule
  first-approval: 1976
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01AE04
  targets: []
  properties:
    full-mwt: 242.27
    mw-freebase: 242.27
    alogp: 3.67
    psa: 46.53
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C15H14O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fenoprofen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fenoprofen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1297](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1297/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1297).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1976
- **Flags:** black-box warning
- **ATC M01AE04:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Propionic acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 242.27 | 3.67 | 46.53 | 1/2 | 0 | C15H14O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fenoprofen*](https://en.wikipedia.org/w/index.php?title=Fenoprofen&oldid=1316039569) (revision 1316039569, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Metabolism | hepatic | Major urinary metabolites are fenoprofen glucuronide and 4′-hydroxyfenoprofen glucuronide. |
| Excretion | mainly urinary | Renal (~90%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dexibuprofen]], [[Dexketoprofen]], [[Flurbiprofen]], [[Ibuprofen]], [[Indoprofen]], [[Ketoprofen]], [[Loxoprofen]], [[Naproxcinod]], [[Naproxen]], [[Oxaprozin]], [[Pirprofen]], [[Suprofen]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
