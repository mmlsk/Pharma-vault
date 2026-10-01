---
type: compound
schema-version: 2
compound-id: dalbavancin-compound
name: Dalbavancin
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
chembl-id: CHEMBL3301669
chembl-max-phase: 4
half-life:
  value: 14.4
  value-max: null
  unit: d
  notes: 14.4 day
protein-binding:
  value: null
  unit: percent
  notes: null
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
  title: Dalbavancin
  url: https://en.wikipedia.org/w/index.php?title=Dalbavancin&oldid=1371790451
  revision: 1371790451
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3301669
  pref-name: DALBAVANCIN
  molecule-type: Protein
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01XA04
  targets: []
  properties:
    full-mwt: 1816.72
    mw-freebase: 1816.72
    full-molformula: C88H100Cl2N10O28
pk-verification:
  source: fda-label
  status: consistent
  set-id: f4c0bd0f-03c2-4ce5-bcc2-b58f21ce75c1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4c0bd0f-03c2-4ce5-bcc2-b58f21ce75c1
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Dalbavancin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dalbavancin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL3301669](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3301669/) · max phase 4 · id via Wikipedia infobox

## Source summary

Long-acting lipoglycopeptide dosed once or twice per course, which turns a skin infection admission into an outpatient visit.

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2014
- **ATC J01XA04:** ANTIINFECTIVES FOR SYSTEMIC USE › OTHER ANTIBACTERIALS › Glycopeptide antibacterials

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1816.72 | - | - | -/- | - | C88H100Cl2N10O28 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dalbavancin*](https://en.wikipedia.org/w/index.php?title=Dalbavancin&oldid=1371790451) (revision 1371790451, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14.4 d | 14.4 day |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f4c0bd0f…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f4c0bd0f-03c2-4ce5-bcc2-b58f21ce75c1), label version 20260728. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 204)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Oritavancin]], [[Telavancin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
