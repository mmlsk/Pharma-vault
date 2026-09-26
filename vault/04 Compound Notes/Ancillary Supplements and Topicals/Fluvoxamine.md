---
type: compound
schema-version: 2
compound-id: fluvoxamine-compound
name: Fluvoxamine
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
  value: 12.0
  value-max: 13.0
  unit: h
  notes: 12–13 hours (single dose), 22 hours (repeated dosing)
protein-binding:
  value: 77.0
  value-max: 80.0
  unit: percent
  notes: 77–80%
bioavailability:
  value: 53.0
  value-max: null
  notes: '53% (90% confidence interval: 44–62%)'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.04
  notes: Kidney (98%; 94% as metabolites, 4% as unchanged drug)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver (primarily O-demethylation); Major: CYP2D6 or CYP1A2; Minor: CYP3A4, CYP2C19, and/or CYP1A2'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Fluvoxamine
  url: https://en.wikipedia.org/w/index.php?title=Fluvoxamine&oldid=1368879073
  revision: 1368879073
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fluvoxamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluvoxamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluvoxamine*](https://en.wikipedia.org/w/index.php?title=Fluvoxamine&oldid=1368879073) (revision 1368879073, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–13 h | 12–13 hours (single dose), 22 hours (repeated dosing) |
| Protein binding | 77–80 % | 77–80% |
| Bioavailability | 53 % | 53% (90% confidence interval: 44–62%) |
| Metabolism | hepatic | Liver (primarily O-demethylation); Major: CYP2D6 or CYP1A2; Minor: CYP3A4, CYP2C19, and/or CYP1A2 |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.04 | Kidney (98%; 94% as metabolites, 4% as unchanged drug) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
