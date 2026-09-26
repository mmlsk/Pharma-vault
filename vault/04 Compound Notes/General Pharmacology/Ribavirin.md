---
type: compound
schema-version: 2
compound-id: ribavirin-compound
name: Ribavirin
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
  value: 298.0
  value-max: null
  unit: h
  notes: 298 hours (multiple dose); 43.6 hours (single dose)
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0%
bioavailability:
  value: 64.0
  value-max: null
  notes: 64%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (61%), faeces (12%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver and intracellularly
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
  title: Ribavirin
  url: https://en.wikipedia.org/w/index.php?title=Ribavirin&oldid=1359690341
  revision: 1359690341
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ribavirin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ribavirin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Old broad-spectrum nucleoside with several proposed mechanisms, now mainly a hepatitis C adjunct and a treatment for viral haemorrhagic fever.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ribavirin*](https://en.wikipedia.org/w/index.php?title=Ribavirin&oldid=1359690341) (revision 1359690341, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 298 h | 298 hours (multiple dose); 43.6 hours (single dose) |
| Protein binding | 0 % | 0% |
| Bioavailability | 64 % | 64% |
| Metabolism | hepatic | liver and intracellularly |
| Excretion | mainly urinary | Urine (61%), faeces (12%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
