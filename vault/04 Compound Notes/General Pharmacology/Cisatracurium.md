---
type: compound
schema-version: 2
compound-id: cisatracurium-compound
name: Cisatracurium
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
  value: 20.0
  value-max: 29.0
  unit: min
  notes: 20–29 minutes
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
  primary-route: null
  fraction-excreted-unchanged: 0.15
  notes: 10-15% unchanged
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 80% Hofmann degradation/ liver
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
  title: Cisatracurium besilate
  url: https://en.wikipedia.org/w/index.php?title=Cisatracurium_besilate&oldid=1329246828
  revision: 1329246828
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cisatracurium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cisatracurium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The single potent isomer of atracurium, retaining organ-independent elimination without the histamine release.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cisatracurium besilate*](https://en.wikipedia.org/w/index.php?title=Cisatracurium_besilate&oldid=1329246828) (revision 1329246828, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–29 min | 20–29 minutes |
| Bioavailability | 100 % | 100% (IV) |
| Metabolism | hepatic | 80% Hofmann degradation/ liver |
| Excretion | - · fe 0.15 | 10-15% unchanged |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
