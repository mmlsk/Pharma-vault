---
type: compound
schema-version: 2
compound-id: dextroamphetamine-compound
name: Dextroamphetamine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Norepinephrine transporter releasing agent
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL612
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 11.0
  unit: h
  notes: '9–11 hours; pH-dependent: 7–34 hours'
protein-binding:
  value: 15.0
  value-max: 40.0
  unit: percent
  notes: 15–40%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ~90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (45%); urinary pH-dependent
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, DBH, FMO3
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
  title: Dextroamphetamine
  url: https://en.wikipedia.org/w/index.php?title=Dextroamphetamine&oldid=1376553161
  revision: 1376553161
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Dextroamphetamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dextroamphetamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL612](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL612/) · max phase 4

## Source summary

Norepinephrine transporter releasing agent; approved/marketed compound catalogued by ChEMBL (CHEMBL612).

## Mechanism

Norepinephrine transporter releasing agent _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dextroamphetamine*](https://en.wikipedia.org/w/index.php?title=Dextroamphetamine&oldid=1376553161) (revision 1376553161, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | 9–11 hours; pH-dependent: 7–34 hours |
| Protein binding | 15–40 % | 15–40% |
| Bioavailability | 90 % | Oral: ~90% |
| Metabolism | hepatic | CYP2D6, DBH, FMO3 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-Hydroxyamphetamine |
| Excretion | mainly urinary | Kidney (45%); urinary pH-dependent |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
