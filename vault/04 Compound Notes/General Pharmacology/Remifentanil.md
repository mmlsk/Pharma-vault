---
type: compound
schema-version: 2
compound-id: remifentanil-compound
name: Remifentanil
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
  value: 1.0
  value-max: 20.0
  unit: min
  notes: 1-20 minutes
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70% (bound to plasma proteins)
bioavailability:
  value: 100.0
  value-max: null
  notes: IV/IM; 100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: cleaved by non-specific plasma and tissue esterases
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
  title: Remifentanil
  url: https://en.wikipedia.org/w/index.php?title=Remifentanil&oldid=1376668131
  revision: 1376668131
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Remifentanil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `remifentanil-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Ultra-short-acting opioid cleared by non-specific plasma esterases, so its context-sensitive half-time stays constant however long it is infused.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Remifentanil*](https://en.wikipedia.org/w/index.php?title=Remifentanil&oldid=1376668131) (revision 1376668131, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–20 min | 1-20 minutes |
| Protein binding | 70 % | 70% (bound to plasma proteins) |
| Bioavailability | 100 % | IV/IM; 100% |
| Metabolism | - | cleaved by non-specific plasma and tissue esterases |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
