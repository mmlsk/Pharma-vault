---
type: compound
schema-version: 2
compound-id: tirzepatide-compound
name: Mounjaro/Zepbound (Tirzepatide)
aliases:
- Mounjaro/Zepbound
- Tirzepatide
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
  value: 5.0
  value-max: null
  unit: d
  notes: 5 days
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Albumin
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Proteolytic cleavage, β-oxidation of fatty diacid section and amide hydrolysis
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
  title: Tirzepatide
  url: https://en.wikipedia.org/w/index.php?title=Tirzepatide&oldid=1373755314
  revision: 1373755314
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Mounjaro/Zepbound (Tirzepatide)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tirzepatide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Mounjaro/Zepbound, Tirzepatide

## Source summary

Dual GIP/GLP-1 receptor agonist with stronger weight-loss effect than GLP-1-only drugs.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tirzepatide*](https://en.wikipedia.org/w/index.php?title=Tirzepatide&oldid=1373755314) (revision 1373755314, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 d | 5 days |
| Protein binding | - | Albumin |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | Proteolytic cleavage, β-oxidation of fatty diacid section and amide hydrolysis |
| Excretion | - | Urine and feces |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
