---
type: compound
schema-version: 2
compound-id: phenylephrine-compound
name: Phenylephrine
aliases: []
cluster: Cardiovascular and Lipid Agents
group: cardio
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
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 38.0
  value-max: null
  notes: 'Oral: conflicting—38% or 0.003%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.16
  notes: 'Urine: 86% (3–16% unchanged)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and intestines (via oxidative deamination by MAO-A and MAO-B; sulfation; glucuronidation)
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Phenylephrine
  url: https://en.wikipedia.org/w/index.php?title=Phenylephrine&oldid=1359707321
  revision: 1359707321
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Phenylephrine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenylephrine-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]

## Source summary

Pure alpha-1 agonist used as a vasopressor, a mydriatic and a decongestant, though its oral decongestant efficacy is now doubted.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenylephrine*](https://en.wikipedia.org/w/index.php?title=Phenylephrine&oldid=1359707321) (revision 1359707321, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3hours |
| Protein binding | 95 % | 95% |
| Bioavailability | 38 % | Oral: conflicting—38% or 0.003% |
| Metabolism | hepatic | Liver and intestines (via oxidative deamination by MAO-A and MAO-B; sulfation; glucuronidation) |
| Metabolites | - | • [https://pubchem.ncbi.nlm.nih.gov/compound/3-Hydroxymandelic-acid meta-Hydroxymandelic acid]; • Sulfate conjugates; • Glucuronide conjugates |
| Excretion | mainly urinary · fe 0.16 | Urine: 86% (3–16% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
