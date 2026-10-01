---
type: compound
schema-version: 2
compound-id: baricitinib-compound
name: Baricitinib (oral, Olumiant)
aliases:
- Baricitinib
- Olumiant
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Tyrosine-protein kinase JAK1 inhibitor; Tyrosine-protein kinase JAK2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2105759
chembl-max-phase: 4
half-life:
  value: 12.5
  value-max: null
  unit: h
  notes: 12.5 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 79.0
  value-max: null
  notes: 79%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 75% urine, 20% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4 (<10%)
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Baricitinib
  url: https://en.wikipedia.org/w/index.php?title=Baricitinib&oldid=1352068579
  revision: 1352068579
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2105759
  pref-name: BARICITINIB
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AF02
  targets:
  - id: CHEMBL2835
    name: Tyrosine-protein kinase JAK1
    action: INHIBITOR
  - id: CHEMBL2971
    name: Tyrosine-protein kinase JAK2
    action: INHIBITOR
  properties:
    full-mwt: 371.43
    mw-freebase: 371.43
    alogp: 1.1
    psa: 120.56
    hba: 7
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C16H17N7O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 866e9f35-9035-4581-a4b1-75a621ab55cf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=866e9f35-9035-4581-a4b1-75a621ab55cf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Olumiant
  ema-number: EMEA/H/C/004085
  url: https://www.ema.europa.eu/en/documents/product-information/olumiant-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/olumiant-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Baricitinib (oral, Olumiant)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `baricitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Baricitinib, Olumiant
- **ChEMBL:** [CHEMBL2105759](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105759/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral JAK1/JAK2 inhibitor, the first systemic drug approved anywhere for severe alopecia areata.

## Mechanism

Tyrosine-protein kinase JAK1 inhibitor; Tyrosine-protein kinase JAK2 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **Flags:** black-box warning
- **ATC L04AF02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Janus-associated kinase (JAK) inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 371.43 | 1.1 | 120.56 | 1/7 | 0 | C16H17N7O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Tyrosine-protein kinase JAK1 (CHEMBL2835)|Tyrosine-protein kinase JAK1]] - inhibitor · SINGLE PROTEIN
- [[Tyrosine-protein kinase JAK2 (CHEMBL2971)|Tyrosine-protein kinase JAK2]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Baricitinib*](https://en.wikipedia.org/w/index.php?title=Baricitinib&oldid=1352068579) (revision 1352068579, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.5 h | 12.5 hours |
| Protein binding | 50 % | 50% |
| Bioavailability | 79 % | 79% |
| Metabolism | hepatic | CYP3A4 (<10%) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 75% urine, 20% faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 866e9f35…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=866e9f35-9035-4581-a4b1-75a621ab55cf), label version 20260630. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10.8, 12, 16)
> - protein-binding: consistent (label values: 45, 50)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Olumiant*](https://www.ema.europa.eu/en/documents/product-information/olumiant-epar-product-information_en.pdf) (EMEA/H/C/004085) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/olumiant-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 8, 9, 10, 12.5, 12.9, 13)
> - protein-binding: consistent (SmPC values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Filgotinib]] (Tyrosine-protein kinase JAK1; Tyrosine-protein kinase JAK2), [[Momelotinib]] (Tyrosine-protein kinase JAK1; Tyrosine-protein kinase JAK2), [[Abrocitinib (Cibinqo)]] (Tyrosine-protein kinase JAK1), [[Brepocitinib]] (Tyrosine-protein kinase JAK1), [[Cerdulatinib]] (Tyrosine-protein kinase JAK1), [[Fedratinib]] (Tyrosine-protein kinase JAK2), [[Golidocitinib]] (Tyrosine-protein kinase JAK1), [[Lestaurtinib]] (Tyrosine-protein kinase JAK2), [[Pacritinib]] (Tyrosine-protein kinase JAK2)
- **Same ATC subgroup:** [[Deucravacitinib (Sotyktu)]], [[Filgotinib]], [[Peficitinib]], [[Ritlecitinib (oral, Litfulo)]], [[Tofacitinib]], [[Upadacitinib (Rinvoq)]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
