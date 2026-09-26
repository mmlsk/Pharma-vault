---
type: compound
schema-version: 2
compound-id: morphine-compound
name: Morphine
aliases: []
cluster: General Pharmacology
group: analgesia
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
  value: 23.0
  value-max: null
  unit: h
  notes: 23 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: 3040%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'IV/IM: 100%; Intranasal: 10%; PO: 2040%; Rectal: 3671%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney 90%, bile duct 10%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: UGT2B7'
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Morphine
  url: https://en.wikipedia.org/w/index.php?title=Morphine&oldid=1374517907
  revision: 1374517907
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Morphine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `morphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The reference opioid against which every other is measured, with an active glucuronide metabolite that accumulates in renal failure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Morphine*](https://en.wikipedia.org/w/index.php?title=Morphine&oldid=1374517907) (revision 1374517907, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 23 h | 23 hours |
| Protein binding | - | 3040% |
| Bioavailability | 100 % | IV/IM: 100%; Intranasal: 10%; PO: 2040%; Rectal: 3671% |
| Metabolism | hepatic | Liver: UGT2B7 |
| Metabolites | - | • Morphine-3-glucuronide (90%); • Morphine-6-glucuronide (10%) |
| Excretion | mainly urinary | Kidney 90%, bile duct 10% |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
