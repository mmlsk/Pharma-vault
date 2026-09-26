---
type: compound
schema-version: 2
compound-id: dextromethorphan-compound
name: Dextromethorphan
aliases: []
cluster: Nootropics
group: nootropic
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
  value-max: 4.0
  unit: h
  notes: 2–4 hours (extensive metabolizers); 24 hours (poor metabolizers)
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 11.0
  value-max: null
  notes: 11%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver enzymes: major CYP2D6, minor CYP3A4, and minor CYP3A5'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Dextromethorphan
  url: https://en.wikipedia.org/w/index.php?title=Dextromethorphan&oldid=1374989705
  revision: 1374989705
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dextromethorphan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dextromethorphan-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]

## Source summary

Engages the sigma-1 chaperone at the ER-mitochondrial interface, modulating calcium handling and ER stress responses; sigma-1 agonist and NMDA antagonist.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dextromethorphan*](https://en.wikipedia.org/w/index.php?title=Dextromethorphan&oldid=1374989705) (revision 1374989705, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours (extensive metabolizers); 24 hours (poor metabolizers) |
| Bioavailability | 11 % | 11% |
| Metabolism | hepatic | Liver enzymes: major CYP2D6, minor CYP3A4, and minor CYP3A5 |
| CYP (metabolised by) | CYP2D6, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Dextrorphan; 3-methoxymorphinan |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
