---
type: compound
schema-version: 2
compound-id: glimepiride-compound
name: Glimepiride
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
chembl-id: CHEMBL1481
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: '>99.5%'
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (~60%), feces (~40%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Complete Liver (1st stage through CYP2C9)
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Glimepiride
  url: https://en.wikipedia.org/w/index.php?title=Glimepiride&oldid=1356289752
  revision: 1356289752
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1481
  pref-name: GLIMEPIRIDE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A10BB12
  targets:
  - id: CHEMBL2096972
    name: Sulfonylurea receptor 1, Kir6.2
    action: BLOCKER
  properties:
    full-mwt: 490.63
    mw-freebase: 490.63
    alogp: 3.07
    psa: 124.68
    hba: 5
    hbd: 3
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C24H34N4O5S
pk-verification:
  source: fda-label
  status: consistent
  set-id: fc9d8495-184c-3af1-e053-6394a90a5e29
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc9d8495-184c-3af1-e053-6394a90a5e29
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Glimepiride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `glimepiride-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1481](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1481/) · max phase 4 · id via Wikipedia infobox

## Source summary

Closes pancreatic beta-cell KATP channels to stimulate insulin release, with hypoglycemia as the central class risk.

## Mechanism

Sulfonylurea receptor 1, Kir6.2 blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC A10BB12:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Sulfonylureas

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 490.63 | 3.07 | 124.68 | 3/5 | 0 | C24H34N4O5S |

**Targets (ChEMBL curated mechanisms):**

- [[Sulfonylurea receptor 1, Kir6.2 (CHEMBL2096972)|Sulfonylurea receptor 1, Kir6.2]] - blocker · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Glimepiride*](https://en.wikipedia.org/w/index.php?title=Glimepiride&oldid=1356289752) (revision 1356289752, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours |
| Protein binding | 99.5 % | >99.5% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Complete Liver (1st stage through CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (~60%), feces (~40%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fc9d8495…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc9d8495-184c-3af1-e053-6394a90a5e29), label version 20260622. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 99.5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acetohexamide]] (Sulfonylurea receptor 1, Kir6.2), [[Chlorpropamide]] (Sulfonylurea receptor 1, Kir6.2), [[Glibenclamide]] (Sulfonylurea receptor 1, Kir6.2), [[Gliclazide]] (Sulfonylurea receptor 1, Kir6.2), [[Glipizide]] (Sulfonylurea receptor 1, Kir6.2), [[Glyburide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolazamide]] (Sulfonylurea receptor 1, Kir6.2), [[Tolbutamide]] (Sulfonylurea receptor 1, Kir6.2)
- **Same ATC subgroup:** [[Acetohexamide]], [[Chlorpropamide]], [[Glibenclamide]], [[Gliclazide]], [[Glipizide]], [[Gliquidone]], [[Glyburide]], [[Tolazamide]], [[Tolbutamide]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
