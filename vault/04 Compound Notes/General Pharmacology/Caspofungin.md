---
type: compound
schema-version: 2
compound-id: caspofungin-compound
name: Caspofungin
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  notes: 9–11 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: ~97%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (intravenous use only)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (41%), feces (35%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Peptide hydrolysis, N-acetylation
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
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Caspofungin
  url: https://en.wikipedia.org/w/index.php?title=Caspofungin&oldid=1369632479
  revision: 1369632479
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Caspofungin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `caspofungin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

First echinocandin, fungicidal against Candida and fungistatic against Aspergillus, targeting a wall component humans do not have.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Caspofungin*](https://en.wikipedia.org/w/index.php?title=Caspofungin&oldid=1369632479) (revision 1369632479, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–11 h | 9–11 hours |
| Protein binding | 97 % | ~97% |
| Bioavailability | 100 % | 100% (intravenous use only) |
| Metabolism | - | Peptide hydrolysis, N-acetylation |
| Excretion | - | Kidney (41%), feces (35%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
