---
type: compound
schema-version: 2
compound-id: rituximab-compound
name: Rituximab
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
  value: 30.0
  value-max: 400.0
  unit: h
  notes: 30 to 400 hours (varies by dose and length of treatment)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (IV)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Uncertain: may undergo phagocytosis and catabolism in RES'
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
  title: Rituximab
  url: https://en.wikipedia.org/w/index.php?title=Rituximab&oldid=1372311002
  revision: 1372311002
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rituximab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rituximab-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The first therapeutic monoclonal antibody approved for cancer, now used far more widely in autoimmune disease. Depletes B cells for six to twelve months per cycle.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rituximab*](https://en.wikipedia.org/w/index.php?title=Rituximab&oldid=1372311002) (revision 1372311002, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–400 h | 30 to 400 hours (varies by dose and length of treatment) |
| Bioavailability | 100 % | 100% (IV) |
| Excretion | - | Uncertain: may undergo phagocytosis and catabolism in RES |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
