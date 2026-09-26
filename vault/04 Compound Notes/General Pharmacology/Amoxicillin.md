---
type: compound
schema-version: 2
compound-id: amoxicillin-compound
name: Amoxicillin
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
  value: 61.3
  value-max: null
  unit: min
  notes: 61.3minutes (~1hour)
protein-binding:
  value: 17.0
  value-max: null
  unit: percent
  notes: 17%
bioavailability:
  value: 60.0
  value-max: null
  notes: 'Oral: 60%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 70–78% (after 6hours)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation, oxidative deamination, aliphatic chain oxidation, decarboxylation, glucuronidation
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
  title: Amoxicillin
  url: https://en.wikipedia.org/w/index.php?title=Amoxicillin&oldid=1363961139
  revision: 1363961139
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Amoxicillin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `amoxicillin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Aminopenicillin with useful oral bioavailability and gram-positive plus limited gram-negative cover. First-line for otitis, sinusitis and community pneumonia, and the backbone of Helicobacter eradication regimens.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Amoxicillin*](https://en.wikipedia.org/w/index.php?title=Amoxicillin&oldid=1363961139) (revision 1363961139, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 61.3 min | 61.3minutes (~1hour) |
| Protein binding | 17 % | 17% |
| Bioavailability | 60 % | Oral: 60% |
| Metabolism | hepatic | Hydroxylation, oxidative deamination, aliphatic chain oxidation, decarboxylation, glucuronidation |
| Metabolites | - | Seven |
| Excretion | mainly urinary | Urine: 70–78% (after 6hours) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
