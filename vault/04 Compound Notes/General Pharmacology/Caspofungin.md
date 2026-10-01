---
type: compound
schema-version: 2
compound-id: caspofungin-compound
name: Caspofungin
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
chembl-id: CHEMBL499808
chembl-max-phase: null
half-life:
  value: 9.0
  value-max: 11.0
  unit: h
  notes: 9–11 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: ~97%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous use only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (41%), feces (35%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Peptide hydrolysis, N-acetylation
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-stereo-check
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Caspofungin
  url: https://en.wikipedia.org/w/index.php?title=Caspofungin&oldid=1369632479
  revision: 1369632479
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL499808
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 1093.33
    mw-freebase: 1093.33
    full-molformula: C52H88N10O15
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
  status: discrepant
  product: Cancidas (previously Caspofungin MSD)
  ema-number: EMEA/H/C/000379
  url: https://www.ema.europa.eu/en/documents/product-information/cancidas-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/cancidas-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Caspofungin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `caspofungin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL499808](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL499808/) · max phase n/a · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

First echinocandin, fungicidal against Candida and fungistatic against Aspergillus, targeting a wall component humans do not have.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1093.33 | - | - | -/- | - | C52H88N10O15 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Caspofungin*](https://en.wikipedia.org/w/index.php?title=Caspofungin&oldid=1369632479) (revision 1369632479, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | 9–11 hours |
| Protein binding | 97 % | ~97% |
| Bioavailability | 100 % | 100% (intravenous use only) |
| Metabolism | - | Peptide hydrolysis, N-acetylation |
| Excretion | - | Kidney (41%), feces (35%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Cancidas (previously Caspofungin MSD)*](https://www.ema.europa.eu/en/documents/product-information/cancidas-epar-product-information_en.pdf) (EMEA/H/C/000379) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/cancidas-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 45, 288, 360)
> - protein-binding: no-label-value (SmPC values: -)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
