---
type: compound
schema-version: 2
compound-id: tinzaparin-compound
name: Tinzaparin
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
  value: 200.0
  value-max: null
  unit: min
  notes: 200 min. for Anti-Xa activity, 257. min for Anti-IIa activity
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% for Anti-Xa activity, 67% for Anti-IIa activity)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: minor metabolisation in liver by desulfation and/or depolymerization; excretion via kidneys in almost unchanged form
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
  title: Tinzaparin sodium
  url: https://en.wikipedia.org/w/index.php?title=Tinzaparin_sodium&oldid=1353808137
  revision: 1353808137
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tinzaparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tinzaparin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]

## Source summary

Low molecular weight heparin with a higher mean molecular weight than the others, so it retains more anti-thrombin activity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tinzaparin sodium*](https://en.wikipedia.org/w/index.php?title=Tinzaparin_sodium&oldid=1353808137) (revision 1353808137, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 200 min | 200 min. for Anti-Xa activity, 257. min for Anti-IIa activity |
| Bioavailability | 90 % | 90% for Anti-Xa activity, 67% for Anti-IIa activity) |
| Metabolism | hepatic | minor metabolisation in liver by desulfation and/or depolymerization; excretion via kidneys in almost unchanged form |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
