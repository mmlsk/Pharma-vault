---
type: compound
schema-version: 2
compound-id: tolbutamide-compound
name: Tolbutamide
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
chembl-id: CHEMBL782
chembl-max-phase: 4
half-life:
  value: 4.5
  value-max: 6.5
  unit: h
  notes: 4.5 to 6.5 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2C19-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tolbutamide
  url: https://en.wikipedia.org/w/index.php?title=Tolbutamide&oldid=1330113537
  revision: 1330113537
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL782
  pref-name: TOLBUTAMIDE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BB03
  - V04CA01
  targets:
  - id: CHEMBL2096972
    name: Sulfonylurea receptor 1, Kir6.2
    action: BLOCKER
  properties:
    full-mwt: 270.35
    mw-freebase: 270.35
    alogp: 1.78
    psa: 75.27
    hba: 3
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C12H18N2O3S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Tolbutamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tolbutamide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL782](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL782/) · max phase 4 · id via Wikipedia infobox

## Source summary

Closes pancreatic beta-cell KATP channels to stimulate insulin release, with hypoglycemia as the central class risk.

## Mechanism

Sulfonylurea receptor 1, Kir6.2 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **ATC A10BB03:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sulfonylureas
- **ATC V04CA01:** VARIOUS › OTHER DIAGNOSTIC AGENTS › Tests for diabetes

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 270.35 | 1.78 | 75.27 | 2/3 | 0 | C12H18N2O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Sulfonylurea receptor 1, Kir6.2 (CHEMBL2096972)|Sulfonylurea receptor 1, Kir6.2]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tolbutamide*](https://en.wikipedia.org/w/index.php?title=Tolbutamide&oldid=1330113537) (revision 1330113537, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–6.5 h | 4.5 to 6.5 hours |
| Protein binding | 96 % | 96% |
| Metabolism | hepatic | Hepatic (CYP2C19-mediated) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetohexamide]] (Sulfonylurea receptor 1, Kir6.2), [[Chlorpropamide]] (Sulfonylurea receptor 1, Kir6.2), [[Glibenclamide]] (Sulfonylurea receptor 1, Kir6.2), [[Gliclazide]] (Sulfonylurea receptor 1, Kir6.2), [[Glimepiride]] (Sulfonylurea receptor 1, Kir6.2), [[Glipizide]] (Sulfonylurea receptor 1, Kir6.2), [[Glyburide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolazamide]] (Sulfonylurea receptor 1, Kir6.2)
- **Same ATC subgroup:** [[Acetohexamide]], [[Chlorpropamide]], [[Glibenclamide]], [[Gliclazide]], [[Glimepiride]], [[Glipizide]], [[Gliquidone]], [[Glyburide]], [[Tolazamide]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
