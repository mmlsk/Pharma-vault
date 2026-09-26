---
type: compound
schema-version: 2
compound-id: methotrexate-compound
name: Methotrexate
aliases: []
cluster: General Pharmacology
group: immunology
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
  value: 3.0
  value-max: 10.0
  unit: h
  notes: 3–10 hours (lower doses), 8–15 hours (higher doses)
protein-binding:
  value: 35.0
  value-max: 50.0
  unit: percent
  notes: 35–50% (parent drug), 91–93% (7-hydroxymethotrexate)
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% at lower doses, less at higher doses.
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (80–100%), feces (small amounts)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic and intracellular
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
- immunosuppression-infection
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Methotrexate
  url: https://en.wikipedia.org/w/index.php?title=Methotrexate&oldid=1375176283
  revision: 1375176283
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Methotrexate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methotrexate-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Antifolate used at cytotoxic doses in oncology and at a fraction of that weekly in rheumatology, where the mechanism is different.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methotrexate*](https://en.wikipedia.org/w/index.php?title=Methotrexate&oldid=1375176283) (revision 1375176283, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–10 h | 3–10 hours (lower doses), 8–15 hours (higher doses) |
| Protein binding | 35–50 % | 35–50% (parent drug), 91–93% (7-hydroxymethotrexate) |
| Bioavailability | 60 % | 60% at lower doses, less at higher doses. |
| Metabolism | hepatic | Hepatic and intracellular |
| Excretion | mainly non-renal | Urine (80–100%), feces (small amounts) |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
