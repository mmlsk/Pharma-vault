---
type: compound
schema-version: 2
compound-id: celecoxib-compound
name: Celecoxib
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase-2 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL118
chembl-max-phase: 4
half-life:
  value: 7.8
  value-max: null
  unit: h
  notes: 7.8 hours; 11 hours (mild hepatic impairment); 13 hours (moderate-severe hepatic impairment)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97% (mainly to serum albumin)
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Faeces (57%), urine (27%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly CYP2C9)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Celecoxib
  url: https://en.wikipedia.org/w/index.php?title=Celecoxib&oldid=1366925464
  revision: 1366925464
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Celecoxib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `celecoxib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL118](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL118/) · max phase 4

## Source summary

Cyclooxygenase-2 inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL118).

## Mechanism

Cyclooxygenase-2 inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Celecoxib*](https://en.wikipedia.org/w/index.php?title=Celecoxib&oldid=1366925464) (revision 1366925464, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.8 h | 7.8 hours; 11 hours (mild hepatic impairment); 13 hours (moderate-severe hepatic impairment) |
| Protein binding | 97 % | 97% (mainly to serum albumin) |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver (mainly CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Faeces (57%), urine (27%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
