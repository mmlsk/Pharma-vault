---
type: compound
schema-version: 2
compound-id: vorapaxar-compound
name: Vorapaxar
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
  value: 5.0
  value-max: 13.0
  unit: d
  notes: 5–13 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: ≥99%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: feces (58%), urine (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic (CYP3A4 and CYP2J2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Vorapaxar
  url: https://en.wikipedia.org/w/index.php?title=Vorapaxar&oldid=1328756248
  revision: 1328756248
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vorapaxar

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vorapaxar-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

PAR-1 antiplatelet drug with a very long effect; contraindicated after stroke because of intracranial bleeding risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vorapaxar*](https://en.wikipedia.org/w/index.php?title=Vorapaxar&oldid=1328756248) (revision 1328756248, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–13 d | 5–13 days |
| Protein binding | 99 % | ≥99% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | hepatic (CYP3A4 and CYP2J2) |
| CYP (metabolised by) | CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | feces (58%), urine (25%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
