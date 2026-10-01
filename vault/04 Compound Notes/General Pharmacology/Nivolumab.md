---
type: compound
schema-version: 2
compound-id: nivolumab-compound
name: Nivolumab
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Programmed cell death protein 1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2108738
chembl-max-phase: 4
half-life:
  value: 27.0
  value-max: null
  unit: d
  notes: 27 days
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nivolumab
  url: https://en.wikipedia.org/w/index.php?title=Nivolumab&oldid=1347861612
  revision: 1347861612
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2108738
  pref-name: NIVOLUMAB
  molecule-type: Antibody
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01FF01
  targets:
  - id: CHEMBL3307223
    name: Programmed cell death protein 1
    action: INHIBITOR
  properties: {}
pk-verification:
  source: fda-label
  status: consistent
  set-id: f570b9c4-6846-4de2-abfa-4d0a4ae4e394
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f570b9c4-6846-4de2-abfa-4d0a4ae4e394
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nivolumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nivolumab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2108738](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2108738/) · max phase 4 · id via Wikipedia infobox

## Source summary

Anti-PD-1 antibody used alone and combined with ipilimumab, where the combination buys response rate at a substantial toxicity cost.

## Mechanism

Programmed cell death protein 1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2015
- **ATC L01FF01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › MONOCLONAL ANTIBODIES AND ANTIBODY DRUG CONJUGATES › PD-1/PD-L1 (Programmed cell death protein 1/death ligand 1) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Programmed cell death protein 1 (CHEMBL3307223)|Programmed cell death protein 1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nivolumab*](https://en.wikipedia.org/w/index.php?title=Nivolumab&oldid=1347861612) (revision 1347861612, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27 d | 27 days |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f570b9c4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f570b9c4-6846-4de2-abfa-4d0a4ae4e394), label version 20260812. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 600)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cemiplimab]] (Programmed cell death protein 1), [[Dostarlimab]] (Programmed cell death protein 1), [[Pembrolizumab]] (Programmed cell death protein 1)
- **Same ATC subgroup:** [[Atezolizumab]], [[Avelumab]], [[Cemiplimab]], [[Dostarlimab]], [[Durvalumab]], [[Pembrolizumab]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
