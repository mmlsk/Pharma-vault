---
type: compound
schema-version: 2
compound-id: naloxegol-compound
name: Naloxegol
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
  value: 6.0
  value-max: 11.0
  unit: h
  notes: 6–11 h
protein-binding:
  value: 4.2
  value-max: null
  unit: percent
  notes: ~4.2%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (68%), urine (16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A)
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
  title: Naloxegol
  url: https://en.wikipedia.org/w/index.php?title=Naloxegol&oldid=1322744851
  revision: 1322744851
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Naloxegol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naloxegol-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

PEGylated naloxone derivative for opioid-induced constipation, kept out of the brain by both its size and P-glycoprotein.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naloxegol*](https://en.wikipedia.org/w/index.php?title=Naloxegol&oldid=1322744851) (revision 1322744851, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–11 h | 6–11 h |
| Protein binding | 4.2 % | ~4.2% |
| Metabolism | hepatic | Liver (CYP3A) |
| Excretion | mainly non-renal | Feces (68%), urine (16%) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
