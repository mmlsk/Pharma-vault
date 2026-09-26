---
type: compound
schema-version: 2
compound-id: cefiderocol-compound
name: Cefiderocol
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
  value: 2.8
  value-max: null
  unit: h
  notes: 2.8 hours
protein-binding:
  value: 56.0
  value-max: 58.0
  unit: percent
  notes: 56–58%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.7
  notes: mainly kidney (60–70% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Cefiderocol
  url: https://en.wikipedia.org/w/index.php?title=Cefiderocol&oldid=1366709885
  revision: 1366709885
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cefiderocol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cefiderocol-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Siderophore cephalosporin that hijacks bacterial iron transport to cross the outer membrane, reserved for carbapenem-resistant gram-negative infection.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cefiderocol*](https://en.wikipedia.org/w/index.php?title=Cefiderocol&oldid=1366709885) (revision 1366709885, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.8 h | 2.8 hours |
| Protein binding | 56–58 % | 56–58% |
| Excretion | - · fe 0.7 | mainly kidney (60–70% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
