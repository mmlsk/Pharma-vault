---
type: compound
schema-version: 2
compound-id: cemiplimab-compound
name: Cemiplimab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Programmed cell death protein 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297723
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: null
  unit: d
  notes: 19 days
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-inn-ema
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Cemiplimab
  url: https://en.wikipedia.org/w/index.php?title=Cemiplimab&oldid=1347863609
  revision: 1347863609
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL4297723
  pref-name: CEMIPLIMAB
  molecule-type: Antibody
  first-approval: 2018
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FF06
  targets:
  - id: CHEMBL3307223
    name: Programmed cell death protein 1
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
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
  product: Libtayo
  ema-number: EMEA/H/C/004844
  url: https://www.ema.europa.eu/en/documents/product-information/libtayo-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/libtayo-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Cemiplimab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cemiplimab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL4297723](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297723/) · max phase 4 · id via exact ChEMBL name match · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Anti-PD-1 antibody first approved for advanced cutaneous squamous cell carcinoma, a tumour with a very high mutational burden.

## Mechanism

Programmed cell death protein 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2018
- **ATC L01FF06:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Programmed cell death protein 1 (CHEMBL3307223)|Programmed cell death protein 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cemiplimab*](https://en.wikipedia.org/w/index.php?title=Cemiplimab&oldid=1347863609) (revision 1347863609, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 d | 19 days |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Libtayo*](https://www.ema.europa.eu/en/documents/product-information/libtayo-epar-product-information_en.pdf) (EMEA/H/C/004844) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/libtayo-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 528)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dostarlimab]] (Programmed cell death protein 1), [[Nivolumab]] (Programmed cell death protein 1), [[Pembrolizumab]] (Programmed cell death protein 1)
- **Same ATC subgroup:** [[Atezolizumab]], [[Avelumab]], [[Dostarlimab]], [[Durvalumab]], [[Nivolumab]], [[Pembrolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
