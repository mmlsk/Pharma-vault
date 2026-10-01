---
type: compound
schema-version: 2
compound-id: pyrantel-compound
name: Pyrantel Pamoate
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1626223
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: poorly absorbed
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Pyrantel
  url: https://en.wikipedia.org/w/index.php?title=Pyrantel&oldid=1366674848
  revision: 1366674848
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1626223
  pref-name: PYRANTEL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P02CC01
  targets: []
  properties:
    full-mwt: 206.31
    mw-freebase: 206.31
    alogp: 2.5
    psa: 15.6
    hba: 3
    hbd: 0
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C11H14N2S
  identity-check: structure-confirmed
---

# Pyrantel Pamoate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pyrantel-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1626223](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1626223/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Depolarising neuromuscular blocker for the worm, causing spastic paralysis, which is why it must not be combined with piperazine.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC P02CC01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTINEMATODAL AGENTS › Tetrahydropyrimidine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 206.31 | 2.5 | 15.6 | 0/3 | 0 | C11H14N2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pyrantel*](https://en.wikipedia.org/w/index.php?title=Pyrantel&oldid=1366674848) (revision 1366674848, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | - | poorly absorbed |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
