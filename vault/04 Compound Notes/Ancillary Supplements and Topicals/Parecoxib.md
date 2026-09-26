---
type: compound
schema-version: 2
compound-id: parecoxib-compound
name: Parecoxib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1206690
chembl-max-phase: 4
half-life:
  value: 22.0
  value-max: null
  unit: min
  notes: 22 minutes (parecoxib); 8 hours (valdecoxib)
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: 98%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (70%, metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver to valdecoxib and propionic acid; CYP extensively involved (mainly CYP3A4 and 2C9)
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
  title: Parecoxib
  url: https://en.wikipedia.org/w/index.php?title=Parecoxib&oldid=1370867901
  revision: 1370867901
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Parecoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `parecoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1206690](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1206690/) · max phase 4

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1206690).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Parecoxib*](https://en.wikipedia.org/w/index.php?title=Parecoxib&oldid=1370867901) (revision 1370867901, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 22 min | 22 minutes (parecoxib); 8 hours (valdecoxib) |
| Protein binding | 98 % | 98% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver to valdecoxib and propionic acid; CYP extensively involved (mainly CYP3A4 and 2C9) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (70%, metabolites) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
