---
type: compound
schema-version: 2
compound-id: mestranol-compound
name: Mestranol
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201151
chembl-max-phase: 4
half-life:
  value: 50.0
  value-max: null
  unit: min
  notes: 'Mestranol: 50 min; EE: 7–36 hours'
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
  title: Mestranol
  url: https://en.wikipedia.org/w/index.php?title=Mestranol&oldid=1365260747
  revision: 1365260747
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1201151
  pref-name: MESTRANOL
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL206
    name: Estrogen receptor
    action: AGONIST
  properties:
    full-mwt: 310.44
    mw-freebase: 310.44
    alogp: 3.92
    psa: 29.46
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C21H26O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Mestranol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mestranol-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1201151](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201151/) · max phase 4 · id via source catalogue

## Source summary

Estrogen receptor alpha agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201151).

## Mechanism

Estrogen receptor alpha agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 310.44 | 3.92 | 29.46 | 1/2 | 0 | C21H26O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Estrogen receptor (CHEMBL206)|Estrogen receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mestranol*](https://en.wikipedia.org/w/index.php?title=Mestranol&oldid=1365260747) (revision 1365260747, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50 min | Mestranol: 50 min; EE: 7–36 hours |
| Metabolites | - | Ethinylestradiol |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Dienestrol]] (Estrogen receptor), [[Diethylstilbestrol]] (Estrogen receptor), [[Elacestrant]] (Estrogen receptor), [[Enclomiphene]] (Estrogen receptor), [[Estradiol]] (Estrogen receptor), [[Estradiol Acetate]] (Estrogen receptor), [[Estradiol Cypionate]] (Estrogen receptor), [[Estradiol Valerate]] (Estrogen receptor), [[Estrone]] (Estrogen receptor), [[Ethinyl Estradiol]] (Estrogen receptor), [[Fulvestrant (Faslodex)]] (Estrogen receptor), [[Giredestrant]] (Estrogen receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
