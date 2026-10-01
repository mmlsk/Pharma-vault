---
type: compound
schema-version: 2
compound-id: propafenone-compound
name: Propafenone
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
chembl-id: CHEMBL631
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 10.0
  unit: h
  notes: 2–10 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
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
pk-source:
  type: wikipedia-infobox
  title: Propafenone
  url: https://en.wikipedia.org/w/index.php?title=Propafenone&oldid=1336262917
  revision: 1336262917
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL631
  pref-name: PROPAFENONE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BC03
  targets: []
  properties:
    full-mwt: 341.45
    mw-freebase: 341.45
    alogp: 3.24
    psa: 58.56
    hba: 4
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C21H27NO3
pk-verification:
  source: fda-label
  status: consistent
  set-id: bc1d2548-15a3-4986-92b1-c3ddfb35343a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bc1d2548-15a3-4986-92b1-c3ddfb35343a
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Propafenone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `propafenone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL631](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL631/) · max phase 4 · id via Wikipedia infobox

## Source summary

Modulates fast cardiac sodium channels to alter impulse conduction; proarrhythmia makes clinical supervision essential.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** black-box warning
- **ATC C01BC03:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ic

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 341.45 | 3.24 | 58.56 | 2/4 | 0 | C21H27NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Propafenone*](https://en.wikipedia.org/w/index.php?title=Propafenone&oldid=1336262917) (revision 1336262917, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–10 h | 2–10 hours |
| Protein binding | 97 % | 97% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set bc1d2548…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=bc1d2548-15a3-4986-92b1-c3ddfb35343a), label version 20241226. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.083, 10, 32)
> - protein-binding: consistent (label values: 88)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Flecainide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
