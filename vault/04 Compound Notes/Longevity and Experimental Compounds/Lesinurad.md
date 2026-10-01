---
type: compound
schema-version: 2
compound-id: lesinurad-compound
name: Lesinurad
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Solute carrier family 22 member 12 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2105720
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: ~5 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: '>98%'
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (63%), feces (32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2C9)
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Lesinurad
  url: https://en.wikipedia.org/w/index.php?title=Lesinurad&oldid=1360239693
  revision: 1360239693
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2105720
  pref-name: LESINURAD
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M04AB05
  targets:
  - id: CHEMBL6120
    name: Solute carrier family 22 member 12
    action: INHIBITOR
  properties:
    full-mwt: 404.29
    mw-freebase: 404.29
    alogp: 4.24
    psa: 68.01
    hba: 5
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C17H14BrN3O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lesinurad

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lesinurad-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL2105720](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2105720/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Blocks proximal-tubule urate reabsorption to raise fractional urate excretion; urine volume and stone risk need attention; withdrawn from marketing.

## Mechanism

Solute carrier family 22 member 12 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **Flags:** black-box warning
- **ATC M04AB05:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations increasing uric acid excretion

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 404.29 | 4.24 | 68.01 | 1/5 | 0 | C17H14BrN3O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 22 member 12 (CHEMBL6120)|Solute carrier family 22 member 12]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lesinurad*](https://en.wikipedia.org/w/index.php?title=Lesinurad&oldid=1360239693) (revision 1360239693, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | ~5 hours |
| Protein binding | 98 % | >98% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Hepatic (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (63%), feces (32%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Benzbromarone]] (Solute carrier family 22 member 12), [[Dotinurad]] (Solute carrier family 22 member 12), [[Sulfinpyrazone]] (Solute carrier family 22 member 12), [[Verinurad]] (Solute carrier family 22 member 12)
- **Same ATC subgroup:** [[Benzbromarone]], [[Probenecid]], [[Sulfinpyrazone]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
