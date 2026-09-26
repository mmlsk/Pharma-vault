---
type: compound
schema-version: 2
compound-id: bedaquiline-compound
name: Bedaquiline
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
  value: null
  value-max: null
  unit: null
  notes: 5.5 months
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, by CYP3A4
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
  title: Bedaquiline
  url: https://en.wikipedia.org/w/index.php?title=Bedaquiline&oldid=1369611134
  revision: 1369611134
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Bedaquiline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bedaquiline-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Diarylquinoline that opened a genuinely new target in tuberculosis after forty years, inhibiting the mycobacterial ATP synthase.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bedaquiline*](https://en.wikipedia.org/w/index.php?title=Bedaquiline&oldid=1369611134) (revision 1369611134, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 5.5 months |
| Protein binding | 99.9 % | >99.9% |
| Metabolism | hepatic | Liver, by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | fecal |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
