---
type: compound
schema-version: 2
compound-id: viloxazine-compound
name: Viloxazine
aliases: []
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
chembl-id: CHEMBL306700
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 5.0
  unit: h
  notes: 'IR: 2–5 hours; ER: 7.02 ± 4.74 hours'
protein-binding:
  value: 76.0
  value-max: 82.0
  unit: percent
  notes: 76–82%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (~90%), feces (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation (CYP2D6), glucuronidation (UGT1A9, UGT2B15)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
pk-source:
  type: wikipedia-infobox
  title: Viloxazine
  url: https://en.wikipedia.org/w/index.php?title=Viloxazine&oldid=1374847014
  revision: 1374847014
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL306700
  pref-name: VILOXAZINE
  molecule-type: Small molecule
  first-approval: 2021
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06AX09
  targets: []
  properties:
    full-mwt: 237.3
    mw-freebase: 237.3
    alogp: 1.45
    psa: 39.72
    hba: 4
    hbd: 1
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C13H19NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Viloxazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `viloxazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL306700](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL306700/) · max phase 4 · id via Wikipedia infobox

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2021
- **Flags:** black-box warning
- **ATC N06AX09:** NERVOUS SYSTEM › ANTIDEPRESSANTS › Other antidepressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 237.3 | 1.45 | 39.72 | 1/4 | 0 | C13H19NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Viloxazine*](https://en.wikipedia.org/w/index.php?title=Viloxazine&oldid=1374847014) (revision 1374847014, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–5 h | IR: 2–5 hours; ER: 7.02 ± 4.74 hours |
| Protein binding | 76–82 % | 76–82% |
| Metabolism | hepatic | Hydroxylation (CYP2D6), glucuronidation (UGT1A9, UGT2B15) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-Hydroxyviloxazine glucuronide |
| Excretion | mainly urinary | Urine (~90%), feces (<1%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Agomelatine (Valdoxan)]], [[Brexanolone]], [[Bupropion (Wellbutrin)]], [[Desvenlafaxine]], [[Duloxetine (Cymbalta)]], [[Esketamine (Spravato)]], [[Levomilnacipran]], [[Minaprine]], [[Mirtazapine]], [[Nefazodone]], [[Tianeptine]], [[Trazodone (Desyrel)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
