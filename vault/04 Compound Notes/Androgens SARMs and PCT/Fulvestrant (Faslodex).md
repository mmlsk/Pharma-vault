---
type: compound
schema-version: 2
compound-id: fulvestrant-compound
name: Fulvestrant (Faslodex)
aliases:
- Fulvestrant
- Faslodex
cluster: Androgens SARMs and PCT
group: pct
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
  value-max: 50.0
  unit: d
  notes: 'IM: 40–50 days'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: null
  value-max: null
  notes: Low
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation, conjugation (glucuronidation, sulfation)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Fulvestrant
  url: https://en.wikipedia.org/w/index.php?title=Fulvestrant&oldid=1368397620
  revision: 1368397620
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fulvestrant (Faslodex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fulvestrant-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Fulvestrant, Faslodex

## Source summary

Full estrogen receptor antagonist and degrader (not a partial agonist like SERMs), used for hormone-receptor-positive breast cancer after other anti-estrogen therapy fails.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fulvestrant*](https://en.wikipedia.org/w/index.php?title=Fulvestrant&oldid=1368397620) (revision 1368397620, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–50 d | IM: 40–50 days |
| Protein binding | 99 % | 99% |
| Bioavailability | - | Low |
| Metabolism | hepatic | Hydroxylation, conjugation (glucuronidation, sulfation) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
