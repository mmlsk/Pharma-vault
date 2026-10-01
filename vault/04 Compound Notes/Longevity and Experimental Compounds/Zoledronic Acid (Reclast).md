---
type: compound
schema-version: 2
compound-id: zoledronic-acid-compound
name: Zoledronic Acid (Reclast)
aliases:
- Zoledronic Acid
- Reclast
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
chembl-id: CHEMBL924
chembl-max-phase: 4
half-life:
  value: 146.0
  value-max: null
  unit: h
  notes: 146 hours
protein-binding:
  value: 22.0
  value-max: null
  unit: percent
  notes: 22%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (partial)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Zoledronic acid
  url: https://en.wikipedia.org/w/index.php?title=Zoledronic_acid&oldid=1372632814
  revision: 1372632814
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL924
  pref-name: ZOLEDRONIC ACID ANHYDROUS
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 272.09
    mw-freebase: 272.09
    alogp: -1.12
    psa: 153.11
    hba: 5
    hbd: 5
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C5H10N2O7P2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8aac81ae-f92c-4f0b-b480-44badf72b5f5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8aac81ae-f92c-4f0b-b480-44badf72b5f5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Zoledronic Acid (Reclast)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zoledronic-acid-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Zoledronic Acid, Reclast
- **ChEMBL:** [CHEMBL924](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL924/) · max phase 4 · id via Wikipedia infobox

## Source summary

Potent IV nitrogen-containing bisphosphonate given as an annual infusion, used for osteoporosis and cancer-related bone disease.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 272.09 | -1.12 | 153.11 | 5/5 | 0 | C5H10N2O7P2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zoledronic acid*](https://en.wikipedia.org/w/index.php?title=Zoledronic_acid&oldid=1372632814) (revision 1372632814, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 146 h | 146 hours |
| Protein binding | 22 % | 22% |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney (partial) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8aac81ae…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8aac81ae-f92c-4f0b-b480-44badf72b5f5), label version 20260709. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.24, 1.87, 24, 146)
> - protein-binding: consistent (label values: 28, 53)

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
