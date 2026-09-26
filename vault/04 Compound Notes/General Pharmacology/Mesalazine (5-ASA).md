---
type: compound
schema-version: 2
compound-id: mesalazine-compound
name: Mesalazine (5-ASA)
aliases:
- Mesalazine
- 5-ASA
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
  value: 5.0
  value-max: null
  unit: h
  notes: 5 hours after initial dose.; At steady state 7 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 20.0
  value-max: 30.0
  notes: 'Oral: 20–30% ; Rectal: 10–35%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Rapidly and extensively metabolized intestinal mucosal wall and the liver
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
  title: Mesalazine
  url: https://en.wikipedia.org/w/index.php?title=Mesalazine&oldid=1369100049
  revision: 1369100049
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Mesalazine (5-ASA)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mesalazine-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Mesalazine, 5-ASA

## Source summary

Topically acting anti-inflammatory for ulcerative colitis, delivered by formulation rather than by systemic absorption.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Mesalazine*](https://en.wikipedia.org/w/index.php?title=Mesalazine&oldid=1369100049) (revision 1369100049, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | 5 hours after initial dose.; At steady state 7 hours |
| Bioavailability | 20–30 % | Oral: 20–30% ; Rectal: 10–35% |
| Metabolism | hepatic | Rapidly and extensively metabolized intestinal mucosal wall and the liver |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
