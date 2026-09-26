---
type: compound
schema-version: 2
compound-id: prilocaine-compound
name: Prilocaine
aliases: []
cluster: General Pharmacology
group: analgesia
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
  value: 10.0
  value-max: 150.0
  unit: min
  notes: 10-150 minutes, longer with impaired liver or kidney function
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and kidney
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Prilocaine
  url: https://en.wikipedia.org/w/index.php?title=Prilocaine&oldid=1329364863
  revision: 1329364863
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Prilocaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `prilocaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Amide local anaesthetic with the lowest systemic toxicity of the class, but a metabolite that causes methaemoglobinaemia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Prilocaine*](https://en.wikipedia.org/w/index.php?title=Prilocaine&oldid=1329364863) (revision 1329364863, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–150 min | 10-150 minutes, longer with impaired liver or kidney function |
| Protein binding | 55 % | 55% |
| Metabolism | hepatic | Liver and kidney |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
