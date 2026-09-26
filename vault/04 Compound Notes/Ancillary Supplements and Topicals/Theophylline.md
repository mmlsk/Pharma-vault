---
type: compound
schema-version: 2
compound-id: theophylline-compound
name: Theophylline
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
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40% (primarily to albumin)
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Hepatic: CYP1A2, CYP2E1, CYP3A4'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Theophylline
  url: https://en.wikipedia.org/w/index.php?title=Theophylline&oldid=1367811625
  revision: 1367811625
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Theophylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `theophylline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Methylxanthine acting as a non-selective PDE inhibitor and adenosine-receptor antagonist. Narrow therapeutic window — the reason it lost ground to inhaled therapy.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Theophylline*](https://en.wikipedia.org/w/index.php?title=Theophylline&oldid=1367811625) (revision 1367811625, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours |
| Protein binding | 40 % | 40% (primarily to albumin) |
| Bioavailability | 100 % | 100% (oral) |
| Metabolism | hepatic | Hepatic: CYP1A2, CYP2E1, CYP3A4 |
| CYP (metabolised by) | CYP1A2, CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 1,3-Dimethyluric acid ; • 1-Methylxanthine; • 3-Methylxanthine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
