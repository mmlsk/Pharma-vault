---
type: compound
schema-version: 2
compound-id: buspirone-drug-compound
name: Buspirone
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
  value: 2.5
  value-max: null
  unit: h
  notes: 2.5 hours
protein-binding:
  value: 86.0
  value-max: 95.0
  unit: percent
  notes: 86–95%
bioavailability:
  value: 3.9
  value-max: null
  notes: 3.9%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Urine: 29–63%; Feces: 18–38%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (via CYP3A4)
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
  title: Buspirone
  url: https://en.wikipedia.org/w/index.php?title=Buspirone&oldid=1365708327
  revision: 1365708327
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Buspirone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `buspirone-drug-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Azapirone anxiolytic acting through 5-HT1A partial agonism, with no sedation, no dependence and a two-week onset.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Buspirone*](https://en.wikipedia.org/w/index.php?title=Buspirone&oldid=1365708327) (revision 1365708327, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5 h | 2.5 hours |
| Protein binding | 86–95 % | 86–95% |
| Bioavailability | 3.9 % | 3.9% |
| Metabolism | hepatic | Liver (via CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-OH-Buspirone;; 6-OH-Buspirone;; 8-OH-Buspirone;; 1-PP |
| Excretion | - | Urine: 29–63%; Feces: 18–38% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
