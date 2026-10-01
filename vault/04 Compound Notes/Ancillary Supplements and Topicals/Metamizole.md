---
type: compound
schema-version: 2
compound-id: metamizole-compound
name: Metamizole
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
chembl-id: CHEMBL461522
chembl-max-phase: 4
half-life:
  value: 14.0
  value-max: null
  unit: min
  notes: '14 minutes (parent compound; IV route); metabolites: 2–4 hour'
protein-binding:
  value: 58.0
  value-max: null
  unit: percent
  notes: 58% (active metabolites)
bioavailability:
  value: 90.0
  value-max: null
  notes: Over 90% (active metabolites)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (96%, IV; 85%, oral), faeces (4%, IV).
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Metamizole
  url: https://en.wikipedia.org/w/index.php?title=Metamizole&oldid=1367392257
  revision: 1367392257
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL461522
  pref-name: METAMIZOLE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes: []
  targets: []
  properties:
    full-mwt: 311.36
    mw-freebase: 311.36
    alogp: 0.77
    psa: 84.54
    hba: 6
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C13H17N3O4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Metamizole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metamizole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL461522](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL461522/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL461522).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 311.36 | 0.77 | 84.54 | 1/6 | 0 | C13H17N3O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metamizole*](https://en.wikipedia.org/w/index.php?title=Metamizole&oldid=1367392257) (revision 1367392257, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14 min | 14 minutes (parent compound; IV route); metabolites: 2–4 hour |
| Protein binding | 58 % | 58% (active metabolites) |
| Bioavailability | 90 % | Over 90% (active metabolites) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine (96%, IV; 85%, oral), faeces (4%, IV). |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
