---
type: compound
schema-version: 2
compound-id: vardenafil-compound
name: Vardenafil (Levitra)
aliases:
- Vardenafil
- Levitra
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
chembl-id: CHEMBL1520
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 5.0
  unit: h
  notes: 4–5 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 15.0
  value-max: null
  notes: 15%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Vardenafil
  url: https://en.wikipedia.org/w/index.php?title=Vardenafil&oldid=1365731239
  revision: 1365731239
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1520
  pref-name: VARDENAFIL
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G04BE09
  targets: []
  properties:
    full-mwt: 488.61
    mw-freebase: 488.61
    alogp: 2.07
    psa: 112.9
    hba: 8
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.52
    full-molformula: C23H32N6O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5876e062-e604-42a7-99c3-5da30b8dac06
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5876e062-e604-42a7-99c3-5da30b8dac06
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Levitra
  ema-number: EMEA/H/C/000475
  url: https://www.ema.europa.eu/en/documents/product-information/levitra-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Vardenafil (Levitra)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vardenafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Vardenafil, Levitra
- **ChEMBL:** [CHEMBL1520](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1520/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

PDE5 inhibitor structurally close to sildenafil, with more QT prolongation attached.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC G04BE09:** GENITO URINARY SYSTEM AND SEX HORMONES › UROLOGICALS › Drugs used in erectile dysfunction

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 488.61 | 2.07 | 112.9 | 1/8 | 0 | C23H32N6O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vardenafil*](https://en.wikipedia.org/w/index.php?title=Vardenafil&oldid=1365731239) (revision 1365731239, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–5 h | 4–5 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 15 % | 15% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5876e062…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5876e062-e604-42a7-99c3-5da30b8dac06), label version 20260105. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4, 5)
> - protein-binding: consistent (label values: 95)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Levitra*](https://www.ema.europa.eu/en/documents/product-information/levitra-epar-product-information_en.pdf) (EMEA/H/C/000475). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 4, 5, 6)
> - protein-binding: consistent (SmPC values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alprostadil]], [[Apomorphine]], [[Avanafil (Stendra)]], [[Cialis (Tadalafil)]], [[Papaverine]], [[Sildenafil (Viagra)]], [[Udenafil]], [[Yohimbine]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
