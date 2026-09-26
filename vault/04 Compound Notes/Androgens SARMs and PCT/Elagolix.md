---
type: compound
schema-version: 2
compound-id: elagolix-compound
name: Elagolix
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Gonadotropin-releasing hormone receptor antagonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1208155
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: 6.0
  unit: h
  notes: 'Typical: 4–6 hours; Single dose: 2.4–6.3 hrs; Continuous: 2.2–10.8 hours'
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: 80%
bioavailability:
  value: 5.8
  value-max: null
  notes: Low (5.8% in rats, 11% in monkeys; no human data)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Urine: <3%; Feces: 90%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A)
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
  title: Elagolix
  url: https://en.wikipedia.org/w/index.php?title=Elagolix&oldid=1370223569
  revision: 1370223569
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Elagolix

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `elagolix-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1208155](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1208155/) · max phase 4

## Source summary

Gonadotropin-releasing hormone receptor antagonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1208155).

## Mechanism

Gonadotropin-releasing hormone receptor antagonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Elagolix*](https://en.wikipedia.org/w/index.php?title=Elagolix&oldid=1370223569) (revision 1370223569, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–6 h | Typical: 4–6 hours; Single dose: 2.4–6.3 hrs; Continuous: 2.2–10.8 hours |
| Protein binding | 80 % | 80% |
| Bioavailability | 5.8 % | Low (5.8% in rats, 11% in monkeys; no human data) |
| Metabolism | hepatic | Liver (CYP3A) |
| Excretion | mainly non-renal | Urine: <3%; Feces: 90% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
