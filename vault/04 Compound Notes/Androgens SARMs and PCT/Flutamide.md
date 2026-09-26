---
type: compound
schema-version: 2
compound-id: flutamide-compound
name: Flutamide
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
  value: 5.0
  value-max: 6.0
  unit: h
  notes: 'Flutamide: 5–6 hours; Hydroxyflutamide: 8–10 hours'
protein-binding:
  value: 94.0
  value-max: 96.0
  unit: percent
  notes: 'Flutamide: 94–96%; Hydroxyflutamide: 92–94%'
bioavailability:
  value: 90.0
  value-max: null
  notes: Complete (>90%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (mainly); Feces (4.2%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Flutamide
  url: https://en.wikipedia.org/w/index.php?title=Flutamide&oldid=1358397623
  revision: 1358397623
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Flutamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `flutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

Early nonsteroidal antiandrogen that blocks androgen receptor function; largely superseded by bicalutamide and enzalutamide due to hepatotoxicity risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Flutamide*](https://en.wikipedia.org/w/index.php?title=Flutamide&oldid=1358397623) (revision 1358397623, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–6 h | Flutamide: 5–6 hours; Hydroxyflutamide: 8–10 hours |
| Protein binding | 94–96 % | Flutamide: 94–96%; Hydroxyflutamide: 92–94% |
| Bioavailability | 90 % | Complete (>90%) |
| Metabolism | hepatic | Liver (CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxyflutamide |
| Excretion | - | Urine (mainly); Feces (4.2%) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
