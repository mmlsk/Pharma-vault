---
type: compound
schema-version: 2
compound-id: elacestrant-compound
name: Elacestrant
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Estrogen receptor alpha degrader
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL4297509
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: 50.0
  unit: h
  notes: 30–50 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 10.0
  value-max: null
  notes: ~10%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (82%), urine (7.5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (major: CYP3A4, minor: CYP2A6, CYP2C9)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Elacestrant
  url: https://en.wikipedia.org/w/index.php?title=Elacestrant&oldid=1329034709
  revision: 1329034709
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Elacestrant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elacestrant-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL4297509](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL4297509/) · max phase 4

## Source summary

Estrogen receptor alpha degrader; approved/marketed compound catalogued by ChEMBL (CHEMBL4297509).

## Mechanism

Estrogen receptor alpha degrader _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elacestrant*](https://en.wikipedia.org/w/index.php?title=Elacestrant&oldid=1329034709) (revision 1329034709, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–50 h | 30–50 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 10 % | ~10% |
| Metabolism | hepatic | Liver (major: CYP3A4, minor: CYP2A6, CYP2C9) |
| CYP (metabolised by) | CYP2A6, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (82%), urine (7.5%) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
