---
type: compound
schema-version: 2
compound-id: phentermine-compound
name: Phentermine
aliases: []
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
  value: 20.0
  value-max: 25.0
  unit: h
  notes: 20–25hours, urinary pH-dependent
protein-binding:
  value: 17.5
  value-max: null
  unit: percent
  notes: 17.5%
bioavailability:
  value: 100.0
  value-max: null
  notes: High (almost 100%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.85
  notes: Urine (62–85% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (6%)
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
  title: Phentermine
  url: https://en.wikipedia.org/w/index.php?title=Phentermine&oldid=1374263603
  revision: 1374263603
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Phentermine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phentermine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

FDA-approved sympathomimetic appetite suppressant, most often prescribed combined with topiramate (Qsymia); the CONQUER trial found real, substantial weight loss and metabolic risk-factor improvement in a large randomized trial.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phentermine*](https://en.wikipedia.org/w/index.php?title=Phentermine&oldid=1374263603) (revision 1374263603, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–25 h | 20–25hours, urinary pH-dependent |
| Protein binding | 17.5 % | 17.5% |
| Bioavailability | 100 % | High (almost 100%) |
| Metabolism | - | Minimal (6%) |
| Excretion | mainly urinary · fe 0.85 | Urine (62–85% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
