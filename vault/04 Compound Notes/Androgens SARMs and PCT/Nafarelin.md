---
type: compound
schema-version: 2
compound-id: nafarelin-compound
name: Nafarelin
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
chembl-id: CHEMBL1201309
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 3.0
  unit: h
  notes: 'IN: 2.5–3.0 hours'
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: 80%
bioavailability:
  value: 2.8
  value-max: null
  notes: 'IN: 2.8% (1.2–5.6%)'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 44–55%; Feces: 19–44%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Peptidases (not CYP450)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Nafarelin
  url: https://en.wikipedia.org/w/index.php?title=Nafarelin&oldid=1328743505
  revision: 1328743505
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201309
  pref-name: NAFARELIN
  molecule-type: Protein
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CA02
  targets: []
  properties:
    full-mwt: 1322.5
    mw-freebase: 1322.5
    full-molformula: C66H83N17O13
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Nafarelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nafarelin-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1201309](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201309/) · max phase 4 · id via source catalogue

## Source summary

Gonadotropin-releasing hormone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201309).

## Mechanism

Gonadotropin-releasing hormone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1990
- **ATC H01CA02:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Gonadotropin-releasing hormones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1322.5 | - | - | -/- | - | C66H83N17O13 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nafarelin*](https://en.wikipedia.org/w/index.php?title=Nafarelin&oldid=1328743505) (revision 1328743505, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–3 h | IN: 2.5–3.0 hours |
| Protein binding | 80 % | 80% |
| Bioavailability | 2.8 % | IN: 2.8% (1.2–5.6%) |
| Metabolism | hepatic | Peptidases (not CYP450) |
| Excretion | - | Urine: 44–55%; Feces: 19–44% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Gonadorelin]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
