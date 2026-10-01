---
type: compound
schema-version: 2
compound-id: nalmefene-compound
name: Nalmefene
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL982
chembl-max-phase: 4
half-life:
  value: 10.8
  value-max: null
  unit: h
  notes: 10.8 ± 5.2 hours
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
bioavailability:
  value: 40.0
  value-max: 50.0
  notes: 40–50% (orally)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- identity-confirmed
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Nalmefene
  url: https://en.wikipedia.org/w/index.php?title=Nalmefene&oldid=1368650312
  revision: 1368650312
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL982
  pref-name: NALMEFENE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N07BB05
  targets: []
  properties:
    full-mwt: 339.44
    mw-freebase: 339.44
    alogp: 2.51
    psa: 52.93
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.81
    full-molformula: C21H25NO3
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
  status: discrepant
  product: Selincro
  ema-number: EMEA/H/C/002583
  url: https://www.ema.europa.eu/en/documents/product-information/selincro-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/selincro-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: discrepant
---

# Nalmefene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nalmefene-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL982](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL982/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Longer-acting opioid antagonist used for overdose and for alcohol use disorder.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC N07BB05:** NERVOUS SYSTEM › DRUGS USED IN ADDICTIVE DISORDERS › Drugs used in alcohol dependence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 339.44 | 2.51 | 52.93 | 2/4 | 0 | C21H25NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nalmefene*](https://en.wikipedia.org/w/index.php?title=Nalmefene&oldid=1368650312) (revision 1368650312, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10.8 h | 10.8 ± 5.2 hours |
| Protein binding | 45 % | 45% |
| Bioavailability | 40–50 % | 40–50% (orally) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Selincro*](https://www.ema.europa.eu/en/documents/product-information/selincro-epar-product-information_en.pdf) (EMEA/H/C/002583) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/selincro-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 12.5)
> - protein-binding: discrepant (SmPC values: 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acamprosate]], [[Disulfiram]], [[Naltrexone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
