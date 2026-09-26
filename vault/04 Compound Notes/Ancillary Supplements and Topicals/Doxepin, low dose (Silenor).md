---
type: compound
schema-version: 2
compound-id: doxepin-low-dose-compound
name: Doxepin, low dose (Silenor)
aliases:
- Doxepin, low dose
- Silenor
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
  value-max: 24.0
  unit: h
  notes: 'Doxepin: 8–24 hours (mean 17 hours); Nordoxepin: 28–31 hours'
protein-binding:
  value: 76.0
  value-max: null
  unit: percent
  notes: 76%
bioavailability:
  value: 13.0
  value-max: 45.0
  notes: 13–45% (mean 29%)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Kidney: ~50%; Feces: minor'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6, CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Doxepin
  url: https://en.wikipedia.org/w/index.php?title=Doxepin&oldid=1357572789
  revision: 1357572789
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Doxepin, low dose (Silenor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxepin-low-dose-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Doxepin, low dose, Silenor

## Source summary

Tricyclic antidepressant repurposed at 3 mg and 6 mg, doses at which it acts as a nearly pure histamine H1 antagonist.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxepin*](https://en.wikipedia.org/w/index.php?title=Doxepin&oldid=1357572789) (revision 1357572789, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–24 h | Doxepin: 8–24 hours (mean 17 hours); Nordoxepin: 28–31 hours |
| Protein binding | 76 % | 76% |
| Bioavailability | 13–45 % | 13–45% (mean 29%) |
| Metabolism | hepatic | Liver (CYP2D6, CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Nordoxepin, glucuronide conjugates |
| Excretion | mainly urinary | Kidney: ~50%; Feces: minor |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
