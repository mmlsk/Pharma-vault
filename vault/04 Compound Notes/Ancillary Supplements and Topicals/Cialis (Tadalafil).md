---
type: compound
schema-version: 2
compound-id: tadalafil-compound
name: Cialis (Tadalafil)
aliases:
- Cialis
- Tadalafil
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
  value: 17.5
  value-max: null
  unit: h
  notes: 17.5 hours
protein-binding:
  value: 94.0
  value-max: null
  unit: percent
  notes: 94%
bioavailability:
  value: null
  value-max: null
  notes: Varies
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (~61%), urine (~36%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (predominantly CYP3A4)
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
  title: Tadalafil
  url: https://en.wikipedia.org/w/index.php?title=Tadalafil&oldid=1366433668
  revision: 1366433668
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cialis (Tadalafil)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tadalafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Cialis, Tadalafil

## Source summary

Long-acting PDE5 inhibitor that lowers blood pressure and improves flow-mediated dilation on chronic dosing.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tadalafil*](https://en.wikipedia.org/w/index.php?title=Tadalafil&oldid=1366433668) (revision 1366433668, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 17.5 h | 17.5 hours |
| Protein binding | 94 % | 94% |
| Bioavailability | - | Varies |
| Metabolism | hepatic | Liver (predominantly CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Catechol metabolite |
| Excretion | mainly non-renal | Feces (~61%), urine (~36%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
