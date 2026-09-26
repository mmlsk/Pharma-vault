---
type: compound
schema-version: 2
compound-id: pomalidomide-compound
name: Pomalidomide
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
  value: 7.5
  value-max: null
  unit: h
  notes: 7.5 hours
protein-binding:
  value: 12.0
  value-max: 44.0
  unit: percent
  notes: 12–44%
bioavailability:
  value: 73.0
  value-max: null
  notes: 73% (at least)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (73%), faeces (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP1A2- and CYP3A4-mediated; some minor contributions by CYP2C19 and CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pomalidomide
  url: https://en.wikipedia.org/w/index.php?title=Pomalidomide&oldid=1326042409
  revision: 1326042409
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pomalidomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pomalidomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Third-generation IMiD active in myeloma refractory to lenalidomide and bortezomib, and used in Kaposi sarcoma.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pomalidomide*](https://en.wikipedia.org/w/index.php?title=Pomalidomide&oldid=1326042409) (revision 1326042409, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7.5 h | 7.5 hours |
| Protein binding | 12–44 % | 12–44% |
| Bioavailability | 73 % | 73% (at least) |
| Metabolism | hepatic | Liver (mostly CYP1A2- and CYP3A4-mediated; some minor contributions by CYP2C19 and CYP2D6) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (73%), faeces (15%) |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
