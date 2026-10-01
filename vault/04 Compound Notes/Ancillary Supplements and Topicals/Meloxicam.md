---
type: compound
schema-version: 2
compound-id: meloxicam-compound
name: Meloxicam
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
chembl-id: CHEMBL599
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours
protein-binding:
  value: 99.4
  value-max: null
  unit: percent
  notes: 99.4%
bioavailability:
  value: 89.0
  value-max: null
  notes: 89%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces equally
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9 and 3A4-mediated)
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Meloxicam
  url: https://en.wikipedia.org/w/index.php?title=Meloxicam&oldid=1370163287
  revision: 1370163287
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL599
  pref-name: MELOXICAM
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M01AC06
  - M01AC56
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 351.41
    mw-freebase: 351.41
    alogp: 1.95
    psa: 99.6
    hba: 6
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C14H13N3O4S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 385b7cf4-976a-4a58-9ebc-def8b6e78b75
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=385b7cf4-976a-4a58-9ebc-def8b6e78b75
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Meloxicam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `meloxicam-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL599](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL599/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL599).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **Flags:** black-box warning
- **ATC M01AC06:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Oxicams
- **ATC M01AC56:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Oxicams

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 351.41 | 1.95 | 99.6 | 2/6 | 0 | C14H13N3O4S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Meloxicam*](https://en.wikipedia.org/w/index.php?title=Meloxicam&oldid=1370163287) (revision 1370163287, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours |
| Protein binding | 99.4 % | 99.4% |
| Bioavailability | 89 % | 89% |
| Metabolism | hepatic | Liver (CYP2C9 and 3A4-mediated) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine and feces equally |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 385b7cf4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=385b7cf4-976a-4a58-9ebc-def8b6e78b75), label version 20260819. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12.5, 13, 15, 19.2, 19.5, 20)
> - protein-binding: consistent (label values: 99, 99.4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Celecoxib]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Lumiracoxib]] (Prostaglandin G/H synthase 2), [[Nabumetone]] (Prostaglandin G/H synthase 2), [[Parecoxib]] (Prostaglandin G/H synthase 2), [[Rofecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Lornoxicam]], [[Piroxicam]], [[Tenoxicam]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
