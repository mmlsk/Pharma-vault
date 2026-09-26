---
type: compound
schema-version: 2
compound-id: zileuton-compound
name: Zileuton
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Arachidonate 5-lipoxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL93
chembl-max-phase: 4
half-life:
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: null
  value-max: null
  notes: Not yet established
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP1A2, CYP2C9 and CYP3A4-mediated)
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
  title: Zileuton
  url: https://en.wikipedia.org/w/index.php?title=Zileuton&oldid=1336258545
  revision: 1336258545
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Zileuton

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zileuton-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL93](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL93/) · max phase 4

## Source summary

Arachidonate 5-lipoxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL93).

## Mechanism

Arachidonate 5-lipoxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zileuton*](https://en.wikipedia.org/w/index.php?title=Zileuton&oldid=1336258545) (revision 1336258545, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 93 % | 93% |
| Bioavailability | - | Not yet established |
| Metabolism | hepatic | Hepatic (CYP1A2, CYP2C9 and CYP3A4-mediated) |
| CYP (metabolised by) | CYP1A2, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
