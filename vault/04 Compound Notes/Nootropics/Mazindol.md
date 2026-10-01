---
type: compound
schema-version: 2
compound-id: mazindol-compound
name: Mazindol
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Monoamine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL781
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 13.0
  unit: h
  notes: 10–13 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
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
  title: Mazindol
  url: https://en.wikipedia.org/w/index.php?title=Mazindol&oldid=1376695515
  revision: 1376695515
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL781
  pref-name: MAZINDOL
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A08AA05
  targets:
  - id: CHEMBL2363064
    name: Monoamine transporter
    action: INHIBITOR
  properties:
    full-mwt: 284.75
    mw-freebase: 284.75
    alogp: 2.61
    psa: 35.83
    hba: 3
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.87
    full-molformula: C16H13ClN2O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Mazindol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mazindol-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL781](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL781/) · max phase 4 · id via Wikipedia infobox

## Source summary

A tricyclic monoamine reuptake inhibitor formerly licensed as an anorectic and now in trials for narcolepsy and ADHD, with weaker reinforcing properties than the amphetamines.

## Mechanism

Monoamine transporter inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC A08AA05:** ALIMENTARY TRACT AND METABOLISM › ANTIOBESITY PREPARATIONS, EXCL. DIET PRODUCTS › Centrally acting antiobesity products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 284.75 | 2.61 | 35.83 | 1/3 | 0 | C16H13ClN2O |

**Targets (ChEMBL curated mechanisms):**

- [[Monoamine transporter (CHEMBL2363064)|Monoamine transporter]] - inhibitor · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mazindol*](https://en.wikipedia.org/w/index.php?title=Mazindol&oldid=1376695515) (revision 1376695515, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–13 h | 10–13 hours |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Bicifadine]] (Monoamine transporter), [[Tesofensine]] (Monoamine transporter)
- **Same ATC subgroup:** [[Diethylpropion]], [[Ephedrine]], [[Fenfluramine]], [[Phentermine]], [[Setmelanotide (Imcivree)]], [[Sibutramine]]

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
