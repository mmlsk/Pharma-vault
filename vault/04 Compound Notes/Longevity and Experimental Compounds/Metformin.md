---
type: compound
schema-version: 2
compound-id: metformin-compound
name: Metformin
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
chembl-id: CHEMBL1431
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 8.7
  unit: h
  notes: 4–8.7 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Minimal
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Not by liver
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
  title: Metformin
  url: https://en.wikipedia.org/w/index.php?title=Metformin&oldid=1372113244
  revision: 1372113244
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1431
  pref-name: METFORMIN
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A10BA02
  targets: []
  properties:
    full-mwt: 129.17
    mw-freebase: 129.17
    alogp: -1.03
    psa: 88.99
    hba: 2
    hbd: 4
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.25
    full-molformula: C4H11N5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7e41818c-60e9-4bcf-9586-7bb8d33d5e89
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7e41818c-60e9-4bcf-9586-7bb8d33d5e89
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Metformin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metformin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL1431](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1431/) · max phase 4 · id via Wikipedia infobox

## Source summary

First-line type 2 diabetes drug that activates AMPK and reduces hepatic glucose output; widely studied off-label for longevity given its AMPK/mTOR-opposing metabolic profile.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** black-box warning
- **ATC A10BA02:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Biguanides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 129.17 | -1.03 | 88.99 | 4/2 | 0 | C4H11N5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metformin*](https://en.wikipedia.org/w/index.php?title=Metformin&oldid=1372113244) (revision 1372113244, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–8.7 h | 4–8.7 hours |
| Protein binding | - | Minimal |
| Bioavailability | 50–60 % | 50–60% |
| Metabolism | hepatic | Not by liver |
| Excretion | mainly urinary | Urine (90%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7e41818c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7e41818c-60e9-4bcf-9586-7bb8d33d5e89), label version 20260615. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 6.2, 17.6, 24)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Phenformin]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
