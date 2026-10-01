---
type: compound
schema-version: 2
compound-id: lumiracoxib-compound
name: Lumiracoxib
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
chembl-id: CHEMBL404108
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5-8 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: '>98%'
bioavailability:
  value: 74.0
  value-max: 90.0
  notes: 74-90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (54%) and faeces (43%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Predominantly in the liver via oxidation and hydroxylation (CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Lumiracoxib
  url: https://en.wikipedia.org/w/index.php?title=Lumiracoxib&oldid=1353680253
  revision: 1353680253
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL404108
  pref-name: LUMIRACOXIB
  molecule-type: Small molecule
  first-approval: 2005
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - M01AH06
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 293.73
    mw-freebase: 293.73
    alogp: 4.16
    psa: 49.33
    hba: 2
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C15H13ClFNO2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lumiracoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lumiracoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL404108](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL404108/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL404108).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2005
- **Flags:** withdrawn
- **ATC M01AH06:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Coxibs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 293.73 | 4.16 | 49.33 | 2/2 | 0 | C15H13ClFNO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lumiracoxib*](https://en.wikipedia.org/w/index.php?title=Lumiracoxib&oldid=1353680253) (revision 1353680253, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5-8 hours |
| Protein binding | 98 % | >98% |
| Bioavailability | 74–90 % | 74-90% |
| Metabolism | hepatic | Predominantly in the liver via oxidation and hydroxylation (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (54%) and faeces (43%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Celecoxib]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Meloxicam]] (Prostaglandin G/H synthase 2), [[Nabumetone]] (Prostaglandin G/H synthase 2), [[Parecoxib]] (Prostaglandin G/H synthase 2), [[Rofecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Celecoxib]], [[Etoricoxib]], [[Parecoxib]], [[Rofecoxib]], [[Valdecoxib]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
