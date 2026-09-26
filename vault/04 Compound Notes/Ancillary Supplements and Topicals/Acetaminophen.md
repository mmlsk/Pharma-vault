---
type: compound
schema-version: 2
compound-id: acetaminophen-compound
name: Acetaminophen
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL112
chembl-max-phase: 4
half-life:
  value: 1.9
  value-max: 2.5
  unit: h
  notes: 1.9–2.5 hours
protein-binding:
  value: 10.0
  value-max: 25.0
  unit: percent
  notes: negligible to 10–25% in overdose
bioavailability:
  value: 63.0
  value-max: 89.0
  notes: 63–89%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Predominantly in the liver
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
  title: Paracetamol
  url: https://en.wikipedia.org/w/index.php?title=Paracetamol&oldid=1376620920
  revision: 1376620920
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Acetaminophen

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `acetaminophen-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL112](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL112/) · max phase 4

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL112).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Paracetamol*](https://en.wikipedia.org/w/index.php?title=Paracetamol&oldid=1376620920) (revision 1376620920, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.9–2.5 h | 1.9–2.5 hours |
| Protein binding | 10–25 % | negligible to 10–25% in overdose |
| Bioavailability | 63–89 % | 63–89% |
| Metabolism | hepatic | Predominantly in the liver |
| Metabolites | - | APAP gluc, APAP sulfate, APAP GSH, APAP cys, AM404, NAPQI |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
