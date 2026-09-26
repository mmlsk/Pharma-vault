---
type: compound
schema-version: 2
compound-id: rocuronium-compound
name: Rocuronium
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
  value: 66.0
  value-max: 80.0
  unit: min
  notes: 66–80 minutes
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: ~30%
bioavailability:
  value: null
  value-max: null
  notes: NA
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Unchanged, in bile and urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: some de-acetylation
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
  title: Rocuronium bromide
  url: https://en.wikipedia.org/w/index.php?title=Rocuronium_bromide&oldid=1329367204
  revision: 1329367204
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rocuronium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rocuronium-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Non-depolarising relaxant with an onset fast enough to replace suxamethonium for rapid sequence induction, especially now that sugammadex exists.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rocuronium bromide*](https://en.wikipedia.org/w/index.php?title=Rocuronium_bromide&oldid=1329367204) (revision 1329367204, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 66–80 min | 66–80 minutes |
| Protein binding | 30 % | ~30% |
| Bioavailability | - | NA |
| Metabolism | - | some de-acetylation |
| Excretion | - | Unchanged, in bile and urine |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
