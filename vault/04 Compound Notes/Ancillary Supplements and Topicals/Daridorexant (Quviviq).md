---
type: compound
schema-version: 2
compound-id: daridorexant-compound
name: Daridorexant (Quviviq)
aliases:
- Daridorexant
- Quviviq
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
  value: 8.0
  value-max: null
  unit: h
  notes: 8 hours (6–10 hours)
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: ~57%; Urine: ~28%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive (mainly CYP3A4 (89%))
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Daridorexant
  url: https://en.wikipedia.org/w/index.php?title=Daridorexant&oldid=1368786208
  revision: 1368786208
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Daridorexant (Quviviq)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `daridorexant-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Daridorexant, Quviviq

## Source summary

Dual orexin receptor antagonist for insomnia, engineered for a short half-life to limit next-morning residual effect.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Daridorexant*](https://en.wikipedia.org/w/index.php?title=Daridorexant&oldid=1368786208) (revision 1368786208, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 8 hours (6–10 hours) |
| Protein binding | 99.7 % | 99.7% |
| Bioavailability | 62 % | 62% |
| Metabolism | hepatic | Extensive (mainly CYP3A4 (89%)) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces: ~57%; Urine: ~28% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
