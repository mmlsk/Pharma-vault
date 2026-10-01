---
type: compound
schema-version: 2
compound-id: deucravacitinib-compound
name: Deucravacitinib (Sotyktu)
aliases:
- Deucravacitinib
- Sotyktu
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
chembl-id: CHEMBL4435170
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 82.0
  value-max: 90.0
  unit: percent
  notes: 82–90%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces, urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-curated
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Deucravacitinib
  url: https://en.wikipedia.org/w/index.php?title=Deucravacitinib&oldid=1358949490
  revision: 1358949490
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: curated-identity
  parent-id: CHEMBL4596392
  pref-name: DEUCRAVACITINIB
  molecule-type: Small molecule
  first-approval: 2022
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L04AF07
  targets: []
  properties:
    full-mwt: 422.45
    mw-freebase: 422.45
    alogp: 1.73
    psa: 135.95
    hba: 9
    hbd: 3
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C20H22N8O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: ff4d7258-5068-4cdf-9692-8cae04c3198e
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff4d7258-5068-4cdf-9692-8cae04c3198e
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Sotyktu
  ema-number: EMEA/H/C/005755
  url: https://www.ema.europa.eu/en/documents/product-information/sotyktu-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/sotyktu-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Deucravacitinib (Sotyktu)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `deucravacitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Deucravacitinib, Sotyktu
- **ChEMBL:** [CHEMBL4435170](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4435170/) · max phase 4 · id via curated identity decision · structure check: ✅ InChIKey matches PubChem

## Source summary

Allosteric TYK2 inhibitor for plaque psoriasis with greater kinase selectivity than broad JAK inhibitors.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2022
- **ATC L04AF07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Janus-associated kinase (JAK) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 422.45 | 1.73 | 135.95 | 3/9 | 0 | C20H22N8O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Deucravacitinib*](https://en.wikipedia.org/w/index.php?title=Deucravacitinib&oldid=1358949490) (revision 1358949490, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 82–90 % | 82–90% |
| Bioavailability | 99 % | 99% |
| Metabolism | hepatic | Liver (primarily CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | BMT-153261 (active) |
| Excretion | - | Feces, urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ff4d7258…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ff4d7258-5068-4cdf-9692-8cae04c3198e), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10)
> - protein-binding: consistent (label values: 82, 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Sotyktu*](https://www.ema.europa.eu/en/documents/product-information/sotyktu-epar-product-information_en.pdf) (EMEA/H/C/005755) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/sotyktu-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 10, 11)
> - protein-binding: consistent (SmPC values: 81.6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Baricitinib (oral, Olumiant)]], [[Filgotinib]], [[Peficitinib]], [[Ritlecitinib (oral, Litfulo)]], [[Tofacitinib]], [[Upadacitinib (Rinvoq)]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
