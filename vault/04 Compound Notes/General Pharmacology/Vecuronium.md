---
type: compound
schema-version: 2
compound-id: vecuronium-compound
name: Vecuronium
aliases: []
cluster: General Pharmacology
group: analgesia
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
  value: 51.0
  value-max: 80.0
  unit: min
  notes: 51–80 minutes (longer with kidney failure)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.3
  notes: Fecal (40–75%) and kidney (30% as unchanged drug and metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver 30%
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Vecuronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Vecuronium_bromide&oldid=1338335222
  revision: 1338335222
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vecuronium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vecuronium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Intermediate-acting steroidal relaxant with minimal cardiovascular effect, whose active metabolite accumulates in renal failure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vecuronium bromide*](https://en.wikipedia.org/w/index.php?title=Vecuronium_bromide&oldid=1338335222) (revision 1338335222, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 51–80 min | 51–80 minutes (longer with kidney failure) |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | liver 30% |
| Excretion | mainly non-renal · fe 0.3 | Fecal (40–75%) and kidney (30% as unchanged drug and metabolites) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
