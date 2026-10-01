---
type: compound
schema-version: 2
compound-id: phenazepam-compound
name: Phenazepam
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
chembl-id: CHEMBL1709464
chembl-max-phase: null
half-life:
  value: 6.0
  value-max: 18.0
  unit: h
  notes: 6–18 hours (active metabolite unknown)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: 16.7% (rat)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic – aromatic oxidation and C3-hydroxylation
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
  title: Phenazepam
  url: https://en.wikipedia.org/w/index.php?title=Phenazepam&oldid=1375678391
  revision: 1375678391
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL1709464
  pref-name: PHENAZEPAM
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 349.62
    mw-freebase: 349.62
    alogp: 3.89
    psa: 41.46
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C15H10BrClN2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Phenazepam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenazepam-compound`
- **Source group:** Novel Psychoactive Substances (forensic NPS, curated addition) (`nps`)
- **Cluster:** [[Novel Psychoactive Substances]]
- **ChEMBL:** [CHEMBL1709464](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1709464/) · max phase n/a · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Designer-drug families / Designer benzodiazepines). Identity resolved by exact name match (pref_name) to ChEMBL CHEMBL1709464 (PHENAZEPAM).

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 349.62 | 3.89 | 41.46 | 1/2 | 0 | C15H10BrClN2O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenazepam*](https://en.wikipedia.org/w/index.php?title=Phenazepam&oldid=1375678391) (revision 1375678391, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–18 h | 6–18 hours (active metabolite unknown) |
| Bioavailability | - | 16.7% (rat) |
| Metabolism | hepatic | Hepatic – aromatic oxidation and C3-hydroxylation |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `identity-contamination`, `evidence-limited`, `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Respiratory Depression and Fatal Overdose]]
