---
type: compound
schema-version: 2
compound-id: dexmedetomidine-compound
name: Dexmedetomidine
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
  value: 1.8
  value-max: 3.7
  unit: h
  notes: 1.8–3.7hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94% (mostly albumin)
bioavailability:
  value: 16.0
  value-max: null
  notes: 'Oral: 16%; Sublingual: 72%; Buccal: 82%; Transdermal: 88%; Intramuscular: 73–104%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%), feces (4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Near-complete hepatic metabolism to inactive metabolites
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
  title: Dexmedetomidine
  url: https://en.wikipedia.org/w/index.php?title=Dexmedetomidine&oldid=1374736005
  revision: 1374736005
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dexmedetomidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dexmedetomidine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Highly selective alpha-2 agonist producing sedation that resembles natural sleep, with analgesia and no respiratory depression.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dexmedetomidine*](https://en.wikipedia.org/w/index.php?title=Dexmedetomidine&oldid=1374736005) (revision 1374736005, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–3.7 h | 1.8–3.7hours |
| Protein binding | 94 % | 94% (mostly albumin) |
| Bioavailability | 16 % | Oral: 16%; Sublingual: 72%; Buccal: 82%; Transdermal: 88%; Intramuscular: 73–104% |
| Metabolism | hepatic | Near-complete hepatic metabolism to inactive metabolites |
| Metabolites | - | Various |
| Excretion | mainly urinary | Urine (95%), feces (4%) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
