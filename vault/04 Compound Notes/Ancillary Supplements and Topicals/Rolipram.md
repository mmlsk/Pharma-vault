---
type: compound
schema-version: 2
compound-id: rolipram-compound
name: Rolipram
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
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 75.0
  value-max: null
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP2C8, CYP2C9, CYP2C19 and CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C8
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C8, CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rolipram
  url: https://en.wikipedia.org/w/index.php?title=Rolipram&oldid=1329367371
  revision: 1329367371
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rolipram

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rolipram-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits PDE4 to raise intracellular cAMP and dampen inflammatory cytokine production; emesis and weight loss are class-limiting; research tool compound, never marketed.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rolipram*](https://en.wikipedia.org/w/index.php?title=Rolipram&oldid=1329367371) (revision 1329367371, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Bioavailability | 75 % | 75% |
| Metabolism | hepatic | Liver via CYP2C8, CYP2C9, CYP2C19 and CYP2D6 |
| CYP (metabolised by) | CYP2C19, CYP2C8, CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (80%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
