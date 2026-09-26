---
type: compound
schema-version: 2
compound-id: etonogestrel-compound
name: Etonogestrel
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
chembl-id: CHEMBL1531
chembl-max-phase: 4
half-life:
  value: 21.0
  value-max: 38.0
  unit: h
  notes: 21–38 hours
protein-binding:
  value: 98.0
  value-max: null
  unit: percent
  notes: ≥98% (66% to albumin, 32% to SHBG)
bioavailability:
  value: 100.0
  value-max: null
  notes: 'Implant: 100%; Vaginal ring: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (major), feces (minor)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Etonogestrel
  url: https://en.wikipedia.org/w/index.php?title=Etonogestrel&oldid=1372664488
  revision: 1372664488
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Etonogestrel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etonogestrel-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1531](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1531/) · max phase 4

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1531).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etonogestrel*](https://en.wikipedia.org/w/index.php?title=Etonogestrel&oldid=1372664488) (revision 1372664488, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21–38 h | 21–38 hours |
| Protein binding | 98 % | ≥98% (66% to albumin, 32% to SHBG) |
| Bioavailability | 100 % | Implant: 100%; Vaginal ring: 100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine (major), feces (minor) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
