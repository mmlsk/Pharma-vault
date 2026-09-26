---
type: compound
schema-version: 2
compound-id: entacapone-compound
name: Entacapone
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
  value: 0.4
  value-max: 0.7
  unit: h
  notes: 0.4–0.7 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98% (binds to serum albumin)
bioavailability:
  value: 35.0
  value-max: null
  notes: 35%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (90%), urine (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
  title: Entacapone
  url: https://en.wikipedia.org/w/index.php?title=Entacapone&oldid=1368193947
  revision: 1368193947
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Entacapone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `entacapone-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

A peripheral COMT inhibitor given with levodopa-carbidopa. It blocks the remaining route of peripheral levodopa loss once decarboxylase is already inhibited, extending each dose's on-time rather than raising its peak.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Entacapone*](https://en.wikipedia.org/w/index.php?title=Entacapone&oldid=1368193947) (revision 1368193947, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.4–0.7 h | 0.4–0.7 hours |
| Protein binding | 98 % | 98% (binds to serum albumin) |
| Bioavailability | 35 % | 35% |
| Metabolism | hepatic | Hepatic |
| Excretion | mainly non-renal | Feces (90%), urine (10%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
