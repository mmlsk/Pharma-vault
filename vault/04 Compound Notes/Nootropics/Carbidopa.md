---
type: compound
schema-version: 2
compound-id: carbidopa-compound
name: Carbidopa
aliases: []
cluster: Nootropics
group: neuropsych
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201236
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 76.0
  value-max: null
  unit: percent
  notes: 76%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: 7 metabolites known, not metabolized extensively
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
- source-derived
- group/neuropsych
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Carbidopa
  url: https://en.wikipedia.org/w/index.php?title=Carbidopa&oldid=1373023885
  revision: 1373023885
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201236
  pref-name: CARBIDOPA ANHYDROUS
  molecule-type: Small molecule
  first-approval: 1975
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 226.23
    mw-freebase: 226.23
    alogp: -0.05
    psa: 115.81
    hba: 5
    hbd: 5
    rtb: 4
    num-ro5-violations: 0
    qed-weighted: 0.28
    full-molformula: C10H14N2O4
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: 55b99f22-9eb2-4df6-9979-bc4c3af5e454
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55b99f22-9eb2-4df6-9979-bc4c3af5e454
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Carbidopa

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carbidopa-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **ChEMBL:** [CHEMBL1201236](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201236/) · max phase 4 · id via Wikipedia infobox

## Source summary

A peripheral AADC inhibitor that does not cross the blood-brain barrier. It has no therapeutic effect alone; it exists to stop levodopa being decarboxylated in the gut and bloodstream, roughly quadrupling the fraction reaching the brain.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1975

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 226.23 | -0.05 | 115.81 | 5/5 | 0 | C10H14N2O4 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carbidopa*](https://en.wikipedia.org/w/index.php?title=Carbidopa&oldid=1373023885) (revision 1373023885, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 76 % | 76% |
| Metabolism | - | 7 metabolites known, not metabolized extensively |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set 55b99f22…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=55b99f22-9eb2-4df6-9979-bc4c3af5e454), label version 20251217. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
