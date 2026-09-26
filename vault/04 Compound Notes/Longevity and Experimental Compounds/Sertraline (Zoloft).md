---
type: compound
schema-version: 2
compound-id: sertraline-compound
name: Sertraline (Zoloft)
aliases:
- Sertraline
- Zoloft
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
  value: 26.0
  value-max: null
  unit: h
  notes: 'Sertraline: 26 hours (32 hours in females, 22 hours in males; range 13–45 hours); Desmethylsertraline: 62–104 hours'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: ~40–45%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily N-demethylation mainly by CYP2B6; also metabolism by CYP2C19, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sertraline
  url: https://en.wikipedia.org/w/index.php?title=Sertraline&oldid=1375702628
  revision: 1375702628
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sertraline (Zoloft)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sertraline-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Sertraline, Zoloft

## Source summary

SSRI widely used for depression, anxiety, PTSD, and OCD; gastrointestinal and sexual adverse effects are common.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sertraline*](https://en.wikipedia.org/w/index.php?title=Sertraline&oldid=1375702628) (revision 1375702628, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26 h | Sertraline: 26 hours (32 hours in females, 22 hours in males; range 13–45 hours); Desmethylsertraline: 62–104 hours |
| Bioavailability | 40–45 % | ~40–45% |
| Metabolism | hepatic | Liver (primarily N-demethylation mainly by CYP2B6; also metabolism by CYP2C19, others) |
| CYP (metabolised by) | CYP2B6, CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylsertraline; Others (e.g., hydroxylated metabolites, glucuronide conjugates) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
