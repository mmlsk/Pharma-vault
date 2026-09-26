---
type: compound
schema-version: 2
compound-id: agomelatine-compound
name: Agomelatine (Valdoxan)
aliases:
- Agomelatine
- Valdoxan
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
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 1.0
  value-max: null
  notes: ~1%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%, mostly as metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (90% CYP1A2 and 10% CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Agomelatine
  url: https://en.wikipedia.org/w/index.php?title=Agomelatine&oldid=1366468764
  revision: 1366468764
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Agomelatine (Valdoxan)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `agomelatine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Agomelatine, Valdoxan

## Source summary

Melatonin-receptor agonist and 5-HT2C antagonist antidepressant used outside the US; liver monitoring is required.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Agomelatine*](https://en.wikipedia.org/w/index.php?title=Agomelatine&oldid=1366468764) (revision 1366468764, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 1 % | ~1% |
| Metabolism | hepatic | Liver (90% CYP1A2 and 10% CYP2C9) |
| CYP (metabolised by) | CYP1A2, CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (80%, mostly as metabolites) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
