---
type: compound
schema-version: 2
compound-id: sacubitril-compound
name: Sacubitril
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Neprilysin inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3137301
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
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
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- chembl-profile
- chembl-name-match
- identity-confirmed
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3137301
  pref-name: SACUBITRIL
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1944
    name: Neprilysin
    action: INHIBITOR
  properties:
    full-mwt: 411.5
    mw-freebase: 411.5
    alogp: 3.84
    psa: 92.7
    hba: 4
    hbd: 2
    rtb: 11
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C24H29NO5
  identity-check: structure-confirmed
---

# Sacubitril

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sacubitril-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL3137301](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3137301/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Neprilysin inhibitor, given with valsartan as ARNI therapy. Raises natriuretic peptides by blocking their degradation rather than supplying more — which is why it is combined with an ARB to offset the angiotensin II that also accumulates.

## Mechanism

Neprilysin inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 411.5 | 3.84 | 92.7 | 2/4 | 0 | C24H29NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[Neprilysin (CHEMBL1944)|Neprilysin]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Ilepatril]] (Neprilysin)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
