---
type: compound
schema-version: 2
compound-id: medroxyprogesterone-acetate-compound
name: Medroxyprogesterone Acetate
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
chembl-id: CHEMBL717
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: 33.0
  unit: h
  notes: 'By mouth: 12–33 hours; IM (aq. susp.): ~50 days; SC (aq. susp.): ~40 days'
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 88% (to albumin)
bioavailability:
  value: 100.0
  value-max: null
  notes: 'By mouth: ~100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (as conjugates)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (hydroxylation (CYP3A4), reduction, conjugation)
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
  title: Medroxyprogesterone acetate
  url: https://en.wikipedia.org/w/index.php?title=Medroxyprogesterone_acetate&oldid=1373552256
  revision: 1373552256
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Medroxyprogesterone Acetate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `medroxyprogesterone-acetate-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL717](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL717/) · max phase 4

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL717).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Medroxyprogesterone acetate*](https://en.wikipedia.org/w/index.php?title=Medroxyprogesterone_acetate&oldid=1373552256) (revision 1373552256, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–33 h | By mouth: 12–33 hours; IM (aq. susp.): ~50 days; SC (aq. susp.): ~40 days |
| Protein binding | 88 % | 88% (to albumin) |
| Bioavailability | 100 % | By mouth: ~100% |
| Metabolism | hepatic | Liver (hydroxylation (CYP3A4), reduction, conjugation) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (as conjugates) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
