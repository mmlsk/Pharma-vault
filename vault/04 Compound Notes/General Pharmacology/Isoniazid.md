---
type: compound
schema-version: 2
compound-id: isoniazid-compound
name: Isoniazid
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
  value: 0.5
  value-max: 1.6
  unit: h
  notes: 0.5–1.6h (fast acetylators), 2-5h (slow acetylators)
protein-binding:
  value: 0.0
  value-max: 10.0
  unit: percent
  notes: Very low (0–10%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: urine (primarily), feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'liver; CYP450: 2C19, 3A4 inhibitor'
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
  title: Isoniazid
  url: https://en.wikipedia.org/w/index.php?title=Isoniazid&oldid=1373328078
  revision: 1373328078
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Isoniazid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `isoniazid-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Cornerstone of tuberculosis therapy, a prodrug activated by the mycobacterial catalase KatG. Hepatotoxicity and neuropathy are its two defining adverse effects.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Isoniazid*](https://en.wikipedia.org/w/index.php?title=Isoniazid&oldid=1373328078) (revision 1373328078, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.5–1.6 h | 0.5–1.6h (fast acetylators), 2-5h (slow acetylators) |
| Protein binding | 0–10 % | Very low (0–10%) |
| Metabolism | hepatic | liver; CYP450: 2C19, 3A4 inhibitor |
| Excretion | - | urine (primarily), feces |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
