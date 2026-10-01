---
type: compound
schema-version: 2
compound-id: rilmazafone-compound
name: Rilmazafone
aliases: []
cluster: Novel Psychoactive Substances
group: nps
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2107197
chembl-max-phase: 2
half-life:
  value: 10.5
  value-max: null
  unit: h
  notes: 10.5 h (M-4 metabolite)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (44–68% within 24 h, primarily as M-4)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Aminopeptidase (intestinal); hepatic
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
- identity-contamination
- evidence-limited
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/nps
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Rilmazafone
  url: https://en.wikipedia.org/w/index.php?title=Rilmazafone&oldid=1362014458
  revision: 1362014458
  retrieved: '2026-10-01'
  chembl-confirmed: false
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL2107197
  pref-name: RILMAZAFONE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 475.34
    mw-freebase: 475.34
    alogp: 2.08
    psa: 123.21
    hba: 7
    hbd: 2
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.5
    full-molformula: C21H20Cl2N6O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Rilmazafone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rilmazafone-compound`
- **Source group:** Novel Psychoactive Substances (forensic NPS, curated addition) (`nps`)
- **Cluster:** [[Novel Psychoactive Substances]]
- **ChEMBL:** [CHEMBL2107197](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2107197/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Designer-drug families / Designer benzodiazepines). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL2107197 (RILMAZAFONE).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 475.34 | 2.08 | 123.21 | 2/7 | 0 | C21H20Cl2N6O3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rilmazafone*](https://en.wikipedia.org/w/index.php?title=Rilmazafone&oldid=1362014458) (revision 1362014458, retrieved 2026-10-01); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10.5 h | 10.5 h (M-4 metabolite) |
| Metabolism | hepatic | Aminopeptidase (intestinal); hepatic |
| Excretion | mainly urinary | Urine (44–68% within 24 h, primarily as M-4) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `identity-contamination`, `evidence-limited`, `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Respiratory Depression and Fatal Overdose]]
