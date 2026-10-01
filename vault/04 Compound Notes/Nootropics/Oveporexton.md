---
type: compound
schema-version: 2
compound-id: oveporexton-compound
name: Oveporexton
aliases:
- known as TAK-861
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
chembl-id: CHEMBL6068065
chembl-max-phase: 2
half-life:
  value: 16.0
  value-max: 24.0
  unit: h
  notes: 16–24 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: '>96%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 80.5%; Urine: 11.0%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
  title: Oveporexton
  url: https://en.wikipedia.org/w/index.php?title=Oveporexton&oldid=1376991519
  revision: 1376991519
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL6068065
  pref-name: OVEPOREXTON
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 520.52
    mw-freebase: 520.52
    alogp: 3.24
    psa: 86.71
    hba: 4
    hbd: 2
    rtb: 7
    num-ro5-violations: 1
    qed-weighted: 0.55
    full-molformula: C23H25F5N2O4S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Oveporexton

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oveporexton-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** known as TAK-861
- **ChEMBL:** [CHEMBL6068065](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL6068065/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Emerging CNS agents / Orexin and wakefulness). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL6068065 (OVEPOREXTON).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 520.52 | 3.24 | 86.71 | 2/4 | 1 | C23H25F5N2O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oveporexton*](https://en.wikipedia.org/w/index.php?title=Oveporexton&oldid=1376991519) (revision 1376991519, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16–24 h | 16–24 hours |
| Protein binding | 96 % | >96% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces: 80.5%; Urine: 11.0% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
