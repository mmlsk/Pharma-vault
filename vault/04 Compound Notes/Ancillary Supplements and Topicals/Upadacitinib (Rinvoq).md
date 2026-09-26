---
type: compound
schema-version: 2
compound-id: upadacitinib-compound
name: Upadacitinib (Rinvoq)
aliases:
- Upadacitinib
- Rinvoq
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
  value: null
  value-max: null
  unit: null
  notes: 9–14 (6–15) hours
protein-binding:
  value: 52.0
  value-max: null
  unit: percent
  notes: 52%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.38
  notes: Mainly unchanged in feces (38%) and urine (24%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A major, CYP2D6 minor)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Upadacitinib
  url: https://en.wikipedia.org/w/index.php?title=Upadacitinib&oldid=1370557393
  revision: 1370557393
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Upadacitinib (Rinvoq)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `upadacitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Upadacitinib, Rinvoq

## Source summary

Oral JAK1 inhibitor for multiple inflammatory diseases with boxed warnings for infection, malignancy, thrombosis, and cardiovascular events.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Upadacitinib*](https://en.wikipedia.org/w/index.php?title=Upadacitinib&oldid=1370557393) (revision 1370557393, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 9–14 (6–15) hours |
| Protein binding | 52 % | 52% |
| Metabolism | hepatic | Liver (CYP3A major, CYP2D6 minor) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | M4, an acyl glucuronide |
| Excretion | - · fe 0.38 | Mainly unchanged in feces (38%) and urine (24%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
