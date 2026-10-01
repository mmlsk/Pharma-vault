---
type: compound
schema-version: 2
compound-id: cabotegravir-compound
name: Cabotegravir
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
chembl-id: CHEMBL2403238
chembl-max-phase: 4
half-life:
  value: 41.0
  value-max: null
  unit: h
  notes: 'tablets: 41 hours; injection: 5.6–11.5 weeks'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 47% via feces, 27% via urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT1A1
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Cabotegravir
  url: https://en.wikipedia.org/w/index.php?title=Cabotegravir&oldid=1370052941
  revision: 1370052941
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2403238
  pref-name: CABOTEGRAVIR
  molecule-type: Small molecule
  first-approval: 2021
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AJ04
  targets:
  - id: CHEMBL3471
    name: Human immunodeficiency virus type 1 integrase
    action: INHIBITOR
  properties:
    full-mwt: 405.36
    mw-freebase: 405.36
    alogp: 0.96
    psa: 100.87
    hba: 6
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C19H17F2N3O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 4338428e-43d4-4e02-ac9d-bd98e738a7da
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4338428e-43d4-4e02-ac9d-bd98e738a7da
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Cabotegravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cabotegravir-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2403238](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2403238/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits HIV integrase strand transfer as a component of combination antiretroviral therapy.

## Mechanism

Human immunodeficiency virus type 1 integrase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2021
- **ATC J05AJ04:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Integrase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.36 | 0.96 | 100.87 | 2/6 | 0 | C19H17F2N3O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 integrase (CHEMBL3471)|Human immunodeficiency virus type 1 integrase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cabotegravir*](https://en.wikipedia.org/w/index.php?title=Cabotegravir&oldid=1370052941) (revision 1370052941, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 41 h | tablets: 41 hours; injection: 5.6–11.5 weeks |
| Protein binding | 99 % | >99% |
| Metabolism | hepatic | UGT1A1 |
| Metabolites | - | glucuronide |
| Excretion | - | 47% via feces, 27% via urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 4338428e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4338428e-43d4-4e02-ac9d-bd98e738a7da), label version 20250411. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bictegravir]] (Human immunodeficiency virus type 1 integrase), [[Elvitegravir]] (Human immunodeficiency virus type 1 integrase)
- **Same ATC subgroup:** [[Dolutegravir]], [[Elvitegravir]], [[Raltegravir]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
