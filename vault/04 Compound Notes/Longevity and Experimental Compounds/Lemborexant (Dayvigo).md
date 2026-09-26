---
type: compound
schema-version: 2
compound-id: lemborexant-compound
name: Lemborexant (Dayvigo)
aliases:
- Lemborexant
- Dayvigo
cluster: Longevity and Experimental Compounds
group: longevity
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
  value: 17.0
  value-max: 19.0
  unit: h
  notes: 17–19 hours or 55 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: 87.0
  value-max: null
  notes: Good (≥87%)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 57.4%; Urine: 29.1%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (major: CYP3A4, minor: CYP3A5)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Lemborexant
  url: https://en.wikipedia.org/w/index.php?title=Lemborexant&oldid=1372968166
  revision: 1372968166
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Lemborexant (Dayvigo)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lemborexant-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Lemborexant, Dayvigo

## Source summary

Dual orexin-receptor antagonist for sleep-onset and maintenance insomnia, with next-day impairment and CNS-depressant interaction concerns.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lemborexant*](https://en.wikipedia.org/w/index.php?title=Lemborexant&oldid=1372968166) (revision 1372968166, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–19 h | 17–19 hours or 55 hours |
| Protein binding | 94 % | 94% |
| Bioavailability | 87 % | Good (≥87%) |
| Metabolism | hepatic | Liver (major: CYP3A4, minor: CYP3A5) |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | M10 |
| Excretion | mainly non-renal | Feces: 57.4%; Urine: 29.1% |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
