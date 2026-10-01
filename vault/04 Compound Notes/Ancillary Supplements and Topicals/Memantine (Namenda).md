---
type: compound
schema-version: 2
compound-id: memantine-compound
name: Memantine (Namenda)
aliases:
- Memantine
- Namenda
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
chembl-id: CHEMBL807
chembl-max-phase: 4
half-life:
  value: 60.0
  value-max: 80.0
  unit: h
  notes: 60–80 hours
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.82
  notes: Urine (57–82% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal
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
  title: Memantine
  url: https://en.wikipedia.org/w/index.php?title=Memantine&oldid=1374800209
  revision: 1374800209
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL807
  pref-name: MEMANTINE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06DX01
  targets: []
  properties:
    full-mwt: 179.31
    mw-freebase: 179.31
    alogp: 2.69
    psa: 26.02
    hba: 1
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.61
    full-molformula: C12H21N
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: f73e0df0-4af4-42f1-bde6-3cccb47ca378
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f73e0df0-4af4-42f1-bde6-3cccb47ca378
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Ebixa
  ema-number: EMEA/H/C/000463
  url: https://www.ema.europa.eu/en/documents/product-information/ebixa-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Memantine (Namenda)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `memantine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Memantine, Namenda
- **ChEMBL:** [CHEMBL807](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL807/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Low to moderate affinity, uncompetitive, voltage-dependent open-channel blocker of the NMDA glutamate receptor.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC N06DX01:** NERVOUS SYSTEM › ANTI-DEMENTIA DRUGS › Other anti-dementia drugs

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 179.31 | 2.69 | 26.02 | 1/1 | 0 | C12H21N |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Memantine*](https://en.wikipedia.org/w/index.php?title=Memantine&oldid=1374800209) (revision 1374800209, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 60–80 h | 60–80 hours |
| Protein binding | 45 % | 45% |
| Bioavailability | 100 % | 100% |
| Metabolism | - | Minimal |
| Metabolites | - | • Memantine glucuronide; • 6-Hydroxymemantine; • 1-Nitrosomemantine |
| Excretion | mainly urinary · fe 0.82 | Urine (57–82% unchanged) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f73e0df0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f73e0df0-4af4-42f1-bde6-3cccb47ca378), label version 20251220. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 60, 80)
> - protein-binding: consistent (label values: 45)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ebixa*](https://www.ema.europa.eu/en/documents/product-information/ebixa-epar-product-information_en.pdf) (EMEA/H/C/000463). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 60, 100)
> - protein-binding: consistent (SmPC values: 45)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Aducanumab (Aduhelm)]], [[Donanemab (Kisunla)]], [[Ginkgo Biloba]], [[Lecanemab (Leqembi)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
