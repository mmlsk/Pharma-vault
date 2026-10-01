---
type: compound
schema-version: 2
compound-id: norgestimate-compound
name: Norgestimate
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
chembl-id: CHEMBL1200934
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 37.0
  unit: h
  notes: '• Norgestimate: very short; • Norelgestromin: 17–37 hours; • Levonorgestrel: 24–32 hours'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '• Norelgestromin: 99% (to albumin); • Levonorgestrel: 98% (to albumin and SHBG); • Levonorgestrel acetate: ? (to albumin)'
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 47%; Feces: 37%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (deacetylation, reduction, hydroxylation, conjugation)
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
  title: Norgestimate
  url: https://en.wikipedia.org/w/index.php?title=Norgestimate&oldid=1369013524
  revision: 1369013524
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL1200934
  pref-name: NORGESTIMATE
  molecule-type: Small molecule
  first-approval: 1989
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 369.51
    mw-freebase: 369.51
    alogp: 4.71
    psa: 58.89
    hba: 4
    hbd: 1
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.33
    full-molformula: C23H31NO3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Norgestimate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norgestimate-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200934](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200934/) · max phase 4 · id via source catalogue

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1200934).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1989
- **Flags:** prodrug

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 369.51 | 4.71 | 58.89 | 1/4 | 0 | C23H31NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Norgestimate*](https://en.wikipedia.org/w/index.php?title=Norgestimate&oldid=1369013524) (revision 1369013524, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–37 h | • Norgestimate: very short; • Norelgestromin: 17–37 hours; • Levonorgestrel: 24–32 hours |
| Protein binding | 99 % | • Norelgestromin: 99% (to albumin); • Levonorgestrel: 98% (to albumin and SHBG); • Levonorgestrel acetate: ? (to albumin) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver, intestines (deacetylation, reduction, hydroxylation, conjugation) |
| Metabolites | - | • Norelgestromin; • Levonorgestrel; • Levonorgestrel acetate |
| Excretion | - | Urine: 47%; Feces: 37% |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Gestodene]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
