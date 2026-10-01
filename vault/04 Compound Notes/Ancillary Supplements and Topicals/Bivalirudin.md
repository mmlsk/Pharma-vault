---
type: compound
schema-version: 2
compound-id: bivalirudin-compound
name: Bivalirudin
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
  value: 25.0
  value-max: null
  unit: min
  notes: ~25 minutes in patients with normal renal function
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: N/A (IV application only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Angiomax is cleared from plasma by a combination of renal mechanisms and proteolytic cleavage
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
  title: Bivalirudin
  url: https://en.wikipedia.org/w/index.php?title=Bivalirudin&oldid=1329244447
  revision: 1329244447
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 42aa2630-83d6-433d-8277-0f672cf8d71d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42aa2630-83d6-433d-8277-0f672cf8d71d
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Bivalirudin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bivalirudin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Short-acting intravenous direct thrombin inhibitor used during coronary intervention.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bivalirudin*](https://en.wikipedia.org/w/index.php?title=Bivalirudin&oldid=1329244447) (revision 1329244447, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 25 min | ~25 minutes in patients with normal renal function |
| Bioavailability | - | N/A (IV application only) |
| Metabolism | - | Angiomax is cleared from plasma by a combination of renal mechanisms and proteolytic cleavage |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 42aa2630…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=42aa2630-83d6-433d-8277-0f672cf8d71d), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.417, 0.567, 0.95, 3.5)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
