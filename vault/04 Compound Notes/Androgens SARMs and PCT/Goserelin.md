---
type: compound
schema-version: 2
compound-id: goserelin-compound
name: Goserelin
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Gonadotropin-releasing hormone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201247
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 5.0
  unit: h
  notes: 4–5 hours
protein-binding:
  value: 27.3
  value-max: null
  unit: percent
  notes: 27.3%
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Goserelin
  url: https://en.wikipedia.org/w/index.php?title=Goserelin&oldid=1347154992
  revision: 1347154992
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201247
  pref-name: GOSERELIN
  molecule-type: Protein
  first-approval: 1989
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L02AE03
  targets: []
  properties:
    full-mwt: 1269.43
    mw-freebase: 1269.43
    full-molformula: C59H84N18O14
pk-verification:
  source: fda-label
  status: consistent
  set-id: 294b168b-6e5f-4db9-bf70-d599271458b3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=294b168b-6e5f-4db9-bf70-d599271458b3
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Goserelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `goserelin-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1201247](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201247/) · max phase 4 · id via source catalogue

## Source summary

Gonadotropin-releasing hormone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201247).

## Mechanism

Gonadotropin-releasing hormone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1989
- **ATC L02AE03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › HORMONES AND RELATED AGENTS › Gonadotropin releasing hormone analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1269.43 | - | - | -/- | - | C59H84N18O14 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Goserelin*](https://en.wikipedia.org/w/index.php?title=Goserelin&oldid=1347154992) (revision 1347154992, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–5 h | 4–5 hours |
| Protein binding | 27.3 % | 27.3% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 294b168b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=294b168b-6e5f-4db9-bf70-d599271458b3), label version 20260324. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 27.3)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Buserelin]], [[Histrelin]], [[Leuprolide (Lupron)]], [[Triptorelin (Trelstar)]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
