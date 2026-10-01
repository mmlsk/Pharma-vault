---
type: compound
schema-version: 2
compound-id: alfuzosin-compound
name: Alfuzosin
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
chembl-id: CHEMBL709
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 82.0
  value-max: 90.0
  unit: percent
  notes: 82–90%
bioavailability:
  value: 49.0
  value-max: null
  notes: 49%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (69%) and Urine (24%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Alfuzosin
  url: https://en.wikipedia.org/w/index.php?title=Alfuzosin&oldid=1358588137
  revision: 1358588137
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL709
  pref-name: ALFUZOSIN
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04CA01
  targets: []
  properties:
    full-mwt: 389.46
    mw-freebase: 389.46
    alogp: 1.35
    psa: 111.83
    hba: 8
    hbd: 2
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.65
    full-molformula: C19H27N5O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Alfuzosin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alfuzosin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL709](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL709/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks alpha-1 adrenoceptors to relax vascular or prostatic smooth muscle; first-dose hypotension and floppy-iris syndrome are class effects.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC G04CA01:** GENITO URINARY SYSTEM AND SEX HORMONES › DRUGS USED IN BENIGN PROSTATIC HYPERTROPHY › Alpha-adrenoreceptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 389.46 | 1.35 | 111.83 | 2/8 | 0 | C19H27N5O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alfuzosin*](https://en.wikipedia.org/w/index.php?title=Alfuzosin&oldid=1358588137) (revision 1358588137, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 82–90 % | 82–90% |
| Bioavailability | 49 % | 49% |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (69%) and Urine (24%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Silodosin]], [[Tamsulosin]], [[Terazosin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
