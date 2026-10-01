---
type: compound
schema-version: 2
compound-id: methoxsalen-compound
name: Methoxsalen (8-MOP)
aliases:
- Methoxsalen
- 8-MOP
cluster: Ancillary Supplements and Topicals
group: derm
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL416
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: ~2 hours
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/derm
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Methoxsalen
  url: https://en.wikipedia.org/w/index.php?title=Methoxsalen&oldid=1353659867
  revision: 1353659867
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL416
  pref-name: METHOXSALEN
  molecule-type: Small molecule
  first-approval: 1954
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D05AD02
  - D05BA02
  targets:
  - id: CHEMBL2311221
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 216.19
    mw-freebase: 216.19
    alogp: 2.55
    psa: 52.58
    hba: 4
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C12H8O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a6ec8292-9189-4ebd-862a-e1725eb29eef
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6ec8292-9189-4ebd-862a-e1725eb29eef
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Methoxsalen (8-MOP)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methoxsalen-compound`
- **Source group:** Dermatology & Topicals (`derm`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Methoxsalen, 8-MOP
- **ChEMBL:** [CHEMBL416](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL416/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Psoralen given with ultraviolet A for psoriasis and vitiligo, forming DNA crosslinks only where light reaches.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1954
- **Flags:** black-box warning
- **ATC D05AD02:** DERMATOLOGICALS › ANTIPSORIATICS FOR TOPICAL USE › Psoralens for topical use
- **ATC D05BA02:** DERMATOLOGICALS › ANTIPSORIATICS FOR SYSTEMIC USE › Psoralens for systemic use

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 216.19 | 2.55 | 52.58 | 0/4 | 0 | C12H8O4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methoxsalen*](https://en.wikipedia.org/w/index.php?title=Methoxsalen&oldid=1353659867) (revision 1353659867, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | ~2 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a6ec8292…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6ec8292-9189-4ebd-862a-e1725eb29eef), label version 20260624. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[5-Fluorouracil]] (DNA), [[Azacitidine]] (DNA), [[Azathioprine]] (DNA), [[Capecitabine (Xeloda)]] (DNA), [[Decitabine]] (DNA)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
