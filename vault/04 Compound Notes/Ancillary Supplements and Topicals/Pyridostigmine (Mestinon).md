---
type: compound
schema-version: 2
compound-id: pyridostigmine-compound
name: Pyridostigmine (Mestinon)
aliases:
- Pyridostigmine
- Mestinon
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
chembl-id: CHEMBL1115
chembl-max-phase: 4
half-life:
  value: 1.78
  value-max: null
  unit: h
  notes: 1.78 ± 0.24 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 7.6
  value-max: null
  notes: 7.6 ± 2.4%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney
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
  title: Pyridostigmine
  url: https://en.wikipedia.org/w/index.php?title=Pyridostigmine&oldid=1367130428
  revision: 1367130428
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1115
  pref-name: PYRIDOSTIGMINE
  molecule-type: Small molecule
  first-approval: 1955
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N07AA02
  targets: []
  properties:
    full-mwt: 181.22
    mw-freebase: 181.22
    alogp: 0.57
    psa: 33.42
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C9H13N2O2+
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pyridostigmine (Mestinon)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pyridostigmine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Pyridostigmine, Mestinon
- **ChEMBL:** [CHEMBL1115](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1115/) · max phase 4 · id via Wikipedia infobox

## Source summary

Quaternary ammonium cholinesterase inhibitor that stays outside the brain by design; first-line symptomatic treatment for myasthenia gravis.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1955
- **Flags:** black-box warning
- **ATC N07AA02:** NERVOUS SYSTEM › PARASYMPATHOMIMETICS › Anticholinesterases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 181.22 | 0.57 | 33.42 | 0/2 | 0 | C9H13N2O2+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pyridostigmine*](https://en.wikipedia.org/w/index.php?title=Pyridostigmine&oldid=1367130428) (revision 1367130428, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.78 h | 1.78 ± 0.24 hours |
| Bioavailability | 7.6 % | 7.6 ± 2.4% |
| Excretion | mainly urinary | kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Ambenonium]], [[Distigmine]], [[Neostigmine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
