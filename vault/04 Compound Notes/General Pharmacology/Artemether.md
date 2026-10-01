---
type: compound
schema-version: 2
compound-id: artemether-compound
name: Artemether
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Ferriprotoporphyrin IX inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL566534
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
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
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- chembl-profile
- chembl-name-match
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL566534
  pref-name: ARTEMETHER
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01BE02
  targets:
  - id: CHEMBL613897
    name: Ferriprotoporphyrin IX
    action: INHIBITOR
  properties:
    full-mwt: 298.38
    mw-freebase: 298.38
    alogp: 2.84
    psa: 46.15
    hba: 5
    hbd: 0
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C16H26O5
---

# Artemether

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `artemether-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL566534](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL566534/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Artemisinin derivative and, with lumefantrine, the backbone of first-line malaria treatment across most of the world.

## Mechanism

Ferriprotoporphyrin IX inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** prodrug
- **ATC P01BE02:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Artemisinin and derivatives, plain

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 298.38 | 2.84 | 46.15 | 0/5 | 0 | C16H26O5 |

**Targets (ChEMBL curated mechanisms):**

- [[Ferriprotoporphyrin IX (CHEMBL613897)|Ferriprotoporphyrin IX]] - inhibitor · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lumefantrine]] (Ferriprotoporphyrin IX), [[Piperaquine]] (Ferriprotoporphyrin IX)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
