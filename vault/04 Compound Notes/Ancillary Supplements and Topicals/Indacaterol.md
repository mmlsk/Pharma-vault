---
type: compound
schema-version: 2
compound-id: indacaterol-compound
name: Indacaterol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Beta-2 adrenergic receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1095777
chembl-max-phase: 4
half-life:
  value: 40.0
  value-max: 56.0
  unit: h
  notes: 40-56 h
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 43.0
  value-max: 45.0
  notes: 43-45 % (inhaled)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT1A1, CYP3A4
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
  title: Indacaterol
  url: https://en.wikipedia.org/w/index.php?title=Indacaterol&oldid=1354766271
  revision: 1354766271
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Indacaterol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `indacaterol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1095777](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1095777/) · max phase 4

## Source summary

Beta-2 adrenergic receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1095777).

## Mechanism

Beta-2 adrenergic receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Indacaterol*](https://en.wikipedia.org/w/index.php?title=Indacaterol&oldid=1354766271) (revision 1354766271, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–56 h | 40-56 h |
| Bioavailability | 43–45 % | 43-45 % (inhaled) |
| Metabolism | hepatic | UGT1A1, CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
