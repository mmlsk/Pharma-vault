---
type: compound
schema-version: 2
compound-id: foscarnet-compound
name: Foscarnet
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
chembl-id: CHEMBL666
chembl-max-phase: 4
half-life:
  value: 3.3
  value-max: 6.8
  unit: h
  notes: 3.3–6.8 hours
protein-binding:
  value: 14.0
  value-max: 17.0
  unit: percent
  notes: 14–17%
bioavailability:
  value: null
  value-max: null
  notes: NA
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
  title: Foscarnet
  url: https://en.wikipedia.org/w/index.php?title=Foscarnet&oldid=1373275641
  revision: 1373275641
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL666
  pref-name: FOSCARNET
  molecule-type: Small molecule
  first-approval: 1991
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AD01
  targets: []
  properties:
    full-mwt: 126.0
    mw-freebase: 126.0
    alogp: -0.16
    psa: 94.83
    hba: 2
    hbd: 3
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.42
    full-molformula: CH3O5P
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Foscarnet

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `foscarnet-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL666](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL666/) · max phase 4 · id via Wikipedia infobox

## Source summary

Pyrophosphate analogue needing no activation at all, which is why it works against thymidine-kinase-deficient aciclovir-resistant herpes and UL97-mutant CMV.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1991
- **Flags:** black-box warning
- **ATC J05AD01:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Phosphonic acid derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 126.0 | -0.16 | 94.83 | 3/2 | 0 | CH3O5P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Foscarnet*](https://en.wikipedia.org/w/index.php?title=Foscarnet&oldid=1373275641) (revision 1373275641, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.3–6.8 h | 3.3–6.8 hours |
| Protein binding | 14–17 % | 14–17% |
| Bioavailability | - | NA |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
