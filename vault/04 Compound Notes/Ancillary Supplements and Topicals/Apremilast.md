---
type: compound
schema-version: 2
compound-id: apremilast-compound
name: Apremilast
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
  value-max: 9.0
  unit: h
  notes: 6–9 hours
protein-binding:
  value: 68.0
  value-max: null
  unit: percent
  notes: c. 68%
bioavailability:
  value: 73.0
  value-max: null
  notes: 73%; Tmax = ~2.5 hours
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (58%), faeces (39%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, with minor contributions from CYP2A6, CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2A6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2A6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Apremilast
  url: https://en.wikipedia.org/w/index.php?title=Apremilast&oldid=1329075237
  revision: 1329075237
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Apremilast

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `apremilast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits PDE4 to raise intracellular cAMP and dampen inflammatory cytokine production; emesis and weight loss are class-limiting.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Apremilast*](https://en.wikipedia.org/w/index.php?title=Apremilast&oldid=1329075237) (revision 1329075237, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–9 h | 6–9 hours |
| Protein binding | 68 % | c. 68% |
| Bioavailability | 73 % | 73%; Tmax = ~2.5 hours |
| Metabolism | hepatic | Liver (CYP3A4, with minor contributions from CYP2A6, CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2A6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethylapremilast glucuronide (and others) |
| Excretion | mainly urinary | Urine (58%), faeces (39%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
