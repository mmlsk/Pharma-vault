---
type: compound
schema-version: 2
compound-id: silodosin-compound
name: Silodosin
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
  value: 8.0
  value-max: null
  unit: h
  notes: 13±8 hours
protein-binding:
  value: 96.6
  value-max: null
  unit: percent
  notes: 96.6%
bioavailability:
  value: 32.0
  value-max: null
  notes: 32%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 33.5% Kidney, 54.9% fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver glucuronidation (UGT2B7-mediated); also minor CYP3A4 involvement
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
  title: Silodosin
  url: https://en.wikipedia.org/w/index.php?title=Silodosin&oldid=1370555904
  revision: 1370555904
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Silodosin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `silodosin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Blocks alpha-1 adrenoceptors to relax vascular or prostatic smooth muscle; first-dose hypotension and floppy-iris syndrome are class effects; alpha-1A selective.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Silodosin*](https://en.wikipedia.org/w/index.php?title=Silodosin&oldid=1370555904) (revision 1370555904, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8 h | 13±8 hours |
| Protein binding | 96.6 % | 96.6% |
| Bioavailability | 32 % | 32% |
| Metabolism | hepatic | Liver glucuronidation (UGT2B7-mediated); also minor CYP3A4 involvement |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 33.5% Kidney, 54.9% fecal |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
