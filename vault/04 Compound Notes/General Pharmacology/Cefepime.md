---
type: compound
schema-version: 2
compound-id: cefepime-compound
name: Cefepime
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
chembl-id: CHEMBL186
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal 70–99%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic 15%
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Cefepime
  url: https://en.wikipedia.org/w/index.php?title=Cefepime&oldid=1373478954
  revision: 1373478954
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL186
  pref-name: CEFEPIME
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01DE01
  targets: []
  properties:
    full-mwt: 480.57
    mw-freebase: 480.57
    alogp: -1.28
    psa: 150.04
    hba: 10
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.21
    full-molformula: C19H24N6O5S2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: be5f8ca6-7232-423a-a2d5-cccb7abe7921
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=be5f8ca6-7232-423a-a2d5-cccb7abe7921
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Cefepime

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefepime-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL186](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL186/) · max phase 4 · id via Wikipedia infobox

## Source summary

Fourth-generation cephalosporin combining antipseudomonal and gram-positive activity, and a poor inducer of AmpC beta-lactamases.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC J01DE01:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER BETA-LACTAM ANTIBACTERIALS › Fourth-generation cephalosporins

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 480.57 | -1.28 | 150.04 | 2/10 | 0 | C19H24N6O5S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefepime*](https://en.wikipedia.org/w/index.php?title=Cefepime&oldid=1373478954) (revision 1373478954, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Bioavailability | 100 % | 100% (IM) |
| Metabolism | hepatic | Hepatic 15% |
| Excretion | mainly urinary | Renal 70–99% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set be5f8ca6…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=be5f8ca6-7232-423a-a2d5-cccb7abe7921), label version 20260625. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 8, 12)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
