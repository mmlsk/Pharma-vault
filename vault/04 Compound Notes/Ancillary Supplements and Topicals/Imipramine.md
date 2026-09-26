---
type: compound
schema-version: 2
compound-id: imipramine-compound
name: Imipramine
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
chembl-id: CHEMBL11
chembl-max-phase: 4
half-life:
  value: 20.0
  value-max: null
  unit: h
  notes: 20 hours
protein-binding:
  value: 86.0
  value-max: null
  unit: percent
  notes: 86%
bioavailability:
  value: 94.0
  value-max: 96.0
  notes: 94–96%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (80%), fecal (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2, CYP2C19, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Imipramine
  url: https://en.wikipedia.org/w/index.php?title=Imipramine&oldid=1371037707
  revision: 1371037707
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Imipramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `imipramine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL11](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL11/) · max phase 4

## Source summary

Serotonin transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL11).

## Mechanism

Serotonin transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Imipramine*](https://en.wikipedia.org/w/index.php?title=Imipramine&oldid=1371037707) (revision 1371037707, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours |
| Protein binding | 86 % | 86% |
| Bioavailability | 94–96 % | 94–96% |
| Metabolism | hepatic | Liver (CYP1A2, CYP2C19, CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desipramine |
| Excretion | mainly urinary | Kidney (80%), fecal (20%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
