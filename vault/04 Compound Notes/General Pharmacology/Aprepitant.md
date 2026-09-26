---
type: compound
schema-version: 2
compound-id: aprepitant-compound
name: Aprepitant
aliases: []
cluster: General Pharmacology
group: gi
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
  value: 9.0
  value-max: 13.0
  unit: h
  notes: 9–13 hours
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: '>95%'
bioavailability:
  value: 60.0
  value-max: 65.0
  notes: 60–65%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (57%), feces (45%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP3A4- mediated; some contributions by CYP2C19 & CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/gi
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Aprepitant
  url: https://en.wikipedia.org/w/index.php?title=Aprepitant&oldid=1373784554
  revision: 1373784554
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Aprepitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aprepitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Neurokinin-1 antagonist that controls delayed chemotherapy-induced nausea, which the 5-HT3 antagonists do not reach.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aprepitant*](https://en.wikipedia.org/w/index.php?title=Aprepitant&oldid=1373784554) (revision 1373784554, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–13 h | 9–13 hours |
| Protein binding | 95 % | >95% |
| Bioavailability | 60–65 % | 60–65% |
| Metabolism | hepatic | Liver (mostly CYP3A4- mediated; some contributions by CYP2C19 & CYP1A2) |
| CYP (metabolised by) | CYP1A2, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney (57%), feces (45%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
