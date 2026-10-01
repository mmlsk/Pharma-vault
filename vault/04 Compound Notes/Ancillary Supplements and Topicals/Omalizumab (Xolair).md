---
type: compound
schema-version: 2
compound-id: omalizumab-compound
name: Omalizumab (Xolair)
aliases:
- Omalizumab
- Xolair
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Ig epsilon chain C region inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201589
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: null
  unit: d
  notes: 26 days
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Omalizumab
  url: https://en.wikipedia.org/w/index.php?title=Omalizumab&oldid=1372783889
  revision: 1372783889
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201589
  pref-name: OMALIZUMAB
  molecule-type: Antibody
  first-approval: 2003
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - R03DX05
  targets:
  - id: CHEMBL1834
    name: Immunoglobulin heavy constant epsilon
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7f6a2191-adfb-48b9-9bfa-0d9920479f0d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7f6a2191-adfb-48b9-9bfa-0d9920479f0d
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Xolair
  ema-number: EMEA/H/C/000606
  url: https://www.ema.europa.eu/en/documents/product-information/xolair-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/xolair-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Omalizumab (Xolair)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `omalizumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Omalizumab, Xolair
- **ChEMBL:** [CHEMBL1201589](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201589/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-IgE monoclonal antibody for allergic asthma, chronic urticaria, and food-allergy risk reduction; injectable biologic with anaphylaxis precautions.

## Mechanism

Ig epsilon chain C region inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2003
- **Flags:** black-box warning
- **ATC R03DX05:** RESPIRATORY SYSTEM › OTHER SYSTEMIC DRUGS FOR OBSTRUCTIVE AIRWAY DISEASES › Other systemic drugs for obstructive airway diseases

**Targets (ChEMBL curated mechanisms):**

- [[Immunoglobulin heavy constant epsilon (CHEMBL1834)|Immunoglobulin heavy constant epsilon]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Omalizumab*](https://en.wikipedia.org/w/index.php?title=Omalizumab&oldid=1372783889) (revision 1372783889, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26 d | 26 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7f6a2191…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7f6a2191-adfb-48b9-9bfa-0d9920479f0d), label version 20260813. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 576, 624)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Xolair*](https://www.ema.europa.eu/en/documents/product-information/xolair-epar-product-information_en.pdf) (EMEA/H/C/000606) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/xolair-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 624)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benralizumab]], [[Mepolizumab]], [[Reslizumab]], [[Roflumilast]], [[Roflumilast (topical)]], [[Roflumilast Foam (Zoryve)]], [[Tezepelumab]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
