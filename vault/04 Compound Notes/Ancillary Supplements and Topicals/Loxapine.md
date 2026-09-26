---
type: compound
schema-version: 2
compound-id: loxapine-compound
name: Loxapine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: D2-like dopamine receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL831
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours (oral); 7.61 hours (inhalation)
protein-binding:
  value: 96.8
  value-max: null
  unit: percent
  notes: 96.8%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Majority are excreted within 24 hours, main route through urine (conjugated metabolites), small amounts through the feces (unconjugated metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive Liver; active metabolites include amoxapine and 8-hydroxyloxapine. Inhibits P-gp and is a substrate of CYP1A2, CYP3A4 and CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Loxapine
  url: https://en.wikipedia.org/w/index.php?title=Loxapine&oldid=1368778041
  revision: 1368778041
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Loxapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `loxapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL831](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL831/) · max phase 4

## Source summary

D2-like dopamine receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL831).

## Mechanism

D2-like dopamine receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Loxapine*](https://en.wikipedia.org/w/index.php?title=Loxapine&oldid=1368778041) (revision 1368778041, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours (oral); 7.61 hours (inhalation) |
| Protein binding | 96.8 % | 96.8% |
| Metabolism | hepatic | Extensive Liver; active metabolites include amoxapine and 8-hydroxyloxapine. Inhibits P-gp and is a substrate of CYP1A2, CYP3A4 and CYP2D6 |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Majority are excreted within 24 hours, main route through urine (conjugated metabolites), small amounts through the feces (unconjugated metabolites) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
