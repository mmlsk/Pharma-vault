---
type: compound
schema-version: 2
compound-id: cinacalcet-compound
name: Cinacalcet
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
  value-max: 40.0
  unit: h
  notes: 30 to 40 hours
protein-binding:
  value: 93.0
  value-max: 97.0
  unit: percent
  notes: 93 to 97%
bioavailability:
  value: 20.0
  value-max: 25.0
  notes: 20 to 25%; increases if taken with food
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (80%) and fecal (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-, CYP2D6- and CYP1A2-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Cinacalcet
  url: https://en.wikipedia.org/w/index.php?title=Cinacalcet&oldid=1333584314
  revision: 1333584314
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cinacalcet

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cinacalcet-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Acts on the PTH axis: intermittent PTH1R agonism is anabolic for bone, while calcimimetics suppress PTH secretion through the calcium-sensing receptor; calcimimetic, suppresses PTH.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cinacalcet*](https://en.wikipedia.org/w/index.php?title=Cinacalcet&oldid=1333584314) (revision 1333584314, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–40 h | 30 to 40 hours |
| Protein binding | 93–97 % | 93 to 97% |
| Bioavailability | 20–25 % | 20 to 25%; increases if taken with food |
| Metabolism | hepatic | Hepatic (CYP3A4-, CYP2D6- and CYP1A2-mediated) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal (80%) and fecal (15%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
