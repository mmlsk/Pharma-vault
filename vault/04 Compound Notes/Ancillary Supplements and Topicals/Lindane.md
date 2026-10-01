---
type: compound
schema-version: 2
compound-id: lindane-compound
name: Lindane
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor negative allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL15891
chembl-max-phase: 4
half-life:
  value: 18.0
  value-max: null
  unit: h
  notes: 18 hours
protein-binding:
  value: 91.0
  value-max: null
  unit: percent
  notes: 91%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic cytochrome P-450 oxygenase system
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Lindane
  url: https://en.wikipedia.org/w/index.php?title=Lindane&oldid=1376459973
  revision: 1376459973
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL15891
  pref-name: LINDANE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: true
  withdrawn: true
  atc-codes:
  - P03AB02
  targets:
  - id: CHEMBL2364024
    name: GABA-A receptor
    action: NEGATIVE ALLOSTERIC MODULATOR
  - id: CHEMBL2364025
    name: GABA-A receptor
    action: NEGATIVE ALLOSTERIC MODULATOR
  properties:
    full-mwt: 290.83
    mw-freebase: 290.83
    alogp: 3.64
    psa: 0.0
    hba: 0
    hbd: 0
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C6H6Cl6
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Lindane

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lindane-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL15891](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL15891/) · max phase 4 · id via source catalogue

## Source summary

GABA-A receptor negative allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL15891).

## Mechanism

GABA-A receptor negative allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **Flags:** black-box warning, withdrawn
- **ATC P03AB02:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ECTOPARASITICIDES, INCL. SCABICIDES › Chlorine containing products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 290.83 | 3.64 | 0.0 | 0/0 | 0 | C6H6Cl6 |

**Targets (ChEMBL curated mechanisms):**

- [[GABA-A receptor (CHEMBL2364024)|GABA-A receptor]] - negative allosteric modulator · PROTEIN COMPLEX GROUP
- [[GABA-A receptor (CHEMBL2364025)|GABA-A receptor]] - negative allosteric modulator · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lindane*](https://en.wikipedia.org/w/index.php?title=Lindane&oldid=1376459973) (revision 1376459973, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18 h | 18 hours |
| Protein binding | 91 % | 91% |
| Metabolism | hepatic | Hepatic cytochrome P-450 oxygenase system |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
