---
type: compound
schema-version: 2
compound-id: topiramate-compound
name: Topiramate (Topamax)
aliases:
- Topiramate
- Topamax
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
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 13.0
  value-max: 17.0
  unit: percent
  notes: 13–17%; 15–41%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (70–80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (20–30%)
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
  title: Topiramate
  url: https://en.wikipedia.org/w/index.php?title=Topiramate&oldid=1356289493
  revision: 1356289493
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Topiramate (Topamax)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `topiramate-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Topiramate, Topamax

## Source summary

Antiseizure drug that reduces appetite and weight, used alone off-label or with phentermine; cognitive slowing, kidney stones, and teratogenicity are key risks.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Topiramate*](https://en.wikipedia.org/w/index.php?title=Topiramate&oldid=1356289493) (revision 1356289493, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 13–17 % | 13–17%; 15–41% |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | Liver (20–30%) |
| Excretion | mainly urinary | Urine (70–80%) |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
