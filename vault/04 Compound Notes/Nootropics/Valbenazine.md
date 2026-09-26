---
type: compound
schema-version: 2
compound-id: valbenazine-compound
name: Valbenazine
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
  value: 15.0
  value-max: 22.0
  unit: h
  notes: 15–22 hrs
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 60% urine, 30% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Activation by hydrolysis, deactivation by CYP3A, CYP2D6
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
  title: Valbenazine
  url: https://en.wikipedia.org/w/index.php?title=Valbenazine&oldid=1357688439
  revision: 1357688439
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Valbenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valbenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Selective VMAT2 inhibitor developed specifically for tardive dyskinesia, dosed once daily with less off-target activity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valbenazine*](https://en.wikipedia.org/w/index.php?title=Valbenazine&oldid=1357688439) (revision 1357688439, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–22 h | 15–22 hrs |
| Protein binding | 99 % | >99% |
| Metabolism | hepatic | Activation by hydrolysis, deactivation by CYP3A, CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | [+]-α-Dihydrotetrabenazine (active metabolite) |
| Excretion | - | 60% urine, 30% faeces |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
