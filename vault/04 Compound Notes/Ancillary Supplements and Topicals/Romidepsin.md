---
type: compound
schema-version: 2
compound-id: romidepsin-compound
name: Romidepsin
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
  value: 3.0
  value-max: null
  unit: h
  notes: 3 hours
protein-binding:
  value: 92.0
  value-max: 94.0
  unit: percent
  notes: 92–94%
bioavailability:
  value: null
  value-max: null
  notes: Not applicable (IV only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4-mediated)
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
  title: Romidepsin
  url: https://en.wikipedia.org/w/index.php?title=Romidepsin&oldid=1365485021
  revision: 1365485021
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 73a2028d-6735-4cd4-b63d-d072df9927a1
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73a2028d-6735-4cd4-b63d-d072df9927a1
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Romidepsin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `romidepsin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Cyclic peptide HDAC inhibitor with class I selectivity; carries QT prolongation risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Romidepsin*](https://en.wikipedia.org/w/index.php?title=Romidepsin&oldid=1365485021) (revision 1365485021, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3 hours |
| Protein binding | 92–94 % | 92–94% |
| Bioavailability | - | Not applicable (IV only) |
| Metabolism | hepatic | Liver (mostly CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 73a2028d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=73a2028d-6735-4cd4-b63d-d072df9927a1), label version 20260429. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3)
> - protein-binding: consistent (label values: 92, 94)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
