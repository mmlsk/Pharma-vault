---
type: compound
schema-version: 2
compound-id: donepezil-compound
name: Donepezil (Aricept)
aliases:
- Donepezil
- Aricept
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
chembl-id: CHEMBL502
chembl-max-phase: 4
half-life:
  value: 70.0
  value-max: null
  unit: h
  notes: 70 hours Around 100 hours in elderly patients.
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%, albumin (about 75%) and alpha1-acid glycoprotein (21%).
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.17
  notes: 0.11–0.13 (L/h/kg); excreted mostly by the kidneys. Around 17% is excreted unchanged in the urine. About 15% to 20% is excreted in feces. Steady-state clearance is similar at all ages.
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, CYP3A4, and glucuronidation. Four major metabolites, two of which are active.
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Donepezil
  url: https://en.wikipedia.org/w/index.php?title=Donepezil&oldid=1356481650
  revision: 1356481650
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL502
  pref-name: DONEPEZIL
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06DA02
  targets: []
  properties:
    full-mwt: 379.5
    mw-freebase: 379.5
    alogp: 4.36
    psa: 38.77
    hba: 4
    hbd: 0
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.75
    full-molformula: C24H29NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Donepezil (Aricept)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `donepezil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Donepezil, Aricept
- **ChEMBL:** [CHEMBL502](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL502/) · max phase 4 · id via Wikipedia infobox

## Source summary

Reversible, centrally selective acetylcholinesterase inhibitor; the most widely prescribed drug for Alzheimer's dementia.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC N06DA02:** NERVOUS SYSTEM › ANTI-DEMENTIA DRUGS › Anticholinesterases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 379.5 | 4.36 | 38.77 | 0/4 | 0 | C24H29NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Donepezil*](https://en.wikipedia.org/w/index.php?title=Donepezil&oldid=1356481650) (revision 1356481650, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70 h | 70 hours Around 100 hours in elderly patients. |
| Protein binding | 96 % | 96%, albumin (about 75%) and alpha1-acid glycoprotein (21%). |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | CYP2D6, CYP3A4, and glucuronidation. Four major metabolites, two of which are active. |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.17 | 0.11–0.13 (L/h/kg); excreted mostly by the kidneys. Around 17% is excreted unchanged in the urine. About 15% to 20% is excreted in feces. Steady-state clearance is similar at all ages. |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Galantamine (Reminyl - Razadyne)|Galantamine (Reminyl / Razadyne)]], [[Rivastigmine (Exelon)]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
