---
type: compound
schema-version: 2
compound-id: nilutamide-compound
name: Nilutamide (Nilandron)
aliases:
- Nilutamide
- Nilandron
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
  value: 56.0
  value-max: null
  unit: h
  notes: 'Mean: 56 hours (~2 days); Range: 23–87 hours'
protein-binding:
  value: 80.0
  value-max: 84.0
  unit: percent
  notes: 80–84%
bioavailability:
  value: null
  value-max: null
  notes: Good
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 62%; Feces: <10%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19, FMO)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Nilutamide
  url: https://en.wikipedia.org/w/index.php?title=Nilutamide&oldid=1353660792
  revision: 1353660792
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Nilutamide (Nilandron)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nilutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Nilutamide, Nilandron

## Source summary

First-generation androgen receptor antagonist with two side effects unique in its class.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nilutamide*](https://en.wikipedia.org/w/index.php?title=Nilutamide&oldid=1353660792) (revision 1353660792, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 56 h | Mean: 56 hours (~2 days); Range: 23–87 hours |
| Protein binding | 80–84 % | 80–84% |
| Bioavailability | - | Good |
| Metabolism | hepatic | Liver (CYP2C19, FMO) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | At least 5, some active |
| Excretion | mainly urinary | Urine: 62%; Feces: <10% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
