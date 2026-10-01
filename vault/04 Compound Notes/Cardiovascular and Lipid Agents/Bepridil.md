---
type: compound
schema-version: 2
compound-id: bepridil-compound
name: Bepridil
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1008
chembl-max-phase: 4
half-life:
  value: 42.0
  value-max: null
  unit: h
  notes: 42 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: null
  value-max: null
  notes: Well absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic, CYP3A4-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Bepridil
  url: https://en.wikipedia.org/w/index.php?title=Bepridil&oldid=1330663760
  revision: 1330663760
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1008
  pref-name: BEPRIDIL
  molecule-type: Small molecule
  first-approval: 1990
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C08EA02
  targets: []
  properties:
    full-mwt: 366.55
    mw-freebase: 366.55
    alogp: 4.83
    psa: 15.71
    hba: 3
    hbd: 0
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C24H34N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Bepridil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bepridil-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **ChEMBL:** [CHEMBL1008](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1008/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Withdrawn calcium channel blocker with additional sodium and potassium channel activity, remembered for torsades de pointes.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1990
- **ATC C08EA02:** CARDIOVASCULAR SYSTEM › NON-SELECTIVE CALCIUM CHANNEL BLOCKERS › Phenylalkylamine derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 366.55 | 4.83 | 15.71 | 0/3 | 0 | C24H34N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bepridil*](https://en.wikipedia.org/w/index.php?title=Bepridil&oldid=1330663760) (revision 1330663760, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 42 h | 42 hours |
| Protein binding | 99 % | 99% |
| Bioavailability | - | Well absorbed |
| Metabolism | hepatic | Hepatic, CYP3A4-mediated |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
- [[CYP450 Metabolism]]
