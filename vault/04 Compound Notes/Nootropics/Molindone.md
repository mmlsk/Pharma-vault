---
type: compound
schema-version: 2
compound-id: molindone-compound
name: Molindone
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL460
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Minor, renal and fecal
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Molindone
  url: https://en.wikipedia.org/w/index.php?title=Molindone&oldid=1333663664
  revision: 1333663664
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL460
  pref-name: MOLINDONE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N05AE02
  targets: []
  properties:
    full-mwt: 276.38
    mw-freebase: 276.38
    alogp: 1.96
    psa: 45.33
    hba: 3
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.92
    full-molformula: C16H24N2O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Molindone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `molindone-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL460](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL460/) · max phase 4 · id via Wikipedia infobox

## Source summary

Dihydroindolone antipsychotic notable for being weight-neutral or weight-reducing, unlike almost every other agent in the class.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning
- **ATC N05AE02:** NERVOUS SYSTEM › ANTIPSYCHOTICS › Indole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 276.38 | 1.96 | 45.33 | 1/3 | 0 | C16H24N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Molindone*](https://en.wikipedia.org/w/index.php?title=Molindone&oldid=1333663664) (revision 1333663664, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Minor, renal and fecal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Lurasidone]], [[Sertindole]], [[Ziprasidone]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
