---
type: compound
schema-version: 2
compound-id: metoclopramide-compound
name: Metoclopramide
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
chembl-id: CHEMBL86
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 5–6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: null
  notes: 80 ± 15% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 70–85%; Feces: 2%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Metoclopramide
  url: https://en.wikipedia.org/w/index.php?title=Metoclopramide&oldid=1345658309
  revision: 1345658309
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL86
  pref-name: METOCLOPRAMIDE
  molecule-type: Small molecule
  first-approval: 1979
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A03FA01
  targets: []
  properties:
    full-mwt: 299.8
    mw-freebase: 299.8
    alogp: 2.0
    psa: 67.59
    hba: 4
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C14H22ClN3O2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 595439ae-cf01-821c-e063-6294a90af16a
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=595439ae-cf01-821c-e063-6294a90af16a
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Metoclopramide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metoclopramide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL86](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL86/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Dopamine-antagonist antinausea/prokinetic drug; a well-documented side effect is raising prolactin, the opposite of what dopamine agonists like cabergoline do -- a real illustration of the same pathway working in both directions.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1979
- **Flags:** black-box warning
- **ATC A03FA01:** ALIMENTARY TRACT AND METABOLISM › PROPULSIVES › Propulsives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 299.8 | 2.0 | 67.59 | 2/4 | 0 | C14H22ClN3O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metoclopramide*](https://en.wikipedia.org/w/index.php?title=Metoclopramide&oldid=1345658309) (revision 1345658309, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | 5–6 hours |
| Bioavailability | 80 % | 80 ± 15% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine: 70–85%; Feces: 2% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 595439ae…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=595439ae-cf01-821c-e063-6294a90af16a), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 6)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Acotiamide]], [[Cisapride]], [[Domperidone]], [[Itopride]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
