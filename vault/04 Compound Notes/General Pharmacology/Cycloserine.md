---
type: compound
schema-version: 2
compound-id: cycloserine-compound
name: Cycloserine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Alanine racemase inhibitor; D-alanylalanine synthetase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL771
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours (normal kidney function)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 70.0
  value-max: null
  notes: ~70% to 90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Cycloserine
  url: https://en.wikipedia.org/w/index.php?title=Cycloserine&oldid=1368797711
  revision: 1368797711
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL771
  pref-name: CYCLOSERINE
  molecule-type: Small molecule
  first-approval: 1964
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AB01
  targets:
  - id: CHEMBL2030
    name: D-alanine--D-alanine ligase
    action: INHIBITOR
  - id: CHEMBL2031
    name: Alanine racemase
    action: INHIBITOR
  properties:
    full-mwt: 102.09
    mw-freebase: 102.09
    alogp: -1.62
    psa: 64.35
    hba: 3
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.39
    full-molformula: C3H6N2O2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 8e7e2665-7a3d-3f54-9f92-5fe845f02ef9
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8e7e2665-7a3d-3f54-9f92-5fe845f02ef9
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Cycloserine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cycloserine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL771](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL771/) · max phase 4 · id via Wikipedia infobox

## Source summary

Second-line antituberculous drug whose central nervous system toxicity reflects a second pharmacology entirely separate from its antibacterial action.

## Mechanism

Alanine racemase inhibitor; D-alanylalanine synthetase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1964
- **ATC J04AB01:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 102.09 | -1.62 | 64.35 | 2/3 | 0 | C3H6N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[D-alanine--D-alanine ligase (CHEMBL2030)|D-alanine--D-alanine ligase]] - inhibitor · SINGLE PROTEIN
- [[Alanine racemase (CHEMBL2031)|Alanine racemase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cycloserine*](https://en.wikipedia.org/w/index.php?title=Cycloserine&oldid=1368797711) (revision 1368797711, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours (normal kidney function) |
| Bioavailability | 70 % | ~70% to 90% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 8e7e2665…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8e7e2665-7a3d-3f54-9f92-5fe845f02ef9), label version 20240730. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Capreomycin]], [[Rifabutin]], [[Rifampicin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
