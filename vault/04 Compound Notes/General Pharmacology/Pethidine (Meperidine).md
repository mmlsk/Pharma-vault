---
type: compound
schema-version: 2
compound-id: meperidine-compound
name: Pethidine (Meperidine)
aliases:
- Pethidine
- Meperidine
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
chembl-id: CHEMBL607
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: 4.0
  unit: h
  notes: 2.5–4 hours, 7–11 hours (liver disease)
protein-binding:
  value: 65.0
  value-max: 75.0
  unit: percent
  notes: 65–75%
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60% (Oral), 80–90% (Oral, in cases of hepatic impairment)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2B6, CYP3A4, CYP2C19, Carboxylesterase 1'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pethidine
  url: https://en.wikipedia.org/w/index.php?title=Pethidine&oldid=1373295642
  revision: 1373295642
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL607
  pref-name: MEPERIDINE
  molecule-type: Small molecule
  first-approval: 1942
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N02AB02
  - N02AB52
  - N02AB72
  targets: []
  properties:
    full-mwt: 247.34
    mw-freebase: 247.34
    alogp: 2.21
    psa: 29.54
    hba: 3
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.77
    full-molformula: C15H21NO2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Pethidine (Meperidine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `meperidine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Pethidine, Meperidine
- **ChEMBL:** [CHEMBL607](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL607/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Old synthetic opioid largely abandoned because its normeperidine metabolite is a proconvulsant that accumulates.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1942
- **Flags:** black-box warning
- **ATC N02AB02:** NERVOUS SYSTEM › OPIOIDS › Phenylpiperidine derivatives
- **ATC N02AB52:** NERVOUS SYSTEM › OPIOIDS › Phenylpiperidine derivatives
- **ATC N02AB72:** NERVOUS SYSTEM › OPIOIDS › Phenylpiperidine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 247.34 | 2.21 | 29.54 | 0/3 | 0 | C15H21NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pethidine*](https://en.wikipedia.org/w/index.php?title=Pethidine&oldid=1373295642) (revision 1373295642, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–4 h | 2.5–4 hours, 7–11 hours (liver disease) |
| Protein binding | 65–75 % | 65–75% |
| Bioavailability | 50–60 % | 50–60% (Oral), 80–90% (Oral, in cases of hepatic impairment) |
| Metabolism | hepatic | Liver: CYP2B6, CYP3A4, CYP2C19, Carboxylesterase 1 |
| CYP (metabolised by) | CYP2B6, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Norpethidine; Pethidinic acid; others |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Fentanyl]]
- **Shared CYP substrate pool:** CYP2B6 (+12 others), CYP2C19 (+43 others), CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
