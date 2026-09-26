---
type: compound
schema-version: 2
compound-id: norgestimate-compound
name: Norgestimate
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
chembl-id: CHEMBL1200934
chembl-max-phase: 4
half-life:
  value: 17.0
  value-max: 37.0
  unit: h
  notes: '• Norgestimate: very short; • Norelgestromin: 17–37 hours; • Levonorgestrel: 24–32 hours'
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '• Norelgestromin: 99% (to albumin); • Levonorgestrel: 98% (to albumin and SHBG); • Levonorgestrel acetate: ? (to albumin)'
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 47%; Feces: 37%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (deacetylation, reduction, hydroxylation, conjugation)
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
  title: Norgestimate
  url: https://en.wikipedia.org/w/index.php?title=Norgestimate&oldid=1369013524
  revision: 1369013524
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Norgestimate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `norgestimate-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200934](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200934/) · max phase 4

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1200934).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Norgestimate*](https://en.wikipedia.org/w/index.php?title=Norgestimate&oldid=1369013524) (revision 1369013524, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17–37 h | • Norgestimate: very short; • Norelgestromin: 17–37 hours; • Levonorgestrel: 24–32 hours |
| Protein binding | 99 % | • Norelgestromin: 99% (to albumin); • Levonorgestrel: 98% (to albumin and SHBG); • Levonorgestrel acetate: ? (to albumin) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver, intestines (deacetylation, reduction, hydroxylation, conjugation) |
| Metabolites | - | • Norelgestromin; • Levonorgestrel; • Levonorgestrel acetate |
| Excretion | - | Urine: 47%; Feces: 37% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
