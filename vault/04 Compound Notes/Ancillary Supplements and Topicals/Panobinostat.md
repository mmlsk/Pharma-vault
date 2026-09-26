---
type: compound
schema-version: 2
compound-id: panobinostat-compound
name: Panobinostat
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
  value: 37.0
  value-max: null
  unit: h
  notes: 37 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 21.0
  value-max: null
  notes: 21%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Fecal (44–77%), renal (29–51%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A (40%), CYP2D6, CYP2C19
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Panobinostat
  url: https://en.wikipedia.org/w/index.php?title=Panobinostat&oldid=1368886946
  revision: 1368886946
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Panobinostat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `panobinostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Potent pan-HDAC inhibitor used in myeloma with substantial toxicity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Panobinostat*](https://en.wikipedia.org/w/index.php?title=Panobinostat&oldid=1368886946) (revision 1368886946, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 37 h | 37 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 21 % | 21% |
| Metabolism | hepatic | CYP3A (40%), CYP2D6, CYP2C19 |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Fecal (44–77%), renal (29–51%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
