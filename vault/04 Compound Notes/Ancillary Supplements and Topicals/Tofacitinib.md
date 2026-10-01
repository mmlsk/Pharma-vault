---
type: compound
schema-version: 2
compound-id: tofacitinib-compound
name: Tofacitinib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Janus Kinase (JAK) inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL221959
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: 74.0
  value-max: null
  notes: 74%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (via CYP3A4 and CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Tofacitinib
  url: https://en.wikipedia.org/w/index.php?title=Tofacitinib&oldid=1371080185
  revision: 1371080185
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL221959
  pref-name: TOFACITINIB
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AF01
  targets: []
  properties:
    full-mwt: 312.38
    mw-freebase: 312.38
    alogp: 1.54
    psa: 88.91
    hba: 5
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.93
    full-molformula: C16H20N6O
pk-verification:
  source: fda-label
  status: consistent
  set-id: 253635c8-1ea7-41ba-b216-dea5e3305c47
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=253635c8-1ea7-41ba-b216-dea5e3305c47
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Xeljanz
  ema-number: EMEA/H/C/004214
  url: https://www.ema.europa.eu/en/documents/product-information/xeljanz-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tofacitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tofacitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL221959](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL221959/) · max phase 4 · id via source catalogue

## Source summary

Janus Kinase (JAK) inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL221959).

## Mechanism

Janus Kinase (JAK) inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **Flags:** black-box warning
- **ATC L04AF01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Janus-associated kinase (JAK) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 312.38 | 1.54 | 88.91 | 1/5 | 0 | C16H20N6O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tofacitinib*](https://en.wikipedia.org/w/index.php?title=Tofacitinib&oldid=1371080185) (revision 1371080185, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Protein binding | 40 % | 40% |
| Bioavailability | 74 % | 74% |
| Metabolism | hepatic | Liver (via CYP3A4 and CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 253635c8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=253635c8-1ea7-41ba-b216-dea5e3305c47), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.5, 1, 3)
> - protein-binding: consistent (label values: 40)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Xeljanz*](https://www.ema.europa.eu/en/documents/product-information/xeljanz-epar-product-information_en.pdf) (EMEA/H/C/004214). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.5, 1, 3)
> - protein-binding: consistent (SmPC values: 40)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Baricitinib (oral, Olumiant)]], [[Deucravacitinib (Sotyktu)]], [[Filgotinib]], [[Peficitinib]], [[Ritlecitinib (oral, Litfulo)]], [[Upadacitinib (Rinvoq)]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
