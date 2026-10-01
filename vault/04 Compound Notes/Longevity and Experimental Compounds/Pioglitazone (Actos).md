---
type: compound
schema-version: 2
compound-id: pioglitazone-compound
name: Pioglitazone (Actos)
aliases:
- Pioglitazone
- Actos
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL595
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 7.0
  unit: h
  notes: 3–7 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '&gt;99%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Pioglitazone
  url: https://en.wikipedia.org/w/index.php?title=Pioglitazone&oldid=1365691930
  revision: 1365691930
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL595
  pref-name: PIOGLITAZONE
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A10BG03
  targets: []
  properties:
    full-mwt: 356.45
    mw-freebase: 356.45
    alogp: 3.16
    psa: 68.29
    hba: 5
    hbd: 1
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C19H20N2O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: c748f901-8321-4dc2-8848-b7ed27f11f97
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c748f901-8321-4dc2-8848-b7ed27f11f97
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Actos
  ema-number: EMEA/H/C/000285
  url: https://www.ema.europa.eu/en/documents/product-information/actos-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pioglitazone (Actos)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pioglitazone-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Pioglitazone, Actos
- **ChEMBL:** [CHEMBL595](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL595/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

PPAR-gamma agonist ('insulin sensitizer') that improves glycemic control and lipid profiles in type 2 diabetes; a distinct mechanism from metformin or SGLT2 inhibitors.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC A10BG03:** ALIMENTARY TRACT AND METABOLISM › BLOOD GLUCOSE LOWERING DRUGS, EXCL. INSULINS › Thiazolidinediones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 356.45 | 3.16 | 68.29 | 1/5 | 0 | C19H20N2O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pioglitazone*](https://en.wikipedia.org/w/index.php?title=Pioglitazone&oldid=1365691930) (revision 1365691930, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | 3–7 hours |
| Protein binding | 99 % | &gt;99% |
| Metabolism | hepatic | Liver (CYP2C8) |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set c748f901…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=c748f901-8321-4dc2-8848-b7ed27f11f97), label version 20260827. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8.3, 16, 22.7, 24, 48, 96)
> - protein-binding: consistent (label values: 99)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Actos*](https://www.ema.europa.eu/en/documents/product-information/actos-epar-product-information_en.pdf) (EMEA/H/C/000285). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 6, 16, 23)
> - protein-binding: consistent (SmPC values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lobeglitazone]], [[Rosiglitazone]], [[Troglitazone]]
- **Shared CYP substrate pool:** CYP2C8 (+15 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
