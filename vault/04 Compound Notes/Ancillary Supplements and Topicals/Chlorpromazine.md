---
type: compound
schema-version: 2
compound-id: chlorpromazine-compound
name: Chlorpromazine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value-max: null
  unit: h
  notes: 30 hours
protein-binding:
  value: 90.0
  value-max: 99.0
  unit: percent
  notes: 90–99%
bioavailability:
  value: 10.0
  value-max: 80.0
  notes: 10–80% (Oral; large interindividual variation)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (43–65% in 24 hrs)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mostly CYP2D6-mediated
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Chlorpromazine
  url: https://en.wikipedia.org/w/index.php?title=Chlorpromazine&oldid=1368875372
  revision: 1368875372
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Chlorpromazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `chlorpromazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Chlorpromazine*](https://en.wikipedia.org/w/index.php?title=Chlorpromazine&oldid=1368875372) (revision 1368875372, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 h | 30 hours |
| Protein binding | 90–99 % | 90–99% |
| Bioavailability | 10–80 % | 10–80% (Oral; large interindividual variation) |
| Metabolism | hepatic | Liver, mostly CYP2D6-mediated |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (43–65% in 24 hrs) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
