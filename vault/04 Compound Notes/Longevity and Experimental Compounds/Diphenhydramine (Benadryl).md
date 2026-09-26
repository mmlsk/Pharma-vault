---
type: compound
schema-version: 2
compound-id: diphenhydramine-compound
name: Diphenhydramine (Benadryl)
aliases:
- Diphenhydramine
- Benadryl
cluster: Longevity and Experimental Compounds
group: longevity
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
  value: 2.4
  value-max: 13.5
  unit: h
  notes: 'Range: 2.4–13.5hours'
protein-binding:
  value: 78.0
  value-max: 85.0
  unit: percent
  notes: 78-85%
bioavailability:
  value: 40.0
  value-max: 60.0
  notes: 40–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 94%; Feces: 6%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Diphenhydramine
  url: https://en.wikipedia.org/w/index.php?title=Diphenhydramine&oldid=1369453675
  revision: 1369453675
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Diphenhydramine (Benadryl)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diphenhydramine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Diphenhydramine, Benadryl

## Source summary

First-generation antihistamine widely used as an OTC sleep aid despite rapid tolerance, next-day impairment, and anticholinergic burden.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diphenhydramine*](https://en.wikipedia.org/w/index.php?title=Diphenhydramine&oldid=1369453675) (revision 1369453675, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4–13.5 h | Range: 2.4–13.5hours |
| Protein binding | 78–85 % | 78-85% |
| Bioavailability | 40–60 % | 40–60% |
| Metabolism | hepatic | Liver (CYP2D6, others) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyldiphenhydramine, N,N-Didesmethyldiphenhydramine, others |
| Excretion | mainly urinary | Urine: 94%; Feces: 6% |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
