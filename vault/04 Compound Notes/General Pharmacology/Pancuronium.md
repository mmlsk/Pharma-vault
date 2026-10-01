---
type: compound
schema-version: 2
compound-id: pancuronium-compound
name: Pancuronium
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL185073
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 2.7
  unit: h
  notes: 1.5–2.7 hours
protein-binding:
  value: 77.0
  value-max: 91.0
  unit: percent
  notes: 77–91%
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Renal and biliary
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Pancuronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Pancuronium_bromide&oldid=1374846632
  revision: 1374846632
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL185073
  pref-name: PANCURONIUM
  molecule-type: Small molecule
  first-approval: 1972
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M03AC01
  targets: []
  properties:
    full-mwt: 572.88
    mw-freebase: 572.88
    alogp: 6.11
    psa: 52.6
    hba: 4
    hbd: 0
    rtb: 4
    num-ro5-violations: 2
    qed-weighted: 0.3
    full-molformula: C35H60N2O4+2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pancuronium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pancuronium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL185073](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL185073/) · max phase 4 · id via Wikipedia infobox

## Source summary

Long-acting steroidal relaxant with vagolytic and sympathomimetic effects, now used mainly where cost matters most.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1972
- **ATC M03AC01:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS › Other quaternary ammonium compounds

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 572.88 | 6.11 | 52.6 | 0/4 | 2 | C35H60N2O4+2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pancuronium bromide*](https://en.wikipedia.org/w/index.php?title=Pancuronium_bromide&oldid=1374846632) (revision 1374846632, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2.7 h | 1.5–2.7 hours |
| Protein binding | 77–91 % | 77–91% |
| Bioavailability | - | N/A |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Renal and biliary |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atracurium]], [[Cisatracurium]], [[Hexafluorenium]], [[Vecuronium]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
