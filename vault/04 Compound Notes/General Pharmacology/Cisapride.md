---
type: compound
schema-version: 2
compound-id: cisapride-compound
name: Cisapride
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
  value: 10.0
  value-max: null
  unit: h
  notes: 10 hours
protein-binding:
  value: 97.5
  value-max: null
  unit: percent
  notes: 97.5%
bioavailability:
  value: 30.0
  value-max: 40.0
  notes: 30-40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: kidney, bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver CYP3A4, intestinal
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
  title: Cisapride
  url: https://en.wikipedia.org/w/index.php?title=Cisapride&oldid=1357376753
  revision: 1357376753
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cisapride

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cisapride-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Withdrawn 5-HT4 agonist prokinetic, the drug whose torsades deaths established hERG screening as a regulatory requirement.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cisapride*](https://en.wikipedia.org/w/index.php?title=Cisapride&oldid=1357376753) (revision 1357376753, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10 h | 10 hours |
| Protein binding | 97.5 % | 97.5% |
| Bioavailability | 30–40 % | 30-40% |
| Metabolism | hepatic | liver CYP3A4, intestinal |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | kidney, bile duct |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
