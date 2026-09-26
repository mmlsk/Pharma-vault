---
type: compound
schema-version: 2
compound-id: mirtazapine-compound
name: Mirtazapine
aliases: []
cluster: Nootropics
group: neuropsych
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
  value: 20.0
  value-max: 40.0
  unit: h
  notes: 20–40 hours
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: 85%
bioavailability:
  value: 50.0
  value-max: null
  notes: 50%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 75%; Feces: 15%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2, CYP2D6, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Mirtazapine
  url: https://en.wikipedia.org/w/index.php?title=Mirtazapine&oldid=1373834311
  revision: 1373834311
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Mirtazapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mirtazapine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Noradrenergic and specific serotonergic antidepressant that works by blocking autoreceptors rather than by inhibiting reuptake.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mirtazapine*](https://en.wikipedia.org/w/index.php?title=Mirtazapine&oldid=1373834311) (revision 1373834311, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–40 h | 20–40 hours |
| Protein binding | 85 % | 85% |
| Bioavailability | 50 % | 50% |
| Metabolism | hepatic | Liver (CYP1A2, CYP2D6, CYP3A4) |
| CYP (metabolised by) | CYP1A2, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylmirtazapine (contributes 3–10% of activity) |
| Excretion | mainly urinary | Urine: 75%; Feces: 15% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
