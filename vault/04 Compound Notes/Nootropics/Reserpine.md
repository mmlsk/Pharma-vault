---
type: compound
schema-version: 2
compound-id: reserpine-compound
name: Reserpine
aliases: []
cluster: Nootropics
group: neuropsych
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
  value: 4.5
  value-max: null
  unit: h
  notes: phase 1 = 4.5h,; phase 2 = 271h, ; average = 33h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 62% feces / 8% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: gut/liver
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
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Reserpine
  url: https://en.wikipedia.org/w/index.php?title=Reserpine&oldid=1371358256
  revision: 1371358256
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Reserpine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `reserpine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Rauwolfia alkaloid, the first effective antihypertensive and the drug whose depressive effect founded the monoamine hypothesis of depression.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Reserpine*](https://en.wikipedia.org/w/index.php?title=Reserpine&oldid=1371358256) (revision 1371358256, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5 h | phase 1 = 4.5h,; phase 2 = 271h, ; average = 33h |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | gut/liver |
| Excretion | - | 62% feces / 8% urine |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
