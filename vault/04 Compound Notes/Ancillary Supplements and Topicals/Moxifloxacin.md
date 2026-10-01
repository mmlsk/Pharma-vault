---
type: compound
schema-version: 2
compound-id: moxifloxacin-compound
name: Moxifloxacin
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
chembl-id: CHEMBL32
chembl-max-phase: 4
half-life:
  value: 12.1
  value-max: null
  unit: h
  notes: 12.1 hours
protein-binding:
  value: 47.0
  value-max: null
  unit: percent
  notes: 47%
bioavailability:
  value: 86.0
  value-max: null
  notes: 86%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Glucuronide and sulfate conjugation; CYP450 system not involved
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
pk-source:
  type: wikipedia-infobox
  title: Moxifloxacin
  url: https://en.wikipedia.org/w/index.php?title=Moxifloxacin&oldid=1366072182
  revision: 1366072182
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL32
  pref-name: MOXIFLOXACIN
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J01MA14
  - S01AE07
  targets: []
  properties:
    full-mwt: 401.44
    mw-freebase: 401.44
    alogp: 2.37
    psa: 83.8
    hba: 6
    hbd: 2
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.82
    full-molformula: C21H24FN3O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 656f582c-ecba-4ec8-9420-9562114d889b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Moxifloxacin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `moxifloxacin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL32](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL32/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits bacterial DNA gyrase or topoisomerase IV; tendon, neurologic, cardiac, and resistance risks limit indiscriminate use.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC J01MA14:** ANTIINFECTIVES FOR SYSTEMIC USE › QUINOLONE ANTIBACTERIALS › Fluoroquinolones
- **ATC S01AE07:** SENSORY ORGANS › ANTIINFECTIVES › Fluoroquinolones

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 401.44 | 2.37 | 83.8 | 2/6 | 0 | C21H24FN3O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Moxifloxacin*](https://en.wikipedia.org/w/index.php?title=Moxifloxacin&oldid=1366072182) (revision 1366072182, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.1 h | 12.1 hours |
| Protein binding | 47 % | 47% |
| Bioavailability | 86 % | 86% |
| Metabolism | hepatic | Glucuronide and sulfate conjugation; CYP450 system not involved |
| Excretion | - | Urine, feces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 656f582c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=656f582c-ecba-4ec8-9420-9562114d889b), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 12, 14)
> - protein-binding: consistent (label values: 30, 50)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Besifloxacin]], [[Ciprofloxacin]], [[Delafloxacin]], [[Gemifloxacin]], [[Lomefloxacin]], [[Norfloxacin]], [[Ofloxacin]], [[Prulifloxacin]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
