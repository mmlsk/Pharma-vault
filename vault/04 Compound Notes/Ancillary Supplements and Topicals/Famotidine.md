---
type: compound
schema-version: 2
compound-id: famotidine-compound
name: Famotidine
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
  value: 2.5
  value-max: 3.5
  unit: h
  notes: 2.5–3.5 hours
protein-binding:
  value: 15.0
  value-max: 20.0
  unit: percent
  notes: 15–20%
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: 'Oral: 40–45%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.3
  notes: Kidney (25–30% unchanged [Oral])
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP1A2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Famotidine
  url: https://en.wikipedia.org/w/index.php?title=Famotidine&oldid=1360627089
  revision: 1360627089
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Famotidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `famotidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Famotidine*](https://en.wikipedia.org/w/index.php?title=Famotidine&oldid=1360627089) (revision 1360627089, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–3.5 h | 2.5–3.5 hours |
| Protein binding | 15–20 % | 15–20% |
| Bioavailability | 40–45 % | Oral: 40–45% |
| Metabolism | hepatic | CYP1A2 |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Famotidine S-oxide |
| Excretion | mainly urinary · fe 0.3 | Kidney (25–30% unchanged [Oral]) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
