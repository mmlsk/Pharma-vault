---
type: compound
schema-version: 2
compound-id: carbamazepine-compound
name: Carbamazepine
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
  value: 36.0
  value-max: null
  unit: h
  notes: 36 hours (single dose), 16–24 hours (repeated dosing)
protein-binding:
  value: 70.0
  value-max: 80.0
  unit: percent
  notes: 70–80%
bioavailability:
  value: 100.0
  value-max: null
  notes: ~100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (72%), feces (28%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
- group/ancillary
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Carbamazepine
  url: https://en.wikipedia.org/w/index.php?title=Carbamazepine&oldid=1369634918
  revision: 1369634918
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Carbamazepine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `carbamazepine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Reduces high-frequency neuronal firing through voltage-gated sodium-channel modulation.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Carbamazepine*](https://en.wikipedia.org/w/index.php?title=Carbamazepine&oldid=1369634918) (revision 1369634918, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 36 h | 36 hours (single dose), 16–24 hours (repeated dosing) |
| Protein binding | 70–80 % | 70–80% |
| Bioavailability | 100 % | ~100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Active epoxide form (carbamazepine-10,11 epoxide) |
| Excretion | mainly urinary | Urine (72%), feces (28%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
