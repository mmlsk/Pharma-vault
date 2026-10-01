---
type: compound
schema-version: 2
compound-id: amiodarone-compound
name: Amiodarone
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
chembl-id: CHEMBL633
chembl-max-phase: 4
half-life:
  value: 58.0
  value-max: null
  unit: d
  notes: 58 d (range 15–142 d)
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 20.0
  value-max: 55.0
  notes: 20–55%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Primarily liver and bile
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
pk-source:
  type: wikipedia-infobox
  title: Amiodarone
  url: https://en.wikipedia.org/w/index.php?title=Amiodarone&oldid=1371931813
  revision: 1371931813
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL633
  pref-name: AMIODARONE
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BD01
  targets: []
  properties:
    full-mwt: 645.32
    mw-freebase: 645.32
    alogp: 6.94
    psa: 42.68
    hba: 4
    hbd: 0
    rtb: 11
    num-ro5-violations: 2
    qed-weighted: 0.17
    full-molformula: C25H29I2NO3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Amiodarone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amiodarone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL633](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL633/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC C01BD01:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class III

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 645.32 | 6.94 | 42.68 | 0/4 | 2 | C25H29I2NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amiodarone*](https://en.wikipedia.org/w/index.php?title=Amiodarone&oldid=1371931813) (revision 1371931813, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 58 d | 58 d (range 15–142 d) |
| Protein binding | 96 % | 96% |
| Bioavailability | 20–55 % | 20–55% |
| Metabolism | hepatic | Liver |
| Excretion | - | Primarily liver and bile |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dofetilide]], [[Dronedarone]], [[Ibutilide]], [[Tedisamil]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
