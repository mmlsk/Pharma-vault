---
type: compound
schema-version: 2
compound-id: hydroxocobalamin-compound
name: Hydroxocobalamin
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
  value: 6.0
  value-max: null
  unit: d
  notes: ~6 days
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: Very high (90%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Primarily liver, cobalamins are absorbed in the ileum and stored in the liver.
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
- pk-fda-discrepant
pk-source:
  type: wikipedia-infobox
  title: Hydroxocobalamin
  url: https://en.wikipedia.org/w/index.php?title=Hydroxocobalamin&oldid=1372811243
  revision: 1372811243
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: discrepant
  set-id: d56fcc8d-bd64-46ab-b0c0-2124bd745a6b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Hydroxocobalamin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxocobalamin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Vitamin B12 form used as the first-line cyanide antidote, binding cyanide directly to form cyanocobalamin.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxocobalamin*](https://en.wikipedia.org/w/index.php?title=Hydroxocobalamin&oldid=1372811243) (revision 1372811243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 d | ~6 days |
| Protein binding | 90 % | Very high (90%) |
| Metabolism | hepatic | Primarily liver, cobalamins are absorbed in the ileum and stored in the liver. |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set d56fcc8d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=d56fcc8d-bd64-46ab-b0c0-2124bd745a6b), label version 20230427. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 26, 31)
> - protein-binding: no-label-value (label values: -)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
