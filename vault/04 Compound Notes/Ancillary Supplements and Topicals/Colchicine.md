---
type: compound
schema-version: 2
compound-id: colchicine-compound
name: Colchicine
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
  value: 26.6
  value-max: 31.2
  unit: h
  notes: 26.6-31.2 hours
protein-binding:
  value: 35.0
  value-max: 44.0
  unit: percent
  notes: 35-44%
bioavailability:
  value: 45.0
  value-max: null
  notes: 45%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (65%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Metabolism, partly by CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Colchicine
  url: https://en.wikipedia.org/w/index.php?title=Colchicine&oldid=1374505164
  revision: 1374505164
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Colchicine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `colchicine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Low-dose anti-inflammatory with a hard cardiovascular outcome trial behind it -- the only compound here targeting inflammation directly.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Colchicine*](https://en.wikipedia.org/w/index.php?title=Colchicine&oldid=1374505164) (revision 1374505164, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26.6–31.2 h | 26.6-31.2 hours |
| Protein binding | 35–44 % | 35-44% |
| Bioavailability | 45 % | 45% |
| Metabolism | hepatic | Metabolism, partly by CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (65%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
