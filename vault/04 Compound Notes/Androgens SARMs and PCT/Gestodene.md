---
type: compound
schema-version: 2
compound-id: gestodene-compound
name: Gestodene
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1213583
chembl-max-phase: 3
half-life:
  value: 12.0
  value-max: 15.0
  unit: h
  notes: 12–15 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98% (64% to SHBG, 34% to albumin, 2% free)
bioavailability:
  value: 96.0
  value-max: null
  notes: 96% (87–111%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (reduction, hydroxylation)
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
  title: Gestodene
  url: https://en.wikipedia.org/w/index.php?title=Gestodene&oldid=1368678148
  revision: 1368678148
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1213583
  pref-name: GESTODENE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL208
    name: Progesterone receptor
    action: AGONIST
  properties:
    full-mwt: 310.44
    mw-freebase: 310.44
    alogp: 3.66
    psa: 37.3
    hba: 2
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.59
    full-molformula: C21H26O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Gestodene

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gestodene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1213583](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1213583/) · max phase 3 · id via Wikipedia infobox

## Source summary

Gestodene is a phase 3 compound catalogued by ChEMBL. Its curated mechanism is progesterone receptor agonist; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 310.44 | 3.66 | 37.3 | 1/2 | 0 | C21H26O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Progesterone receptor (CHEMBL208)|Progesterone receptor]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gestodene*](https://en.wikipedia.org/w/index.php?title=Gestodene&oldid=1368678148) (revision 1368678148, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–15 h | 12–15 hours |
| Protein binding | 98 % | 98% (64% to SHBG, 34% to albumin, 2% free) |
| Bioavailability | 96 % | 96% (87–111%) |
| Metabolism | hepatic | Liver (reduction, hydroxylation) |
| Excretion | mainly urinary | Urine |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Asoprisnil]] (Progesterone receptor), [[Chlormadinone Acetate]] (Progesterone receptor), [[Cyproterone Acetate]] (Progesterone receptor), [[Danazol]] (Progesterone receptor), [[Desogestrel]] (Progesterone receptor), [[Drospirenone]] (Progesterone receptor), [[Dydrogesterone]] (Progesterone receptor), [[Ethynodiol Diacetate]] (Progesterone receptor), [[Etonogestrel]] (Progesterone receptor), [[Hydroxyprogesterone Caproate]] (Progesterone receptor), [[Levonorgestrel]] (Progesterone receptor), [[Medroxyprogesterone Acetate]] (Progesterone receptor)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
