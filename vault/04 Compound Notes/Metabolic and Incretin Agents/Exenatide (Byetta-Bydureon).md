---
type: compound
schema-version: 2
compound-id: exenatide-compound
name: Exenatide (Byetta/Bydureon)
aliases:
- Exenatide
- Byetta
- Bydureon
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
chembl-id: null
chembl-max-phase: null
half-life:
  value: 2.4
  value-max: null
  unit: h
  notes: 2.4 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: proteolysis
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Exenatide
  url: https://en.wikipedia.org/w/index.php?title=Exenatide&oldid=1332060752
  revision: 1332060752
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Exenatide (Byetta/Bydureon)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `exenatide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Exenatide, Byetta, Bydureon

## Source summary

First-in-class GLP-1 receptor agonist, originally derived from Gila monster venom peptide exendin-4; predecessor to semaglutide/tirzepatide.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Exenatide*](https://en.wikipedia.org/w/index.php?title=Exenatide&oldid=1332060752) (revision 1332060752, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4 h | 2.4 h |
| Bioavailability | - | N/A |
| Metabolism | - | proteolysis |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
