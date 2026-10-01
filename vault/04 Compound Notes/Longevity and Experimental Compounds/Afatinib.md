---
type: compound
schema-version: 2
compound-id: afatinib-compound
name: Afatinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1173655
chembl-max-phase: 4
half-life:
  value: 37.0
  value-max: null
  unit: h
  notes: 37 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (85%), urine (4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP not involved
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
  title: Afatinib
  url: https://en.wikipedia.org/w/index.php?title=Afatinib&oldid=1335569830
  revision: 1335569830
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1173655
  pref-name: AFATINIB
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EB03
  targets: []
  properties:
    full-mwt: 485.95
    mw-freebase: 485.95
    alogp: 4.39
    psa: 88.61
    hba: 7
    hbd: 2
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.46
    full-molformula: C24H25ClFN5O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: ec5b9e00-3eab-4dbd-9bb3-75865b1af485
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ec5b9e00-3eab-4dbd-9bb3-75865b1af485
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Afatinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `afatinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1173655](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1173655/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **ATC L01EB03:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 485.95 | 4.39 | 88.61 | 2/7 | 0 | C24H25ClFN5O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Afatinib*](https://en.wikipedia.org/w/index.php?title=Afatinib&oldid=1335569830) (revision 1335569830, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 37 h | 37 hours |
| Protein binding | 95 % | 95% |
| Metabolism | hepatic | CYP not involved |
| Excretion | mainly non-renal | Faeces (85%), urine (4%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ec5b9e00…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ec5b9e00-3eab-4dbd-9bb3-75865b1af485), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 37)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dacomitinib]], [[Erlotinib]], [[Gefitinib]], [[Osimertinib]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
