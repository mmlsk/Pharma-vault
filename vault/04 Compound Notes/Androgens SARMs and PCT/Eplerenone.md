---
type: compound
schema-version: 2
compound-id: eplerenone-compound
name: Eplerenone
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
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 4–6 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: ~50% (33–60%) (primarily to α1-acid glycoprotein)
bioavailability:
  value: 70.0
  value-max: null
  notes: ~70%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (67%), feces (32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Eplerenone
  url: https://en.wikipedia.org/w/index.php?title=Eplerenone&oldid=1375993454
  revision: 1375993454
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Eplerenone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eplerenone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

More selective mineralocorticoid receptor antagonist than spironolactone, developed specifically to avoid spironolactone's antiandrogenic side effects (gynecomastia, menstrual disturbance) while retaining its blood-pressure/potassium-sparing benefits.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eplerenone*](https://en.wikipedia.org/w/index.php?title=Eplerenone&oldid=1375993454) (revision 1375993454, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | 4–6 hours |
| Protein binding | 50 % | ~50% (33–60%) (primarily to α1-acid glycoprotein) |
| Bioavailability | 70 % | ~70% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 6β-OH-EPL, 6β,21-OH-EPL, 21-OH-EPL, 3α,6β-OH-EPL (All inactive) |
| Excretion | mainly urinary | Urine (67%), feces (32%) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
