---
type: compound
schema-version: 2
compound-id: tolvaptan-compound
name: Tolvaptan
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Vasopressin V2 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL344159
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hours (terminal)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
pk-source:
  type: wikipedia-infobox
  title: Tolvaptan
  url: https://en.wikipedia.org/w/index.php?title=Tolvaptan&oldid=1331158991
  revision: 1331158991
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL344159
  pref-name: TOLVAPTAN
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - C03XA01
  targets:
  - id: CHEMBL1790
    name: Vasopressin V2 receptor
    action: ANTAGONIST
  properties:
    full-mwt: 448.95
    mw-freebase: 448.95
    alogp: 5.68
    psa: 69.64
    hba: 3
    hbd: 2
    rtb: 3
    num-ro5-violations: 1
    qed-weighted: 0.54
    full-molformula: C26H25ClN2O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 82ef58ef-ce46-434e-bf99-89fce51094f1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82ef58ef-ce46-434e-bf99-89fce51094f1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Samsca
  ema-number: EMEA/H/C/000980
  url: https://www.ema.europa.eu/en/documents/product-information/samsca-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tolvaptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tolvaptan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL344159](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL344159/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Acts on vasopressin receptors to alter free-water handling or vascular tone; sodium shifts require monitoring; V2 antagonist.

## Mechanism

Vasopressin V2 receptor antagonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC C03XA01:** CARDIOVASCULAR SYSTEM › OTHER DIURETICS › Vasopressin antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 448.95 | 5.68 | 69.64 | 2/3 | 1 | C26H25ClN2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Vasopressin V2 receptor (CHEMBL1790)|Vasopressin V2 receptor]] - antagonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tolvaptan*](https://en.wikipedia.org/w/index.php?title=Tolvaptan&oldid=1331158991) (revision 1331158991, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hours (terminal) |
| Protein binding | 99 % | 99% |
| Metabolism | hepatic | Liver (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 82ef58ef…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=82ef58ef-ce46-434e-bf99-89fce51094f1), label version 20260826. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 12, 180)
> - protein-binding: consistent (label values: 98)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Samsca*](https://www.ema.europa.eu/en/documents/product-information/samsca-epar-product-information_en.pdf) (EMEA/H/C/000980). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 8)
> - protein-binding: consistent (SmPC values: 98)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lixivaptan]] (Vasopressin V2 receptor), [[Mozavaptan]] (Vasopressin V2 receptor), [[Satavaptan]] (Vasopressin V2 receptor), [[Terlipressin]] (Vasopressin V2 receptor)
- **Same ATC subgroup:** [[Conivaptan]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
