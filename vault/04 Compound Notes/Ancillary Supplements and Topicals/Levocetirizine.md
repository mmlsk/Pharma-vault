---
type: compound
schema-version: 2
compound-id: levocetirizine-compound
name: Levocetirizine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Histamine H1 receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201191
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 9.0
  unit: h
  notes: 8 to 9 hours
protein-binding:
  value: 91.0
  value-max: 92.0
  unit: percent
  notes: 91–92%
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 85%; Feces: 12.9%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Minimal (less than 14%, primarily CYP3A4)
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
  title: Levocetirizine
  url: https://en.wikipedia.org/w/index.php?title=Levocetirizine&oldid=1369571793
  revision: 1369571793
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Levocetirizine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `levocetirizine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201191](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201191/) · max phase 4

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1201191).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Levocetirizine*](https://en.wikipedia.org/w/index.php?title=Levocetirizine&oldid=1369571793) (revision 1369571793, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–9 h | 8 to 9 hours |
| Protein binding | 91–92 % | 91–92% |
| Bioavailability | - | High |
| Metabolism | hepatic | Minimal (less than 14%, primarily CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine: 85%; Feces: 12.9% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
