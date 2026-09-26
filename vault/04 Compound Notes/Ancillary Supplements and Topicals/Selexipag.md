---
type: compound
schema-version: 2
compound-id: selexipag-compound
name: Selexipag
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
  value: 0.8
  value-max: 2.5
  unit: h
  notes: 0.8–2.5 h (selexipag) and 6.2–13.5 h (ACT-333679)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 49.0
  value-max: null
  notes: 49%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 93% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by carboxylesterases, inactivation by CYP2C8 and others
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Selexipag
  url: https://en.wikipedia.org/w/index.php?title=Selexipag&oldid=1329368752
  revision: 1329368752
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Selexipag

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `selexipag-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Non-prostanoid selective IP receptor agonist, orally active with an active metabolite carrying most of the effect.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Selexipag*](https://en.wikipedia.org/w/index.php?title=Selexipag&oldid=1329368752) (revision 1329368752, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 0.8–2.5 h | 0.8–2.5 h (selexipag) and 6.2–13.5 h (ACT-333679) |
| Protein binding | 99 % | 99% |
| Bioavailability | 49 % | 49% |
| Metabolism | hepatic | Activation by carboxylesterases, inactivation by CYP2C8 and others |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Metabolites | - | ACT-333679, the free acid (active metabolite) |
| Excretion | mainly non-renal | 93% faeces |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
