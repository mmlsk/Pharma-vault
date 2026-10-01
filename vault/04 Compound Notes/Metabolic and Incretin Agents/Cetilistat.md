---
type: compound
schema-version: 2
compound-id: cetilistat-compound
name: Cetilistat
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: pancreatic lipase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2103825
chembl-max-phase: 2
half-life:
  value: null
  unit: null
  notes: null
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
source-status: source-summary-only
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- chembl-profile
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2103825
  pref-name: CETILISTAT
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1812
    name: Pancreatic triacylglycerol lipase
    action: INHIBITOR
  - id: CHEMBL1796
    name: Gastric triacylglycerol lipase
    action: INHIBITOR
  properties:
    full-mwt: 401.59
    mw-freebase: 401.59
    alogp: 7.36
    psa: 52.33
    hba: 4
    hbd: 0
    rtb: 16
    num-ro5-violations: 1
    qed-weighted: 0.28
    full-molformula: C25H39NO3
---

# Cetilistat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cetilistat-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL2103825](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2103825/) · max phase 2 · id via Wikipedia infobox

## Source summary

Cetilistat is a phase 2 compound catalogued by ChEMBL. Its curated mechanism is pancreatic lipase inhibitor; the pathway link is mechanistic and does not by itself establish benefit, safety, or an appropriate use.

## Mechanism

pancreatic lipase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 401.59 | 7.36 | 52.33 | 0/4 | 1 | C25H39NO3 |

**Targets (ChEMBL curated mechanisms):**

- [[Pancreatic triacylglycerol lipase (CHEMBL1812)|Pancreatic triacylglycerol lipase]] - inhibitor · SINGLE PROTEIN
- [[Gastric triacylglycerol lipase (CHEMBL1796)|Gastric triacylglycerol lipase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

_No structured PK source matched yet - see [[Pharmacokinetics Summary]] for field conventions._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Orlistat (Xenical-Alli)|Orlistat (Xenical/Alli)]] (Gastric triacylglycerol lipase; Pancreatic triacylglycerol lipase)

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
