---
type: compound
schema-version: 2
compound-id: macimorelin-compound
name: Macimorelin (Macrilen)
aliases:
- Macimorelin
- Macrilen
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: Ghrelin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL278623
chembl-max-phase: 4
half-life:
  value: 4.1
  value-max: null
  unit: h
  notes: 4.1 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-mediated)
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Macimorelin
  url: https://en.wikipedia.org/w/index.php?title=Macimorelin&oldid=1328964534
  revision: 1328964534
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL278623
  pref-name: MACIMORELIN
  molecule-type: Small molecule
  first-approval: 2017
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - V04CD06
  targets:
  - id: CHEMBL4616
    name: Growth hormone secretagogue receptor type 1
    action: AGONIST
  properties:
    full-mwt: 474.57
    mw-freebase: 474.57
    alogp: 1.84
    psa: 144.9
    hba: 4
    hbd: 6
    rtb: 10
    num-ro5-violations: 1
    qed-weighted: 0.15
    full-molformula: C26H30N6O3
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
  product: Ghryvelin (previously Macimorelin Aeterna Zentaris)
  ema-number: EMEA/H/C/004660
  url: https://www.ema.europa.eu/en/documents/product-information/ghryvelin-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/ghryvelin-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Macimorelin (Macrilen)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `macimorelin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **Aliases:** Macimorelin, Macrilen
- **ChEMBL:** [CHEMBL278623](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL278623/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral ghrelin receptor agonist approved as a diagnostic test, not a treatment.

## Mechanism

Ghrelin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2017
- **ATC V04CD06:** VARIOUS › OTHER DIAGNOSTIC AGENTS › Tests for pituitary function

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 474.57 | 1.84 | 144.9 | 6/4 | 1 | C26H30N6O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Growth hormone secretagogue receptor type 1 (CHEMBL4616)|Growth hormone secretagogue receptor type 1]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Macimorelin*](https://en.wikipedia.org/w/index.php?title=Macimorelin&oldid=1328964534) (revision 1328964534, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.1 h | 4.1 hours |
| Metabolism | hepatic | Hepatic (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Ghryvelin (previously Macimorelin Aeterna Zentaris)*](https://www.ema.europa.eu/en/documents/product-information/ghryvelin-epar-product-information_en.pdf) (EMEA/H/C/004660) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/ghryvelin-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4.1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Capromorelin]] (Growth hormone secretagogue receptor type 1), [[Pf-5190457]] (Growth hormone secretagogue receptor type 1), [[Relamorelin]] (Growth hormone secretagogue receptor type 1), [[Tabimorelin]] (Growth hormone secretagogue receptor type 1), [[Tzp-102]] (Growth hormone secretagogue receptor type 1)
- **Same ATC subgroup:** [[Metyrapone (Metopirone)]], [[Sermorelin]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
