---
type: compound
schema-version: 2
compound-id: alclofenac-compound
name: Alclofenac
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL94081
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 5.5
  unit: h
  notes: 1.5-5.5 h
protein-binding:
  value: 90.0
  value-max: 99.0
  unit: percent
  notes: 90-99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly renal
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
  title: Alclofenac
  url: https://en.wikipedia.org/w/index.php?title=Alclofenac&oldid=1367948665
  revision: 1367948665
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL94081
  pref-name: ALCLOFENAC
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - M01AB06
  targets:
  - id: CHEMBL221
    name: Prostaglandin G/H synthase 1
    action: INHIBITOR
  properties:
    full-mwt: 226.66
    mw-freebase: 226.66
    alogp: 2.53
    psa: 46.53
    hba: 2
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C11H11ClO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Alclofenac

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alclofenac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL94081](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL94081/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-1 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL94081).

## Mechanism

Cyclooxygenase-1 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn
- **ATC M01AB06:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Acetic acid derivatives and related substances

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 226.66 | 2.53 | 46.53 | 1/2 | 0 | C11H11ClO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 1 (CHEMBL221)|Prostaglandin G/H synthase 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alclofenac*](https://en.wikipedia.org/w/index.php?title=Alclofenac&oldid=1367948665) (revision 1367948665, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–5.5 h | 1.5-5.5 h |
| Protein binding | 90–99 % | 90-99% |
| Excretion | - | Mostly renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Mofezolac]] (Prostaglandin G/H synthase 1)
- **Same ATC subgroup:** [[Aceclofenac]], [[Acemetacin]], [[Diclofenac]], [[Etodolac]], [[Indomethacin]], [[Ketorolac]], [[Sulindac]], [[Tolmetin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
