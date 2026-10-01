---
type: compound
schema-version: 2
compound-id: deferiprone-compound
name: Deferiprone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Unknown
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL70927
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2 to 3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (75 to 90% in 24 hours)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Glucuronidation
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
  title: Deferiprone
  url: https://en.wikipedia.org/w/index.php?title=Deferiprone&oldid=1366617294
  revision: 1366617294
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL70927
  pref-name: DEFERIPRONE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - V03AC02
  targets: []
  properties:
    full-mwt: 139.15
    mw-freebase: 139.15
    alogp: 0.4
    psa: 42.23
    hba: 3
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C7H9NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 58dd1370-5042-833f-e063-6394a90a0777
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58dd1370-5042-833f-e063-6394a90a0777
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Ferriprox
  ema-number: EMEA/H/C/000236
  url: https://www.ema.europa.eu/en/documents/product-information/ferriprox-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ferriprox-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Deferiprone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `deferiprone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL70927](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL70927/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral iron chelator that penetrates cells well enough to remove cardiac iron, at the cost of agranulocytosis risk.

## Mechanism

Unknown _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC V03AC02:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Iron chelating agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 139.15 | 0.4 | 42.23 | 1/3 | 0 | C7H9NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Deferiprone*](https://en.wikipedia.org/w/index.php?title=Deferiprone&oldid=1366617294) (revision 1366617294, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2 to 3 hours |
| Metabolism | hepatic | Glucuronidation |
| Excretion | mainly urinary | Kidney (75 to 90% in 24 hours) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 58dd1370…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=58dd1370-5042-833f-e063-6394a90a0777), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ferriprox*](https://www.ema.europa.eu/en/documents/product-information/ferriprox-epar-product-information_en.pdf) (EMEA/H/C/000236) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ferriprox-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2, 3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Deferasirox]], [[Deferoxamine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
