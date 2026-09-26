---
type: compound
schema-version: 2
compound-id: methylprednisolone-compound
name: Methylprednisolone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Glucocorticoid receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL650
chembl-max-phase: 4
half-life:
  value: 1.8
  value-max: 2.6
  unit: h
  notes: 1.8–2.6 hours
protein-binding:
  value: 78.0
  value-max: null
  unit: percent
  notes: 78%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver primarily, kidney, tissues; CYP3A4
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
  title: Methylprednisolone
  url: https://en.wikipedia.org/w/index.php?title=Methylprednisolone&oldid=1366837611
  revision: 1366837611
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Methylprednisolone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methylprednisolone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL650](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL650/) · max phase 4

## Source summary

Glucocorticoid receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL650).

## Mechanism

Glucocorticoid receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methylprednisolone*](https://en.wikipedia.org/w/index.php?title=Methylprednisolone&oldid=1366837611) (revision 1366837611, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–2.6 h | 1.8–2.6 hours |
| Protein binding | 78 % | 78% |
| Metabolism | hepatic | Liver primarily, kidney, tissues; CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
