---
type: compound
schema-version: 2
compound-id: iloperidone-compound
name: Iloperidone
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
  value: 18.0
  value-max: 33.0
  unit: h
  notes: 18–33 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: ~97%
bioavailability:
  value: 96.0
  value-max: null
  notes: 96% (oral; Tmax = 2–4 hours)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: urine (45.1–58.2%) and feces (19.9–22.1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2D6-mediated hydroxylation and CYP3A4-mediated O-demethylation)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Iloperidone
  url: https://en.wikipedia.org/w/index.php?title=Iloperidone&oldid=1324495639
  revision: 1324495639
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Iloperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `iloperidone-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Atypical antipsychotic with strong alpha-1 blockade requiring slow titration for orthostatic hypotension.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Iloperidone*](https://en.wikipedia.org/w/index.php?title=Iloperidone&oldid=1324495639) (revision 1324495639, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 18–33 h | 18–33 hours |
| Protein binding | 97 % | ~97% |
| Bioavailability | 96 % | 96% (oral; Tmax = 2–4 hours) |
| Metabolism | hepatic | Hepatic (CYP2D6-mediated hydroxylation and CYP3A4-mediated O-demethylation) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | urine (45.1–58.2%) and feces (19.9–22.1%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
