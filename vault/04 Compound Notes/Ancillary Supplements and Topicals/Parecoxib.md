---
type: compound
schema-version: 2
compound-id: parecoxib-compound
name: Parecoxib
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
chembl-id: CHEMBL1206690
chembl-max-phase: 4
half-life:
  value: 22.0
  value-max: null
  unit: min
  notes: 22 minutes (parecoxib); 8 hours (valdecoxib)
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (70%, metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver to valdecoxib and propionic acid; CYP extensively involved (mainly CYP3A4 and 2C9)
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Parecoxib
  url: https://en.wikipedia.org/w/index.php?title=Parecoxib&oldid=1370867901
  revision: 1370867901
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1206690
  pref-name: PARECOXIB
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M01AH04
  targets:
  - id: CHEMBL230
    name: Prostaglandin G/H synthase 2
    action: INHIBITOR
  properties:
    full-mwt: 370.43
    mw-freebase: 370.43
    alogp: 3.53
    psa: 89.27
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.74
    full-molformula: C19H18N2O4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Dynastat
  ema-number: EMEA/H/C/000381
  url: https://www.ema.europa.eu/en/documents/product-information/dynastat-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/dynastat-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Parecoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `parecoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1206690](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1206690/) · max phase 4 · id via source catalogue

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1206690).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **Flags:** prodrug
- **ATC M01AH04:** MUSCULO-SKELETAL SYSTEM › ANTIINFLAMMATORY AND ANTIRHEUMATIC PRODUCTS, NON-STEROIDS › Coxibs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 370.43 | 3.53 | 89.27 | 1/5 | 0 | C19H18N2O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Prostaglandin G-H synthase 2 (CHEMBL230)|Prostaglandin G/H synthase 2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Parecoxib*](https://en.wikipedia.org/w/index.php?title=Parecoxib&oldid=1370867901) (revision 1370867901, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 22 min | 22 minutes (parecoxib); 8 hours (valdecoxib) |
| Protein binding | 98 % | 98% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver to valdecoxib and propionic acid; CYP extensively involved (mainly CYP3A4 and 2C9) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (70%, metabolites) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Dynastat*](https://www.ema.europa.eu/en/documents/product-information/dynastat-epar-product-information_en.pdf) (EMEA/H/C/000381) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/dynastat-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.367, 8)
> - protein-binding: consistent (SmPC values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aceclofenac]] (Prostaglandin G/H synthase 2), [[Carprofen]] (Prostaglandin G/H synthase 2), [[Celecoxib]] (Prostaglandin G/H synthase 2), [[Cimicoxib]] (Prostaglandin G/H synthase 2), [[Etodolac]] (Prostaglandin G/H synthase 2), [[Etoricoxib]] (Prostaglandin G/H synthase 2), [[Gw-406381]] (Prostaglandin G/H synthase 2), [[Iguratimod]] (Prostaglandin G/H synthase 2), [[Lumiracoxib]] (Prostaglandin G/H synthase 2), [[Meloxicam]] (Prostaglandin G/H synthase 2), [[Nabumetone]] (Prostaglandin G/H synthase 2), [[Rofecoxib]] (Prostaglandin G/H synthase 2)
- **Same ATC subgroup:** [[Celecoxib]], [[Etoricoxib]], [[Lumiracoxib]], [[Rofecoxib]], [[Valdecoxib]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
