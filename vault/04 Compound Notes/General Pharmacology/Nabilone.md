---
type: compound
schema-version: 2
compound-id: nabilone-compound
name: Nabilone
aliases: []
cluster: General Pharmacology
group: gi
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
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours, with metabolites around 35 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: similar to THC (±97%)
bioavailability:
  value: 20.0
  value-max: null
  notes: 20% after first-pass by the liver
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nabilone
  url: https://en.wikipedia.org/w/index.php?title=Nabilone&oldid=1368778690
  revision: 1368778690
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 83c7ac15-ece9-47de-b83c-d575544fa449
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=83c7ac15-ece9-47de-b83c-d575544fa449
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nabilone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nabilone-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Synthetic cannabinoid analogue for refractory chemotherapy-induced nausea, more potent and longer acting than dronabinol.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nabilone*](https://en.wikipedia.org/w/index.php?title=Nabilone&oldid=1368778690) (revision 1368778690, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours, with metabolites around 35 hours |
| Protein binding | - | similar to THC (±97%) |
| Bioavailability | 20 % | 20% after first-pass by the liver |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 83c7ac15…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=83c7ac15-ece9-47de-b83c-d575544fa449), label version 20210119. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2, 35)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
