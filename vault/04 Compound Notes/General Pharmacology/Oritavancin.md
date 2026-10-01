---
type: compound
schema-version: 2
compound-id: oritavancin-compound
name: Oritavancin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1688530
chembl-max-phase: 4
half-life:
  value: 16.0
  value-max: null
  unit: d
  notes: 16 day
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-stereo-check
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Oritavancin
  url: https://en.wikipedia.org/w/index.php?title=Oritavancin&oldid=1357733499
  revision: 1357733499
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL1688530
  pref-name: ORITAVANCIN
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XA05
  targets: []
  properties:
    full-mwt: 1793.12
    mw-freebase: 1793.12
    full-molformula: C86H97Cl3N10O26
  identity-check: connectivity-match
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
  product: Tenkasi (previously Orbactiv)
  ema-number: EMEA/H/C/003785
  url: https://www.ema.europa.eu/en/documents/product-information/tenkasi-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Oritavancin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oritavancin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1688530](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1688530/) · max phase 4 · id via exact ChEMBL name match · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Lipoglycopeptide with three mechanisms rather than one, given as a single infusion for skin and soft tissue infection.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC J01XA05:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Glycopeptide antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1793.12 | - | - | -/- | - | C86H97Cl3N10O26 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oritavancin*](https://en.wikipedia.org/w/index.php?title=Oritavancin&oldid=1357733499) (revision 1357733499, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16 d | 16 day |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Tenkasi (previously Orbactiv)*](https://www.ema.europa.eu/en/documents/product-information/tenkasi-epar-product-information_en.pdf) (EMEA/H/C/003785). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 245)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dalbavancin]], [[Telavancin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
