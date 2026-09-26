---
type: compound
schema-version: 2
compound-id: olanzapine-compound
name: Olanzapine
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
  value: 33.0
  value-max: null
  unit: h
  notes: 33 hours, 51.8 hours (elderly)
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 93%
bioavailability:
  value: 60.0
  value-max: 65.0
  notes: 60–65%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.07
  notes: Urine (57%; 7% as unchanged drug), faeces (30%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (direct glucuronidation and CYP1A2 mediated oxidation)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Olanzapine
  url: https://en.wikipedia.org/w/index.php?title=Olanzapine&oldid=1375958074
  revision: 1375958074
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Olanzapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `olanzapine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Olanzapine*](https://en.wikipedia.org/w/index.php?title=Olanzapine&oldid=1375958074) (revision 1375958074, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 33 h | 33 hours, 51.8 hours (elderly) |
| Protein binding | 93 % | 93% |
| Bioavailability | 60–65 % | 60–65% |
| Metabolism | hepatic | Liver (direct glucuronidation and CYP1A2 mediated oxidation) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.07 | Urine (57%; 7% as unchanged drug), faeces (30%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
