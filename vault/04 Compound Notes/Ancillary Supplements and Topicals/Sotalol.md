---
type: compound
schema-version: 2
compound-id: sotalol-compound
name: Sotalol
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
chembl-id: CHEMBL471
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: 100.0
  notes: 90–100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney ; Mammary gland (In lactating individuals)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not metabolized
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
  title: Sotalol
  url: https://en.wikipedia.org/w/index.php?title=Sotalol&oldid=1356962329
  revision: 1356962329
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL471
  pref-name: SOTALOL
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C07AA07
  targets: []
  properties:
    full-mwt: 272.37
    mw-freebase: 272.37
    alogp: 1.09
    psa: 78.43
    hba: 4
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.72
    full-molformula: C12H20N2O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sotalol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sotalol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL471](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL471/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Alters cardiac repolarization through potassium-channel effects; QT prolongation and torsades risk vary by agent.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **Flags:** black-box warning
- **ATC C07AA07:** CARDIOVASCULAR SYSTEM › BETA BLOCKING AGENTS › Beta blocking agents, non-selective

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 272.37 | 1.09 | 78.43 | 3/4 | 0 | C12H20N2O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sotalol*](https://en.wikipedia.org/w/index.php?title=Sotalol&oldid=1356962329) (revision 1356962329, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Bioavailability | 90–100 % | 90–100% |
| Metabolism | - | Not metabolized |
| Excretion | mainly urinary | Kidney ; Mammary gland (In lactating individuals) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Nadolol]], [[Oxprenolol]], [[Penbutolol]], [[Pindolol]], [[Propranolol]], [[Timolol]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
