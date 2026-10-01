---
type: compound
schema-version: 2
compound-id: doxycycline-compound
name: Doxycycline
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
chembl-id: CHEMBL1433
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 22.0
  unit: h
  notes: 10–22 hours
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly feces, 40% urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Negligible
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Doxycycline
  url: https://en.wikipedia.org/w/index.php?title=Doxycycline&oldid=1374617285
  revision: 1374617285
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1433
  pref-name: DOXYCYCLINE ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: true
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 444.44
    mw-freebase: 444.44
    alogp: -0.35
    psa: 181.62
    hba: 9
    hbd: 6
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.33
    full-molformula: C22H24N2O8
  identity-check: no-evidence
pk-verification:
  source: fda-label
  status: consistent
  set-id: 595470f9-2004-c378-e063-6294a90a3415
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=595470f9-2004-c378-e063-6294a90a3415
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Doxycycline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxycycline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1433](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1433/) · max phase 4 · id via Wikipedia infobox · structure check: no PubChem structure available

## Source summary

Tetracycline used for acne and sub-antimicrobial anti-inflammatory dosing in rosacea; photosensitivity and antimicrobial stewardship matter.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **Flags:** black-box warning

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 444.44 | -0.35 | 181.62 | 6/9 | 1 | C22H24N2O8 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxycycline*](https://en.wikipedia.org/w/index.php?title=Doxycycline&oldid=1374617285) (revision 1374617285, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–22 h | 10–22 hours |
| Protein binding | 80–90 % | 80–90% |
| Bioavailability | 100 % | ~100% |
| Metabolism | - | Negligible |
| Excretion | - | Mainly feces, 40% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 595470f9…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=595470f9-2004-c378-e063-6294a90a3415), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.6, 16.33, 18, 22, 72)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Doxycycline 40 mg modified release (Oracea)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
