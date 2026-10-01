---
type: compound
schema-version: 2
compound-id: metyrapone-compound
name: Metyrapone (Metopirone)
aliases:
- Metyrapone
- Metopirone
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cytochrome P450 11B1, mitochondrial inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL934
chembl-max-phase: 4
half-life:
  value: 1.9
  value-max: null
  unit: h
  notes: 1.9 ± 0.7 hours
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
  primary-route: null
  extraction-ratio: null
  notes: null
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Metyrapone
  url: https://en.wikipedia.org/w/index.php?title=Metyrapone&oldid=1356275720
  revision: 1356275720
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL934
  pref-name: METYRAPONE
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - V04CD01
  targets:
  - id: CHEMBL1908
    name: Cytochrome P450 11B1, mitochondrial
    action: INHIBITOR
  properties:
    full-mwt: 226.28
    mw-freebase: 226.28
    alogp: 2.64
    psa: 42.85
    hba: 3
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C14H14N2O
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 4046b167-7a46-8f4a-e063-6394a90a147f
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4046b167-7a46-8f4a-e063-6394a90a147f
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Metyrapone (Metopirone)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metyrapone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Metyrapone, Metopirone
- **ChEMBL:** [CHEMBL934](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL934/) · max phase 4 · id via Wikipedia infobox

## Source summary

Steroidogenesis inhibitor that blocks 11-beta-hydroxylase, the last step of cortisol synthesis.

## Mechanism

Cytochrome P450 11B1, mitochondrial inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **ATC V04CD01:** VARIOUS › OTHER DIAGNOSTIC AGENTS › Tests for pituitary function

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 226.28 | 2.64 | 42.85 | 0/3 | 0 | C14H14N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Cytochrome P450 11B1, mitochondrial (CHEMBL1908)|Cytochrome P450 11B1, mitochondrial]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metyrapone*](https://en.wikipedia.org/w/index.php?title=Metyrapone&oldid=1356275720) (revision 1356275720, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.9 h | 1.9 ± 0.7 hours |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 4046b167…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=4046b167-7a46-8f4a-e063-6394a90a147f), label version 20260519. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 4)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Levoketoconazole]] (Cytochrome P450 11B1, mitochondrial), [[Mitotane]] (Cytochrome P450 11B1, mitochondrial)
- **Same ATC subgroup:** [[Macimorelin (Macrilen)]], [[Sermorelin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
