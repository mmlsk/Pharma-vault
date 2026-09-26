---
type: compound
schema-version: 2
compound-id: citalopram-compound
name: Citalopram
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value: 35.0
  value-max: null
  unit: h
  notes: 35 hours
protein-binding:
  value: 80.0
  value-max: null
  unit: percent
  notes: <80%
bioavailability:
  value: 80.0
  value-max: null
  notes: 80% ; peak at 4 hours
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly as unmetabolized citalopram, partly DCT, and traces of DDCT in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4 and CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
- group/ancillary
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Citalopram
  url: https://en.wikipedia.org/w/index.php?title=Citalopram&oldid=1374924002
  revision: 1374924002
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Citalopram

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `citalopram-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits serotonin reuptake through SERT; benefits, activation, sexual effects, and withdrawal profiles differ by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Citalopram*](https://en.wikipedia.org/w/index.php?title=Citalopram&oldid=1374924002) (revision 1374924002, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 35 h | 35 hours |
| Protein binding | 80 % | <80% |
| Bioavailability | 80 % | 80% ; peak at 4 hours |
| Metabolism | hepatic | Liver (CYP3A4 and CYP2C19) |
| CYP (metabolised by) | CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Desmethylcitalopram (DCT) and didesmethylcitalopram (DDCT) |
| Excretion | - | Mostly as unmetabolized citalopram, partly DCT, and traces of DDCT in urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
