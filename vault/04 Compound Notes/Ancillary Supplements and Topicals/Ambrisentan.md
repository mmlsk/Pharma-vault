---
type: compound
schema-version: 2
compound-id: ambrisentan-compound
name: Ambrisentan
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Endothelin receptor, ET-A/ET-B antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1111
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: h
  notes: 15 hours (terminal)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
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
  title: Ambrisentan
  url: https://en.wikipedia.org/w/index.php?title=Ambrisentan&oldid=1329074832
  revision: 1329074832
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1111
  pref-name: AMBRISENTAN
  molecule-type: Small molecule
  first-approval: 2007
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C02KX02
  targets:
  - id: CHEMBL2096678
    name: Endothelin receptor, ET-A/ET-B
    action: ANTAGONIST
  properties:
    full-mwt: 378.43
    mw-freebase: 378.43
    alogp: 3.52
    psa: 81.54
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C22H22N2O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 291a782a-77e1-8a8e-e1c8-2626f305c2b7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=291a782a-77e1-8a8e-e1c8-2626f305c2b7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ambrisentan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ambrisentan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1111](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1111/) · max phase 4 · id via source catalogue

## Source summary

Endothelin receptor, ET-A/ET-B antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1111).

## Mechanism

Endothelin receptor, ET-A/ET-B antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2007
- **Flags:** black-box warning
- **ATC C02KX02:** CARDIOVASCULAR SYSTEM › OTHER ANTIHYPERTENSIVES › Antihypertensives for pulmonary arterial hypertension

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 378.43 | 3.52 | 81.54 | 1/5 | 0 | C22H22N2O4 |

**Targets (ChEMBL curated mechanisms):**

- [[Endothelin receptor, ET-A-ET-B (CHEMBL2096678)|Endothelin receptor, ET-A/ET-B]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ambrisentan*](https://en.wikipedia.org/w/index.php?title=Ambrisentan&oldid=1329074832) (revision 1329074832, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 h | 15 hours (terminal) |
| Protein binding | 99 % | 99% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 291a782a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=291a782a-77e1-8a8e-e1c8-2626f305c2b7), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 9)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Aprocitentan]] (Endothelin receptor, ET-A/ET-B), [[Bosentan]] (Endothelin receptor, ET-A/ET-B), [[Macitentan]] (Endothelin receptor, ET-A/ET-B), [[Sitaxentan]] (Endothelin receptor, ET-A/ET-B)
- **Same ATC subgroup:** [[Bosentan]], [[Macitentan]], [[Riociguat]], [[Sitaxentan]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
