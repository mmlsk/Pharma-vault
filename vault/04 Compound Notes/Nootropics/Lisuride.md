---
type: compound
schema-version: 2
compound-id: lisuride-compound
name: Lisuride
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL157138
chembl-max-phase: 3
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 60.0
  value-max: 70.0
  unit: percent
  notes: 60–70%
bioavailability:
  value: 10.0
  value-max: 20.0
  notes: 10–20%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Renal and biliary in equal amounts
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Lisuride
  url: https://en.wikipedia.org/w/index.php?title=Lisuride&oldid=1335709882
  revision: 1335709882
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL157138
  pref-name: LISURIDE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G02CB02
  - N02CA07
  targets: []
  properties:
    full-mwt: 338.46
    mw-freebase: 338.46
    alogp: 2.84
    psa: 51.37
    hba: 2
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.9
    full-molformula: C20H26N4O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lisuride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lisuride-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL157138](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL157138/) · max phase 3 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Psychoplastogens / Development candidates). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL157138 (LISURIDE).

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC G02CB02:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER GYNECOLOGICALS › Prolactine inhibitors
- **ATC N02CA07:** NERVOUS SYSTEM › ANTIMIGRAINE PREPARATIONS › Ergot alkaloids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 338.46 | 2.84 | 51.37 | 2/2 | 0 | C20H26N4O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lisuride*](https://en.wikipedia.org/w/index.php?title=Lisuride&oldid=1335709882) (revision 1335709882, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 60–70 % | 60–70% |
| Bioavailability | 10–20 % | 10–20% |
| Metabolism | hepatic | Hepatic |
| Metabolites | - | More than 15 known |
| Excretion | - | Renal and biliary in equal amounts |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bromocriptine (Parlodel)]], [[Cabergoline (Dostinex)]], [[Dihydroergotamine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
