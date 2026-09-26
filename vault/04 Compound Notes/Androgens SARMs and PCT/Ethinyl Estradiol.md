---
type: compound
schema-version: 2
compound-id: ethinyl-estradiol-compound
name: Ethinyl Estradiol
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL691
chembl-max-phase: 4
half-life:
  value: 7.0
  value-max: 36.0
  unit: h
  notes: 7–36 hours
protein-binding:
  value: 97.0
  value-max: 98.0
  unit: percent
  notes: 97–98% (to albumin; is not bound to SHBG)
bioavailability:
  value: 38.0
  value-max: 48.0
  notes: 38–48%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 62%; Urine: 38%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (primarily CYP3A4)
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
  title: Ethinylestradiol
  url: https://en.wikipedia.org/w/index.php?title=Ethinylestradiol&oldid=1375707907
  revision: 1375707907
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Ethinyl Estradiol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ethinyl-estradiol-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL691](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL691/) · max phase 4

## Source summary

Estrogen receptor alpha agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL691).

## Mechanism

Estrogen receptor alpha agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ethinylestradiol*](https://en.wikipedia.org/w/index.php?title=Ethinylestradiol&oldid=1375707907) (revision 1375707907, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–36 h | 7–36 hours |
| Protein binding | 97–98 % | 97–98% (to albumin; is not bound to SHBG) |
| Bioavailability | 38–48 % | 38–48% |
| Metabolism | hepatic | Liver (primarily CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Ethinylestradiol sulfate; • Others |
| Excretion | mainly non-renal | Feces: 62%; Urine: 38% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
