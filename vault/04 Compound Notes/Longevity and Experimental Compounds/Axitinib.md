---
type: compound
schema-version: 2
compound-id: axitinib-compound
name: Axitinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: null
chembl-max-phase: null
half-life:
  value: 2.5
  value-max: 6.1
  unit: h
  notes: 2.5-6.1 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 58.0
  value-max: null
  notes: 58%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.12
  notes: Feces (41%; 12% as unchanged drug), urine (23%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4/CYP3A5-mediated but with some contributions from CYP1A2, CYP2C19, UGT1A1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Axitinib
  url: https://en.wikipedia.org/w/index.php?title=Axitinib&oldid=1335549960
  revision: 1335549960
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Axitinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `axitinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Axitinib*](https://en.wikipedia.org/w/index.php?title=Axitinib&oldid=1335549960) (revision 1335549960, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–6.1 h | 2.5-6.1 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | 58 % | 58% |
| Metabolism | hepatic | Liver (mostly CYP3A4/CYP3A5-mediated but with some contributions from CYP1A2, CYP2C19, UGT1A1) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.12 | Feces (41%; 12% as unchanged drug), urine (23%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
