---
type: compound
schema-version: 2
compound-id: rivaroxaban-compound
name: Rivaroxaban (Xarelto)
aliases:
- Rivaroxaban
- Xarelto
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
  value-max: 9.0
  unit: h
  notes: 5–9 hours in healthy subjects aged 20 to 45
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%; Cmax = 2–4 hours (10 mg oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: metabolized in liver and eliminated unchanged
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, CYP2J2 and CYP-independent mechanisms
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rivaroxaban
  url: https://en.wikipedia.org/w/index.php?title=Rivaroxaban&oldid=1356485488
  revision: 1356485488
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rivaroxaban (Xarelto)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rivaroxaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Rivaroxaban, Xarelto

## Source summary

Oral factor Xa inhibitor with once-daily regimens for several indications; renal function, food requirements, and bleeding interactions matter.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rivaroxaban*](https://en.wikipedia.org/w/index.php?title=Rivaroxaban&oldid=1356485488) (revision 1356485488, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–9 h | 5–9 hours in healthy subjects aged 20 to 45 |
| Bioavailability | 80–100 % | 80–100%; Cmax = 2–4 hours (10 mg oral) |
| Metabolism | hepatic | CYP3A4, CYP2J2 and CYP-independent mechanisms |
| CYP (metabolised by) | CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | metabolized in liver and eliminated unchanged |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
