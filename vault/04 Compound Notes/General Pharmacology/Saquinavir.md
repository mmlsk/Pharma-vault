---
type: compound
schema-version: 2
compound-id: saquinavir-compound
name: Saquinavir
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
  value: 9.0
  value-max: 15.0
  unit: h
  notes: 9–15 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 4.0
  value-max: null
  notes: ~4% (without ritonavir boosting)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: feces (81%) and urine (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mainly by CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Saquinavir
  url: https://en.wikipedia.org/w/index.php?title=Saquinavir&oldid=1335536263
  revision: 1335536263
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Saquinavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `saquinavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The first HIV protease inhibitor licensed, in 1995, and the drug that made combination antiretroviral therapy work. Poor bioavailability and QT effects retired it.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Saquinavir*](https://en.wikipedia.org/w/index.php?title=Saquinavir&oldid=1335536263) (revision 1335536263, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–15 h | 9–15 hours |
| Protein binding | 98 % | 98% |
| Bioavailability | 4 % | ~4% (without ritonavir boosting) |
| Metabolism | hepatic | Liver, mainly by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | feces (81%) and urine (3%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
