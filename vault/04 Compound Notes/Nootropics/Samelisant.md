---
type: compound
schema-version: 2
compound-id: samelisant-compound
name: Samelisant
aliases:
- Suvn-G3031
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: Histamine H3 receptor inverse agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297328
chembl-max-phase: 2
half-life:
  value: 23.0
  value-max: 34.0
  unit: h
  notes: 23-34 hours
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- curated-addition
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Samelisant
  url: https://en.wikipedia.org/w/index.php?title=Samelisant&oldid=1374523663
  revision: 1374523663
  retrieved: '2026-10-01'
  chembl-confirmed: true
chembl:
  identity-source: curated-addition
  parent-id: CHEMBL4297328
  pref-name: SUVN-G3031
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL264
    name: Histamine H3 receptor
    action: INVERSE AGONIST
  properties:
    full-mwt: 373.5
    mw-freebase: 373.5
    alogp: 2.35
    psa: 54.04
    hba: 5
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C21H31N3O3
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Samelisant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `samelisant-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Suvn-G3031
- **ChEMBL:** [CHEMBL4297328](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297328/) · max phase 2 · id via curated addition, exact ChEMBL match

## Source summary

Curated addition (backlog: Emerging CNS agents / Orexin and wakefulness). Identity resolved by exact name match (synonym) to ChEMBL CHEMBL4297328 (SUVN-G3031).

## Mechanism

Histamine H3 receptor inverse agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 373.5 | 2.35 | 54.04 | 1/5 | 0 | C21H31N3O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Histamine H3 receptor (CHEMBL264)|Histamine H3 receptor]] - inverse agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Samelisant*](https://en.wikipedia.org/w/index.php?title=Samelisant&oldid=1374523663) (revision 1374523663, retrieved 2026-10-01); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 23–34 h | 23-34 hours |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Betahistine]] (Histamine H3 receptor), [[Pitolisant (Wakix)]] (Histamine H3 receptor)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
