---
type: compound
schema-version: 2
compound-id: alosetron-compound
name: Alosetron
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
  value: 1.5
  value-max: 1.7
  unit: h
  notes: 1.5–1.7 hours
protein-binding:
  value: 82.0
  value-max: null
  unit: percent
  notes: 82%
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 73%, feces 24%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (including CYP2C9, CYP3A4 and CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Alosetron
  url: https://en.wikipedia.org/w/index.php?title=Alosetron&oldid=1325952564
  revision: 1325952564
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Alosetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alosetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent; restricted prescribing for IBS-D.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alosetron*](https://en.wikipedia.org/w/index.php?title=Alosetron&oldid=1325952564) (revision 1325952564, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–1.7 h | 1.5–1.7 hours |
| Protein binding | 82 % | 82% |
| Bioavailability | 50–60 % | 50–60% |
| Metabolism | hepatic | Liver (including CYP2C9, CYP3A4 and CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney 73%, feces 24% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
