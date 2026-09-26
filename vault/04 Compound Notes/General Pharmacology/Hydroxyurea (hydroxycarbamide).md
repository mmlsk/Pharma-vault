---
type: compound
schema-version: 2
compound-id: hydroxyurea-compound
name: Hydroxyurea (hydroxycarbamide)
aliases:
- Hydroxyurea
- hydroxycarbamide
cluster: General Pharmacology
group: oncology
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
  notes: 2–4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney and lungs
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (to CO2 and urea)
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Hydroxycarbamide
  url: https://en.wikipedia.org/w/index.php?title=Hydroxycarbamide&oldid=1357232741
  revision: 1357232741
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Hydroxyurea (hydroxycarbamide)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxyurea-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Hydroxyurea, hydroxycarbamide

## Source summary

A ribonucleotide reductase inhibitor that raises fetal haemoglobin and is the only disease-modifying drug in sickle cell disease with a mortality benefit. Also used in myeloproliferative disease as a cytoreductive agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxycarbamide*](https://en.wikipedia.org/w/index.php?title=Hydroxycarbamide&oldid=1357232741) (revision 1357232741, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Metabolism | hepatic | Liver (to CO2 and urea) |
| Excretion | mainly urinary | Kidney and lungs |

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
