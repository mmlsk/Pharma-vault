---
type: compound
schema-version: 2
compound-id: imipenem-compound
name: Imipenem
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
chembl-id: CHEMBL43708
chembl-max-phase: 4
half-life:
  value: 38.0
  value-max: null
  unit: min
  notes: 38 minutes (children), 60 minutes (adults)
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (70%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Kidney
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Imipenem
  url: https://en.wikipedia.org/w/index.php?title=Imipenem&oldid=1349475298
  revision: 1349475298
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL148
  pref-name: IMIPENEM
  molecule-type: Small molecule
  first-approval: 1985
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 299.35
    mw-freebase: 299.35
    alogp: -0.18
    psa: 113.72
    hba: 5
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.22
    full-molformula: C12H17N3O4S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Imipenem

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `imipenem-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL43708](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL43708/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The first carbapenem, co-formulated with cilastatin to block renal dehydropeptidase degradation. More epileptogenic than the later members of the class.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1985

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 299.35 | -0.18 | 113.72 | 4/5 | 0 | C12H17N3O4S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Imipenem*](https://en.wikipedia.org/w/index.php?title=Imipenem&oldid=1349475298) (revision 1349475298, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 38 min | 38 minutes (children), 60 minutes (adults) |
| Protein binding | 20 % | 20% |
| Metabolism | - | Kidney |
| Excretion | mainly urinary | Urine (70%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
