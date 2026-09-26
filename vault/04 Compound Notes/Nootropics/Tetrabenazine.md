---
type: compound
schema-version: 2
compound-id: tetrabenazine-compound
name: Tetrabenazine
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
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours parent compound (2 to 8 hours active metabolites)
protein-binding:
  value: 82.0
  value-max: 85.0
  unit: percent
  notes: 82–85%
bioavailability:
  value: null
  value-max: null
  notes: Low, extensive first pass effect
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (~75%) and fecal (7–16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tetrabenazine
  url: https://en.wikipedia.org/w/index.php?title=Tetrabenazine&oldid=1372155211
  revision: 1372155211
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tetrabenazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tetrabenazine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

VMAT2 inhibitor for Huntington chorea, effective but limited by depression and parkinsonism.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tetrabenazine*](https://en.wikipedia.org/w/index.php?title=Tetrabenazine&oldid=1372155211) (revision 1372155211, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours parent compound (2 to 8 hours active metabolites) |
| Protein binding | 82–85 % | 82–85% |
| Bioavailability | - | Low, extensive first pass effect |
| Metabolism | hepatic | Liver (CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (~75%) and fecal (7–16%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
