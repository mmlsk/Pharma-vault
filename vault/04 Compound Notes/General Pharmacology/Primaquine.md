---
type: compound
schema-version: 2
compound-id: primaquine-compound
name: Primaquine
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
chembl-id: CHEMBL506
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 96.0
  value-max: null
  notes: 96%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Primaquine
  url: https://en.wikipedia.org/w/index.php?title=Primaquine&oldid=1370237394
  revision: 1370237394
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL506
  pref-name: PRIMAQUINE
  molecule-type: Small molecule
  first-approval: 1952
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - P01BA03
  targets: []
  properties:
    full-mwt: 259.35
    mw-freebase: 259.35
    alogp: 2.78
    psa: 60.17
    hba: 4
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.84
    full-molformula: C15H21N3O
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Primaquine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `primaquine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL506](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL506/) · max phase 4 · id via Wikipedia infobox

## Source summary

The only widely available drug that clears the hepatic hypnozoites of vivax and ovale malaria, and the classic G6PD hazard.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1952
- **Flags:** black-box warning
- **ATC P01BA03:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Aminoquinolines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 259.35 | 2.78 | 60.17 | 2/4 | 0 | C15H21N3O |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Primaquine*](https://en.wikipedia.org/w/index.php?title=Primaquine&oldid=1370237394) (revision 1370237394, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Bioavailability | 96 % | 96% |
| Metabolism | hepatic | Liver |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Chloroquine]], [[Hydroxychloroquine]], [[Tafenoquine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
