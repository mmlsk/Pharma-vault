---
type: compound
schema-version: 2
compound-id: rimonabant-compound
name: Rimonabant
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
  value: 6.0
  value-max: 9.0
  unit: d
  notes: Variable:; 6 to 9 days with normal BMI; 16 days if BMI >30
protein-binding:
  value: 100.0
  value-max: null
  unit: percent
  notes: Nearly 100%
bioavailability:
  value: null
  value-max: null
  notes: Undetermined
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal (86%) and renal (3%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic, CYP3A4 involved
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
  title: Rimonabant
  url: https://en.wikipedia.org/w/index.php?title=Rimonabant&oldid=1370371728
  revision: 1370371728
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rimonabant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rimonabant-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

CB1 inverse agonist withdrawn worldwide after psychiatric adverse effects; the definitive cautionary case for central CB1 blockade in obesity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rimonabant*](https://en.wikipedia.org/w/index.php?title=Rimonabant&oldid=1370371728) (revision 1370371728, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–9 d | Variable:; 6 to 9 days with normal BMI; 16 days if BMI >30 |
| Protein binding | 100 % | Nearly 100% |
| Bioavailability | - | Undetermined |
| Metabolism | hepatic | Hepatic, CYP3A4 involved |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Fecal (86%) and renal (3%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
