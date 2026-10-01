---
type: compound
schema-version: 2
compound-id: ropivacaine-compound
name: Ropivacaine
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
chembl-id: CHEMBL1077896
chembl-max-phase: 4
half-life:
  value: 1.6
  value-max: 6.0
  unit: h
  notes: 1.6–6 hours (varies with administration route)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%–98% (epidural)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 86%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ropivacaine
  url: https://en.wikipedia.org/w/index.php?title=Ropivacaine&oldid=1359319839
  revision: 1359319839
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1077896
  pref-name: ROPIVACAINE
  molecule-type: Small molecule
  first-approval: 1996
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01BB09
  targets: []
  properties:
    full-mwt: 274.41
    mw-freebase: 274.41
    alogp: 3.51
    psa: 32.34
    hba: 2
    hbd: 1
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.91
    full-molformula: C17H26N2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Ropivacaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ropivacaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1077896](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1077896/) · max phase 4 · id via Wikipedia infobox

## Source summary

Single-enantiomer long-acting local anaesthetic developed to reduce bupivacaine's cardiotoxicity while preserving duration.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1996
- **ATC N01BB09:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 274.41 | 3.51 | 32.34 | 1/2 | 0 | C17H26N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ropivacaine*](https://en.wikipedia.org/w/index.php?title=Ropivacaine&oldid=1359319839) (revision 1359319839, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.6–6 h | 1.6–6 hours (varies with administration route) |
| Bioavailability | 87 % | 87%–98% (epidural) |
| Metabolism | hepatic | Liver (CYP1A2-mediated) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney 86% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Articaine]], [[Bupivacaine]], [[Lidocaine]], [[Mepivacaine]], [[Prilocaine]]
- **Shared CYP substrate pool:** CYP1A2 (+42 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
