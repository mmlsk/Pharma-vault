---
type: compound
schema-version: 2
compound-id: tesamorelin-compound
name: Tesamorelin
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
  value: 26.0
  value-max: 38.0
  unit: min
  notes: 26–38 min
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 4.0
  value-max: null
  notes: ≤4%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal/proteolysis
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Proteolysis
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
  title: Tesamorelin
  url: https://en.wikipedia.org/w/index.php?title=Tesamorelin&oldid=1373828962
  revision: 1373828962
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tesamorelin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tesamorelin-compound`
- **Source group:** GH & Secretagogues (`gh`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]

## Source summary

GHRH analog peptide, FDA-approved for reducing visceral fat, notably in HIV-associated lipodystrophy.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tesamorelin*](https://en.wikipedia.org/w/index.php?title=Tesamorelin&oldid=1373828962) (revision 1373828962, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26–38 min | 26–38 min |
| Bioavailability | 4 % | ≤4% |
| Metabolism | - | Proteolysis |
| Excretion | mainly urinary | Renal/proteolysis |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `glucose-metabolism`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Glucose and Incretin Signaling]]
- [[HPG and GH-IGF-1 Axes]]
