---
type: compound
schema-version: 2
compound-id: rasagiline-compound
name: Rasagiline (Azilect)
aliases:
- Rasagiline
- Azilect
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
  notes: 3hours
protein-binding:
  value: 88.0
  value-max: 94.0
  unit: percent
  notes: 88–94%
bioavailability:
  value: 36.0
  value-max: null
  notes: 36%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 62%; Feces: 7%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Rasagiline
  url: https://en.wikipedia.org/w/index.php?title=Rasagiline&oldid=1375491838
  revision: 1375491838
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rasagiline (Azilect)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rasagiline-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Rasagiline, Azilect

## Source summary

Selective irreversible MAO-B inhibitor of the propargylamine class, given once daily for Parkinson's disease.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rasagiline*](https://en.wikipedia.org/w/index.php?title=Rasagiline&oldid=1375491838) (revision 1375491838, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | 3hours |
| Protein binding | 88–94 % | 88–94% |
| Bioavailability | 36 % | 36% |
| Metabolism | hepatic | Liver (CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • (R)-1-Aminoindan; • 3-OH-PAI; • 3-OH-AI |
| Excretion | mainly urinary | Urine: 62%; Feces: 7% |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
