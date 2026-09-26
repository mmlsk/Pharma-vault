---
type: compound
schema-version: 2
compound-id: ivabradine-compound
name: Ivabradine (Corlanor)
aliases:
- Ivabradine
- Corlanor
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
  value: 6.0
  value-max: null
  unit: h
  notes: 6 hours
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
bioavailability:
  value: 40.0
  value-max: null
  notes: 40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (first-pass) >50%, CYP3A4-mediated
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
  title: Ivabradine
  url: https://en.wikipedia.org/w/index.php?title=Ivabradine&oldid=1372056493
  revision: 1372056493
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ivabradine (Corlanor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ivabradine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Ivabradine, Corlanor

## Source summary

Selective sinoatrial node funny-current blocker that slows heart rate without touching contractility or blood pressure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ivabradine*](https://en.wikipedia.org/w/index.php?title=Ivabradine&oldid=1372056493) (revision 1372056493, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | 6 hours |
| Protein binding | 70 % | 70% |
| Bioavailability | 40 % | 40% |
| Metabolism | hepatic | Liver (first-pass) >50%, CYP3A4-mediated |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
