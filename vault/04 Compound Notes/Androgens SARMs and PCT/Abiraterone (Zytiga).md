---
type: compound
schema-version: 2
compound-id: abiraterone-compound
name: Abiraterone (Zytiga)
aliases:
- Abiraterone
- Zytiga
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Cytochrome P450 17A1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL271227
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 24.0
  unit: h
  notes: 'Abiraterone: 12–24 hours'
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 'Abiraterone: ~99.8% (to albumin and α1-AGp)'
bioavailability:
  value: 50.0
  value-max: null
  notes: Unknown, but may be 50% at most on empty stomach
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 88%; Urine: 5%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Esterases, CYP3A4, SULT2A1
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
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Abiraterone acetate
  url: https://en.wikipedia.org/w/index.php?title=Abiraterone_acetate&oldid=1354022007
  revision: 1354022007
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL271227
  pref-name: ABIRATERONE ACETATE
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL3522
    name: Steroid 17-alpha-hydroxylase/17,20 lyase
    action: INHIBITOR
  properties:
    full-mwt: 391.56
    mw-freebase: 391.56
    alogp: 5.97
    psa: 39.19
    hba: 3
    hbd: 0
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.46
    full-molformula: C26H33NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2ac063f0-4177-c90f-27c3-e70e29689255
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2ac063f0-4177-c90f-27c3-e70e29689255
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Zytiga
  ema-number: EMEA/H/C/002321
  url: https://www.ema.europa.eu/en/documents/product-information/zytiga-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/zytiga-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Abiraterone (Zytiga)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `abiraterone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Abiraterone, Zytiga
- **ChEMBL:** [CHEMBL271227](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL271227/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

CYP17 inhibitor that blocks androgen biosynthesis at its source (testes, adrenals, and prostate tumor tissue itself), used for advanced prostate cancer.

## Mechanism

Cytochrome P450 17A1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 391.56 | 5.97 | 39.19 | 0/3 | 1 | C26H33NO2 |

**Targets (ChEMBL curated mechanisms):**

- [[Steroid 17-alpha-hydroxylase-17,20 lyase (CHEMBL3522)|Steroid 17-alpha-hydroxylase/17,20 lyase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Abiraterone acetate*](https://en.wikipedia.org/w/index.php?title=Abiraterone_acetate&oldid=1354022007) (revision 1354022007, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–24 h | Abiraterone: 12–24 hours |
| Protein binding | 99.8 % | Abiraterone: ~99.8% (to albumin and α1-AGp) |
| Bioavailability | 50 % | Unknown, but may be 50% at most on empty stomach |
| Metabolism | hepatic | Esterases, CYP3A4, SULT2A1 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Abiraterone, others |
| Excretion | mainly non-renal | Feces: 88%; Urine: 5% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2ac063f0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2ac063f0-4177-c90f-27c3-e70e29689255), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12, 18, 19)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Zytiga*](https://www.ema.europa.eu/en/documents/product-information/zytiga-epar-product-information_en.pdf) (EMEA/H/C/002321) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/zytiga-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 15, 18, 19)
> - protein-binding: consistent (SmPC values: 99.8)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Levoketoconazole]] (Steroid 17-alpha-hydroxylase/17,20 lyase)
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
