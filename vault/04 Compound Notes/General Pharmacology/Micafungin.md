---
type: compound
schema-version: 2
compound-id: micafungin-compound
name: Micafungin
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
  value: 11.0
  value-max: 17.0
  unit: h
  notes: 11–17 hours
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 40% feces, <15% urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Via catechol-O-methyltransferase pathway
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Micafungin
  url: https://en.wikipedia.org/w/index.php?title=Micafungin&oldid=1338331511
  revision: 1338331511
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 230fcff4-ad4b-ea25-e063-6394a90a1fab
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=230fcff4-ad4b-ea25-e063-6394a90a1fab
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: consistent
---

# Micafungin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `micafungin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Echinocandin with no meaningful renal clearance and few drug interactions, widely used in critical care and in neonates.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Micafungin*](https://en.wikipedia.org/w/index.php?title=Micafungin&oldid=1338331511) (revision 1338331511, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11–17 h | 11–17 hours |
| Protein binding | 99.8 % | 99.8% |
| Metabolism | - | Via catechol-O-methyltransferase pathway |
| Excretion | - | 40% feces, <15% urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 230fcff4…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=230fcff4-ad4b-ea25-e063-6394a90a1fab), label version 20260414. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: consistent (label values: 99)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
