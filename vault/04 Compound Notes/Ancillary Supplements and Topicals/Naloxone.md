---
type: compound
schema-version: 2
compound-id: naloxone-compound
name: Naloxone
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
chembl-id: CHEMBL80
chembl-max-phase: 4
half-life:
  value: 1.0
  value-max: 1.5
  unit: h
  notes: 1–1.5 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 2.0
  value-max: null
  notes: 2% (by mouth, 90% absorption but high first-pass metabolism); 43–54% (intranasal); 98% (intramuscular, subcutaneous)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, bile
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
  title: Naloxone
  url: https://en.wikipedia.org/w/index.php?title=Naloxone&oldid=1375186586
  revision: 1375186586
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL80
  pref-name: NALOXONE
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A06AH04
  - V03AB15
  targets: []
  properties:
    full-mwt: 327.38
    mw-freebase: 327.38
    alogp: 1.3
    psa: 70.0
    hba: 5
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C19H21NO4
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Naloxone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naloxone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL80](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL80/) · max phase 4 · id via Wikipedia infobox

## Source summary

Short-acting opioid antagonist for overdose reversal; its half-life is shorter than most opioids, so re-narcotisation is a real risk.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971
- **ATC A06AH04:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR CONSTIPATION › Peripheral opioid receptor antagonists
- **ATC V03AB15:** VARIOUS › ALL OTHER THERAPEUTIC PRODUCTS › Antidotes

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 327.38 | 1.3 | 70.0 | 2/5 | 0 | C19H21NO4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naloxone*](https://en.wikipedia.org/w/index.php?title=Naloxone&oldid=1375186586) (revision 1375186586, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–1.5 h | 1–1.5 h |
| Bioavailability | 2 % | 2% (by mouth, 90% absorption but high first-pass metabolism); 43–54% (intranasal); 98% (intramuscular, subcutaneous) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine, bile |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Andexanet Alfa]], [[Flumazenil]], [[Fomepizole]], [[Glutathione]], [[Idarucizumab]], [[Methylene Blue]], [[NAC (N-Acetylcysteine)]], [[Naloxegol]], [[Phentolamine]], [[Physostigmine]], [[Potassium Iodide (SSKI-KI)|Potassium Iodide (SSKI/KI)]], [[Pralidoxime]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
