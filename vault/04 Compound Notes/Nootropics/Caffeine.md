---
type: compound
schema-version: 2
compound-id: caffeine-compound
name: Caffeine
aliases: []
cluster: Nootropics
group: nootropic
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
  value-max: 7.0
  unit: h
  notes: 'Adults: 3–7 hours; Infants (full term): 8 hours; Infants (premature): 100 hours'
protein-binding:
  value: 10.0
  value-max: 36.0
  unit: percent
  notes: 10–36%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (100%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Primary: CYP1A2; Minor: CYP2E1, CYP3A4,; CYP2C8, CYP2C9'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C8
  - CYP2C9
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C8, CYP2C9, CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Caffeine
  url: https://en.wikipedia.org/w/index.php?title=Caffeine&oldid=1375462795
  revision: 1375462795
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Caffeine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `caffeine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]

## Source summary

The most widely used psychoactive compound in the world. Blocks adenosine receptors rather than adding stimulation, so it masks accumulated sleep pressure without repaying it. Also studied topically on the scalp against androgen-driven follicle suppression.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Caffeine*](https://en.wikipedia.org/w/index.php?title=Caffeine&oldid=1375462795) (revision 1375462795, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | Adults: 3–7 hours; Infants (full term): 8 hours; Infants (premature): 100 hours |
| Protein binding | 10–36 % | 10–36% |
| Bioavailability | 99 % | 99% |
| Metabolism | hepatic | Primary: CYP1A2; Minor: CYP2E1, CYP3A4,; CYP2C8, CYP2C9 |
| CYP (metabolised by) | CYP1A2, CYP2C8, CYP2C9, CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Paraxanthine 84%; Theobromine 12%; Theophylline 4% |
| Excretion | mainly urinary | Urine (100%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
