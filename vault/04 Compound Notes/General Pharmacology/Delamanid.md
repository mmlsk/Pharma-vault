---
type: compound
schema-version: 2
compound-id: delamanid-compound
name: Delamanid
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value: 30.0
  value-max: 38.0
  unit: h
  notes: 30–38 hours
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: ≥99.5%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: not excreted in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: in plasma by albumin, in liver; by CYP3A4 (to a lesser extent)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cyp-interactions
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Delamanid
  url: https://en.wikipedia.org/w/index.php?title=Delamanid&oldid=1343219893
  revision: 1343219893
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Delamanid

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `delamanid-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Nitro-dihydro-imidazooxazole for multidrug-resistant tuberculosis, sharing pretomanid's activation route.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Delamanid*](https://en.wikipedia.org/w/index.php?title=Delamanid&oldid=1343219893) (revision 1343219893, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30–38 h | 30–38 hours |
| Protein binding | 99.5 % | ≥99.5% |
| Metabolism | hepatic | in plasma by albumin, in liver; by CYP3A4 (to a lesser extent) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | not excreted in urine |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
