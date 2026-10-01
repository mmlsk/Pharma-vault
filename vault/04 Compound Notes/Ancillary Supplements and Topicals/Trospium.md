---
type: compound
schema-version: 2
compound-id: trospium-compound
name: Trospium
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value-max: null
  unit: h
  notes: 20 hours
protein-binding:
  value: 50.0
  value-max: 85.0
  unit: percent
  notes: 50–85%
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
- group/ancillary
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Trospium chloride
  url: https://en.wikipedia.org/w/index.php?title=Trospium_chloride&oldid=1369672636
  revision: 1369672636
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7a2fea88-266d-4fc0-a476-66dc6effcff7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7a2fea88-266d-4fc0-a476-66dc6effcff7
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Trospium

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `trospium-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonises muscarinic receptors; peripheral selectivity determines how much dry mouth, constipation and central anticholinergic burden an agent carries; quaternary, poor CNS penetration.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Trospium chloride*](https://en.wikipedia.org/w/index.php?title=Trospium_chloride&oldid=1369672636) (revision 1369672636, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours |
| Protein binding | 50–85 % | 50–85% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7a2fea88…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7a2fea88-266d-4fc0-a476-66dc6effcff7), label version 20260903. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 18, 20, 33)
> - protein-binding: consistent (label values: 50, 85)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
