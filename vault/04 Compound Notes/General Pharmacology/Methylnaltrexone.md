---
type: compound
schema-version: 2
compound-id: methylnaltrexone-compound
name: Methylnaltrexone
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1186579
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: null
  unit: h
  notes: 8 hours
protein-binding:
  value: 11.0
  value-max: 15.3
  unit: percent
  notes: 11–15.3%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (50%), faeces (50%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- sedation-respiratory-depression
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Methylnaltrexone
  url: https://en.wikipedia.org/w/index.php?title=Methylnaltrexone&oldid=1341889075
  revision: 1341889075
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1186579
  pref-name: METHYLNALTREXONE
  molecule-type: Small molecule
  first-approval: 2008
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 356.44
    mw-freebase: 356.44
    alogp: 1.67
    psa: 66.76
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C21H26NO4+
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Relistor
  ema-number: EMEA/H/C/000870
  url: https://www.ema.europa.eu/en/documents/product-information/relistor-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/relistor-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Methylnaltrexone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylnaltrexone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1186579](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1186579/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Quaternary opioid antagonist that cannot cross the blood-brain barrier, so it reverses constipation without reversing analgesia.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2008

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 356.44 | 1.67 | 66.76 | 2/4 | 0 | C21H26NO4+ |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylnaltrexone*](https://en.wikipedia.org/w/index.php?title=Methylnaltrexone&oldid=1341889075) (revision 1341889075, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours |
| Protein binding | 11–15.3 % | 11–15.3% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine (50%), faeces (50%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Relistor*](https://www.ema.europa.eu/en/documents/product-information/relistor-epar-product-information_en.pdf) (EMEA/H/C/000870) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/relistor-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 8)
> - protein-binding: consistent (SmPC values: 11, 15.3)

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
