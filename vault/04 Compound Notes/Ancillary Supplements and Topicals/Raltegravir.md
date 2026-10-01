---
type: compound
schema-version: 2
compound-id: raltegravir-compound
name: Raltegravir
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
chembl-id: CHEMBL254316
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: null
  unit: h
  notes: 9 hours
protein-binding:
  value: 83.0
  value-max: null
  unit: percent
  notes: 83%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% (FDA)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: feces and urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (UGT1A1)
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Raltegravir
  url: https://en.wikipedia.org/w/index.php?title=Raltegravir&oldid=1337657435
  revision: 1337657435
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL254316
  pref-name: RALTEGRAVIR
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AJ01
  targets: []
  properties:
    full-mwt: 444.42
    mw-freebase: 444.42
    alogp: 0.91
    psa: 152.24
    hba: 9
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.51
    full-molformula: C20H21FN6O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 46ef8e2e-ae63-6a3c-e054-00144ff8d46c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=46ef8e2e-ae63-6a3c-e054-00144ff8d46c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Isentress
  ema-number: EMEA/H/C/000860
  url: https://www.ema.europa.eu/en/documents/product-information/isentress-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/isentress-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Raltegravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `raltegravir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL254316](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL254316/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits HIV integrase strand transfer as a component of combination antiretroviral therapy.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **ATC J05AJ01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Integrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 444.42 | 0.91 | 152.24 | 3/9 | 0 | C20H21FN6O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Raltegravir*](https://en.wikipedia.org/w/index.php?title=Raltegravir&oldid=1337657435) (revision 1337657435, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9 h | 9 hours |
| Protein binding | 83 % | 83% |
| Bioavailability | 60 % | 60% (FDA) |
| Metabolism | hepatic | Liver (UGT1A1) |
| Excretion | - | feces and urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 46ef8e2e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=46ef8e2e-ae63-6a3c-e054-00144ff8d46c), label version 20260713. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 9)
> - protein-binding: consistent (label values: 83)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Isentress*](https://www.ema.europa.eu/en/documents/product-information/isentress-epar-product-information_en.pdf) (EMEA/H/C/000860) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/isentress-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1, 9)
> - protein-binding: consistent (SmPC values: 83)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cabotegravir]], [[Dolutegravir]], [[Elvitegravir]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
