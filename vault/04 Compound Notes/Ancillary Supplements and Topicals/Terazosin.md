---
type: compound
schema-version: 2
compound-id: terazosin-compound
name: Terazosin
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
chembl-id: CHEMBL611
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours
protein-binding:
  value: 90.0
  value-max: 94.0
  unit: percent
  notes: 90–94%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
pk-source:
  type: wikipedia-infobox
  title: Terazosin
  url: https://en.wikipedia.org/w/index.php?title=Terazosin&oldid=1329438738
  revision: 1329438738
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL611
  pref-name: TERAZOSIN
  molecule-type: Small molecule
  first-approval: 1987
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04CA03
  targets: []
  properties:
    full-mwt: 387.44
    mw-freebase: 387.44
    alogp: 1.06
    psa: 103.04
    hba: 8
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C19H25N5O4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 57125b47-2156-181c-e063-6394a90ad763
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=57125b47-2156-181c-e063-6394a90ad763
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Terazosin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `terazosin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL611](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL611/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks alpha-1 adrenoceptors to relax vascular or prostatic smooth muscle; first-dose hypotension and floppy-iris syndrome are class effects.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1987
- **ATC G04CA03:** GENITO URINARY SYSTEM AND SEX HORMONES › DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY › Alpha-adrenoreceptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 387.44 | 1.06 | 103.04 | 1/8 | 0 | C19H25N5O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Terazosin*](https://en.wikipedia.org/w/index.php?title=Terazosin&oldid=1329438738) (revision 1329438738, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours |
| Protein binding | 90–94 % | 90–94% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 57125b47…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=57125b47-2156-181c-e063-6394a90ad763), label version 20260720. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 11.4, 12, 14)
> - protein-binding: consistent (label values: 90, 94)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alfuzosin]], [[Silodosin]], [[Tamsulosin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
