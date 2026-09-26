---
type: compound
schema-version: 2
compound-id: fosamprenavir-compound
name: Fosamprenavir
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
  value: 7.7
  value-max: null
  unit: h
  notes: 7.7 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90%
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (as metabolites of amprenavir)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysed to amprenavir and phosphate in GI tract epithelium
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
  title: Fosamprenavir
  url: https://en.wikipedia.org/w/index.php?title=Fosamprenavir&oldid=1368554406
  revision: 1368554406
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fosamprenavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fosamprenavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Phosphate ester prodrug of amprenavir, developed to reduce the enormous pill burden of the parent drug.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fosamprenavir*](https://en.wikipedia.org/w/index.php?title=Fosamprenavir&oldid=1368554406) (revision 1368554406, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.7 h | 7.7 hours |
| Protein binding | 90 % | 90% |
| Bioavailability | - | Unknown |
| Metabolism | - | Hydrolysed to amprenavir and phosphate in GI tract epithelium |
| Excretion | mainly non-renal | Fecal (as metabolites of amprenavir) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
