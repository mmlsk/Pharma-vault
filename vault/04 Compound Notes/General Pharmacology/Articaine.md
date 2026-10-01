---
type: compound
schema-version: 2
compound-id: articaine-compound
name: Articaine
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
chembl-id: CHEMBL1093
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: 30 min
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Liver and unspecific plasma estearases
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, plasma
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
  title: Articaine
  url: https://en.wikipedia.org/w/index.php?title=Articaine&oldid=1349757673
  revision: 1349757673
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1093
  pref-name: ARTICAINE
  molecule-type: Small molecule
  first-approval: 2000
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01BB08
  - N01BB58
  targets: []
  properties:
    full-mwt: 284.38
    mw-freebase: 284.38
    alogp: 2.17
    psa: 67.43
    hba: 5
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C13H20N2O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Articaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `articaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1093](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1093/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Dental local anaesthetic with a thiophene ring for tissue penetration and an ester side chain giving rapid plasma clearance.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2000
- **ATC N01BB08:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides
- **ATC N01BB58:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 284.38 | 2.17 | 67.43 | 2/5 | 0 | C13H20N2O3S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Articaine*](https://en.wikipedia.org/w/index.php?title=Articaine&oldid=1349757673) (revision 1349757673, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | 30 min |
| Metabolism | hepatic | Liver, plasma |
| Excretion | - | Liver and unspecific plasma estearases |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bupivacaine]], [[Lidocaine]], [[Mepivacaine]], [[Prilocaine]], [[Ropivacaine]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
