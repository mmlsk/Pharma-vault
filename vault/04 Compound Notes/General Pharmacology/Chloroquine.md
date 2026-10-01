---
type: compound
schema-version: 2
compound-id: chloroquine-compound
name: Chloroquine
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
chembl-id: CHEMBL76
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: 1-2 months
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
  title: Chloroquine
  url: https://en.wikipedia.org/w/index.php?title=Chloroquine&oldid=1368924934
  revision: 1368924934
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL76
  pref-name: CHLOROQUINE
  molecule-type: Small molecule
  first-approval: 1949
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01BA01
  targets: []
  properties:
    full-mwt: 319.88
    mw-freebase: 319.88
    alogp: 4.81
    psa: 28.16
    hba: 3
    hbd: 1
    rtb: 8
    num-ro5-violations: 0
    qed-weighted: 0.76
    full-molformula: C18H26ClN3
---

# Chloroquine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chloroquine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL76](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL76/) · max phase 4 · id via Wikipedia infobox

## Source summary

The archetypal 4-aminoquinoline antimalarial, largely defeated by resistance but still central to malaria pharmacology and to lysosomal biology.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1949
- **ATC P01BA01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Aminoquinolines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 319.88 | 4.81 | 28.16 | 1/3 | 0 | C18H26ClN3 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chloroquine*](https://en.wikipedia.org/w/index.php?title=Chloroquine&oldid=1368924934) (revision 1368924934, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 1-2 months |
| Metabolism | hepatic | Liver |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Hydroxychloroquine]], [[Primaquine]], [[Tafenoquine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
