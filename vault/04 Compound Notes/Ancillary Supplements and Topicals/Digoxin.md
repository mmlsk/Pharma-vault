---
type: compound
schema-version: 2
compound-id: digoxin-compound
name: Digoxin
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
  value: 36.0
  value-max: 48.0
  unit: h
  notes: 36 to 48 hours ; (normal kidney function); 3.5 to 5 days ; (impaired kidney function)
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 60.0
  value-max: 80.0
  notes: 60 to 80% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (16%)
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
pk-source:
  type: wikipedia-infobox
  title: Digoxin
  url: https://en.wikipedia.org/w/index.php?title=Digoxin&oldid=1371893917
  revision: 1371893917
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Digoxin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `digoxin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Cardiac glycoside from foxglove; a positive inotrope and rate-control agent with a famously narrow therapeutic index.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Digoxin*](https://en.wikipedia.org/w/index.php?title=Digoxin&oldid=1371893917) (revision 1371893917, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36–48 h | 36 to 48 hours ; (normal kidney function); 3.5 to 5 days ; (impaired kidney function) |
| Protein binding | 25 % | 25% |
| Bioavailability | 60–80 % | 60 to 80% (by mouth) |
| Metabolism | hepatic | Liver (16%) |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
