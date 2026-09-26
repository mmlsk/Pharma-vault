---
type: compound
schema-version: 2
compound-id: apixaban-compound
name: Apixaban (Eliquis)
aliases:
- Apixaban
- Eliquis
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
  value: 9.0
  value-max: 14.0
  unit: h
  notes: 9–14 h
protein-binding:
  value: 87.0
  value-max: null
  unit: percent
  notes: ~87%
bioavailability:
  value: 50.0
  value-max: null
  notes: ~50%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct (75%), kidney (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, CYP3A5, CYP1A2 and others
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Apixaban
  url: https://en.wikipedia.org/w/index.php?title=Apixaban&oldid=1370302718
  revision: 1370302718
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Apixaban (Eliquis)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apixaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Apixaban, Eliquis

## Source summary

Direct factor Xa inhibitor used for atrial fibrillation and venous thromboembolism; interactions and additive bleeding make casual stack use hazardous.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apixaban*](https://en.wikipedia.org/w/index.php?title=Apixaban&oldid=1370302718) (revision 1370302718, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–14 h | 9–14 h |
| Protein binding | 87 % | ~87% |
| Bioavailability | 50 % | ~50% |
| Metabolism | hepatic | CYP3A4, CYP3A5, CYP1A2 and others |
| CYP (metabolised by) | CYP1A2, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct (75%), kidney (25%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
