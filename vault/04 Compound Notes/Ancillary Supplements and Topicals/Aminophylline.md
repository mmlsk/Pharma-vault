---
type: compound
schema-version: 2
compound-id: aminophylline-compound
name: Aminophylline
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
  value: 7.0
  value-max: 9.0
  unit: h
  notes: 7–9 hours
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Aminophylline
  url: https://en.wikipedia.org/w/index.php?title=Aminophylline&oldid=1329963873
  revision: 1329963873
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 819207a2-0c37-b275-e053-2a91aa0afb36
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=819207a2-0c37-b275-e053-2a91aa0afb36
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: discrepant
---

# Aminophylline

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aminophylline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits PDE5 so nitric-oxide/cGMP vasodilation persists in corporal and pulmonary vascular smooth muscle; non-selective PDE inhibitor and adenosine antagonist.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aminophylline*](https://en.wikipedia.org/w/index.php?title=Aminophylline&oldid=1329963873) (revision 1329963873, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–9 h | 7–9 hours |
| Protein binding | 60 % | 60% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 819207a2…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=819207a2-0c37-b275-e053-2a91aa0afb36), label version 20260619. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: discrepant (label values: 40)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
