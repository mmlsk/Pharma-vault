---
type: compound
schema-version: 2
compound-id: rosiglitazone-compound
name: Rosiglitazone
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Peroxisome proliferator-activated receptor gamma agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL121
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
bioavailability:
  value: 99.0
  value-max: null
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (64%) and fecal (23%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8-mediated)
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
  title: Rosiglitazone
  url: https://en.wikipedia.org/w/index.php?title=Rosiglitazone&oldid=1354915995
  revision: 1354915995
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Rosiglitazone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rosiglitazone-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL121](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL121/) · max phase 4

## Source summary

Peroxisome proliferator-activated receptor gamma agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL121).

## Mechanism

Peroxisome proliferator-activated receptor gamma agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rosiglitazone*](https://en.wikipedia.org/w/index.php?title=Rosiglitazone&oldid=1354915995) (revision 1354915995, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 99.8 % | 99.8% |
| Bioavailability | 99 % | 99% |
| Metabolism | hepatic | Liver (CYP2C8-mediated) |
| CYP (metabolised by) | CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (64%) and fecal (23%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
