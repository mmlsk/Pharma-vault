---
type: compound
schema-version: 2
compound-id: itraconazole-compound
name: Itraconazole
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
  value: 21.0
  value-max: null
  unit: h
  notes: 21 hours
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
bioavailability:
  value: 55.0
  value-max: null
  notes: ~55%, maximal if taken with full meal
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Kidney (35%), faeces (54%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensive in liver (CYP3A4)
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Itraconazole
  url: https://en.wikipedia.org/w/index.php?title=Itraconazole&oldid=1370370404
  revision: 1370370404
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 6df5ff94-47ba-4881-abb4-b321e35a6955
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6df5ff94-47ba-4881-abb4-b321e35a6955
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Itraconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `itraconazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Disrupts fungal ergosterol synthesis or membrane function; interaction and organ-toxicity profiles differ substantially.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Itraconazole*](https://en.wikipedia.org/w/index.php?title=Itraconazole&oldid=1370370404) (revision 1370370404, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 21 h | 21 hours |
| Protein binding | 99.8 % | 99.8% |
| Bioavailability | 55 % | ~55%, maximal if taken with full meal |
| Metabolism | hepatic | Extensive in liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxy-itraconazole, keto-itraconazole,; N-desalkyl-itraconazole |
| Excretion | mainly non-renal | Kidney (35%), faeces (54%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 6df5ff94…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6df5ff94-47ba-4881-abb4-b321e35a6955), label version 20260818. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 16, 28, 34, 37, 42, 48)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
