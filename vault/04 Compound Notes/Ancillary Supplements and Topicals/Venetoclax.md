---
type: compound
schema-version: 2
compound-id: venetoclax-compound
name: Venetoclax
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
  value: 26.0
  value-max: null
  unit: h
  notes: ~26 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.208
  notes: Feces (>99.9%; 20.8% as unchanged venetoclax)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP3A5)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Venetoclax
  url: https://en.wikipedia.org/w/index.php?title=Venetoclax&oldid=1349607450
  revision: 1349607450
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Venetoclax

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `venetoclax-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Selective BCL-2 inhibitor; the first clinically successful BH3 mimetic. Tumour lysis risk requires ramp-up dosing.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Venetoclax*](https://en.wikipedia.org/w/index.php?title=Venetoclax&oldid=1349607450) (revision 1349607450, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26 h | ~26 hours |
| Protein binding | 99.9 % | >99.9% |
| Metabolism | hepatic | Liver (CYP3A4, CYP3A5) |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal · fe 0.208 | Feces (>99.9%; 20.8% as unchanged venetoclax) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
