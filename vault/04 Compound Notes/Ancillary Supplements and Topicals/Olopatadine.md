---
type: compound
schema-version: 2
compound-id: olopatadine-compound
name: Olopatadine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1189432
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
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Olopatadine
  url: https://en.wikipedia.org/w/index.php?title=Olopatadine&oldid=1348787908
  revision: 1348787908
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1189432
  pref-name: OLOPATADINE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R01AC08
  - S01GX09
  targets: []
  properties:
    full-mwt: 337.42
    mw-freebase: 337.42
    alogp: 3.59
    psa: 49.77
    hba: 3
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C21H23NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Opatanol
  ema-number: EMEA/H/C/000407
  url: https://www.ema.europa.eu/en/documents/product-information/opatanol-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/opatanol-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Olopatadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `olopatadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1189432](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1189432/) · max phase 4 · id via source catalogue

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1189432).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC R01AC08:** RESPIRATORY SYSTEM › DECONGESTANTS AND OTHER NASAL PREPARATIONS FOR TOPICAL USE › Antiallergic agents, excl. corticosteroids
- **ATC S01GX09:** SENSORY ORGANS › DECONGESTANTS AND ANTIALLERGICS › Other antiallergics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 337.42 | 3.59 | 49.77 | 1/3 | 0 | C21H23NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Olopatadine*](https://en.wikipedia.org/w/index.php?title=Olopatadine&oldid=1348787908) (revision 1348787908, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Opatanol*](https://www.ema.europa.eu/en/documents/product-information/opatanol-epar-product-information_en.pdf) (EMEA/H/C/000407) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/opatanol-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 12)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alcaftadine]], [[Antazoline]], [[Azelastine]], [[Bilastine]], [[Cetirizine]], [[Emedastine]], [[Epinastine]], [[Ketotifen]], [[Levocabastine]], [[Sodium Cromoglicate]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
