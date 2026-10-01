---
type: compound
schema-version: 2
compound-id: benzbromarone-compound
name: Benzbromarone
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
chembl-id: CHEMBL388590
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours (30 hours for main active metabolite 6-hydroxybenzbromarone)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly feces; Urine (8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9)
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
pk-source:
  type: wikipedia-infobox
  title: Benzbromarone
  url: https://en.wikipedia.org/w/index.php?title=Benzbromarone&oldid=1371159730
  revision: 1371159730
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL388590
  pref-name: BENZBROMARONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: true
  atc-codes:
  - M04AB03
  targets:
  - id: CHEMBL6120
    name: Solute carrier family 22 member 12
    action: INHIBITOR
  properties:
    full-mwt: 424.09
    mw-freebase: 424.09
    alogp: 5.46
    psa: 50.44
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 1
    qed-weighted: 0.57
    full-molformula: C17H12Br2O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Benzbromarone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `benzbromarone-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL388590](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL388590/) · max phase 4 · id via Wikipedia infobox

## Source summary

Blocks proximal-tubule urate reabsorption to raise fractional urate excretion; urine volume and stone risk need attention; restricted in some countries over hepatotoxicity.

## Mechanism

Solute carrier family 22 member 12 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** withdrawn
- **ATC M04AB03:** MUSCULO-SKELETAL SYSTEM › ANTIGOUT PREPARATIONS › Preparations increasing uric acid excretion

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 424.09 | 5.46 | 50.44 | 1/3 | 1 | C17H12Br2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Solute carrier family 22 member 12 (CHEMBL6120)|Solute carrier family 22 member 12]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Benzbromarone*](https://en.wikipedia.org/w/index.php?title=Benzbromarone&oldid=1371159730) (revision 1371159730, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours (30 hours for main active metabolite 6-hydroxybenzbromarone) |
| Protein binding | 99 % | >99% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | Liver (CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | - | Mainly feces; Urine (8%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dotinurad]] (Solute carrier family 22 member 12), [[Lesinurad]] (Solute carrier family 22 member 12), [[Sulfinpyrazone]] (Solute carrier family 22 member 12), [[Verinurad]] (Solute carrier family 22 member 12)
- **Same ATC subgroup:** [[Lesinurad]], [[Probenecid]], [[Sulfinpyrazone]]
- **Shared CYP substrate pool:** CYP2C9 (+40 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
