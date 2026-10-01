---
type: compound
schema-version: 2
compound-id: vapreotide-compound
name: Vapreotide
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
class: null
subclass: null
mechanism: somatostatin receptor 2 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3349523
chembl-max-phase: 3
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: 30 minutes
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Vapreotide
  url: https://en.wikipedia.org/w/index.php?title=Vapreotide&oldid=1365484323
  revision: 1365484323
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3349523
  pref-name: VAPREOTIDE
  molecule-type: Protein
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - H01CB04
  targets:
  - id: CHEMBL1804
    name: Somatostatin receptor type 2
    action: AGONIST
  - id: CHEMBL2028
    name: Somatostatin receptor type 3
    action: AGONIST
  - id: CHEMBL1792
    name: Somatostatin receptor type 5
    action: AGONIST
  properties:
    full-mwt: 1131.4
    mw-freebase: 1131.4
    full-molformula: C57H70N12O9S2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Vapreotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vapreotide-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]
- **ChEMBL:** [CHEMBL3349523](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3349523/) · max phase 3 · id via exact ChEMBL name match - confirm

## Source summary

Vapreotide is a phase 3 compound catalogued by ChEMBL. Its curated mechanism is somatostatin receptor 2 agonist; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

somatostatin receptor 2 agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **ATC H01CB04:** SYSTEMIC HORMONAL PREPARATIONS, EXCL. SEX HORMONES AND INSULINS › HYPOTHALAMIC HORMONES › Somatostatin and analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1131.4 | - | - | -/- | - | C57H70N12O9S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Somatostatin receptor type 2 (CHEMBL1804)|Somatostatin receptor type 2]] - agonist · SINGLE PROTEIN
- [[Somatostatin receptor type 3 (CHEMBL2028)|Somatostatin receptor type 3]] - agonist · SINGLE PROTEIN
- [[Somatostatin receptor type 5 (CHEMBL1792)|Somatostatin receptor type 5]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vapreotide*](https://en.wikipedia.org/w/index.php?title=Vapreotide&oldid=1365484323) (revision 1365484323, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | 30 minutes |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Paltusotine]] (Somatostatin receptor type 2)
- **Same ATC subgroup:** [[Lanreotide]], [[Octreotide]], [[Pasireotide]], [[Somatostatin]]

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
