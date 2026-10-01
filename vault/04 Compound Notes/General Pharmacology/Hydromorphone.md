---
type: compound
schema-version: 2
compound-id: hydromorphone-compound
name: Hydromorphone
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
chembl-id: CHEMBL398707
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 25.0
  value-max: 50.0
  notes: 'By mouth: 25–50%, Intranasal: 52–58%, IV/IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Hydromorphone
  url: https://en.wikipedia.org/w/index.php?title=Hydromorphone&oldid=1369914057
  revision: 1369914057
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL398707
  pref-name: HYDROMORPHONE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AA03
  targets: []
  properties:
    full-mwt: 285.34
    mw-freebase: 285.34
    alogp: 1.63
    psa: 49.77
    hba: 4
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C17H19NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Hydromorphone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydromorphone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL398707](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL398707/) · max phase 4 · id via Wikipedia infobox

## Source summary

Potent morphine derivative preferred in renal impairment because its metabolites are less problematic than morphine's.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **Flags:** black-box warning
- **ATC N02AA03:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 285.34 | 1.63 | 49.77 | 1/4 | 0 | C17H19NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydromorphone*](https://en.wikipedia.org/w/index.php?title=Hydromorphone&oldid=1369914057) (revision 1369914057, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 25–50 % | By mouth: 25–50%, Intranasal: 52–58%, IV/IM: 100% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Codeine]], [[Morphine]], [[Oxycodone]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
