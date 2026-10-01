---
type: compound
schema-version: 2
compound-id: elvitegravir-compound
name: Elvitegravir
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 integrase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL204656
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 12.9 (8.7–13.7) hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: liver 93%, renal 7%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver, via CYP3A
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Elvitegravir
  url: https://en.wikipedia.org/w/index.php?title=Elvitegravir&oldid=1358931219
  revision: 1358931219
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL204656
  pref-name: ELVITEGRAVIR
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AJ02
  targets:
  - id: CHEMBL3471
    name: Human immunodeficiency virus type 1 integrase
    action: INHIBITOR
  properties:
    full-mwt: 447.89
    mw-freebase: 447.89
    alogp: 4.28
    psa: 88.76
    hba: 5
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.56
    full-molformula: C23H23ClFNO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Elvitegravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elvitegravir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL204656](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL204656/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits HIV integrase strand transfer as a component of combination antiretroviral therapy.

## Mechanism

Human immunodeficiency virus type 1 integrase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **ATC J05AJ02:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Integrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 447.89 | 4.28 | 88.76 | 2/5 | 0 | C23H23ClFNO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 integrase (CHEMBL3471)|Human immunodeficiency virus type 1 integrase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elvitegravir*](https://en.wikipedia.org/w/index.php?title=Elvitegravir&oldid=1358931219) (revision 1358931219, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 12.9 (8.7–13.7) hours |
| Protein binding | 98 % | 98% |
| Metabolism | hepatic | liver, via CYP3A |
| Excretion | - | liver 93%, renal 7% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bictegravir]] (Human immunodeficiency virus type 1 integrase), [[Cabotegravir]] (Human immunodeficiency virus type 1 integrase)
- **Same ATC subgroup:** [[Cabotegravir]], [[Dolutegravir]], [[Raltegravir]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
