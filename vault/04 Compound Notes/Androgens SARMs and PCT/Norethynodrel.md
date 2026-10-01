---
type: compound
schema-version: 2
compound-id: norethynodrel-compound
name: Norethynodrel
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1387
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: Very short (< 30 minutes)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: 'Noretynodrel: to albumin and not to SHBG or CBG'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Breast milk: 1%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (hydroxylation, isomerization, conjugation)
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
  title: Noretynodrel
  url: https://en.wikipedia.org/w/index.php?title=Noretynodrel&oldid=1367851360
  revision: 1367851360
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1387
  pref-name: NORETHYNODREL
  molecule-type: Small molecule
  first-approval: 1961
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 298.43
    mw-freebase: 298.43
    alogp: 3.64
    psa: 37.3
    hba: 2
    hbd: 1
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C20H26O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Norethynodrel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norethynodrel-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1387](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1387/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1387).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1961

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 298.43 | 3.64 | 37.3 | 1/2 | 0 | C20H26O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Noretynodrel*](https://en.wikipedia.org/w/index.php?title=Noretynodrel&oldid=1367851360) (revision 1367851360, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | Very short (< 30 minutes) |
| Protein binding | - | Noretynodrel: to albumin and not to SHBG or CBG |
| Metabolism | hepatic | Liver, intestines (hydroxylation, isomerization, conjugation) |
| Metabolites | - | • 3α-Hydroxynoretynodrel; • 3β-Hydroxynoretynodrel; • Norethisterone; • Ethinylestradiol• Conjugates |
| Excretion | - | Breast milk: 1% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
