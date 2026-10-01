---
type: compound
schema-version: 2
compound-id: chlorpropamide-compound
name: Chlorpropamide
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
chembl-id: CHEMBL498
chembl-max-phase: 4
half-life:
  value: 36.0
  value-max: null
  unit: h
  notes: 36 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 90.0
  value-max: null
  notes: '>90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (glomerular filtration → reabsorption → tubular secretion)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: <1%
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
  title: Chlorpropamide
  url: https://en.wikipedia.org/w/index.php?title=Chlorpropamide&oldid=1375022169
  revision: 1375022169
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL498
  pref-name: CHLORPROPAMIDE
  molecule-type: Small molecule
  first-approval: 1958
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BB02
  targets:
  - id: CHEMBL2096972
    name: Sulfonylurea receptor 1, Kir6.2
    action: BLOCKER
  properties:
    full-mwt: 276.75
    mw-freebase: 276.75
    alogp: 1.74
    psa: 75.27
    hba: 3
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.88
    full-molformula: C10H13ClN2O3S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Chlorpropamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorpropamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL498](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL498/) · max phase 4 · id via Wikipedia infobox

## Source summary

Closes pancreatic beta-cell KATP channels to stimulate insulin release, with hypoglycemia as the central class risk.

## Mechanism

Sulfonylurea receptor 1, Kir6.2 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1958
- **ATC A10BB02:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sulfonylureas

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 276.75 | 1.74 | 75.27 | 2/3 | 0 | C10H13ClN2O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Sulfonylurea receptor 1, Kir6.2 (CHEMBL2096972)|Sulfonylurea receptor 1, Kir6.2]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlorpropamide*](https://en.wikipedia.org/w/index.php?title=Chlorpropamide&oldid=1375022169) (revision 1375022169, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36 h | 36 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 90 % | >90% |
| Metabolism | - | <1% |
| Excretion | mainly urinary | Renal (glomerular filtration → reabsorption → tubular secretion) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetohexamide]] (Sulfonylurea receptor 1, Kir6.2), [[Glibenclamide]] (Sulfonylurea receptor 1, Kir6.2), [[Gliclazide]] (Sulfonylurea receptor 1, Kir6.2), [[Glimepiride]] (Sulfonylurea receptor 1, Kir6.2), [[Glipizide]] (Sulfonylurea receptor 1, Kir6.2), [[Glyburide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolazamide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolbutamide]] (Sulfonylurea receptor 1, Kir6.2)
- **Same ATC subgroup:** [[Acetohexamide]], [[Glibenclamide]], [[Gliclazide]], [[Glimepiride]], [[Glipizide]], [[Gliquidone]], [[Glyburide]], [[Tolazamide]], [[Tolbutamide]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
