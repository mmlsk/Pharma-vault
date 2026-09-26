---
type: compound
schema-version: 2
compound-id: tacrolimus-compound
name: Tacrolimus
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
  value: 11.3
  value-max: null
  unit: h
  notes: 11.3 h for transplant patients (range 3.5–40.6 h)
protein-binding:
  value: 98.8
  value-max: null
  unit: percent
  notes: ≥98.8%
bioavailability:
  value: 24.0
  value-max: null
  notes: 24% (5–67%), less after eating food rich in fat
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP3A4, CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tacrolimus
  url: https://en.wikipedia.org/w/index.php?title=Tacrolimus&oldid=1359242183
  revision: 1359242183
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tacrolimus

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tacrolimus-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Calcineurin inhibitor binding FKBP12; the backbone of most transplant immunosuppression, nephrotoxic on long exposure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tacrolimus*](https://en.wikipedia.org/w/index.php?title=Tacrolimus&oldid=1359242183) (revision 1359242183, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11.3 h | 11.3 h for transplant patients (range 3.5–40.6 h) |
| Protein binding | 98.8 % | ≥98.8% |
| Bioavailability | 24 % | 24% (5–67%), less after eating food rich in fat |
| Metabolism | hepatic | Liver CYP3A4, CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | Mostly fecal |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
