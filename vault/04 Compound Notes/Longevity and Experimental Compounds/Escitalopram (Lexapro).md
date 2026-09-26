---
type: compound
schema-version: 2
compound-id: escitalopram-compound
name: Escitalopram (Lexapro)
aliases:
- Escitalopram
- Lexapro
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
  value: 27.0
  value-max: 32.0
  unit: h
  notes: ~27–32 hours
protein-binding:
  value: 55.0
  value-max: 56.0
  unit: percent
  notes: ~55–56% (low)
bioavailability:
  value: 80.0
  value-max: null
  notes: ~80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.1
  notes: Urine (major; 8–10% unchanged), feces (minor)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19, CYP3A4, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Escitalopram
  url: https://en.wikipedia.org/w/index.php?title=Escitalopram&oldid=1373241194
  revision: 1373241194
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Escitalopram (Lexapro)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `escitalopram-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Escitalopram, Lexapro

## Source summary

Selective SSRI for depression and generalized anxiety; QT, sexual, withdrawal, and serotonin-syndrome considerations remain.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Escitalopram*](https://en.wikipedia.org/w/index.php?title=Escitalopram&oldid=1373241194) (revision 1373241194, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27–32 h | ~27–32 hours |
| Protein binding | 55–56 % | ~55–56% (low) |
| Bioavailability | 80 % | ~80% |
| Metabolism | hepatic | Liver (CYP2C19, CYP3A4, CYP2D6) |
| CYP (metabolised by) | CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Desmethylcitalopram; • Didesmethylcitalopram |
| Excretion | - · fe 0.1 | Urine (major; 8–10% unchanged), feces (minor) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
