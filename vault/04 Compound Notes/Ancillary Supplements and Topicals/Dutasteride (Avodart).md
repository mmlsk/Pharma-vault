---
type: compound
schema-version: 2
compound-id: dutasteride-compound
name: Dutasteride (Avodart)
aliases:
- Dutasteride
- Avodart
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
  value: 4.0
  value-max: 5.0
  unit: wk
  notes: 4–5 weeks
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.05
  notes: 'Feces: 40% (metabolites); Urine: 5% (unchanged)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Dutasteride
  url: https://en.wikipedia.org/w/index.php?title=Dutasteride&oldid=1375820985
  revision: 1375820985
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dutasteride (Avodart)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dutasteride-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Dutasteride, Avodart

## Source summary

Dual type-1/type-2 5-alpha-reductase inhibitor, more complete DHT suppression than finasteride (which mainly hits type 2), sometimes used off-label for hair loss.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dutasteride*](https://en.wikipedia.org/w/index.php?title=Dutasteride&oldid=1375820985) (revision 1375820985, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–5 wk | 4–5 weeks |
| Protein binding | 99 % | 99% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 4'-Hydroxydutasteride; • 6'-Hydroxydutasteride; • 1,2-Dihydrodutasteride; (All three active) |
| Excretion | - · fe 0.05 | Feces: 40% (metabolites); Urine: 5% (unchanged) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
