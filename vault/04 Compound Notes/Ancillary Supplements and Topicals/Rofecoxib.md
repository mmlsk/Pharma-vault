---
type: compound
schema-version: 2
compound-id: rofecoxib-compound
name: Rofecoxib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL122
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: null
  unit: h
  notes: 17 hours
protein-binding:
  value: 87.0
  value-max: null
  unit: percent
  notes: 87%
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: bile duct/kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver
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
  title: Rofecoxib
  url: https://en.wikipedia.org/w/index.php?title=Rofecoxib&oldid=1373664641
  revision: 1373664641
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL122
  pref-name: ROFECOXIB
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - M01AH02
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 314.36
    mw-freebase: 314.36
    alogp: 2.56
    psa: 60.44
    hba: 4
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C17H14O4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rofecoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rofecoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL122](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL122/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL122).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning, withdrawn
- **ATC M01AH02:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Coxibs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 314.36 | 2.56 | 60.44 | 0/4 | 0 | C17H14O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rofecoxib*](https://en.wikipedia.org/w/index.php?title=Rofecoxib&oldid=1373664641) (revision 1373664641, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17 h | 17 hours |
| Protein binding | 87 % | 87% |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | liver |
| Excretion | mainly non-renal | bile duct/kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Celecoxib]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Lumiracoxib]] (Prostaglandin G/H synthase 2), [[Meloxicam]] (Prostaglandin G/H synthase 2), [[Nabumetone]] (Prostaglandin G/H synthase 2), [[Parecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Celecoxib]], [[Etoricoxib]], [[Lumiracoxib]], [[Parecoxib]], [[Valdecoxib]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
