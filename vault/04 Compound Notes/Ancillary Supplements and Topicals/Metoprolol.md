---
type: compound
schema-version: 2
compound-id: metoprolol-compound
name: Metoprolol
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
  value-max: 7.0
  unit: h
  notes: 3–7 hours
protein-binding:
  value: 12.0
  value-max: null
  unit: percent
  notes: 12%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50% (single dose);; 70% (repeated administration)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP2D6, CYP3A4
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Metoprolol
  url: https://en.wikipedia.org/w/index.php?title=Metoprolol&oldid=1376129637
  revision: 1376129637
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Metoprolol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `metoprolol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

The most commonly prescribed beta-1 selective blocker; effective on blood pressure, without nebivolol's endothelial effect.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Metoprolol*](https://en.wikipedia.org/w/index.php?title=Metoprolol&oldid=1376129637) (revision 1376129637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | 3–7 hours |
| Protein binding | 12 % | 12% |
| Bioavailability | 50 % | 50% (single dose);; 70% (repeated administration) |
| Metabolism | hepatic | Liver via CYP2D6, CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
