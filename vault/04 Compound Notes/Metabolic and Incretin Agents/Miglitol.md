---
type: compound
schema-version: 2
compound-id: miglitol-compound
name: Miglitol
aliases: []
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
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: 4.0
  value-max: null
  unit: percent
  notes: Negligible (<4.0%)
bioavailability:
  value: null
  value-max: null
  notes: Dose-dependent
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (95%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Miglitol
  url: https://en.wikipedia.org/w/index.php?title=Miglitol&oldid=1357728290
  revision: 1357728290
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Miglitol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `miglitol-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

An alpha-glucosidase inhibitor that, unlike acarbose, is systemically absorbed but excreted unchanged by the kidney. Same intestinal mechanism, different disposition and a slightly different tolerability profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Miglitol*](https://en.wikipedia.org/w/index.php?title=Miglitol&oldid=1357728290) (revision 1357728290, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Protein binding | 4 % | Negligible (<4.0%) |
| Bioavailability | - | Dose-dependent |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Renal (95%) |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
