---
type: compound
schema-version: 2
compound-id: febuxostat-compound
name: Febuxostat (Uloric)
aliases:
- Febuxostat
- Uloric
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Xanthine dehydrogenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1164729
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 8.0
  unit: h
  notes: ~5–8 hours
protein-binding:
  value: 99.2
  value-max: null
  unit: percent
  notes: 99.2% to albumin
bioavailability:
  value: 84.0
  value-max: null
  notes: ≥84% absorbed
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.03
  notes: Urine (~49%, mostly as metabolites, 3% as unchanged drug); feces (~45%, mostly as metabolites, 12% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: via CYP1A1, 1A2, 2C8, 2C9, UGT1A1, 1A8, 1A9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Febuxostat
  url: https://en.wikipedia.org/w/index.php?title=Febuxostat&oldid=1360922496
  revision: 1360922496
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1164729
  pref-name: FEBUXOSTAT
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M04AA03
  targets:
  - id: CHEMBL1929
    name: Xanthine dehydrogenase/oxidase
    action: INHIBITOR
  properties:
    full-mwt: 316.38
    mw-freebase: 316.38
    alogp: 3.72
    psa: 83.21
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C16H16N2O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f2c338dc-5bab-49f4-a4ac-d8dea8afeea5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f2c338dc-5bab-49f4-a4ac-d8dea8afeea5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Adenuric
  ema-number: EMEA/H/C/000777
  url: https://www.ema.europa.eu/en/documents/product-information/adenuric-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Febuxostat (Uloric)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `febuxostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Febuxostat, Uloric
- **ChEMBL:** [CHEMBL1164729](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1164729/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Non-purine xanthine oxidase inhibitor carrying a cardiovascular mortality boxed warning.

## Mechanism

Xanthine dehydrogenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008
- **Flags:** black-box warning
- **ATC M04AA03:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations inhibiting uric acid production

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 316.38 | 3.72 | 83.21 | 1/5 | 0 | C16H16N2O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Xanthine dehydrogenase-oxidase (CHEMBL1929)|Xanthine dehydrogenase/oxidase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Febuxostat*](https://en.wikipedia.org/w/index.php?title=Febuxostat&oldid=1360922496) (revision 1360922496, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | ~5–8 hours |
| Protein binding | 99.2 % | 99.2% to albumin |
| Bioavailability | 84 % | ≥84% absorbed |
| Metabolism | hepatic | via CYP1A1, 1A2, 2C8, 2C9, UGT1A1, 1A8, 1A9 |
| CYP (metabolised by) | CYP1A1 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.03 | Urine (~49%, mostly as metabolites, 3% as unchanged drug); feces (~45%, mostly as metabolites, 12% as unchanged drug) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f2c338dc…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f2c338dc-5bab-49f4-a4ac-d8dea8afeea5), label version 20260427. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 5, 8)
> - protein-binding: consistent (label values: 99.2)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Adenuric*](https://www.ema.europa.eu/en/documents/product-information/adenuric-epar-product-information_en.pdf) (EMEA/H/C/000777). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 8)
> - protein-binding: consistent (SmPC values: 82, 91, 99.2)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Allopurinol]] (Xanthine dehydrogenase/oxidase), [[Oxypurinol]] (Xanthine dehydrogenase/oxidase), [[Topiroxostat]] (Xanthine dehydrogenase/oxidase)
- **Same ATC subgroup:** [[Allopurinol]], [[Tisopurine]]
- **Shared CYP substrate pool:** CYP1A1 (+2 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
