---
type: compound
schema-version: 2
compound-id: desvenlafaxine-compound
name: Desvenlafaxine
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
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hours
protein-binding:
  value: 30.0
  value-max: null
  unit: percent
  notes: Low (30%)
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.45
  notes: 45% excreted unchanged in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C19, CYP3A4, (CYP2D6 is not involved)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Desvenlafaxine
  url: https://en.wikipedia.org/w/index.php?title=Desvenlafaxine&oldid=1364182583
  revision: 1364182583
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Desvenlafaxine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `desvenlafaxine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Desvenlafaxine*](https://en.wikipedia.org/w/index.php?title=Desvenlafaxine&oldid=1364182583) (revision 1364182583, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hours |
| Protein binding | 30 % | Low (30%) |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | CYP2C19, CYP3A4, (CYP2D6 is not involved) |
| CYP (metabolised by) | CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.45 | 45% excreted unchanged in urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
