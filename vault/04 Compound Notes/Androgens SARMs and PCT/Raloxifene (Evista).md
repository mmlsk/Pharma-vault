---
type: compound
schema-version: 2
compound-id: raloxifene-compound
name: Raloxifene (Evista)
aliases:
- Raloxifene
- Evista
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
  value: 28.0
  value-max: null
  unit: h
  notes: 'Single-dose: 28 hours; Multi-dose: 33 hours'
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: '>95%'
bioavailability:
  value: 2.0
  value-max: null
  notes: 2%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (glucuro-; nidation); CYP450 system not involved
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
  title: Raloxifene
  url: https://en.wikipedia.org/w/index.php?title=Raloxifene&oldid=1328958249
  revision: 1328958249
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Raloxifene (Evista)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `raloxifene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Raloxifene, Evista

## Source summary

Selective estrogen receptor modulator (SERM) that mimics estrogen's bone-protective effect without stimulating breast or uterine tissue, used for osteoporosis.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Raloxifene*](https://en.wikipedia.org/w/index.php?title=Raloxifene&oldid=1328958249) (revision 1328958249, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 28 h | Single-dose: 28 hours; Multi-dose: 33 hours |
| Protein binding | 95 % | >95% |
| Bioavailability | 2 % | 2% |
| Metabolism | hepatic | Liver, intestines (glucuro-; nidation); CYP450 system not involved |
| Excretion | mainly non-renal | Feces |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
