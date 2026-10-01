---
type: compound
schema-version: 2
compound-id: procainamide-compound
name: Procainamide
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
chembl-id: CHEMBL640
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 4.5
  unit: h
  notes: ~2.5 to 4.5 hours
protein-binding:
  value: 15.0
  value-max: 20.0
  unit: percent
  notes: 15 to 20%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Procainamide
  url: https://en.wikipedia.org/w/index.php?title=Procainamide&oldid=1342505612
  revision: 1342505612
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL640
  pref-name: PROCAINAMIDE
  molecule-type: Small molecule
  first-approval: 1950
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BA02
  targets: []
  properties:
    full-mwt: 235.33
    mw-freebase: 235.33
    alogp: 1.34
    psa: 58.36
    hba: 3
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.73
    full-molformula: C13H21N3O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Procainamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `procainamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL640](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL640/) · max phase 4 · id via Wikipedia infobox

## Source summary

Modulates fast cardiac sodium channels to alter impulse conduction; proarrhythmia makes clinical supervision essential.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1950
- **Flags:** black-box warning
- **ATC C01BA02:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ia

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 235.33 | 1.34 | 58.36 | 2/3 | 0 | C13H21N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Procainamide*](https://en.wikipedia.org/w/index.php?title=Procainamide&oldid=1342505612) (revision 1342505612, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–4.5 h | ~2.5 to 4.5 hours |
| Protein binding | 15–20 % | 15 to 20% |
| Bioavailability | 85 % | 85% (by mouth) |
| Metabolism | hepatic | Liver (CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Disopyramide]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
