---
type: compound
schema-version: 2
compound-id: vigabatrin-compound
name: Vigabatrin
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
  value: 5.0
  value-max: 8.0
  unit: h
  notes: 5–8 hours in young adults, 12–13 hours in the elderly.
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0%
bioavailability:
  value: 80.0
  value-max: 90.0
  notes: 80–90%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: not metabolized
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
  title: Vigabatrin
  url: https://en.wikipedia.org/w/index.php?title=Vigabatrin&oldid=1374816235
  revision: 1374816235
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Vigabatrin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `vigabatrin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Irreversible GABA transaminase inhibitor, uniquely effective in infantile spasms and causing permanent visual field loss in a third of patients.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Vigabatrin*](https://en.wikipedia.org/w/index.php?title=Vigabatrin&oldid=1374816235) (revision 1374816235, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–8 h | 5–8 hours in young adults, 12–13 hours in the elderly. |
| Protein binding | 0 % | 0% |
| Bioavailability | 80–90 % | 80–90% |
| Metabolism | - | not metabolized |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
