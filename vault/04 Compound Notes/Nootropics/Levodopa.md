---
type: compound
schema-version: 2
compound-id: levodopa-compound
name: Levodopa
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
  value: 0.75
  value-max: 1.5
  unit: h
  notes: 0.75–1.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 30.0
  value-max: null
  notes: 30%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal 70–80%
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Aromatic--amino-acid decarboxylase
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
  title: Levodopa
  url: https://en.wikipedia.org/w/index.php?title=Levodopa&oldid=1375811327
  revision: 1375811327
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Levodopa

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levodopa-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

The dopamine precursor that crosses the blood-brain barrier where dopamine itself cannot. Still the most effective symptomatic treatment for Parkinson disease more than fifty years on, and always co-formulated with a peripheral decarboxylase inhibitor.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levodopa*](https://en.wikipedia.org/w/index.php?title=Levodopa&oldid=1375811327) (revision 1375811327, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.75–1.5 h | 0.75–1.5 hours |
| Bioavailability | 30 % | 30% |
| Metabolism | - | Aromatic--amino-acid decarboxylase |
| Metabolites | - | • Dopamine |
| Excretion | mainly urinary | Renal 70–80% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
