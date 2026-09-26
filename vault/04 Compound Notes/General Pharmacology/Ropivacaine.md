---
type: compound
schema-version: 2
compound-id: ropivacaine-compound
name: Ropivacaine
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
  value: 1.6
  value-max: 6.0
  unit: h
  notes: 1.6–6 hours (varies with administration route)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%–98% (epidural)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 86%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ropivacaine
  url: https://en.wikipedia.org/w/index.php?title=Ropivacaine&oldid=1359319839
  revision: 1359319839
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ropivacaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ropivacaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Single-enantiomer long-acting local anaesthetic developed to reduce bupivacaine's cardiotoxicity while preserving duration.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ropivacaine*](https://en.wikipedia.org/w/index.php?title=Ropivacaine&oldid=1359319839) (revision 1359319839, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.6–6 h | 1.6–6 hours (varies with administration route) |
| Bioavailability | 87 % | 87%–98% (epidural) |
| Metabolism | hepatic | Liver (CYP1A2-mediated) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney 86% |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
