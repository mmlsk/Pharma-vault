---
type: compound
schema-version: 2
compound-id: benznidazole-compound
name: Benznidazole
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
chembl-id: CHEMBL110
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Benznidazole
  url: https://en.wikipedia.org/w/index.php?title=Benznidazole&oldid=1314473379
  revision: 1314473379
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL110
  pref-name: BENZNIDAZOLE
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01CA02
  targets: []
  properties:
    full-mwt: 260.25
    mw-freebase: 260.25
    alogp: 1.11
    psa: 90.06
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C12H12N4O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8983d6a0-f63f-4f8e-bba4-38223f39e29b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8983d6a0-f63f-4f8e-bba4-38223f39e29b
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Benznidazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `benznidazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL110](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL110/) · max phase 4 · id via Wikipedia infobox

## Source summary

First-line nitroimidazole for Chagas disease, effective in acute infection and of limited benefit once cardiomyopathy is established.

## Mechanism

Unknown _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **ATC P01CA02:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST LEISHMANIASIS AND TRYPANOSOMIASIS › Nitroimidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 260.25 | 1.11 | 90.06 | 1/5 | 0 | C12H12N4O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Benznidazole*](https://en.wikipedia.org/w/index.php?title=Benznidazole&oldid=1314473379) (revision 1314473379, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Bioavailability | - | High |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8983d6a0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8983d6a0-f63f-4f8e-bba4-38223f39e29b), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 13)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
