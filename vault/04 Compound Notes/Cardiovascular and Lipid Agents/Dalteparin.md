---
type: compound
schema-version: 2
compound-id: dalteparin-compound
name: Dalteparin
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
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
  value: 3.0
  value-max: 5.0
  unit: h
  notes: 3-5 hours subcutaneous; 2.1-2.3 hours IV
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 81.0
  value-max: 93.0
  notes: 81-93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Dalteparin sodium
  url: https://en.wikipedia.org/w/index.php?title=Dalteparin_sodium&oldid=1340417494
  revision: 1340417494
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dalteparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dalteparin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]

## Source summary

Low molecular weight heparin, the standard agent for cancer-associated thrombosis in the era before direct oral anticoagulants.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dalteparin sodium*](https://en.wikipedia.org/w/index.php?title=Dalteparin_sodium&oldid=1340417494) (revision 1340417494, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–5 h | 3-5 hours subcutaneous; 2.1-2.3 hours IV |
| Bioavailability | 81–93 % | 81-93% |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
