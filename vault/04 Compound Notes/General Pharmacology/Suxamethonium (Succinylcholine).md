---
type: compound
schema-version: 2
compound-id: succinylcholine-compound
name: Suxamethonium (Succinylcholine)
aliases:
- Suxamethonium
- Succinylcholine
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
chembl-id: CHEMBL983
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: NA
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (10%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: By pseudocholinesterase, to succinylmonocholine and choline
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Suxamethonium chloride
  url: https://en.wikipedia.org/w/index.php?title=Suxamethonium_chloride&oldid=1368852794
  revision: 1368852794
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL703
  pref-name: SUCCINYLCHOLINE CHLORIDE
  molecule-type: Small molecule
  first-approval: 1952
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - M03AB01
  targets: []
  properties:
    full-mwt: 290.4
    mw-freebase: 290.4
    alogp: 0.27
    psa: 52.6
    hba: 4
    hbd: 0
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.45
    full-molformula: C14H30N2O4+2
  identity-check: structure-confirmed
---

# Suxamethonium (Succinylcholine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `succinylcholine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Suxamethonium, Succinylcholine
- **ChEMBL:** [CHEMBL983](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL983/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The only depolarising neuromuscular blocker in use, giving the fastest onset and offset of any relaxant and carrying several lethal idiosyncrasies.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1952
- **Flags:** black-box warning
- **ATC M03AB01:** MUSCULO-SKELETAL SYSTEM › MUSCLE RELAXANTS, PERIPHERALLY ACTING AGENTS › Choline derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 290.4 | 0.27 | 52.6 | 0/4 | 0 | C14H30N2O4+2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Suxamethonium chloride*](https://en.wikipedia.org/w/index.php?title=Suxamethonium_chloride&oldid=1368852794) (revision 1368852794, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | - | NA |
| Metabolism | - | By pseudocholinesterase, to succinylmonocholine and choline |
| Excretion | mainly urinary | Kidney (10%) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
