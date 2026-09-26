---
type: compound
schema-version: 2
compound-id: flucytosine-compound
name: Flucytosine
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
  value: 2.4
  value-max: 4.8
  unit: h
  notes: 2.4 to 4.8 hours
protein-binding:
  value: 2.9
  value-max: 4.0
  unit: percent
  notes: 2.9 to 4%
bioavailability:
  value: 75.0
  value-max: 90.0
  notes: 75 to 90% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (90%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: minimal, in the GI tract
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
  title: Flucytosine
  url: https://en.wikipedia.org/w/index.php?title=Flucytosine&oldid=1364374893
  revision: 1364374893
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Flucytosine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flucytosine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Pyrimidine analogue used only in combination, because resistance develops rapidly when it is given alone. The partner in cryptococcal meningitis induction therapy.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flucytosine*](https://en.wikipedia.org/w/index.php?title=Flucytosine&oldid=1364374893) (revision 1364374893, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.4–4.8 h | 2.4 to 4.8 hours |
| Protein binding | 2.9–4 % | 2.9 to 4% |
| Bioavailability | 75–90 % | 75 to 90% (by mouth) |
| Metabolism | - | minimal, in the GI tract |
| Excretion | mainly urinary | kidney (90%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
