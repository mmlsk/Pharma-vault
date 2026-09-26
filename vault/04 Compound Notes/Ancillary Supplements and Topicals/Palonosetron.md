---
type: compound
schema-version: 2
compound-id: palonosetron-compound
name: Palonosetron
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
  value: 40.0
  value-max: 50.0
  unit: h
  notes: Approximately 40–50 hours
protein-binding:
  value: 62.0
  value-max: null
  unit: percent
  notes: 62%
bioavailability:
  value: 97.0
  value-max: null
  notes: 97% (oral)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.49
  notes: Kidney, 80% (of which 49% unchanged); fecal (5 to 8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, 50% (mostly CYP2D6-mediated, CYP3A4 and CYP1A2 also involved)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Palonosetron
  url: https://en.wikipedia.org/w/index.php?title=Palonosetron&oldid=1333743869
  revision: 1333743869
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Palonosetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `palonosetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Palonosetron*](https://en.wikipedia.org/w/index.php?title=Palonosetron&oldid=1333743869) (revision 1333743869, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–50 h | Approximately 40–50 hours |
| Protein binding | 62 % | 62% |
| Bioavailability | 97 % | 97% (oral) |
| Metabolism | hepatic | Liver, 50% (mostly CYP2D6-mediated, CYP3A4 and CYP1A2 also involved) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.49 | Kidney, 80% (of which 49% unchanged); fecal (5 to 8%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
