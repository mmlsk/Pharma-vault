---
type: compound
schema-version: 2
compound-id: rivastigmine-compound
name: Rivastigmine (Exelon)
aliases:
- Rivastigmine
- Exelon
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cholinesterases; ACHE & BCHE inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL636
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: null
  unit: h
  notes: 1.5 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: 60.0
  value-max: 72.0
  notes: 60 to 72%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 97% in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, via pseudocholinesterase
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
  title: Rivastigmine
  url: https://en.wikipedia.org/w/index.php?title=Rivastigmine&oldid=1357081093
  revision: 1357081093
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL636
  pref-name: RIVASTIGMINE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N06DA03
  targets:
  - id: CHEMBL2095233
    name: Cholinesterases; ACHE & BCHE
    action: INHIBITOR
  properties:
    full-mwt: 250.34
    mw-freebase: 250.34
    alogp: 2.76
    psa: 32.78
    hba: 3
    hbd: 0
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C14H22N2O2
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 8b809739-8381-4cc1-ab4a-5b17ab902a3d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8b809739-8381-4cc1-ab4a-5b17ab902a3d
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Rivastigmine (Exelon)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rivastigmine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Rivastigmine, Exelon
- **ChEMBL:** [CHEMBL636](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL636/) · max phase 4 · id via Wikipedia infobox

## Source summary

Pseudo-irreversible dual inhibitor of acetylcholinesterase and butyrylcholinesterase, available as a capsule and a transdermal patch.

## Mechanism

Cholinesterases; ACHE & BCHE inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **ATC N06DA03:** NERVOUS SYSTEM › ANTI-DEMENTIA DRUGS › Anticholinesterases

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 250.34 | 2.76 | 32.78 | 0/3 | 0 | C14H22N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Cholinesterases; ACHE & BCHE (CHEMBL2095233)|Cholinesterases; ACHE & BCHE]] - inhibitor · SELECTIVITY GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rivastigmine*](https://en.wikipedia.org/w/index.php?title=Rivastigmine&oldid=1357081093) (revision 1357081093, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours |
| Protein binding | 40 % | 40% |
| Bioavailability | 60–72 % | 60 to 72% |
| Metabolism | hepatic | Liver, via pseudocholinesterase |
| Excretion | mainly urinary | 97% in urine |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 8b809739…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8b809739-8381-4cc1-ab4a-5b17ab902a3d), label version 20251114. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 3)
> - protein-binding: consistent (label values: 40)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Donepezil (Aricept)]], [[Galantamine (Reminyl - Razadyne)|Galantamine (Reminyl / Razadyne)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
