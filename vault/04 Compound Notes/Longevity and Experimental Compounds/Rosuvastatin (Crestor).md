---
type: compound
schema-version: 2
compound-id: rosuvastatin-compound
name: Rosuvastatin (Crestor)
aliases:
- Rosuvastatin
- Crestor
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
  value: 19.0
  value-max: null
  unit: h
  notes: 19 hours
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 88%
bioavailability:
  value: 20.0
  value-max: null
  notes: 20%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (90%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2C9 (major) and CYP2C19-mediated; ~10% metabolized'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rosuvastatin
  url: https://en.wikipedia.org/w/index.php?title=Rosuvastatin&oldid=1365389534
  revision: 1365389534
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rosuvastatin (Crestor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rosuvastatin-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Rosuvastatin, Crestor

## Source summary

High-potency statin, effective at lowering LDL cholesterol and cardiovascular event risk even at low starting LDL levels.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rosuvastatin*](https://en.wikipedia.org/w/index.php?title=Rosuvastatin&oldid=1365389534) (revision 1365389534, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19 h | 19 hours |
| Protein binding | 88 % | 88% |
| Bioavailability | 20 % | 20% |
| Metabolism | hepatic | Liver: CYP2C9 (major) and CYP2C19-mediated; ~10% metabolized |
| CYP (metabolised by) | CYP2C19, CYP2C9 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethyl rosuvastatin (major; 1/6–1/9 of rosuvastatin activity) |
| Excretion | mainly non-renal | Feces (90%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
