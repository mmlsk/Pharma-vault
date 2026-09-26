---
type: compound
schema-version: 2
compound-id: aripiprazole-compound
name: Aripiprazole
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
  value: 75.0
  value-max: null
  unit: h
  notes: 75 hours (active metabolite is 94 hours)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 87.0
  value-max: null
  notes: 87%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.01
  notes: Kidney (27%; <1% unchanged); feces (60%; 18% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly via CYP3A4 and 2D6)
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
  title: Aripiprazole
  url: https://en.wikipedia.org/w/index.php?title=Aripiprazole&oldid=1375693144
  revision: 1375693144
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Aripiprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aripiprazole-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Dopamine D2 partial agonist, the first of the third-generation antipsychotics, acting as a functional stabiliser rather than a blocker.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aripiprazole*](https://en.wikipedia.org/w/index.php?title=Aripiprazole&oldid=1375693144) (revision 1375693144, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 75 h | 75 hours (active metabolite is 94 hours) |
| Protein binding | 99 % | >99% |
| Bioavailability | 87 % | 87% |
| Metabolism | hepatic | Liver (mostly via CYP3A4 and 2D6) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dehydroaripiprazole |
| Excretion | mainly non-renal · fe 0.01 | Kidney (27%; <1% unchanged); feces (60%; 18% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
