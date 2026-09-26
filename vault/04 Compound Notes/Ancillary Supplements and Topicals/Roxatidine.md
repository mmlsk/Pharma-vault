---
type: compound
schema-version: 2
compound-id: roxatidine-compound
name: Roxatidine
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
  value-max: 7.0
  unit: h
  notes: 5–7 hours
protein-binding:
  value: 5.0
  value-max: 7.0
  unit: percent
  notes: 5–7%
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic deacetylation; Minor involvement of CYP2D6 and CYP2A6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Roxatidine acetate
  url: https://en.wikipedia.org/w/index.php?title=Roxatidine_acetate&oldid=1330111613
  revision: 1330111613
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Roxatidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `roxatidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Roxatidine acetate*](https://en.wikipedia.org/w/index.php?title=Roxatidine_acetate&oldid=1330111613) (revision 1330111613, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5–7 hours |
| Protein binding | 5–7 % | 5–7% |
| Bioavailability | 80–90 % | 80–90% |
| Metabolism | hepatic | Hepatic deacetylation; Minor involvement of CYP2D6 and CYP2A6 |
| CYP (metabolised by) | CYP2A6, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
