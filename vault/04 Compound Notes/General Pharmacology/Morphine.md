---
type: compound
schema-version: 2
compound-id: morphine-compound
name: Morphine
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
chembl-id: CHEMBL70
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hours
protein-binding:
  value: 30.0
  value-max: 40.0
  unit: percent
  notes: 30–40%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'IV/IM: 100%; Intranasal: 10%; PO: 20–40%; Rectal: 36–71%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 90%, bile duct 10%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: UGT2B7'
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
  title: Morphine
  url: https://en.wikipedia.org/w/index.php?title=Morphine&oldid=1374517907
  revision: 1374517907
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL70
  pref-name: MORPHINE
  molecule-type: Small molecule
  first-approval: 1984
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - A07DA52
  - N02AA01
  - N02AA51
  targets: []
  properties:
    full-mwt: 285.34
    mw-freebase: 285.34
    alogp: 1.2
    psa: 52.93
    hba: 4
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C17H19NO3
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 8a77894b-2137-4f46-8dff-5c7b773d4d16
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a77894b-2137-4f46-8dff-5c7b773d4d16
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Morphine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `morphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL70](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL70/) · max phase 4 · id via Wikipedia infobox

## Source summary

The reference opioid against which every other is measured, with an active glucuronide metabolite that accumulates in renal failure.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1984
- **Flags:** black-box warning
- **ATC A07DA52:** ALIMENTARY TRACT AND METABOLISM › ANTIPROPULSIVES › Antipropulsives
- **ATC N02AA01:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids
- **ATC N02AA51:** NERVOUS SYSTEM › OPIOIDS › Natural opium alkaloids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 285.34 | 1.2 | 52.93 | 2/4 | 0 | C17H19NO3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Morphine*](https://en.wikipedia.org/w/index.php?title=Morphine&oldid=1374517907) (revision 1374517907, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hours |
| Protein binding | 30–40 % | 30–40% |
| Bioavailability | 100 % | IV/IM: 100%; Intranasal: 10%; PO: 20–40%; Rectal: 36–71% |
| Metabolism | hepatic | Liver: UGT2B7 |
| Metabolites | - | • Morphine-3-glucuronide (90%); • Morphine-6-glucuronide (10%) |
| Excretion | mainly urinary | Kidney 90%, bile duct 10% |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 8a77894b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8a77894b-2137-4f46-8dff-5c7b773d4d16), label version 20260507. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Codeine]], [[Eluxadoline]], [[Hydromorphone]], [[Loperamide]], [[Oxycodone]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
