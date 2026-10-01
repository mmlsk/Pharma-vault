---
type: compound
schema-version: 2
compound-id: fosphenytoin-compound
name: Fosphenytoin
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
chembl-id: CHEMBL919
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: min
  notes: 15 minutes to convert to phenytoin
protein-binding:
  value: 95.0
  value-max: 99.0
  unit: percent
  notes: 95–99%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (as phenytoin)
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
pk-source:
  type: wikipedia-infobox
  title: Fosphenytoin
  url: https://en.wikipedia.org/w/index.php?title=Fosphenytoin&oldid=1329255061
  revision: 1329255061
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201336
  pref-name: FOSPHENYTOIN SODIUM
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N03AB05
  targets: []
  properties:
    full-mwt: 362.28
    mw-freebase: 362.28
    alogp: 1.55
    psa: 116.17
    hba: 4
    hbd: 3
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C16H15N2O6P
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Fosphenytoin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosphenytoin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL919](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL919/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **Flags:** black-box warning, prodrug
- **ATC N03AB05:** NERVOUS SYSTEM › ANTIEPILEPTICS › Hydantoin derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 362.28 | 1.55 | 116.17 | 3/4 | 0 | C16H15N2O6P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosphenytoin*](https://en.wikipedia.org/w/index.php?title=Fosphenytoin&oldid=1329255061) (revision 1329255061, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 min | 15 minutes to convert to phenytoin |
| Protein binding | 95–99 % | 95–99% |
| Bioavailability | 100 % | 100% (IM) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney (as phenytoin) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Phenytoin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
