---
type: compound
schema-version: 2
compound-id: lanreotide-compound
name: Lanreotide
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
  value: 2.0
  value-max: null
  unit: h
  notes: 2 hours (immediate release); 5 days (sustained release)
protein-binding:
  value: 78.0
  value-max: null
  unit: percent
  notes: 78%
bioavailability:
  value: 80.0
  value-max: null
  notes: Approximately 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly bile duct
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: In GI tract
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
  title: Lanreotide
  url: https://en.wikipedia.org/w/index.php?title=Lanreotide&oldid=1330106317
  revision: 1330106317
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Lanreotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lanreotide-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]

## Source summary

Long-acting somatostatin analog used to suppress excess growth hormone secretion.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lanreotide*](https://en.wikipedia.org/w/index.php?title=Lanreotide&oldid=1330106317) (revision 1330106317, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours (immediate release); 5 days (sustained release) |
| Protein binding | 78 % | 78% |
| Bioavailability | 80 % | Approximately 80% |
| Metabolism | - | In GI tract |
| Excretion | - | Mostly bile duct |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
