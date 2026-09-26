---
type: compound
schema-version: 2
compound-id: simeprevir-compound
name: Simeprevir
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
  value: 10.0
  value-max: 13.0
  unit: h
  notes: 10–13 hours (HCV-uninfected subjects), 41 hours (HCV-infected subjects)
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: '>99.9%'
bioavailability:
  value: 62.0
  value-max: null
  notes: 62% (under fed conditions)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (91%), urine (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A, CYP2C8, CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C8
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C8 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Simeprevir
  url: https://en.wikipedia.org/w/index.php?title=Simeprevir&oldid=1369127743
  revision: 1369127743
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Simeprevir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `simeprevir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Second-wave hepatitis C protease inhibitor, superseded by pangenotypic regimens but historically important in the first interferon-free combinations.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Simeprevir*](https://en.wikipedia.org/w/index.php?title=Simeprevir&oldid=1369127743) (revision 1369127743, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–13 h | 10–13 hours (HCV-uninfected subjects), 41 hours (HCV-infected subjects) |
| Protein binding | 99.9 % | >99.9% |
| Bioavailability | 62 % | 62% (under fed conditions) |
| Metabolism | hepatic | Liver (CYP3A, CYP2C8, CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP2C8 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (91%), urine (<1%) |

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
