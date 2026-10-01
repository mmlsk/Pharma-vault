---
type: compound
schema-version: 2
compound-id: teriparatide-compound
name: Teriparatide (Forteo)
aliases:
- Teriparatide
- Forteo
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Parathyroid hormone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL525610
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: null
  unit: h
  notes: 'Subcutaneous: 1 hour'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 95.0
  value-max: null
  notes: 95%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (nonspecific proteolysis)
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
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Teriparatide
  url: https://en.wikipedia.org/w/index.php?title=Teriparatide&oldid=1363759353
  revision: 1363759353
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL525610
  pref-name: TERIPARATIDE
  molecule-type: Protein
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - H05AA02
  targets:
  - id: CHEMBL1793
    name: Parathyroid hormone/parathyroid hormone-related peptide receptor
    action: AGONIST
  properties:
    full-mwt: 4117.79
    mw-freebase: 4117.79
    full-molformula: C181H291N55O51S2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: aae667c5-381f-4f92-93df-2ed6158d07b0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aae667c5-381f-4f92-93df-2ed6158d07b0
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Forsteo
  ema-number: EMEA/H/C/000425
  url: https://www.ema.europa.eu/en/documents/product-information/forsteo-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Teriparatide (Forteo)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `teriparatide-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Teriparatide, Forteo
- **ChEMBL:** [CHEMBL525610](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL525610/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Recombinant PTH(1-34) fragment given as daily injections to directly stimulate new bone formation, unlike antiresorptive bone drugs.

## Mechanism

Parathyroid hormone receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning
- **ATC H05AA02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › PARATHYROID HORMONES AND ANALOGUES › Parathyroid hormones and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 4117.79 | - | - | -/- | - | C181H291N55O51S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Parathyroid hormone-parathyroid hormone-related peptide receptor (CHEMBL1793)|Parathyroid hormone/parathyroid hormone-related peptide receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Teriparatide*](https://en.wikipedia.org/w/index.php?title=Teriparatide&oldid=1363759353) (revision 1363759353, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | Subcutaneous: 1 hour |
| Bioavailability | 95 % | 95% |
| Metabolism | hepatic | Liver (nonspecific proteolysis) |
| Excretion | mainly urinary | Kidney (metabolites) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aae667c5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aae667c5-381f-4f92-93df-2ed6158d07b0), label version 20260803. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Forsteo*](https://www.ema.europa.eu/en/documents/product-information/forsteo-epar-product-information_en.pdf) (EMEA/H/C/000425). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Abaloparatide]] (Parathyroid hormone/parathyroid hormone-related peptide receptor), [[Ostabolin-C]] (Parathyroid hormone/parathyroid hormone-related peptide receptor), [[Palopegteriparatide]] (Parathyroid hormone/parathyroid hormone-related peptide receptor), [[Parathyroid Hormone]] (Parathyroid hormone/parathyroid hormone-related peptide receptor), [[Teriparatide Acetate]] (Parathyroid hormone/parathyroid hormone-related peptide receptor)
- **Same ATC subgroup:** [[Abaloparatide]], [[Palopegteriparatide]], [[Parathyroid Hormone]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
