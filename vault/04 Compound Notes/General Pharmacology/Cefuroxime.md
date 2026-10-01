---
type: compound
schema-version: 2
compound-id: cefuroxime-compound
name: Cefuroxime
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
chembl-id: CHEMBL466
chembl-max-phase: null
half-life:
  value: 80.0
  value-max: null
  unit: min
  notes: 80 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% on an empty stomach, up to 52% if taken after food
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 1.0
  notes: Urine 66–100% unchanged
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-stereo-check
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Cefuroxime
  url: https://en.wikipedia.org/w/index.php?title=Cefuroxime&oldid=1352009481
  revision: 1352009481
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL466
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 424.39
    mw-freebase: 424.39
    alogp: -0.54
    psa: 173.76
    hba: 9
    hbd: 3
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.3
    full-molformula: C16H16N4O8S
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 79f5cf6f-a5e2-49a2-9704-fa1bd21338c3
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=79f5cf6f-a5e2-49a2-9704-fa1bd21338c3
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Cefuroxime

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefuroxime-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL466](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL466/) · max phase n/a · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Second-generation cephalosporin with improved stability to staphylococcal and some gram-negative beta-lactamases. Available orally as the axetil ester.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 424.39 | -0.54 | 173.76 | 3/9 | 0 | C16H16N4O8S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefuroxime*](https://en.wikipedia.org/w/index.php?title=Cefuroxime&oldid=1352009481) (revision 1352009481, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 80 min | 80 minutes |
| Bioavailability | 37 % | 37% on an empty stomach, up to 52% if taken after food |
| Excretion | mainly urinary · fe 1 | Urine 66–100% unchanged |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 79f5cf6f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=79f5cf6f-a5e2-49a2-9704-fa1bd21338c3), label version 20220216. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.333)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
