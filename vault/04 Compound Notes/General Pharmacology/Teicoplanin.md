---
type: compound
schema-version: 2
compound-id: teicoplanin-compound
name: Teicoplanin
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
  value: 70.0
  value-max: 100.0
  unit: h
  notes: 70 to 100 hours
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90% to 95%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% (given IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.97
  notes: Kidney (97% unchanged)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Nil
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
  title: Teicoplanin
  url: https://en.wikipedia.org/w/index.php?title=Teicoplanin&oldid=1369644635
  revision: 1369644635
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Teicoplanin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `teicoplanin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Lipoglycopeptide with a much longer half-life than vancomycin and less nephrotoxicity, widely used outside the United States.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Teicoplanin*](https://en.wikipedia.org/w/index.php?title=Teicoplanin&oldid=1369644635) (revision 1369644635, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70–100 h | 70 to 100 hours |
| Protein binding | 90 % | 90% to 95% |
| Bioavailability | 90 % | 90% (given IM) |
| Metabolism | - | Nil |
| Excretion | mainly urinary · fe 0.97 | Kidney (97% unchanged) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
