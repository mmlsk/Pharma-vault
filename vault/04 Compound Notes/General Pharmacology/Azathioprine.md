---
type: compound
schema-version: 2
compound-id: azathioprine-compound
name: Azathioprine
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
  value: 26.0
  value-max: 80.0
  unit: min
  notes: 26–80 minutes (azathioprine); 3–5 hours (drug plus metabolites)
protein-binding:
  value: 20.0
  value-max: 30.0
  unit: percent
  notes: 20–30%
bioavailability:
  value: 31.0
  value-max: null
  notes: 60±31%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, 98% as metabolites
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Activated non-enzymatically, deactivated mainly by xanthine oxidase
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
  title: Azathioprine
  url: https://en.wikipedia.org/w/index.php?title=Azathioprine&oldid=1369727378
  revision: 1369727378
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Azathioprine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azathioprine-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Thiopurine prodrug used in inflammatory bowel disease, autoimmune hepatitis and transplantation, and the reason TPMT genotyping exists.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azathioprine*](https://en.wikipedia.org/w/index.php?title=Azathioprine&oldid=1369727378) (revision 1369727378, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26–80 min | 26–80 minutes (azathioprine); 3–5 hours (drug plus metabolites) |
| Protein binding | 20–30 % | 20–30% |
| Bioavailability | 31 % | 60±31% |
| Metabolism | - | Activated non-enzymatically, deactivated mainly by xanthine oxidase |
| Excretion | mainly urinary | Kidney, 98% as metabolites |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
