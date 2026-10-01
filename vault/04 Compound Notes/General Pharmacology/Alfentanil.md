---
type: compound
schema-version: 2
compound-id: alfentanil-compound
name: Alfentanil
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
chembl-id: CHEMBL634
chembl-max-phase: 4
half-life:
  value: 90.0
  value-max: 111.0
  unit: min
  notes: 90–111 minutes
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'IV/IM/SC: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Alfentanil
  url: https://en.wikipedia.org/w/index.php?title=Alfentanil&oldid=1360846894
  revision: 1360846894
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL634
  pref-name: ALFENTANIL
  molecule-type: Small molecule
  first-approval: 1986
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N01AH02
  targets: []
  properties:
    full-mwt: 416.53
    mw-freebase: 416.53
    alogp: 1.38
    psa: 85.49
    hba: 8
    hbd: 0
    rtb: 9
    num-ro5-violations: 0
    qed-weighted: 0.61
    full-molformula: C21H32N6O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Alfentanil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alfentanil-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL634](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL634/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Short-acting fentanyl analogue with a low pKa, so a large fraction is unionised and it reaches the brain faster than fentanyl despite lower lipophilicity.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1986
- **Flags:** black-box warning
- **ATC N01AH02:** NERVOUS SYSTEM › ANESTHETICS, GENERAL › Opioid anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 416.53 | 1.38 | 85.49 | 0/8 | 0 | C21H32N6O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alfentanil*](https://en.wikipedia.org/w/index.php?title=Alfentanil&oldid=1360846894) (revision 1360846894, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 90–111 min | 90–111 minutes |
| Protein binding | 92 % | 92% |
| Bioavailability | 100 % | IV/IM/SC: 100% |
| Metabolism | hepatic | Hepatic |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Fentanyl]], [[Remifentanil]], [[Sufentanil]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
