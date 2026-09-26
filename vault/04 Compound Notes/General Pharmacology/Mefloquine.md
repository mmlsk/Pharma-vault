---
type: compound
schema-version: 2
compound-id: mefloquine-compound
name: Mefloquine
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
  value: 2.0
  value-max: 4.0
  unit: wk
  notes: 2 to 4 weeks
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.09
  notes: Primarily bile and feces; urine (9% as unchanged drug, 4% as primary metabolite)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive liver; main metabolite is inactive
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
  title: Mefloquine
  url: https://en.wikipedia.org/w/index.php?title=Mefloquine&oldid=1374571427
  revision: 1374571427
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Mefloquine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mefloquine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Quinoline methanol for malaria prophylaxis in chloroquine-resistant areas, restricted by neuropsychiatric adverse effects.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mefloquine*](https://en.wikipedia.org/w/index.php?title=Mefloquine&oldid=1374571427) (revision 1374571427, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 wk | 2 to 4 weeks |
| Metabolism | hepatic | Extensive liver; main metabolite is inactive |
| Excretion | - · fe 0.09 | Primarily bile and feces; urine (9% as unchanged drug, 4% as primary metabolite) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
