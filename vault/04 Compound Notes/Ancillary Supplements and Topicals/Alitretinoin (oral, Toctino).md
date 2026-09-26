---
type: compound
schema-version: 2
compound-id: alitretinoin-oral-compound
name: Alitretinoin (oral, Toctino)
aliases:
- Alitretinoin
- Toctino
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
  value: 2.0
  value-max: 10.0
  unit: h
  notes: 2–10 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Highly bound, no exact figure available
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (64%), faeces (30%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4-mediated oxidation, also isomerised to tretinoin)
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
  title: Alitretinoin
  url: https://en.wikipedia.org/w/index.php?title=Alitretinoin&oldid=1361245894
  revision: 1361245894
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Alitretinoin (oral, Toctino)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alitretinoin-oral-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Alitretinoin, Toctino

## Source summary

Oral 9-cis retinoic acid licensed for severe chronic hand eczema; the systemic drug, not the Kaposi sarcoma gel.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alitretinoin*](https://en.wikipedia.org/w/index.php?title=Alitretinoin&oldid=1361245894) (revision 1361245894, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–10 h | 2–10 hours |
| Protein binding | - | Highly bound, no exact figure available |
| Metabolism | hepatic | Liver (CYP3A4-mediated oxidation, also isomerised to tretinoin) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (64%), faeces (30%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
