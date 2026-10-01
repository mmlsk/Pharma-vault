---
type: compound
schema-version: 2
compound-id: insulin-detemir-compound
name: Insulin Detemir
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Insulin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2104391
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 5–7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% (subcutaneous)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Insulin detemir
  url: https://en.wikipedia.org/w/index.php?title=Insulin_detemir&oldid=1361851093
  revision: 1361851093
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: catalogue
  parent-id: CHEMBL2104391
  pref-name: INSULIN DETEMIR
  molecule-type: Protein
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10AE05
  targets:
  - id: CHEMBL1981
    name: Insulin receptor
    action: AGONIST
  properties:
    full-mwt: 5916.93
    mw-freebase: 5916.93
    full-molformula: C267H402N64O76S6
pk-verification:
  source: fda-label
  status: consistent
  set-id: 82192527-99aa-4b53-8ce9-9173668d309c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Insulin Detemir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `insulin-detemir-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL2104391](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2104391/) · max phase 4 · id via source catalogue

## Source summary

Insulin receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL2104391).

## Mechanism

Insulin receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2004
- **ATC A10AE05:** ALIMENTARY TRACT AND METABOLISM › INSULINS AND ANALOGUES › Insulins and analogues for injection, long-acting

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 5916.93 | - | - | -/- | - | C267H402N64O76S6 |

**Targets (ChEMBL curated mechanisms):**

- [[Insulin receptor (CHEMBL1981)|Insulin receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Insulin detemir*](https://en.wikipedia.org/w/index.php?title=Insulin_detemir&oldid=1361851093) (revision 1361851093, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5–7 hours |
| Bioavailability | 60 % | 60% (subcutaneous) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 82192527…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82192527-99aa-4b53-8ce9-9173668d309c), label version 20241009. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 7)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Insulin Aspart]] (Insulin receptor), [[Insulin Aspart Protamine Recombinant]] (Insulin receptor), [[Insulin Degludec]] (Insulin receptor), [[Insulin glargine (Lantus-Toujeo-Basaglar)|Insulin glargine (Lantus/Toujeo/Basaglar)]] (Insulin receptor), [[Insulin Glulisine]] (Insulin receptor), [[Insulin Human]] (Insulin receptor), [[Insulin Human Zinc]] (Insulin receptor), [[Insulin Human, Isophane]] (Insulin receptor), [[Insulin Icodec]] (Insulin receptor), [[Insulin Lispro]] (Insulin receptor), [[Insulin Lispro Protamine Recombinant]] (Insulin receptor), [[Insulin Peglispro]] (Insulin receptor)
- **Same ATC subgroup:** [[Insulin Degludec]], [[Insulin glargine (Lantus-Toujeo-Basaglar)|Insulin glargine (Lantus/Toujeo/Basaglar)]], [[Insulin Human]], [[Insulin Icodec]], [[Insulin Purified Beef]], [[Insulin Purified Pork]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
