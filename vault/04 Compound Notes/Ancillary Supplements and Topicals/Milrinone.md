---
type: compound
schema-version: 2
compound-id: milrinone-compound
name: Milrinone
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
chembl-id: CHEMBL189
chembl-max-phase: 4
half-life:
  value: 2.3
  value-max: null
  unit: h
  notes: 2.3 hours (mean, in CHF)
protein-binding:
  value: 70.0
  value-max: 80.0
  unit: percent
  notes: 70 to 80%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.85
  notes: Kidney (85% as unchanged drug) within 24 hours
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (12%)
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
  title: Milrinone
  url: https://en.wikipedia.org/w/index.php?title=Milrinone&oldid=1329359957
  revision: 1329359957
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL189
  pref-name: MILRINONE
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01CE02
  targets: []
  properties:
    full-mwt: 211.22
    mw-freebase: 211.22
    alogp: 1.62
    psa: 69.54
    hba: 3
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.78
    full-molformula: C12H9N3O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Milrinone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `milrinone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL189](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL189/) · max phase 4 · id via Wikipedia infobox

## Source summary

Selective PDE3 inhibitor used intravenously as an inodilator in acute decompensated heart failure. Raises cardiac cAMP; the same mechanism drives its arrhythmia risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **ATC C01CE02:** CARDIOVASCULAR SYSTEM › CARDIAC STIMULANTS EXCL. CARDIAC GLYCOSIDES › Phosphodiesterase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 211.22 | 1.62 | 69.54 | 1/3 | 0 | C12H9N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Milrinone*](https://en.wikipedia.org/w/index.php?title=Milrinone&oldid=1329359957) (revision 1329359957, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.3 h | 2.3 hours (mean, in CHF) |
| Protein binding | 70–80 % | 70 to 80% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (12%) |
| Excretion | mainly urinary · fe 0.85 | Kidney (85% as unchanged drug) within 24 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bucladesine (Dibutyryl-cAMP)]], [[Enoximone]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
