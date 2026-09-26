---
type: compound
schema-version: 2
compound-id: itopride-compound
name: Itopride
aliases: []
cluster: General Pharmacology
group: gi
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
  value: 0.3
  value-max: null
  unit: h
  notes: 5.7±0.3 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 60.0
  value-max: null
  notes: ~60% (Tmax = 35±5 min)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.041
  notes: Renal (3.7–4.1% as unchanged itopride, 75.4–89.4% as itopride-N-oxide)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive hepatic (FMO1 and FMO3), primarily N-oxidation
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Itopride
  url: https://en.wikipedia.org/w/index.php?title=Itopride&oldid=1370506520
  revision: 1370506520
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Itopride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `itopride-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Prokinetic combining D2 antagonism with acetylcholinesterase inhibition, used in functional dyspepsia mainly in Asia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Itopride*](https://en.wikipedia.org/w/index.php?title=Itopride&oldid=1370506520) (revision 1370506520, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.3 h | 5.7±0.3 hours |
| Protein binding | 96 % | 96% |
| Bioavailability | 60 % | ~60% (Tmax = 35±5 min) |
| Metabolism | hepatic | Extensive hepatic (FMO1 and FMO3), primarily N-oxidation |
| Excretion | - · fe 0.041 | Renal (3.7–4.1% as unchanged itopride, 75.4–89.4% as itopride-N-oxide) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
