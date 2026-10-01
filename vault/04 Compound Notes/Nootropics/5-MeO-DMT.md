---
type: compound
schema-version: 2
compound-id: 5-meo-dmt-compound
name: 5-MeO-DMT
aliases:
- Mebufotenin
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL7257
chembl-max-phase: 2
half-life:
  value: 15.0
  value-max: 26.0
  unit: min
  notes: 'Intranasal: 15–26 min; Sublingual: 28 min'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 'Oral: inactive (without an MAOI) or weak'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Oxidative deamination (MAO), O-demethylation (CYP2D6)
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: 5-MeO-DMT
  url: https://en.wikipedia.org/w/index.php?title=5-MeO-DMT&oldid=1376206730
  revision: 1376206730
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL7257
  pref-name: MEBUFOTENIN
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 218.3
    mw-freebase: 218.3
    alogp: 2.28
    psa: 28.26
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C13H18N2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# 5-MeO-DMT

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `5-meo-dmt-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Mebufotenin
- **ChEMBL:** [CHEMBL7257](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL7257/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Psychoplastogens / Reference psychedelics). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL7257 (MEBUFOTENIN).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 218.3 | 2.28 | 28.26 | 1/2 | 0 | C13H18N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *5-MeO-DMT*](https://en.wikipedia.org/w/index.php?title=5-MeO-DMT&oldid=1376206730) (revision 1376206730, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–26 min | Intranasal: 15–26 min; Sublingual: 28 min |
| Bioavailability | - | Oral: inactive (without an MAOI) or weak |
| Metabolism | hepatic | Oxidative deamination (MAO), O-demethylation (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Bufotenin |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
