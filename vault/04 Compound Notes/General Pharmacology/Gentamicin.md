---
type: compound
schema-version: 2
compound-id: gentamicin-compound
name: Gentamicin
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
chembl-id: CHEMBL195892
chembl-max-phase: null
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 h
protein-binding:
  value: 0.0
  value-max: 10.0
  unit: percent
  notes: 0–10%
bioavailability:
  value: null
  value-max: null
  notes: limited bioavailability by mouth
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Gentamicin
  url: https://en.wikipedia.org/w/index.php?title=Gentamicin&oldid=1375665253
  revision: 1375665253
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL195892
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 477.6
    mw-freebase: 477.6
    alogp: -3.33
    psa: 199.73
    hba: 12
    hbd: 8
    rtb: 7
    num-ro5-violations: 2
    qed-weighted: 0.18
    full-molformula: C21H43N5O7
pk-verification:
  source: fda-label
  status: consistent
  set-id: 60ca1487-392d-4721-aa45-3de38722896c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=60ca1487-392d-4721-aa45-3de38722896c
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Gentamicin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gentamicin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL195892](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL195892/) · max phase n/a · id via Wikipedia infobox

## Source summary

Aminoglycoside with concentration-dependent gram-negative killing and a synergistic role in enterococcal endocarditis. Ototoxicity is cumulative and irreversible.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 477.6 | -3.33 | 199.73 | 8/12 | 2 | C21H43N5O7 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gentamicin*](https://en.wikipedia.org/w/index.php?title=Gentamicin&oldid=1375665253) (revision 1375665253, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 h |
| Protein binding | 0–10 % | 0–10% |
| Bioavailability | - | limited bioavailability by mouth |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 60ca1487…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=60ca1487-392d-4721-aa45-3de38722896c), label version 20260129. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 0, 30)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
