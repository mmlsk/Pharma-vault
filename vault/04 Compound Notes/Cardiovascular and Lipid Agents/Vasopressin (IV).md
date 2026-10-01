---
type: compound
schema-version: 2
compound-id: vasopressin-drug-compound
name: Vasopressin (IV)
aliases:
- Vasopressin
- IV
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: Vasopressin receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL373742
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 20.0
  unit: min
  notes: 10–20 minutes
protein-binding:
  value: 1.0
  value-max: null
  unit: percent
  notes: 1%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Predominantly in the liver and kidneys
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
- cardiovascular-load
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Vasopressin
  url: https://en.wikipedia.org/w/index.php?title=Vasopressin&oldid=1368665481
  revision: 1368665481
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL373742
  pref-name: VASOPRESSIN
  molecule-type: Protein
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL2363078
    name: Vasopressin receptor
    action: AGONIST
  properties:
    full-mwt: 1084.25
    mw-freebase: 1084.25
    full-molformula: C46H65N15O12S2
pk-verification:
  source: fda-label
  status: consistent
  set-id: 53372911-5a55-dfac-e063-6394a90ae2f6
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=53372911-5a55-dfac-e063-6394a90ae2f6
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Vasopressin (IV)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vasopressin-drug-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **Aliases:** Vasopressin, IV
- **ChEMBL:** [CHEMBL373742](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL373742/) · max phase 4 · id via Wikipedia infobox

## Source summary

Second-line vasopressor in septic shock, acting on a receptor system entirely separate from the adrenergic one.

## Mechanism

Vasopressin receptor agonist _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2014

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1084.25 | - | - | -/- | - | C46H65N15O12S2 |

**Targets (ChEMBL curated mechanisms):**

- [[Vasopressin receptor (CHEMBL2363078)|Vasopressin receptor]] - agonist · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vasopressin*](https://en.wikipedia.org/w/index.php?title=Vasopressin&oldid=1368665481) (revision 1368665481, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–20 min | 10–20 minutes |
| Protein binding | 1 % | 1% |
| Metabolism | hepatic | Predominantly in the liver and kidneys |
| Excretion | mainly urinary | Urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 53372911…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=53372911-5a55-dfac-e063-6394a90ae2f6), label version 20260817. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.167)
> - protein-binding: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
