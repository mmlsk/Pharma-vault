---
type: compound
schema-version: 2
compound-id: melarsoprol-compound
name: Melarsoprol
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
chembl-id: CHEMBL166
chembl-max-phase: 3
half-life:
  value: 35.0
  value-max: null
  unit: h
  notes: 35 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Melarsoprol
  url: https://en.wikipedia.org/w/index.php?title=Melarsoprol&oldid=1373206205
  revision: 1373206205
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL166
  pref-name: MELARSOPROL
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01CD01
  targets: []
  properties:
    full-mwt: 398.35
    mw-freebase: 398.35
    full-molformula: C12H15AsN6OS2
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Melarsoprol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `melarsoprol-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL166](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL166/) · max phase 3 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Arsenical for late-stage African trypanosomiasis, formulated in propylene glycol and lethal to roughly one treated patient in twenty.

## ChEMBL profile

- **Molecule type:** Small molecule
- **Flags:** prodrug
- **ATC P01CD01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST LEISHMANIASIS AND TRYPANOSOMIASIS › Arsenic compounds

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 398.35 | - | - | -/- | - | C12H15AsN6OS2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Melarsoprol*](https://en.wikipedia.org/w/index.php?title=Melarsoprol&oldid=1373206205) (revision 1373206205, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 35 h | 35 hours |
| Excretion | mainly urinary | Kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
