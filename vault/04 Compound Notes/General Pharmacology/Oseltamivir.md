---
type: compound
schema-version: 2
compound-id: oseltamivir-compound
name: Oseltamivir
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
  value: 1.0
  value-max: 3.0
  unit: h
  notes: 1–3 hours, 6–10 hours (active metabolite)
protein-binding:
  value: 42.0
  value-max: null
  unit: percent
  notes: 42% (parent drug), 3% (active metabolite)
bioavailability:
  value: 80.0
  value-max: null
  notes: '>80%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (>90% as oseltamivir carboxylate), faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, to oseltamivir carboxylate
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
  title: Oseltamivir
  url: https://en.wikipedia.org/w/index.php?title=Oseltamivir&oldid=1368822991
  revision: 1368822991
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Oseltamivir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oseltamivir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Oral neuraminidase inhibitor for influenza, effective only if started within roughly 48 hours because it caps ongoing replication rather than clearing infected cells.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oseltamivir*](https://en.wikipedia.org/w/index.php?title=Oseltamivir&oldid=1368822991) (revision 1368822991, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–3 h | 1–3 hours, 6–10 hours (active metabolite) |
| Protein binding | 42 % | 42% (parent drug), 3% (active metabolite) |
| Bioavailability | 80 % | >80% |
| Metabolism | hepatic | Liver, to oseltamivir carboxylate |
| Excretion | mainly urinary | Urine (>90% as oseltamivir carboxylate), faeces |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
