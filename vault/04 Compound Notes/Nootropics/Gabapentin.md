---
type: compound
schema-version: 2
compound-id: gabapentin-compound
name: Gabapentin
aliases: []
cluster: Nootropics
group: neuropsych
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
  value-max: 7.0
  unit: h
  notes: 5 to 7 hours
protein-binding:
  value: 3.0
  value-max: null
  unit: percent
  notes: Less than 3%
bioavailability:
  value: 27.0
  value-max: 60.0
  notes: 27–60% (inversely proportional to dose; a high-fat meal also increases bioavailability)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not significantly metabolized
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Gabapentin
  url: https://en.wikipedia.org/w/index.php?title=Gabapentin&oldid=1375500408
  revision: 1375500408
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Gabapentin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `gabapentin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Alpha-2-delta ligand used far more for neuropathic pain than for epilepsy, with saturable absorption that caps its dose-response.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Gabapentin*](https://en.wikipedia.org/w/index.php?title=Gabapentin&oldid=1375500408) (revision 1375500408, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5 to 7 hours |
| Protein binding | 3 % | Less than 3% |
| Bioavailability | 27–60 % | 27–60% (inversely proportional to dose; a high-fat meal also increases bioavailability) |
| Metabolism | - | Not significantly metabolized |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
