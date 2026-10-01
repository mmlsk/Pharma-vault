---
type: compound
schema-version: 2
compound-id: ensitrelvir-compound
name: Ensitrelvir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL5183847
chembl-max-phase: 3
half-life:
  value: 42.0
  value-max: 48.0
  unit: h
  notes: 42–48 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ensitrelvir
  url: https://en.wikipedia.org/w/index.php?title=Ensitrelvir&oldid=1370836531
  revision: 1370836531
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL5183847
  pref-name: ENSITRELVIR
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AE16
  targets: []
  properties:
    full-mwt: 531.89
    mw-freebase: 531.89
    alogp: 1.75
    psa: 120.68
    hba: 10
    hbd: 1
    rtb: 5
    num-ro5-violations: 1
    qed-weighted: 0.35
    full-molformula: C22H17ClF3N9O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 526acf60-abc3-2cc2-e063-6294a90affa6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=526acf60-abc3-2cc2-e063-6294a90affa6
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Ensitrelvir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ensitrelvir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL5183847](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL5183847/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

Non-covalent oral SARS-CoV-2 main protease inhibitor developed in Japan, notable for not requiring ritonavir boosting.

## ChEMBL profile

- **Molecule type:** Small molecule
- **ATC J05AE16:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 531.89 | 1.75 | 120.68 | 1/10 | 1 | C22H17ClF3N9O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ensitrelvir*](https://en.wikipedia.org/w/index.php?title=Ensitrelvir&oldid=1370836531) (revision 1370836531, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 42–48 h | 42–48 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 526acf60…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=526acf60-abc3-2cc2-e063-6294a90affa6), label version 20260603. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 42.2, 48.1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Atazanavir]], [[Darunavir]], [[Fosamprenavir]], [[Ritonavir]], [[Saquinavir]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
