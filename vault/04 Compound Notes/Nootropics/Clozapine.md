---
type: compound
schema-version: 2
compound-id: clozapine-compound
name: Clozapine
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
  value: 4.0
  value-max: 26.0
  unit: h
  notes: 4–26 hours (mean value 14.2 hours in steady state conditions)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 60.0
  value-max: 70.0
  notes: 60–70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: '80% in metabolized state: 30% biliary and 50% kidney'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, by several CYP isozymes mainly via CYP2D6
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
  title: Clozapine
  url: https://en.wikipedia.org/w/index.php?title=Clozapine&oldid=1374837470
  revision: 1374837470
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Clozapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clozapine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

The only antipsychotic with proven superiority in treatment-resistant schizophrenia, requiring mandatory blood monitoring for agranulocytosis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clozapine*](https://en.wikipedia.org/w/index.php?title=Clozapine&oldid=1374837470) (revision 1374837470, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–26 h | 4–26 hours (mean value 14.2 hours in steady state conditions) |
| Protein binding | 97 % | 97% |
| Bioavailability | 60–70 % | 60–70% |
| Metabolism | hepatic | Liver, by several CYP isozymes mainly via CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 80% in metabolized state: 30% biliary and 50% kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
