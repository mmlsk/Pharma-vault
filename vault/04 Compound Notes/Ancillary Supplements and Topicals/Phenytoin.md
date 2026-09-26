---
type: compound
schema-version: 2
compound-id: phenytoin-compound
name: Phenytoin
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
  value: 10.0
  value-max: 22.0
  unit: h
  notes: 10–22 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 70.0
  value-max: 100.0
  notes: 70–100% (oral), 24.4% (rectal)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urinary (23–70%), bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Phenytoin
  url: https://en.wikipedia.org/w/index.php?title=Phenytoin&oldid=1371791164
  revision: 1371791164
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Phenytoin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenytoin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenytoin*](https://en.wikipedia.org/w/index.php?title=Phenytoin&oldid=1371791164) (revision 1371791164, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–22 h | 10–22 hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 70–100 % | 70–100% (oral), 24.4% (rectal) |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Urinary (23–70%), bile |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
