---
type: compound
schema-version: 2
compound-id: disopyramide-compound
name: Disopyramide
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
chembl-id: CHEMBL517
chembl-max-phase: 4
half-life:
  value: 6.7
  value-max: null
  unit: h
  notes: 6.7 hours (range 4 to 10 hours)
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50% to 65%; (concentration-dependent)
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-mediated)
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Disopyramide
  url: https://en.wikipedia.org/w/index.php?title=Disopyramide&oldid=1340058687
  revision: 1340058687
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL517
  pref-name: DISOPYRAMIDE
  molecule-type: Small molecule
  first-approval: 1977
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BA03
  targets: []
  properties:
    full-mwt: 339.48
    mw-freebase: 339.48
    alogp: 3.36
    psa: 59.22
    hba: 3
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C21H29N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Disopyramide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `disopyramide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL517](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL517/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Modulates fast cardiac sodium channels to alter impulse conduction; proarrhythmia makes clinical supervision essential.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1977
- **Flags:** black-box warning
- **ATC C01BA03:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ia

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 339.48 | 3.36 | 59.22 | 1/3 | 0 | C21H29N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Disopyramide*](https://en.wikipedia.org/w/index.php?title=Disopyramide&oldid=1340058687) (revision 1340058687, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6.7 h | 6.7 hours (range 4 to 10 hours) |
| Protein binding | 50 % | 50% to 65%; (concentration-dependent) |
| Bioavailability | - | High |
| Metabolism | hepatic | Hepatic (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal (80%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Procainamide]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
