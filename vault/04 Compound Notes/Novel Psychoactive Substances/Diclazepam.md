---
type: compound
schema-version: 2
compound-id: diclazepam-compound
name: Diclazepam
aliases:
- Chlorodiazepam
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
chembl-id: CHEMBL268248
chembl-max-phase: null
half-life:
  value: 42.0
  value-max: null
  unit: h
  notes: ~42 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: '?'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
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
  title: Diclazepam
  url: https://en.wikipedia.org/w/index.php?title=Diclazepam&oldid=1375009734
  revision: 1375009734
  retrieved: '2026-10-01'
  chembl-confirmed: false
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL268248
  pref-name: null
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 319.19
    mw-freebase: 319.19
    alogp: 3.81
    psa: 32.67
    hba: 2
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.79
    full-molformula: C16H12Cl2N2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pubchem-cid: 76168
---

# Diclazepam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diclazepam-compound`
- **Source group:** Novel Psychoactive Substances (forensic NPS, curated addition) (`nps`)
- **Cluster:** [[Novel Psychoactive Substances]]
- **Aliases:** Chlorodiazepam
- **ChEMBL:** [CHEMBL268248](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL268248/) · max phase n/a · id via curated addition, exact ChEMBL match
- **PubChem:** [CID 76168](https://pubchem.ncbi.nlm.nih.gov/compound/76168)

## Source summary

Curated addition (backlog: Designer-drug families / Designer benzodiazepines). Identity resolved by exact name match (PubChem name → CID → InChIKey → ChEMBL) to ChEMBL CHEMBL268248 / PubChem CID 76168 (Chlorodiazepam).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 319.19 | 3.81 | 32.67 | 0/2 | 0 | C16H12Cl2N2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diclazepam*](https://en.wikipedia.org/w/index.php?title=Diclazepam&oldid=1375009734) (revision 1375009734, retrieved 2026-10-01); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 42 h | ~42 hours |
| Bioavailability | - | ? |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `identity-contamination`, `evidence-limited`, `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Respiratory Depression and Fatal Overdose]]
