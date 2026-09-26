---
type: compound
schema-version: 2
compound-id: thalidomide-compound
name: Thalidomide
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
  value: 5.0
  value-max: 7.5
  unit: h
  notes: 5–7.5 hours (dose-dependent)
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55% and 66% for the (R)-(+)- and (S)-(−)-enantiomers, respectively
bioavailability:
  value: 90.0
  value-max: null
  notes: 90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces and semen
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (minimally via CYP2C19-mediated 5-hydroxylation; mostly via non-enzymatic hydrolysis at the four amide sites)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Thalidomide
  url: https://en.wikipedia.org/w/index.php?title=Thalidomide&oldid=1376197756
  revision: 1376197756
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Thalidomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `thalidomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The drug whose teratogenicity created modern drug regulation, later rehabilitated for erythema nodosum leprosum and myeloma.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Thalidomide*](https://en.wikipedia.org/w/index.php?title=Thalidomide&oldid=1376197756) (revision 1376197756, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7.5 h | 5–7.5 hours (dose-dependent) |
| Protein binding | 55 % | 55% and 66% for the (R)-(+)- and (S)-(−)-enantiomers, respectively |
| Bioavailability | 90 % | 90% |
| Metabolism | hepatic | Liver (minimally via CYP2C19-mediated 5-hydroxylation; mostly via non-enzymatic hydrolysis at the four amide sites) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine, feces and semen |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
