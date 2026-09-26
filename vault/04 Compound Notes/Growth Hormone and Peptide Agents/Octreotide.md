---
type: compound
schema-version: 2
compound-id: octreotide-compound
name: Octreotide
aliases: []
cluster: Growth Hormone and Peptide Agents
group: gh
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
  value: 1.7
  value-max: 1.9
  unit: h
  notes: 1.7–1.9 hours
protein-binding:
  value: 40.0
  value-max: 65.0
  unit: percent
  notes: 40–65%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60% (IM), 100% (SC)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (32%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- endocrine-feedback-disruption
- glucose-metabolism
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gh
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Octreotide
  url: https://en.wikipedia.org/w/index.php?title=Octreotide&oldid=1330263762
  revision: 1330263762
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Octreotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `octreotide-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]

## Source summary

Somatostatin analog that suppresses growth hormone (and other hormone) secretion, used to treat acromegaly and GH-secreting tumors -- the pharmacological opposite of a GH secretagogue.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Octreotide*](https://en.wikipedia.org/w/index.php?title=Octreotide&oldid=1330263762) (revision 1330263762, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.7–1.9 h | 1.7–1.9 hours |
| Protein binding | 40–65 % | 40–65% |
| Bioavailability | 60 % | 60% (IM), 100% (SC) |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Urine (32%) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
