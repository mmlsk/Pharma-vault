---
type: compound
schema-version: 2
compound-id: dapsone-topical-compound
name: Dapsone (topical gel 5% / 7.5%, Aczone)
aliases:
- Dapsone
- Aczone
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
  value: 20.0
  value-max: 30.0
  unit: h
  notes: 20 to 30 hours
protein-binding:
  value: 70.0
  value-max: 90.0
  unit: percent
  notes: 70 to 90%
bioavailability:
  value: 70.0
  value-max: 80.0
  notes: 70 to 80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2E1-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Dapsone
  url: https://en.wikipedia.org/w/index.php?title=Dapsone&oldid=1365208985
  revision: 1365208985
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dapsone (topical gel 5% / 7.5%, Aczone)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dapsone-topical-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Dapsone, Aczone

## Source summary

Topical sulfone for acne; the gel, not the oral tablet that causes haemolysis and methaemoglobinaemia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dapsone*](https://en.wikipedia.org/w/index.php?title=Dapsone&oldid=1365208985) (revision 1365208985, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–30 h | 20 to 30 hours |
| Protein binding | 70–90 % | 70 to 90% |
| Bioavailability | 70–80 % | 70 to 80% |
| Metabolism | hepatic | Liver (mostly CYP2E1-mediated) |
| CYP (metabolised by) | CYP2E1 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
