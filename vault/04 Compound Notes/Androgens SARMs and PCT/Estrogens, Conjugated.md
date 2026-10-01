---
type: compound
schema-version: 2
compound-id: estrogens-conjugated-compound
name: Estrogens, Conjugated
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201649
chembl-max-phase: 4
half-life:
  value: 26.7
  value-max: null
  unit: h
  notes: 'Estrone: 26.7 hours; Estrone (BA): 14.8 hours; Equilin: 11.4 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: High (to albumin and SHBG)
bioavailability:
  value: null
  value-max: null
  notes: Variable
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Conjugated estrogens
  url: https://en.wikipedia.org/w/index.php?title=Conjugated_estrogens&oldid=1351672617
  revision: 1351672617
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201649
  pref-name: ESTROGENS, CONJUGATED
  molecule-type: Unknown
  first-approval: 1942
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - G03CA57
  targets:
  - id: CHEMBL2093866
    name: Estrogen receptor
    action: AGONIST
  properties: {}
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 87e2da8d-432c-4ed5-67a1-dc26294b2295
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=87e2da8d-432c-4ed5-67a1-dc26294b2295
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Estrogens, Conjugated

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `estrogens-conjugated-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1201649](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201649/) · max phase 4 · id via source catalogue

## Source summary

Estrogen receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201649).

## Mechanism

Estrogen receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Unknown
- **First approval (ChEMBL):** 1942
- **Flags:** black-box warning
- **ATC G03CA57:** GENITO URINARY SYSTEM AND SEX HORMONES › ESTROGENS › Natural and semisynthetic estrogens, plain

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL2093866)|Estrogen receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Conjugated estrogens*](https://en.wikipedia.org/w/index.php?title=Conjugated_estrogens&oldid=1351672617) (revision 1351672617, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26.7 h | Estrone: 26.7 hours; Estrone (BA): 14.8 hours; Equilin: 11.4 hours |
| Protein binding | - | High (to albumin and SHBG) |
| Bioavailability | - | Variable |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 87e2da8d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=87e2da8d-432c-4ed5-67a1-dc26294b2295), label version 20250530. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Acolbifene]] (Estrogen receptor), [[Cyclofenil]] (Estrogen receptor), [[Diethylstilbestrol Diphosphate]] (Estrogen receptor), [[Droloxifene]] (Estrogen receptor), [[Estriol]] (Estrogen receptor), [[Estrogens, Conjugated Synthetic A]] (Estrogen receptor), [[Estrogens, Esterified]] (Estrogen receptor), [[Lasofoxifene]] (Estrogen receptor), [[Ospemifene (Osphena)]] (Estrogen receptor), [[Quinestrol]] (Estrogen receptor), [[Synthetic Conjugated Estrogens, B]] (Estrogen receptor)
- **Same ATC subgroup:** [[Chlorotrianisene]], [[Estradiol]], [[Estriol]], [[Estrone]], [[Ethinyl Estradiol]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
