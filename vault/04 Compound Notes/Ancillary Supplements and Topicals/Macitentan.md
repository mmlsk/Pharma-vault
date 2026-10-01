---
type: compound
schema-version: 2
compound-id: macitentan-compound
name: Macitentan
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
chembl-id: CHEMBL2103873
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 2/3 urine, 1/3 faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydrolysis, oxidation (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Macitentan
  url: https://en.wikipedia.org/w/index.php?title=Macitentan&oldid=1329260588
  revision: 1329260588
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL2103873
  pref-name: MACITENTAN
  molecule-type: Small molecule
  first-approval: 2010
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C02KX04
  targets:
  - id: CHEMBL2096678
    name: Endothelin receptor, ET-A/ET-B
    action: ANTAGONIST
  properties:
    full-mwt: 588.28
    mw-freebase: 588.28
    alogp: 3.57
    psa: 128.22
    hba: 8
    hbd: 2
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.33
    full-molformula: C19H20Br2N6O4S
---

# Macitentan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `macitentan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2103873](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103873/) · max phase 4 · id via source catalogue

## Source summary

Endothelin receptor, ET-A/ET-B antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL2103873).

## Mechanism

Endothelin receptor, ET-A/ET-B antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2010
- **Flags:** black-box warning
- **ATC C02KX04:** CARDIOVASCULAR SYSTEM › OTHER ANTIHYPERTENSIVES › Antihypertensives for pulmonary arterial hypertension

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 588.28 | 3.57 | 128.22 | 2/8 | 1 | C19H20Br2N6O4S |

**Targets (ChEMBL curated mechanisms):**

- [[Endothelin receptor, ET-A-ET-B (CHEMBL2096678)|Endothelin receptor, ET-A/ET-B]] - antagonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Macitentan*](https://en.wikipedia.org/w/index.php?title=Macitentan&oldid=1329260588) (revision 1329260588, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Metabolism | hepatic | Hydrolysis, oxidation (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 2/3 urine, 1/3 faeces |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ambrisentan]] (Endothelin receptor, ET-A/ET-B), [[Aprocitentan]] (Endothelin receptor, ET-A/ET-B), [[Bosentan]] (Endothelin receptor, ET-A/ET-B), [[Sitaxentan]] (Endothelin receptor, ET-A/ET-B)
- **Same ATC subgroup:** [[Ambrisentan]], [[Bosentan]], [[Riociguat]], [[Sitaxentan]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
