---
type: compound
schema-version: 2
compound-id: fidaxomicin-compound
name: Fidaxomicin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1255800
chembl-max-phase: 4
half-life:
  value: 11.7
  value-max: null
  unit: h
  notes: 11.7 ± 4.80 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Minimal systemic absorption
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (<1%), faeces (92%)
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
pk-source:
  type: wikipedia-infobox
  title: Fidaxomicin
  url: https://en.wikipedia.org/w/index.php?title=Fidaxomicin&oldid=1369629710
  revision: 1369629710
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1255800
  pref-name: FIDAXOMICIN
  molecule-type: Small molecule
  first-approval: 2011
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A07AA12
  targets:
  - id: CHEMBL2363852
    name: DNA-directed RNA polymerase
    action: INHIBITOR
  properties:
    full-mwt: 1058.05
    mw-freebase: 1058.05
    full-molformula: C52H74Cl2O18
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 5e8ad2f1-a227-4171-9b66-cd6ce49b8baa
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5e8ad2f1-a227-4171-9b66-cd6ce49b8baa
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Fidaxomicin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fidaxomicin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1255800](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1255800/) · max phase 4 · id via Wikipedia infobox

## Source summary

Macrocyclic antibiotic for Clostridioides difficile that is barely absorbed and unusually sparing of the surrounding flora, which is why relapse rates are lower than with vancomycin.

## Mechanism

DNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2011
- **ATC A07AA12:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1058.05 | - | - | -/- | - | C52H74Cl2O18 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA-directed RNA polymerase (CHEMBL2363852)|DNA-directed RNA polymerase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fidaxomicin*](https://en.wikipedia.org/w/index.php?title=Fidaxomicin&oldid=1369629710) (revision 1369629710, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11.7 h | 11.7 ± 4.80 hours |
| Bioavailability | - | Minimal systemic absorption |
| Excretion | mainly non-renal | Urine (<1%), faeces (92%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 5e8ad2f1…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5e8ad2f1-a227-4171-9b66-cd6ce49b8baa), label version 20260522. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amphotericin B]], [[Paromomycin]], [[Polymyxin B]], [[Rifaximin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
