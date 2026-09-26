---
type: compound
schema-version: 2
compound-id: alfentanil-compound
name: Alfentanil
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
  value: 90.0
  value-max: 111.0
  unit: min
  notes: 90–111 minutes
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'IV/IM/SC: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
  title: Alfentanil
  url: https://en.wikipedia.org/w/index.php?title=Alfentanil&oldid=1360846894
  revision: 1360846894
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Alfentanil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `alfentanil-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Short-acting fentanyl analogue with a low pKa, so a large fraction is unionised and it reaches the brain faster than fentanyl despite lower lipophilicity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Alfentanil*](https://en.wikipedia.org/w/index.php?title=Alfentanil&oldid=1360846894) (revision 1360846894, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 90–111 min | 90–111 minutes |
| Protein binding | 92 % | 92% |
| Bioavailability | 100 % | IV/IM/SC: 100% |
| Metabolism | hepatic | Hepatic |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
