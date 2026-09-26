---
type: compound
schema-version: 2
compound-id: fidaxomicin-compound
name: Fidaxomicin
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value: 4.8
  value-max: null
  unit: h
  notes: 11.7 ± 4.80 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Minimal systemic absorption
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (<1%), faeces (92%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Fidaxomicin
  url: https://en.wikipedia.org/w/index.php?title=Fidaxomicin&oldid=1369629710
  revision: 1369629710
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fidaxomicin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fidaxomicin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Macrocyclic antibiotic for Clostridioides difficile that is barely absorbed and unusually sparing of the surrounding flora, which is why relapse rates are lower than with vancomycin.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fidaxomicin*](https://en.wikipedia.org/w/index.php?title=Fidaxomicin&oldid=1369629710) (revision 1369629710, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.8 h | 11.7 ± 4.80 hours |
| Bioavailability | - | Minimal systemic absorption |
| Excretion | mainly non-renal | Urine (<1%), faeces (92%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
