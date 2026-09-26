---
type: compound
schema-version: 2
compound-id: drospirenone-compound
name: Drospirenone
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1509
chembl-max-phase: 4
half-life:
  value: 25.0
  value-max: 33.0
  unit: h
  notes: 25–33 hours
protein-binding:
  value: 95.0
  value-max: 97.0
  unit: percent
  notes: 95–97% (to albumin)
bioavailability:
  value: 66.0
  value-max: 85.0
  notes: 66–85%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP450-independent (reduction, sulfation, and cleavage of lactone ring), some CYP3A4 contribution)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Drospirenone
  url: https://en.wikipedia.org/w/index.php?title=Drospirenone&oldid=1363293250
  revision: 1363293250
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Drospirenone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `drospirenone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1509](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1509/) · max phase 4

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1509).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Drospirenone*](https://en.wikipedia.org/w/index.php?title=Drospirenone&oldid=1363293250) (revision 1363293250, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25–33 h | 25–33 hours |
| Protein binding | 95–97 % | 95–97% (to albumin) |
| Bioavailability | 66–85 % | 66–85% |
| Metabolism | hepatic | Liver (mostly CYP450-independent (reduction, sulfation, and cleavage of lactone ring), some CYP3A4 contribution) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Drospirenone acid; • 4,5-Dihydrodrospirenone 3-sulfate |
| Excretion | - | Urine, feces |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
