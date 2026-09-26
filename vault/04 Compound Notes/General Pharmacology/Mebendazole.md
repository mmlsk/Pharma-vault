---
type: compound
schema-version: 2
compound-id: mebendazole-compound
name: Mebendazole
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
  value: 3.0
  value-max: 6.0
  unit: h
  notes: 3–6 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 2.0
  value-max: 10.0
  notes: 2–10%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces, urine (5–10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive liver
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
  title: Mebendazole
  url: https://en.wikipedia.org/w/index.php?title=Mebendazole&oldid=1372981267
  revision: 1372981267
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Mebendazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mebendazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Benzimidazole for intestinal nematodes, poorly absorbed by design so it acts luminally with almost no systemic exposure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mebendazole*](https://en.wikipedia.org/w/index.php?title=Mebendazole&oldid=1372981267) (revision 1372981267, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–6 h | 3–6 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 2–10 % | 2–10% |
| Metabolism | hepatic | Extensive liver |
| Excretion | - | Feces, urine (5–10%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
