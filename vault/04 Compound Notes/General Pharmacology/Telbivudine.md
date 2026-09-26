---
type: compound
schema-version: 2
compound-id: telbivudine-compound
name: Telbivudine
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
  value: 40.0
  value-max: 49.0
  unit: h
  notes: 40 to 49 hours (terminal phase)
protein-binding:
  value: 3.3
  value-max: null
  unit: percent
  notes: Low (3.3% in vitro)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Telbivudine
  url: https://en.wikipedia.org/w/index.php?title=Telbivudine&oldid=1346950187
  revision: 1346950187
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Telbivudine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `telbivudine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Thymidine analogue for hepatitis B, withdrawn in many markets after myopathy and neuropathy signals and a low resistance barrier.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Telbivudine*](https://en.wikipedia.org/w/index.php?title=Telbivudine&oldid=1346950187) (revision 1346950187, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–49 h | 40 to 49 hours (terminal phase) |
| Protein binding | 3.3 % | Low (3.3% in vitro) |
| Metabolism | - | Nil |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
