---
type: compound
schema-version: 2
compound-id: pioglitazone-compound
name: Pioglitazone (Actos)
aliases:
- Pioglitazone
- Actos
cluster: Longevity and Experimental Compounds
group: longevity
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
  value: 3.0
  value-max: 7.0
  unit: h
  notes: 3–7 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '&gt;99%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Pioglitazone
  url: https://en.wikipedia.org/w/index.php?title=Pioglitazone&oldid=1365691930
  revision: 1365691930
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pioglitazone (Actos)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pioglitazone-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Pioglitazone, Actos

## Source summary

PPAR-gamma agonist ('insulin sensitizer') that improves glycemic control and lipid profiles in type 2 diabetes; a distinct mechanism from metformin or SGLT2 inhibitors.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pioglitazone*](https://en.wikipedia.org/w/index.php?title=Pioglitazone&oldid=1365691930) (revision 1365691930, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 h | 3–7 hours |
| Protein binding | 99 % | &gt;99% |
| Metabolism | hepatic | Liver (CYP2C8) |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
