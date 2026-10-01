---
type: compound
schema-version: 2
compound-id: gonadorelin-compound
name: Gonadorelin
aliases: []
cluster: Growth Hormone and Peptide Agents
group: peptides
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1007
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 40.0
  unit: min
  notes: 10–40 minutes
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
  notes: Hydrolysis
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
- identity-contamination
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/peptides
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Gonadorelin
  url: https://en.wikipedia.org/w/index.php?title=Gonadorelin&oldid=1329009440
  revision: 1329009440
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1007
  pref-name: GONADORELIN
  molecule-type: Protein
  first-approval: 1982
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CA01
  - V04CM01
  targets: []
  properties:
    full-mwt: 1182.31
    mw-freebase: 1182.31
    full-molformula: C55H75N17O13
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Gonadorelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gonadorelin-compound`
- **Source group:** Peptides (`peptides`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL1007](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1007/) · max phase 4 · id via Wikipedia infobox

## Source summary

Synthetic GnRH itself; pulsatile delivery stimulates the axis, continuous delivery shuts it down.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 1982
- **ATC H01CA01:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Gonadotropin-releasing hormones
- **ATC V04CM01:** VARIOUS › OTHER DIAGNOSTIC AGENTS › Tests for fertility disturbances

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1182.31 | - | - | -/- | - | C55H75N17O13 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gonadorelin*](https://en.wikipedia.org/w/index.php?title=Gonadorelin&oldid=1329009440) (revision 1329009440, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–40 min | 10–40 minutes |
| Metabolism | - | Hydrolysis |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nafarelin]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `identity-contamination`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
