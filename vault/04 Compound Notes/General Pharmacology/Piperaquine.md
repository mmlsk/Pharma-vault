---
type: compound
schema-version: 2
compound-id: piperaquine-compound
name: Piperaquine
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
chembl-id: CHEMBL303933
chembl-max-phase: 3
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
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL303933
  pref-name: PIPERAQUINE
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL613897
    name: Ferriprotoporphyrin IX
    action: INHIBITOR
  properties:
    full-mwt: 535.52
    mw-freebase: 535.52
    alogp: 5.42
    psa: 38.74
    hba: 6
    hbd: 0
    rtb: 6
    num-ro5-violations: 2
    qed-weighted: 0.33
    full-molformula: C29H32Cl2N6
---

# Piperaquine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `piperaquine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL303933](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL303933/) · max phase 3 · id via Wikipedia infobox

## Source summary

Bisquinoline partner drug used with dihydroartemisinin, effective but with a dose-dependent QT signal.

## Mechanism

Ferriprotoporphyrin IX inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 535.52 | 5.42 | 38.74 | 0/6 | 2 | C29H32Cl2N6 |

**Targets (ChEMBL curated mechanisms):**

- [[Ferriprotoporphyrin IX (CHEMBL613897)|Ferriprotoporphyrin IX]] - inhibitor · SMALL MOLECULE

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Artemether]] (Ferriprotoporphyrin IX), [[Lumefantrine]] (Ferriprotoporphyrin IX)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
