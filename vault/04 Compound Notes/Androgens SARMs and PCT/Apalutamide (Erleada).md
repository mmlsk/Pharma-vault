---
type: compound
schema-version: 2
compound-id: apalutamide-compound
name: Apalutamide (Erleada)
aliases:
- Apalutamide
- Erleada
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
  value: 3.0
  value-max: 4.0
  unit: d
  notes: 'Apalutamide: 3–4 days (at steady-state)'
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 'Apalutamide: 96%; NDMA: 95%'
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 65%; Feces: 24%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8, CYP3A4)
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
  title: Apalutamide
  url: https://en.wikipedia.org/w/index.php?title=Apalutamide&oldid=1370134765
  revision: 1370134765
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Apalutamide (Erleada)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Apalutamide, Erleada

## Source summary

Second-generation androgen receptor antagonist; blocks nuclear translocation as well as binding.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apalutamide*](https://en.wikipedia.org/w/index.php?title=Apalutamide&oldid=1370134765) (revision 1370134765, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 d | Apalutamide: 3–4 days (at steady-state) |
| Protein binding | 96 % | Apalutamide: 96%; NDMA: 95% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (CYP2C8, CYP3A4) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • NDMA |
| Excretion | mainly urinary | Urine: 65%; Feces: 24% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
