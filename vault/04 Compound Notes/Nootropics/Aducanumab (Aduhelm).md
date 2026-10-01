---
type: compound
schema-version: 2
compound-id: aducanumab-compound
name: Aducanumab (Aduhelm)
aliases:
- Aducanumab
- Aduhelm
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Amyloid-beta A4 protein binding agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3039540
chembl-max-phase: 4
half-life:
  value: 24.8
  value-max: null
  unit: d
  notes: 24.8 days
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
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Aducanumab
  url: https://en.wikipedia.org/w/index.php?title=Aducanumab&oldid=1335569412
  revision: 1335569412
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3039540
  pref-name: ADUCANUMAB
  molecule-type: Antibody
  first-approval: 2021
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - N06DX03
  targets:
  - id: CHEMBL2487
    name: Amyloid-beta precursor protein
    action: BINDING AGENT
  properties: {}
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Aducanumab (Aduhelm)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aducanumab-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Aducanumab, Aduhelm
- **ChEMBL:** [CHEMBL3039540](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3039540/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

The first anti-amyloid antibody approved, on a surrogate endpoint after two trials that disagreed. Withdrawn in 2024. Its history is the reason plaque clearance alone is no longer accepted as sufficient evidence.

## Mechanism

Amyloid-beta A4 protein binding agent _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2021
- **Flags:** black-box warning
- **ATC N06DX03:** NERVOUS SYSTEM › ANTI-DEMENTIA DRUGS › Other anti-dementia drugs

**Targets (ChEMBL curated mechanisms):**

- [[Amyloid-beta precursor protein (CHEMBL2487)|Amyloid-beta precursor protein]] - binding agent · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aducanumab*](https://en.wikipedia.org/w/index.php?title=Aducanumab&oldid=1335569412) (revision 1335569412, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24.8 d | 24.8 days |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Donanemab (Kisunla)]] (Amyloid-beta precursor protein), [[Homotaurine]] (Amyloid-beta precursor protein), [[Lecanemab (Leqembi)]] (Amyloid-beta precursor protein)
- **Same ATC subgroup:** [[Donanemab (Kisunla)]], [[Ginkgo Biloba]], [[Lecanemab (Leqembi)]], [[Memantine (Namenda)]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
