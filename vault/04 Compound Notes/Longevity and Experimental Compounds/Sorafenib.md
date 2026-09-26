---
type: compound
schema-version: 2
compound-id: sorafenib-compound
name: Sorafenib
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
  value: 25.0
  value-max: 48.0
  unit: h
  notes: 25–48 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
bioavailability:
  value: 38.0
  value-max: 49.0
  notes: 38–49%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (77%) and urine (19%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver oxidation and glucuronidation (CYP3A4 & UGT1A9-mediated)
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
  title: Sorafenib
  url: https://en.wikipedia.org/w/index.php?title=Sorafenib&oldid=1373726418
  revision: 1373726418
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sorafenib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sorafenib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]

## Source summary

Inhibits VEGF-receptor angiogenic signaling; hypertension, bleeding, thrombosis, and wound-healing effects require monitoring.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sorafenib*](https://en.wikipedia.org/w/index.php?title=Sorafenib&oldid=1373726418) (revision 1373726418, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25–48 h | 25–48 hours |
| Protein binding | 99.5 % | 99.5% |
| Bioavailability | 38–49 % | 38–49% |
| Metabolism | hepatic | Liver oxidation and glucuronidation (CYP3A4 & UGT1A9-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (77%) and urine (19%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
