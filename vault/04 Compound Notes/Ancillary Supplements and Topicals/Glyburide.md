---
type: compound
schema-version: 2
compound-id: glyburide-compound
name: Glyburide
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
chembl-id: CHEMBL472
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Extensive
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver hydroxylation (CYP2C9-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Glibenclamide
  url: https://en.wikipedia.org/w/index.php?title=Glibenclamide&oldid=1338578844
  revision: 1338578844
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL472
  pref-name: GLYBURIDE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BB01
  targets:
  - id: CHEMBL2096972
    name: Sulfonylurea receptor 1, Kir6.2
    action: BLOCKER
  properties:
    full-mwt: 494.01
    mw-freebase: 494.01
    alogp: 3.64
    psa: 113.6
    hba: 5
    hbd: 3
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C23H28ClN3O5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 524eec41-37ee-419a-b7a1-d23e888ae6ab
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=524eec41-37ee-419a-b7a1-d23e888ae6ab
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Amglidia
  ema-number: EMEA/H/C/004379
  url: https://www.ema.europa.eu/en/documents/product-information/amglidia-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Glyburide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `glyburide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL472](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL472/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Closes pancreatic beta-cell KATP channels to stimulate insulin release, with hypoglycemia as the central class risk.

## Mechanism

Sulfonylurea receptor 1, Kir6.2 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **ATC A10BB01:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sulfonylureas

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 494.01 | 3.64 | 113.6 | 3/5 | 0 | C23H28ClN3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Sulfonylurea receptor 1, Kir6.2 (CHEMBL2096972)|Sulfonylurea receptor 1, Kir6.2]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Glibenclamide*](https://en.wikipedia.org/w/index.php?title=Glibenclamide&oldid=1338578844) (revision 1338578844, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | - | Extensive |
| Metabolism | hepatic | Liver hydroxylation (CYP2C9-mediated) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 524eec41…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=524eec41-37ee-419a-b7a1-d23e888ae6ab), label version 20260612. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 10)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Amglidia*](https://www.ema.europa.eu/en/documents/product-information/amglidia-epar-product-information_en.pdf) (EMEA/H/C/004379). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 2.5, 5, 8, 10, 15)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Glibenclamide]]
- **Shared target:** [[Acetohexamide]] (Sulfonylurea receptor 1, Kir6.2), [[Chlorpropamide]] (Sulfonylurea receptor 1, Kir6.2), [[Glibenclamide]] (Sulfonylurea receptor 1, Kir6.2), [[Gliclazide]] (Sulfonylurea receptor 1, Kir6.2), [[Glimepiride]] (Sulfonylurea receptor 1, Kir6.2), [[Glipizide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolazamide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolbutamide]] (Sulfonylurea receptor 1, Kir6.2)
- **Same ATC subgroup:** [[Acetohexamide]], [[Chlorpropamide]], [[Glibenclamide]], [[Gliclazide]], [[Glimepiride]], [[Glipizide]], [[Gliquidone]], [[Tolazamide]], [[Tolbutamide]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
