---
type: compound
schema-version: 2
compound-id: miltefosine-compound
name: Miltefosine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Unknown
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL125
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 8.0
  unit: d
  notes: 6 to 8 days and 31 days
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: ~98%
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Primarily fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Slow hepatic (non-CYP-dependent)
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
pk-source:
  type: wikipedia-infobox
  title: Miltefosine
  url: https://en.wikipedia.org/w/index.php?title=Miltefosine&oldid=1374210502
  revision: 1374210502
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL125
  pref-name: MILTEFOSINE
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - P01CX04
  targets: []
  properties:
    full-mwt: 407.58
    mw-freebase: 407.58
    alogp: 5.68
    psa: 58.59
    hba: 4
    hbd: 0
    rtb: 20
    num-ro5-violations: 1
    qed-weighted: 0.15
    full-molformula: C21H46NO4P
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Miltefosine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `miltefosine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL125](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL125/) · max phase 4 · id via Wikipedia infobox

## Source summary

The first oral treatment for visceral leishmaniasis, an alkylphosphocholine originally developed as an anticancer agent and strongly teratogenic.

## Mechanism

Unknown _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **Flags:** black-box warning
- **ATC P01CX04:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST LEISHMANIASIS AND TRYPANOSOMIASIS › Other agents against leishmaniasis and trypanosomiasis

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 407.58 | 5.68 | 58.59 | 0/4 | 1 | C21H46NO4P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Miltefosine*](https://en.wikipedia.org/w/index.php?title=Miltefosine&oldid=1374210502) (revision 1374210502, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–8 d | 6 to 8 days and 31 days |
| Protein binding | 98 % | ~98% |
| Bioavailability | - | High |
| Metabolism | hepatic | Slow hepatic (non-CYP-dependent) |
| Excretion | - | Primarily fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
