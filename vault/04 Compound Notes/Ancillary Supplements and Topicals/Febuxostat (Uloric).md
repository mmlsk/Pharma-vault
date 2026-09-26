---
type: compound
schema-version: 2
compound-id: febuxostat-compound
name: Febuxostat (Uloric)
aliases:
- Febuxostat
- Uloric
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
  value-max: 8.0
  unit: h
  notes: ~5–8 hours
protein-binding:
  value: 99.2
  value-max: null
  unit: percent
  notes: 99.2% to albumin
bioavailability:
  value: 84.0
  value-max: null
  notes: ≥84% absorbed
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.03
  notes: Urine (~49%, mostly as metabolites, 3% as unchanged drug); feces (~45%, mostly as metabolites, 12% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: via CYP1A1, 1A2, 2C8, 2C9, UGT1A1, 1A8, 1A9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Febuxostat
  url: https://en.wikipedia.org/w/index.php?title=Febuxostat&oldid=1360922496
  revision: 1360922496
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Febuxostat (Uloric)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `febuxostat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Febuxostat, Uloric

## Source summary

Non-purine xanthine oxidase inhibitor carrying a cardiovascular mortality boxed warning.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Febuxostat*](https://en.wikipedia.org/w/index.php?title=Febuxostat&oldid=1360922496) (revision 1360922496, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | ~5–8 hours |
| Protein binding | 99.2 % | 99.2% to albumin |
| Bioavailability | 84 % | ≥84% absorbed |
| Metabolism | hepatic | via CYP1A1, 1A2, 2C8, 2C9, UGT1A1, 1A8, 1A9 |
| CYP (metabolised by) | CYP1A1 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.03 | Urine (~49%, mostly as metabolites, 3% as unchanged drug); feces (~45%, mostly as metabolites, 12% as unchanged drug) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
