---
type: compound
schema-version: 2
compound-id: sitagliptin-compound
name: Sitagliptin (Januvia)
aliases:
- Sitagliptin
- Januvia
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
  value: 8.0
  value-max: 14.0
  unit: h
  notes: 8 to 14 h
protein-binding:
  value: 38.0
  value-max: null
  unit: percent
  notes: 38%
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4- and CYP2C8-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sitagliptin
  url: https://en.wikipedia.org/w/index.php?title=Sitagliptin&oldid=1371791385
  revision: 1371791385
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sitagliptin (Januvia)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sitagliptin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sitagliptin, Januvia

## Source summary

The first DPP-4 inhibitor, a weight-neutral oral glucose-lowering drug with a large neutral outcomes trial behind it.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sitagliptin*](https://en.wikipedia.org/w/index.php?title=Sitagliptin&oldid=1371791385) (revision 1371791385, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–14 h | 8 to 14 h |
| Protein binding | 38 % | 38% |
| Bioavailability | 87 % | 87% |
| Metabolism | hepatic | Liver (CYP3A4- and CYP2C8-mediated) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (80%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
