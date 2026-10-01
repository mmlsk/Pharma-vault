---
type: compound
schema-version: 2
compound-id: netarsudil-compound
name: Netarsudil
aliases: []
cluster: Ancillary Supplements and Topicals
group: derm
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4594250
chembl-max-phase: 4
half-life:
  value: 16.0
  value-max: 17.0
  unit: h
  notes: 16–17 hrs
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
  notes: Esterases in the cornea
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
- group/derm
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Netarsudil
  url: https://en.wikipedia.org/w/index.php?title=Netarsudil&oldid=1333051436
  revision: 1333051436
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL4594250
  pref-name: NETARSUDIL
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - S01EX05
  targets: []
  properties:
    full-mwt: 453.54
    mw-freebase: 453.54
    alogp: 4.89
    psa: 94.31
    hba: 5
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C28H27N3O3
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 7d4f0e3a-5b86-4c43-982a-813b22ae7e22
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7d4f0e3a-5b86-4c43-982a-813b22ae7e22
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Netarsudil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `netarsudil-compound`
- **Source group:** Dermatology & Topicals (`derm`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL4594250](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4594250/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Rho kinase inhibitor eye drop that lowers intraocular pressure by acting on the trabecular meshwork itself.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **Flags:** prodrug
- **ATC S01EX05:** SENSORY ORGANS › ANTIGLAUCOMA PREPARATIONS AND MIOTICS › Other antiglaucoma preparations

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 453.54 | 4.89 | 94.31 | 2/5 | 0 | C28H27N3O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Netarsudil*](https://en.wikipedia.org/w/index.php?title=Netarsudil&oldid=1333051436) (revision 1333051436, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16–17 h | 16–17 hrs |
| Metabolism | - | Esterases in the cornea |
| Metabolites | - | AR-13503 (active metabolite) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 7d4f0e3a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7d4f0e3a-5b86-4c43-982a-813b22ae7e22), label version 20260120. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Guanethidine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
