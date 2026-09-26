---
type: compound
schema-version: 2
compound-id: lenvatinib-compound
name: Lenvatinib
aliases: []
cluster: Growth Hormone and Peptide Agents
group: fgfr
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
  value: 28.0
  value-max: null
  unit: h
  notes: 28 hours
protein-binding:
  value: 98.0
  value-max: 99.0
  unit: percent
  notes: 98–99%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85% (estimated)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: ~65% feces, 25% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, aldehyde oxidase, non-enzymatic
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
- evidence-limited
- growth-plate
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/fgfr
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Lenvatinib
  url: https://en.wikipedia.org/w/index.php?title=Lenvatinib&oldid=1329259391
  revision: 1329259391
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Lenvatinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lenvatinib-compound`
- **Source group:** FGFR3 & Growth Plate (`fgfr`)
- **Cluster:** [[Growth Hormone and Peptide Agents]]

## Source summary

Multi-kinase inhibitor with FGFR1-4 activity used in thyroid, hepatocellular and renal cancer. Included for FGFR completeness, not as a growth agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lenvatinib*](https://en.wikipedia.org/w/index.php?title=Lenvatinib&oldid=1329259391) (revision 1329259391, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 28 h | 28 hours |
| Protein binding | 98–99 % | 98–99% |
| Bioavailability | 85 % | 85% (estimated) |
| Metabolism | hepatic | CYP3A4, aldehyde oxidase, non-enzymatic |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethyl-lenvatinib (M2) and others |
| Excretion | - | ~65% feces, 25% urine |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`, `growth-plate`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
