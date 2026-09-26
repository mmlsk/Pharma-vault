---
type: compound
schema-version: 2
compound-id: digitoxin-compound
name: Digitoxin
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
  value: 7.0
  value-max: 8.0
  unit: d
  notes: 7–8 days
protein-binding:
  value: 90.0
  value-max: 97.0
  unit: percent
  notes: 90–97%
bioavailability:
  value: 98.0
  value-max: 100.0
  notes: 98–100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 60% via urine, 40% via faeces
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
  title: Digitoxin
  url: https://en.wikipedia.org/w/index.php?title=Digitoxin&oldid=1328962211
  revision: 1328962211
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Digitoxin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `digitoxin-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]

## Source summary

The hepatically cleared cardiac glycoside, unlike renally cleared digoxin. Same Na+/K+-ATPase mechanism but a much longer half-life and no dose adjustment in renal failure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Digitoxin*](https://en.wikipedia.org/w/index.php?title=Digitoxin&oldid=1328962211) (revision 1328962211, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–8 d | 7–8 days |
| Protein binding | 90–97 % | 90–97% |
| Bioavailability | 98–100 % | 98–100% (oral) |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 60% via urine, 40% via faeces |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
- [[CYP450 Metabolism]]
