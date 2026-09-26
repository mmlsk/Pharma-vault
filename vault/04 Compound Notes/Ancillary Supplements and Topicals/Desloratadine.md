---
type: compound
schema-version: 2
compound-id: desloratadine-compound
name: Desloratadine
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
chembl-id: CHEMBL1172
chembl-max-phase: 4
half-life:
  value: 27.0
  value-max: null
  unit: h
  notes: 27 hours, 33.7 hours in elderly patients
protein-binding:
  value: 83.0
  value-max: 87.0
  unit: percent
  notes: 83–87%
bioavailability:
  value: null
  value-max: null
  notes: Rapidly absorbed
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 40% as conjugated metabolites into urine; Similar amount into the feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: UGT2B10, CYP2C8
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Desloratadine
  url: https://en.wikipedia.org/w/index.php?title=Desloratadine&oldid=1357378936
  revision: 1357378936
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Desloratadine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desloratadine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1172](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1172/) · max phase 4

## Source summary

Histamine H1 receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1172).

## Mechanism

Histamine H1 receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desloratadine*](https://en.wikipedia.org/w/index.php?title=Desloratadine&oldid=1357378936) (revision 1357378936, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 27 h | 27 hours, 33.7 hours in elderly patients |
| Protein binding | 83–87 % | 83–87% |
| Bioavailability | - | Rapidly absorbed |
| Metabolism | hepatic | UGT2B10, CYP2C8 |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 3-Hydroxydesloratadine |
| Excretion | - | 40% as conjugated metabolites into urine; Similar amount into the feces |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
