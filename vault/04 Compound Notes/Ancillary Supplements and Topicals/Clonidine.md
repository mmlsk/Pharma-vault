---
type: compound
schema-version: 2
compound-id: clonidine-compound
name: Clonidine
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
  value: 12.0
  value-max: 16.0
  unit: h
  notes: 'IR: 12–16 hours; 41 hours in kidney failure, 48 hours for repeated dosing'
protein-binding:
  value: 20.0
  value-max: 40.0
  unit: percent
  notes: 20–40%
bioavailability:
  value: 70.0
  value-max: 80.0
  notes: 70–80% (oral), 60–70% (transdermal)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (72%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver to inactive metabolites, 2/3 CYP2D6
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
  title: Clonidine
  url: https://en.wikipedia.org/w/index.php?title=Clonidine&oldid=1370368953
  revision: 1370368953
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Clonidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clonidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Central alpha-2 agonist; effective, sedating, and dangerous to stop abruptly.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clonidine*](https://en.wikipedia.org/w/index.php?title=Clonidine&oldid=1370368953) (revision 1370368953, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–16 h | IR: 12–16 hours; 41 hours in kidney failure, 48 hours for repeated dosing |
| Protein binding | 20–40 % | 20–40% |
| Bioavailability | 70–80 % | 70–80% (oral), 60–70% (transdermal) |
| Metabolism | hepatic | Liver to inactive metabolites, 2/3 CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (72%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
