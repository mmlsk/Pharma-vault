---
type: compound
schema-version: 2
compound-id: codeine-compound
name: Codeine
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
chembl-id: CHEMBL485
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 3.0
  unit: h
  notes: 2.5–3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: c. 60% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2D6 (to morphine), CYP3A4 (to norcodeine), UGT2B7 (to 3- and 6-glucuronides of codeine, norcodeine, and morphine)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Codeine
  url: https://en.wikipedia.org/w/index.php?title=Codeine&oldid=1374248804
  revision: 1374248804
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL485
  pref-name: CODEINE
  molecule-type: Small molecule
  first-approval: 1952
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - N02AA59
  - N02AA79
  - R05DA04
  targets: []
  properties:
    full-mwt: 299.37
    mw-freebase: 299.37
    alogp: 1.5
    psa: 41.93
    hba: 4
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C18H21NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Codeine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `codeine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL485](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL485/) · max phase 4 · id via Wikipedia infobox

## Source summary

Prodrug opioid whose entire analgesic effect depends on CYP2D6 conversion to morphine, making it the textbook pharmacogenetic drug.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1952
- **Flags:** black-box warning, withdrawn
- **ATC N02AA59:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids
- **ATC N02AA79:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids
- **ATC R05DA04:** RESPIRATORY SYSTEM › COUGH SUPPRESSANTS, EXCL. COMBINATIONS WITH EXPECTORANTS › Opium alkaloids and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 299.37 | 1.5 | 41.93 | 1/4 | 0 | C18H21NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Codeine*](https://en.wikipedia.org/w/index.php?title=Codeine&oldid=1374248804) (revision 1374248804, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–3 h | 2.5–3 hours |
| Bioavailability | 60 % | c. 60% (by mouth) |
| Metabolism | hepatic | Liver: CYP2D6 (to morphine), CYP3A4 (to norcodeine), UGT2B7 (to 3- and 6-glucuronides of codeine, norcodeine, and morphine) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Morphine; Norcodeine; Others (e.g., conjugates) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Dextromethorphan]], [[Hydromorphone]], [[Morphine]], [[Oxycodone]]
- **Shared CYP substrate pool:** CYP2D6 (+83 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
