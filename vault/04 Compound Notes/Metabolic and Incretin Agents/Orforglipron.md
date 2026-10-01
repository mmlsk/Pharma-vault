---
type: compound
schema-version: 2
compound-id: orforglipron-compound
name: Orforglipron
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4446782
chembl-max-phase: 3
half-life:
  value: 29.0
  value-max: 49.0
  unit: h
  notes: 29–49 hours
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Orforglipron
  url: https://en.wikipedia.org/w/index.php?title=Orforglipron&oldid=1371069211
  revision: 1371069211
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL4446782
  pref-name: ORFORGLIPRON
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties:
    full-mwt: 882.97
    mw-freebase: 882.97
    alogp: 7.44
    psa: 155.93
    hba: 13
    hbd: 1
    rtb: 7
    num-ro5-violations: 3
    qed-weighted: 0.17
    full-molformula: C48H48F2N10O5
pk-verification:
  source: fda-label
  status: consistent
  set-id: 8ac446c5-feba-474f-a103-23facb9b5c62
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Orforglipron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `orforglipron-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL4446782](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4446782/) · max phase 3 · id via Wikipedia infobox

## Source summary

Oral non-peptide GLP-1 receptor agonist, notable for not requiring injection.

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 882.97 | 7.44 | 155.93 | 1/13 | 3 | C48H48F2N10O5 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Orforglipron*](https://en.wikipedia.org/w/index.php?title=Orforglipron&oldid=1371069211) (revision 1371069211, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 29–49 h | 29–49 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 8ac446c5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=8ac446c5-feba-474f-a103-23facb9b5c62), label version 20260729. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 29, 49)

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
