---
type: compound
schema-version: 2
compound-id: rolapitant-compound
name: Rolapitant
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
  value: 169.0
  value-max: 183.0
  unit: h
  notes: 169–183 hours
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 99.8%
bioavailability:
  value: 100.0
  value-max: null
  notes: nearly 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Feces (52–89%), urine (9–20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
  title: Rolapitant
  url: https://en.wikipedia.org/w/index.php?title=Rolapitant&oldid=1368522467
  revision: 1368522467
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Rolapitant

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rolapitant-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Long-acting NK-1 antagonist with a half-life of about seven days, covering the whole delayed emesis window from one dose.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rolapitant*](https://en.wikipedia.org/w/index.php?title=Rolapitant&oldid=1368522467) (revision 1368522467, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 169–183 h | 169–183 hours |
| Protein binding | 99.8 % | 99.8% |
| Bioavailability | 100 % | nearly 100% |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | C4-pyrrolidine-hydroxylated rolapitant (major) |
| Excretion | mainly urinary | Feces (52–89%), urine (9–20%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
