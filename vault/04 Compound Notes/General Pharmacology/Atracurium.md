---
type: compound
schema-version: 2
compound-id: atracurium-compound
name: Atracurium
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
chembl-id: CHEMBL1200527
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 21.0
  unit: min
  notes: 17–21 minutes
protein-binding:
  value: 82.0
  value-max: null
  unit: percent
  notes: 82%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hofmann elimination (retro-Michael addition) and ester hydrolysis by nonspecific esterases
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
  title: Atracurium besilate
  url: https://en.wikipedia.org/w/index.php?title=Atracurium_besilate&oldid=1348465791
  revision: 1348465791
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1360
  pref-name: ATRACURIUM BESYLATE
  molecule-type: Small molecule
  first-approval: 1983
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M03AC04
  targets: []
  properties:
    full-mwt: 929.16
    mw-freebase: 929.16
    alogp: 8.07
    psa: 126.44
    hba: 12
    hbd: 0
    rtb: 24
    num-ro5-violations: 3
    qed-weighted: 0.04
    full-molformula: C53H72N2O12+2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Atracurium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atracurium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1200527](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200527/) · max phase 4 · id via Wikipedia infobox

## Source summary

Benzylisoquinolinium relaxant eliminated by spontaneous Hofmann degradation, so it is independent of liver and kidney entirely.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1983
- **ATC M03AC04:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS › Other quaternary ammonium compounds

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 929.16 | 8.07 | 126.44 | 0/12 | 3 | C53H72N2O12+2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atracurium besilate*](https://en.wikipedia.org/w/index.php?title=Atracurium_besilate&oldid=1348465791) (revision 1348465791, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–21 min | 17–21 minutes |
| Protein binding | 82 % | 82% |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | - | Hofmann elimination (retro-Michael addition) and ester hydrolysis by nonspecific esterases |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Cisatracurium]], [[Hexafluorenium]], [[Pancuronium]], [[Vecuronium]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
