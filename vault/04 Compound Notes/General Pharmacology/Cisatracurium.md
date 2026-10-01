---
type: compound
schema-version: 2
compound-id: cisatracurium-compound
name: Cisatracurium
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
chembl-id: CHEMBL1200641
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: 29.0
  unit: min
  notes: 20–29 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.15
  notes: 10-15% unchanged
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 80% Hofmann degradation/ liver
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
  title: Cisatracurium besilate
  url: https://en.wikipedia.org/w/index.php?title=Cisatracurium_besilate&oldid=1329246828
  revision: 1329246828
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201248
  pref-name: CISATRACURIUM BESYLATE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - M03AC11
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

# Cisatracurium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cisatracurium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1200641](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200641/) · max phase 4 · id via Wikipedia infobox

## Source summary

The single potent isomer of atracurium, retaining organ-independent elimination without the histamine release.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **ATC M03AC11:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS › Other quaternary ammonium compounds

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 929.16 | 8.07 | 126.44 | 0/12 | 3 | C53H72N2O12+2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cisatracurium besilate*](https://en.wikipedia.org/w/index.php?title=Cisatracurium_besilate&oldid=1329246828) (revision 1329246828, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–29 min | 20–29 minutes |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | 80% Hofmann degradation/ liver |
| Excretion | - · fe 0.15 | 10-15% unchanged |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atracurium]], [[Hexafluorenium]], [[Pancuronium]], [[Vecuronium]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
