---
type: compound
schema-version: 2
compound-id: clomipramine-compound
name: Clomipramine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Serotonin transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL415
chembl-max-phase: 4
half-life:
  value: 19.0
  value-max: 37.0
  unit: h
  notes: 'CMI: 19–37 hours; DCMI: 54–77 hours'
protein-binding:
  value: 96.0
  value-max: 98.0
  unit: percent
  notes: 96–98%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (51–60%); Feces (24–32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Clomipramine
  url: https://en.wikipedia.org/w/index.php?title=Clomipramine&oldid=1374798625
  revision: 1374798625
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Clomipramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clomipramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL415](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL415/) · max phase 4

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL415).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clomipramine*](https://en.wikipedia.org/w/index.php?title=Clomipramine&oldid=1374798625) (revision 1374798625, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 19–37 h | CMI: 19–37 hours; DCMI: 54–77 hours |
| Protein binding | 96–98 % | 96–98% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | Liver (CYP2D6) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylclomipramine |
| Excretion | - | Kidney (51–60%); Feces (24–32%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
