---
type: compound
schema-version: 2
compound-id: ranolazine-compound
name: Ranolazine (Ranexa)
aliases:
- Ranolazine
- Ranexa
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
  value: 1.4
  value-max: 1.9
  unit: h
  notes: 1.4 to 1.9 hours
protein-binding:
  value: 62.0
  value-max: null
  unit: percent
  notes: ~62%
bioavailability:
  value: 35.0
  value-max: 50.0
  notes: 35 to 50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (75%) and fecal (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive in liver (CYP3A, CYP2D6) and intestine
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
  title: Ranolazine
  url: https://en.wikipedia.org/w/index.php?title=Ranolazine&oldid=1359319819
  revision: 1359319819
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ranolazine (Ranexa)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ranolazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Ranolazine, Ranexa

## Source summary

Antianginal that inhibits the late sodium current, working without lowering heart rate or blood pressure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ranolazine*](https://en.wikipedia.org/w/index.php?title=Ranolazine&oldid=1359319819) (revision 1359319819, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4–1.9 h | 1.4 to 1.9 hours |
| Protein binding | 62 % | ~62% |
| Bioavailability | 35–50 % | 35 to 50% |
| Metabolism | hepatic | Extensive in liver (CYP3A, CYP2D6) and intestine |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (75%) and fecal (25%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
