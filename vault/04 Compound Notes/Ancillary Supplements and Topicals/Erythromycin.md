---
type: compound
schema-version: 2
compound-id: erythromycin-compound
name: Erythromycin
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
  value-max: null
  unit: h
  notes: 1.5 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: 30.0
  value-max: null
  notes: Depends on the ester type; between 30% and 65%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (under 5% excreted unchanged)
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
  title: Erythromycin
  url: https://en.wikipedia.org/w/index.php?title=Erythromycin&oldid=1375637318
  revision: 1375637318
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Erythromycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `erythromycin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits bacterial protein synthesis at the ribosome; spectrum, resistance, and toxicity are agent-specific.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Erythromycin*](https://en.wikipedia.org/w/index.php?title=Erythromycin&oldid=1375637318) (revision 1375637318, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5 h | 1.5 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | 30 % | Depends on the ester type; between 30% and 65% |
| Metabolism | hepatic | Liver (under 5% excreted unchanged) |
| Excretion | mainly non-renal | Bile |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
