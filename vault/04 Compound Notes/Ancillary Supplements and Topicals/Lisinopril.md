---
type: compound
schema-version: 2
compound-id: lisinopril-compound
name: Lisinopril
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
chembl-id: CHEMBL1237
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: '0'
bioavailability:
  value: 25.0
  value-max: null
  notes: approx. 25%, but a wide range between individuals (6 to 60%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Eliminated unchanged in urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: None
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Lisinopril
  url: https://en.wikipedia.org/w/index.php?title=Lisinopril&oldid=1374815147
  revision: 1374815147
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1237
  pref-name: LISINOPRIL ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 405.5
    mw-freebase: 405.5
    alogp: 1.24
    psa: 132.96
    hba: 5
    hbd: 4
    rtb: 12
    num-ro5-violations: 0
    qed-weighted: 0.38
    full-molformula: C21H31N3O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: aa5d68e7-c2b9-41eb-ade4-2cd57edc1533
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa5d68e7-c2b9-41eb-ade4-2cd57edc1533
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Lisinopril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lisinopril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1237](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1237/) · max phase 4 · id via Wikipedia infobox

## Source summary

ACE inhibitor and ALLHAT first-line arm; cheap and effective, dry cough being the usual reason to switch to an ARB.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 405.5 | 1.24 | 132.96 | 4/5 | 0 | C21H31N3O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lisinopril*](https://en.wikipedia.org/w/index.php?title=Lisinopril&oldid=1374815147) (revision 1374815147, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | - | 0 |
| Bioavailability | 25 % | approx. 25%, but a wide range between individuals (6 to 60%) |
| Metabolism | - | None |
| Excretion | - | Eliminated unchanged in urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set aa5d68e7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=aa5d68e7-c2b9-41eb-ade4-2cd57edc1533), label version 20260910. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Lisinopril Anhydrous]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
