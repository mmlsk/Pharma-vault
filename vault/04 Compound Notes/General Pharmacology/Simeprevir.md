---
type: compound
schema-version: 2
compound-id: simeprevir-compound
name: Simeprevir
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
chembl-id: CHEMBL501849
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 13.0
  unit: h
  notes: 10–13 hours (HCV-uninfected subjects), 41 hours (HCV-infected subjects)
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
bioavailability:
  value: 62.0
  value-max: null
  notes: 62% (under fed conditions)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (91%), urine (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A, CYP2C8, CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Simeprevir
  url: https://en.wikipedia.org/w/index.php?title=Simeprevir&oldid=1369127743
  revision: 1369127743
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL501849
  pref-name: SIMEPREVIR
  molecule-type: Small molecule
  first-approval: 2013
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AP05
  targets: []
  properties:
    full-mwt: 749.96
    mw-freebase: 749.96
    alogp: 5.25
    psa: 156.89
    hba: 10
    hbd: 2
    rtb: 8
    num-ro5-violations: 2
    qed-weighted: 0.29
    full-molformula: C38H47N5O7S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Simeprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `simeprevir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL501849](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL501849/) · max phase 4 · id via Wikipedia infobox

## Source summary

Second-wave hepatitis C protease inhibitor, superseded by pangenotypic regimens but historically important in the first interferon-free combinations.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2013
- **Flags:** black-box warning
- **ATC J05AP05:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Antivirals for treatment of HCV infections

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 749.96 | 5.25 | 156.89 | 2/10 | 2 | C38H47N5O7S2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Simeprevir*](https://en.wikipedia.org/w/index.php?title=Simeprevir&oldid=1369127743) (revision 1369127743, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–13 h | 10–13 hours (HCV-uninfected subjects), 41 hours (HCV-infected subjects) |
| Protein binding | 99.9 % | >99.9% |
| Bioavailability | 62 % | 62% (under fed conditions) |
| Metabolism | hepatic | Liver (CYP3A, CYP2C8, CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (91%), urine (<1%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Boceprevir]], [[Daclatasvir]], [[Elbasvir]], [[Grazoprevir]], [[Ribavirin]], [[Sofosbuvir]], [[Telaprevir]]
- **Shared CYP substrate pool:** CYP2C19 (+43 others), CYP2C8 (+15 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
