---
type: compound
schema-version: 2
compound-id: fesoterodine-compound
name: Fesoterodine
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
chembl-id: CHEMBL1201764
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 8.0
  unit: h
  notes: 7–8 hours (active metabolite)
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50% (active metabolite)
bioavailability:
  value: 52.0
  value-max: null
  notes: 52% (active metabolite)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (70%) and fecal (7%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6- and 3A4-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Fesoterodine
  url: https://en.wikipedia.org/w/index.php?title=Fesoterodine&oldid=1338088393
  revision: 1338088393
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201764
  pref-name: FESOTERODINE
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BD11
  targets: []
  properties:
    full-mwt: 411.59
    mw-freebase: 411.59
    alogp: 5.38
    psa: 49.77
    hba: 4
    hbd: 1
    rtb: 10
    num-ro5-violations: 1
    qed-weighted: 0.42
    full-molformula: C26H37NO3
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
  status: consistent
  product: Toviaz
  ema-number: EMEA/H/C/000723
  url: https://www.ema.europa.eu/en/documents/product-information/toviaz-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Fesoterodine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fesoterodine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201764](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201764/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; prodrug of 5-HMT.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **Flags:** prodrug
- **ATC G04BD11:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs for urinary frequency and incontinence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 411.59 | 5.38 | 49.77 | 1/4 | 1 | C26H37NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fesoterodine*](https://en.wikipedia.org/w/index.php?title=Fesoterodine&oldid=1338088393) (revision 1338088393, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–8 h | 7–8 hours (active metabolite) |
| Protein binding | 50 % | 50% (active metabolite) |
| Bioavailability | 52 % | 52% (active metabolite) |
| Metabolism | hepatic | Liver (CYP2D6- and 3A4-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (70%) and fecal (7%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Toviaz*](https://www.ema.europa.eu/en/documents/product-information/toviaz-epar-product-information_en.pdf) (EMEA/H/C/000723). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.55, 7, 7.73)
> - protein-binding: consistent (SmPC values: 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Darifenacin]], [[Imidafenacin]], [[Oxybutynin]], [[Propiverine]], [[Solifenacin]], [[Tolterodine]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
