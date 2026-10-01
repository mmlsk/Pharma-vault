---
type: compound
schema-version: 2
compound-id: verapamil-compound
name: Verapamil
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
chembl-id: CHEMBL6966
chembl-max-phase: 4
half-life:
  value: 2.8
  value-max: 7.4
  unit: h
  notes: 2.8–7.4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 35.1
  value-max: null
  notes: 35.1%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidney: 11%'
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
  title: Verapamil
  url: https://en.wikipedia.org/w/index.php?title=Verapamil&oldid=1370506845
  revision: 1370506845
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL6966
  pref-name: VERAPAMIL
  molecule-type: Small molecule
  first-approval: 1981
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08DA01
  - C08DA51
  targets: []
  properties:
    full-mwt: 454.61
    mw-freebase: 454.61
    alogp: 5.09
    psa: 63.95
    hba: 6
    hbd: 0
    rtb: 13
    num-ro5-violations: 1
    qed-weighted: 0.42
    full-molformula: C27H38N2O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Verapamil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `verapamil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL6966](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL6966/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The most cardiac-selective calcium channel blocker; constipation is the near-universal complaint.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1981
- **ATC C08DA01:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH DIRECT CARDIAC EFFECTS › Phenylalkylamine derivatives
- **ATC C08DA51:** CARDIOVASCULAR SYSTEM › SELECTIVE CALCIUM CHANNEL BLOCKERS WITH DIRECT CARDIAC EFFECTS › Phenylalkylamine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 454.61 | 5.09 | 63.95 | 0/6 | 1 | C27H38N2O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Verapamil*](https://en.wikipedia.org/w/index.php?title=Verapamil&oldid=1370506845) (revision 1370506845, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.8–7.4 h | 2.8–7.4 hours |
| Bioavailability | 35.1 % | 35.1% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney: 11% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
