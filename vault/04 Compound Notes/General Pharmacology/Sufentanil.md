---
type: compound
schema-version: 2
compound-id: sufentanil-compound
name: Sufentanil
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
chembl-id: CHEMBL658
chembl-max-phase: 4
half-life:
  value: 162.0
  value-max: null
  unit: min
  notes: 162 minutes
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 53.0
  value-max: null
  notes: 'Sublingual: 53%; IV/IM/SC: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Sufentanil
  url: https://en.wikipedia.org/w/index.php?title=Sufentanil&oldid=1369469187
  revision: 1369469187
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL658
  pref-name: SUFENTANIL
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N01AH03
  targets: []
  properties:
    full-mwt: 386.56
    mw-freebase: 386.56
    alogp: 4.21
    psa: 32.78
    hba: 4
    hbd: 0
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.68
    full-molformula: C22H30N2O2S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sufentanil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sufentanil-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL658](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL658/) · max phase 4 · id via Wikipedia infobox

## Source summary

The most potent opioid in routine clinical use, given intravenously and intrathecally in anaesthesia.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **Flags:** black-box warning
- **ATC N01AH03:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Opioid anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 386.56 | 4.21 | 32.78 | 0/4 | 0 | C22H30N2O2S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sufentanil*](https://en.wikipedia.org/w/index.php?title=Sufentanil&oldid=1369469187) (revision 1369469187, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 162 min | 162 minutes |
| Bioavailability | 53 % | Sublingual: 53%; IV/IM/SC: 100% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alfentanil]], [[Fentanyl]], [[Remifentanil]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
