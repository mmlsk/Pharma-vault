---
type: compound
schema-version: 2
compound-id: enzalutamide-compound
name: Enzalutamide
aliases: []
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
  value: 5.8
  value-max: null
  unit: d
  notes: 'Enzalutamide: 5.8 days (range 2.8–10.2 days); NDME: 7.8–8.6 days'
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: 'Enzalutamide: 97–98% (primarily to albumin); NDME: 95%'
bioavailability:
  value: 89.7
  value-max: null
  notes: 'Rats: 89.7%; Humans: unknown (but at least 84.6% based on recovery from excretion)'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 71.0%; Bile: 13.6%; Feces: 0.39%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily CYP2C8 and CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Enzalutamide
  url: https://en.wikipedia.org/w/index.php?title=Enzalutamide&oldid=1370575250
  revision: 1370575250
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Enzalutamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enzalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

Nonsteroidal androgen receptor antagonist approved for prostate cancer; blocks androgen binding, nuclear translocation, and DNA binding at the receptor.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enzalutamide*](https://en.wikipedia.org/w/index.php?title=Enzalutamide&oldid=1370575250) (revision 1370575250, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8 d | Enzalutamide: 5.8 days (range 2.8–10.2 days); NDME: 7.8–8.6 days |
| Protein binding | 97–98 % | Enzalutamide: 97–98% (primarily to albumin); NDME: 95% |
| Bioavailability | 89.7 % | Rats: 89.7%; Humans: unknown (but at least 84.6% based on recovery from excretion) |
| Metabolism | hepatic | Liver (primarily CYP2C8 and CYP3A4) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • NDME (active); • Carboxylic acid derivative metabolite (inactive) |
| Excretion | mainly urinary | Urine: 71.0%; Bile: 13.6%; Feces: 0.39% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
