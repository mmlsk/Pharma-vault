---
type: compound
schema-version: 2
compound-id: scopolamine-compound
name: Hyoscine (Scopolamine)
aliases:
- Hyoscine
- Scopolamine
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
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 20.0
  value-max: 40.0
  notes: 20-40%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Scopolamine
  url: https://en.wikipedia.org/w/index.php?title=Scopolamine&oldid=1369150808
  revision: 1369150808
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Hyoscine (Scopolamine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `scopolamine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Hyoscine, Scopolamine

## Source summary

Tertiary antimuscarinic that crosses into the brain, used transdermally for motion sickness and historically as the standard amnesic model drug.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Scopolamine*](https://en.wikipedia.org/w/index.php?title=Scopolamine&oldid=1369150808) (revision 1369150808, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours |
| Bioavailability | 20–40 % | 20-40% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
