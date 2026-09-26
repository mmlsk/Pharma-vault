---
type: compound
schema-version: 2
compound-id: darolutamide-compound
name: Darolutamide (Nubeqa)
aliases:
- Darolutamide
- Nubeqa
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
  value: 16.0
  value-max: 20.0
  unit: h
  notes: 16–20 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 'Darolutamide: 92%; Ketodarolutamide: 99.8%'
bioavailability:
  value: 30.0
  value-max: null
  notes: ≤30%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 63.4%; Feces: 32.4%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Dehydrogenation (CYP3A4), glucuronidation (UGT1A9, UGT1A1)
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
  title: Darolutamide
  url: https://en.wikipedia.org/w/index.php?title=Darolutamide&oldid=1369637716
  revision: 1369637716
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Darolutamide (Nubeqa)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `darolutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Darolutamide, Nubeqa

## Source summary

Androgen receptor antagonist built with a polar structure that limits how much crosses into the brain.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Darolutamide*](https://en.wikipedia.org/w/index.php?title=Darolutamide&oldid=1369637716) (revision 1369637716, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16–20 h | 16–20 hours |
| Protein binding | 92 % | Darolutamide: 92%; Ketodarolutamide: 99.8% |
| Bioavailability | 30 % | ≤30% |
| Metabolism | hepatic | Dehydrogenation (CYP3A4), glucuronidation (UGT1A9, UGT1A1) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Ketodarolutamide |
| Excretion | mainly urinary | Urine: 63.4%; Feces: 32.4% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
