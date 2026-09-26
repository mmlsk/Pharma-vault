---
type: compound
schema-version: 2
compound-id: pramlintide-compound
name: Pramlintide (Symlin)
aliases:
- Pramlintide
- Symlin
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
  value: 48.0
  value-max: null
  unit: min
  notes: ~48 minutes
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: ~60%
bioavailability:
  value: 30.0
  value-max: 40.0
  notes: 30 to 40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Renal
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
  title: Pramlintide
  url: https://en.wikipedia.org/w/index.php?title=Pramlintide&oldid=1357844855
  revision: 1357844855
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pramlintide (Symlin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pramlintide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Pramlintide, Symlin

## Source summary

Synthetic amylin analog used alongside insulin in diabetes, slows gastric emptying and increases satiety through amylin receptor signaling.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pramlintide*](https://en.wikipedia.org/w/index.php?title=Pramlintide&oldid=1357844855) (revision 1357844855, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 48 min | ~48 minutes |
| Protein binding | 60 % | ~60% |
| Bioavailability | 30–40 % | 30 to 40% |
| Metabolism | - | Renal |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
