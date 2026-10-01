---
type: compound
schema-version: 2
compound-id: sulfamethoxazole-compound
name: Sulfamethoxazole
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial dihydropteroate synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL443
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic acetylation and glucuronidation
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
  title: Sulfamethoxazole
  url: https://en.wikipedia.org/w/index.php?title=Sulfamethoxazole&oldid=1321678938
  revision: 1321678938
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL443
  pref-name: SULFAMETHOXAZOLE
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01EC01
  targets:
  - id: CHEMBL2364668
    name: Dihydropteroate synthase
    action: INHIBITOR
  properties:
    full-mwt: 253.28
    mw-freebase: 253.28
    alogp: 1.37
    psa: 98.22
    hba: 5
    hbd: 2
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C10H11N3O3S
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sulfamethoxazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sulfamethoxazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL443](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL443/) · max phase 4 · id via Wikipedia infobox

## Source summary

The sulfonamide half of co-trimoxazole, a PABA analogue exploiting the fact that bacteria must synthesise folate rather than take it up.

## Mechanism

Bacterial dihydropteroate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC J01EC01:** ANTIINFECTIVES FOR SYSTEMIC USE › SULFONAMIDES AND TRIMETHOPRIM › Intermediate-acting sulfonamides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 253.28 | 1.37 | 98.22 | 2/5 | 0 | C10H11N3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydropteroate synthase (CHEMBL2364668)|Dihydropteroate synthase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sulfamethoxazole*](https://en.wikipedia.org/w/index.php?title=Sulfamethoxazole&oldid=1321678938) (revision 1321678938, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 70 % | 70% |
| Metabolism | hepatic | Hepatic acetylation and glucuronidation |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
