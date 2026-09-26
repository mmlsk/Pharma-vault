---
type: compound
schema-version: 2
compound-id: valproate-compound
name: Sodium Valproate
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
  value: 9.0
  value-max: 16.0
  unit: h
  notes: 9–16 hours
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90%
bioavailability:
  value: 90.0
  value-max: null
  notes: ~90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly via hepatic metabolism, <3% in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver—glucuronide conjugation 30–50%; mitochondrial β-oxidation over 40%; oxidation, hydroxylation, and dehydrogenation 15–20%
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
  title: Valproate
  url: https://en.wikipedia.org/w/index.php?title=Valproate&oldid=1373159311
  revision: 1373159311
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sodium Valproate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `valproate-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Broad-spectrum anticonvulsant and mood stabiliser with multiple mechanisms and the most serious teratogenic profile of the class.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Valproate*](https://en.wikipedia.org/w/index.php?title=Valproate&oldid=1373159311) (revision 1373159311, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–16 h | 9–16 hours |
| Protein binding | 80–90 % | 80–90% |
| Bioavailability | 90 % | ~90% |
| Metabolism | hepatic | Liver—glucuronide conjugation 30–50%; mitochondrial β-oxidation over 40%; oxidation, hydroxylation, and dehydrogenation 15–20% |
| Excretion | - | Mostly via hepatic metabolism, <3% in urine |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
