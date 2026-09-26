---
type: compound
schema-version: 2
compound-id: ertapenem-compound
name: Ertapenem
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
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: 85.0
  value-max: 95.0
  unit: percent
  notes: Inversely proportional to concentration; 85 to 95%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% (intramuscular)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%) and fecal (10%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydrolysis of beta-lactam ring, CYP not involved
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
  title: Ertapenem
  url: https://en.wikipedia.org/w/index.php?title=Ertapenem&oldid=1329079783
  revision: 1329079783
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ertapenem

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ertapenem-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Once-daily carbapenem lacking antipseudomonal and enterococcal activity, which is exactly why it is used for community ESBL infection without driving Pseudomonas resistance.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ertapenem*](https://en.wikipedia.org/w/index.php?title=Ertapenem&oldid=1329079783) (revision 1329079783, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Protein binding | 85–95 % | Inversely proportional to concentration; 85 to 95% |
| Bioavailability | 90 % | 90% (intramuscular) |
| Metabolism | hepatic | Hydrolysis of beta-lactam ring, CYP not involved |
| Excretion | mainly urinary | Kidney (80%) and fecal (10%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
