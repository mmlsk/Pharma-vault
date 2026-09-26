---
type: compound
schema-version: 2
compound-id: amphetamine-compound
name: Amphetamine
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
  value: 9.0
  value-max: 11.0
  unit: h
  notes: 'D-amph: 9–11 hours; L-amph: 11–14 hours; pH-dependent: 7–34 hours'
protein-binding:
  value: 16.0
  value-max: 20.0
  unit: percent
  notes: 16-20%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ~90%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Primarily renal;; pH-dependent range: 1–75%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, DBH, FMO3
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Amphetamine
  url: https://en.wikipedia.org/w/index.php?title=Amphetamine&oldid=1376818496
  revision: 1376818496
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Amphetamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amphetamine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]

## Source summary

Reverses the dopamine transporter into efflux rather than merely blocking reuptake, which is why it releases transmitter instead of only preserving it. Meta-analysis in healthy non-sleep-deprived adults found no cognitive enhancement.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amphetamine*](https://en.wikipedia.org/w/index.php?title=Amphetamine&oldid=1376818496) (revision 1376818496, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | D-amph: 9–11 hours; L-amph: 11–14 hours; pH-dependent: 7–34 hours |
| Protein binding | 16–20 % | 16-20% |
| Bioavailability | 90 % | Oral: ~90% |
| Metabolism | hepatic | CYP2D6, DBH, FMO3 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-hydroxyamphetamine, 4-hydroxynorephedrine, 4-hydroxyphenylacetone, N-hydroxyamphetamine, benzoic acid, hippuric acid, norephedrine, phenylacetone |
| Excretion | - | Primarily renal;; pH-dependent range: 1–75% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
