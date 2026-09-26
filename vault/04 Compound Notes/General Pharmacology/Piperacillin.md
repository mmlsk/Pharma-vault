---
type: compound
schema-version: 2
compound-id: piperacillin-compound
name: Piperacillin
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value: 36.0
  value-max: 72.0
  unit: min
  notes: 36–72 minutes
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: 30%
bioavailability:
  value: 0.0
  value-max: null
  notes: 0% oral
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.8
  notes: 20% in bile, 80% unchanged in urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Largely not metabolized
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Piperacillin
  url: https://en.wikipedia.org/w/index.php?title=Piperacillin&oldid=1289430734
  revision: 1289430734
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Piperacillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `piperacillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Ureidopenicillin with antipseudomonal activity, used almost exclusively combined with tazobactam. A mainstay of empirical therapy for hospital-acquired sepsis and neutropenic fever.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Piperacillin*](https://en.wikipedia.org/w/index.php?title=Piperacillin&oldid=1289430734) (revision 1289430734, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36–72 min | 36–72 minutes |
| Protein binding | 30 % | 30% |
| Bioavailability | 0 % | 0% oral |
| Metabolism | - | Largely not metabolized |
| Excretion | mainly urinary · fe 0.8 | 20% in bile, 80% unchanged in urine |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
