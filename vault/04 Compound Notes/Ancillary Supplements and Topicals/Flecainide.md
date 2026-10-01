---
type: compound
schema-version: 2
compound-id: flecainide-compound
name: Flecainide
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
chembl-id: CHEMBL652
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours (range 12–27 hours)
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: 95.0
  value-max: null
  notes: 95%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6 (limited)
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Flecainide
  url: https://en.wikipedia.org/w/index.php?title=Flecainide&oldid=1370307646
  revision: 1370307646
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL652
  pref-name: FLECAINIDE
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C01BC04
  targets: []
  properties:
    full-mwt: 414.35
    mw-freebase: 414.35
    alogp: 3.44
    psa: 59.59
    hba: 4
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.67
    full-molformula: C17H20F6N2O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Flecainide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flecainide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL652](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL652/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Modulates fast cardiac sodium channels to alter impulse conduction; proarrhythmia makes clinical supervision essential.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985
- **Flags:** black-box warning
- **ATC C01BC04:** CARDIOVASCULAR SYSTEM › ANTIARRHYTHMICS, CLASS I AND III › Antiarrhythmics, class Ic

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 414.35 | 3.44 | 59.59 | 2/4 | 0 | C17H20F6N2O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flecainide*](https://en.wikipedia.org/w/index.php?title=Flecainide&oldid=1370307646) (revision 1370307646, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours (range 12–27 hours) |
| Protein binding | 40 % | 40% |
| Bioavailability | 95 % | 95% |
| Metabolism | hepatic | CYP2D6 (limited) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Propafenone]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
