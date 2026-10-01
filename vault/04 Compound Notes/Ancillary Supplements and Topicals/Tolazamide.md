---
type: compound
schema-version: 2
compound-id: tolazamide-compound
name: Tolazamide
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Sulfonylurea receptor 1, Kir6.2 blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL817
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: null
  unit: h
  notes: 7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: '?'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (85%) and fecal (7%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: metabolized in the liver to active metabolites
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
  title: Tolazamide
  url: https://en.wikipedia.org/w/index.php?title=Tolazamide&oldid=1332225999
  revision: 1332225999
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL817
  pref-name: TOLAZAMIDE
  molecule-type: Small molecule
  first-approval: 1966
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BB05
  targets:
  - id: CHEMBL2096972
    name: Sulfonylurea receptor 1, Kir6.2
    action: BLOCKER
  properties:
    full-mwt: 311.41
    mw-freebase: 311.41
    alogp: 1.77
    psa: 78.51
    hba: 4
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.89
    full-molformula: C14H21N3O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tolazamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tolazamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL817](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL817/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Closes pancreatic beta-cell KATP channels to stimulate insulin release, with hypoglycemia as the central class risk.

## Mechanism

Sulfonylurea receptor 1, Kir6.2 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1966
- **ATC A10BB05:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sulfonylureas

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 311.41 | 1.77 | 78.51 | 2/4 | 0 | C14H21N3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Sulfonylurea receptor 1, Kir6.2 (CHEMBL2096972)|Sulfonylurea receptor 1, Kir6.2]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tolazamide*](https://en.wikipedia.org/w/index.php?title=Tolazamide&oldid=1332225999) (revision 1332225999, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | 7 hours |
| Bioavailability | - | ? |
| Metabolism | hepatic | metabolized in the liver to active metabolites |
| Excretion | mainly urinary | Renal (85%) and fecal (7%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetohexamide]] (Sulfonylurea receptor 1, Kir6.2), [[Chlorpropamide]] (Sulfonylurea receptor 1, Kir6.2), [[Glibenclamide]] (Sulfonylurea receptor 1, Kir6.2), [[Gliclazide]] (Sulfonylurea receptor 1, Kir6.2), [[Glimepiride]] (Sulfonylurea receptor 1, Kir6.2), [[Glipizide]] (Sulfonylurea receptor 1, Kir6.2), [[Glyburide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolbutamide]] (Sulfonylurea receptor 1, Kir6.2)
- **Same ATC subgroup:** [[Acetohexamide]], [[Chlorpropamide]], [[Glibenclamide]], [[Gliclazide]], [[Glimepiride]], [[Glipizide]], [[Gliquidone]], [[Glyburide]], [[Tolbutamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
