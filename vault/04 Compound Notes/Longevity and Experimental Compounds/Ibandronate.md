---
type: compound
schema-version: 2
compound-id: ibandronate-compound
name: Ibandronate
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL997
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 60.0
  unit: h
  notes: 10 to 60 hours
protein-binding:
  value: 90.9
  value-max: 99.5
  unit: percent
  notes: 90.9 to 99.5%; (concentration-dependent)
bioavailability:
  value: 0.6
  value-max: null
  notes: 0.6%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Ibandronic acid
  url: https://en.wikipedia.org/w/index.php?title=Ibandronic_acid&oldid=1347358015
  revision: 1347358015
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL997
  pref-name: IBANDRONIC ACID
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M05BA06
  targets: []
  properties:
    full-mwt: 319.23
    mw-freebase: 319.23
    alogp: 0.5
    psa: 138.53
    hba: 4
    hbd: 5
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.31
    full-molformula: C9H23NO7P2
  identity-check: structure-confirmed
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
  product: Bondronat
  ema-number: EMEA/H/C/000101
  url: https://www.ema.europa.eu/en/documents/product-information/bondronat-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/bondronat-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ibandronate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ibandronate-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL997](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL997/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Bisphosphonate used to increase bone mineral density and reduce fracture risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC M05BA06:** MUSCULO-SKELETAL SYSTEM › DRUGS AFFECTING BONE STRUCTURE AND MINERALIZATION › Bisphosphonates

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 319.23 | 0.5 | 138.53 | 5/4 | 0 | C9H23NO7P2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ibandronic acid*](https://en.wikipedia.org/w/index.php?title=Ibandronic_acid&oldid=1347358015) (revision 1347358015, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–60 h | 10 to 60 hours |
| Protein binding | 90.9–99.5 % | 90.9 to 99.5%; (concentration-dependent) |
| Bioavailability | 0.6 % | 0.6% |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Bondronat*](https://www.ema.europa.eu/en/documents/product-information/bondronat-epar-product-information_en.pdf) (EMEA/H/C/000101) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/bondronat-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 10, 60)
> - protein-binding: consistent (SmPC values: 87)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alendronate (Fosamax)]], [[Clodronate]], [[Etidronate]], [[Pamidronate (Aredia)]], [[Risedronate]], [[Tiludronate]], [[Zoledronic Acid]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
