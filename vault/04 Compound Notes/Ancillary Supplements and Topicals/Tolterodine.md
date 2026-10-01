---
type: compound
schema-version: 2
compound-id: tolterodine-compound
name: Tolterodine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1382
chembl-max-phase: 4
half-life:
  value: 1.9
  value-max: 3.7
  unit: h
  notes: 1.9–3.7 hours
protein-binding:
  value: 96.3
  value-max: null
  unit: percent
  notes: Approximately 96.3%
bioavailability:
  value: 77.0
  value-max: null
  notes: 77%
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Tolterodine
  url: https://en.wikipedia.org/w/index.php?title=Tolterodine&oldid=1374985017
  revision: 1374985017
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1382
  pref-name: TOLTERODINE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BD07
  targets: []
  properties:
    full-mwt: 325.5
    mw-freebase: 325.5
    alogp: 5.34
    psa: 23.47
    hba: 2
    hbd: 1
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.74
    full-molformula: C22H31NO
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: db6e0b6d-0ce5-41d7-881f-881c11f530a4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=db6e0b6d-0ce5-41d7-881f-881c11f530a4
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: discrepant
---

# Tolterodine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tolterodine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1382](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1382/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC G04BD07:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs for urinary frequency and incontinence

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 325.5 | 5.34 | 23.47 | 1/2 | 1 | C22H31NO |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tolterodine*](https://en.wikipedia.org/w/index.php?title=Tolterodine&oldid=1374985017) (revision 1374985017, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.9–3.7 h | 1.9–3.7 hours |
| Protein binding | 96.3 % | Approximately 96.3% |
| Bioavailability | 77 % | 77% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set db6e0b6d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=db6e0b6d-0ce5-41d7-881f-881c11f530a4), label version 20260209. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: discrepant (label values: 3.7, 36)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Darifenacin]], [[Fesoterodine]], [[Imidafenacin]], [[Oxybutynin]], [[Propiverine]], [[Solifenacin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
