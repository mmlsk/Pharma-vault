---
type: compound
schema-version: 2
compound-id: saquinavir-compound
name: Saquinavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 protease inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL114
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 15.0
  unit: h
  notes: 9–15 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 4.0
  value-max: null
  notes: ~4% (without ritonavir boosting)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: feces (81%) and urine (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mainly by CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Saquinavir
  url: https://en.wikipedia.org/w/index.php?title=Saquinavir&oldid=1335536263
  revision: 1335536263
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL114
  pref-name: SAQUINAVIR
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AE01
  targets:
  - id: CHEMBL243
    name: Human immunodeficiency virus type 1 protease
    action: INHIBITOR
  properties:
    full-mwt: 670.86
    mw-freebase: 670.86
    alogp: 3.09
    psa: 166.75
    hba: 7
    hbd: 5
    rtb: 12
    num-ro5-violations: 1
    qed-weighted: 0.2
    full-molformula: C38H50N6O5
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Saquinavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `saquinavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL114](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL114/) · max phase 4 · id via Wikipedia infobox

## Source summary

The first HIV protease inhibitor licensed, in 1995, and the drug that made combination antiretroviral therapy work. Poor bioavailability and QT effects retired it.

## Mechanism

Human immunodeficiency virus type 1 protease inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** black-box warning
- **ATC J05AE01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 670.86 | 3.09 | 166.75 | 5/7 | 1 | C38H50N6O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 protease (CHEMBL243)|Human immunodeficiency virus type 1 protease]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Saquinavir*](https://en.wikipedia.org/w/index.php?title=Saquinavir&oldid=1335536263) (revision 1335536263, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–15 h | 9–15 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 4 % | ~4% (without ritonavir boosting) |
| Metabolism | hepatic | Liver, mainly by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | feces (81%) and urine (3%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Darunavir]] (Human immunodeficiency virus type 1 protease), [[Lopinavir]] (Human immunodeficiency virus type 1 protease), [[Ritonavir]] (Human immunodeficiency virus type 1 protease)
- **Same ATC subgroup:** [[Atazanavir]], [[Darunavir]], [[Ensitrelvir]], [[Fosamprenavir]], [[Ritonavir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
