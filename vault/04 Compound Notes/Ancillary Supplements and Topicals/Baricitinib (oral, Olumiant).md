---
type: compound
schema-version: 2
compound-id: baricitinib-compound
name: Baricitinib (oral, Olumiant)
aliases:
- Baricitinib
- Olumiant
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
  value: 12.5
  value-max: null
  unit: h
  notes: 12.5 hours
protein-binding:
  value: 50.0
  value-max: null
  unit: percent
  notes: 50%
bioavailability:
  value: 79.0
  value-max: null
  notes: 79%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 75% urine, 20% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4 (<10%)
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
  title: Baricitinib
  url: https://en.wikipedia.org/w/index.php?title=Baricitinib&oldid=1352068579
  revision: 1352068579
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Baricitinib (oral, Olumiant)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `baricitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Baricitinib, Olumiant

## Source summary

Oral JAK1/JAK2 inhibitor, the first systemic drug approved anywhere for severe alopecia areata.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Baricitinib*](https://en.wikipedia.org/w/index.php?title=Baricitinib&oldid=1352068579) (revision 1352068579, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.5 h | 12.5 hours |
| Protein binding | 50 % | 50% |
| Bioavailability | 79 % | 79% |
| Metabolism | hepatic | CYP3A4 (<10%) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 75% urine, 20% faeces |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
