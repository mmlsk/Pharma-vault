---
type: compound
schema-version: 2
compound-id: viloxazine-compound
name: Viloxazine
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
  value: 2.0
  value-max: 5.0
  unit: h
  notes: 'IR: 2–5 hours; ER: 7.02 ± 4.74 hours'
protein-binding:
  value: 76.0
  value-max: 82.0
  unit: percent
  notes: 76–82%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (~90%), feces (<1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hydroxylation (CYP2D6), glucuronidation (UGT1A9, UGT2B15)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Viloxazine
  url: https://en.wikipedia.org/w/index.php?title=Viloxazine&oldid=1374847014
  revision: 1374847014
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Viloxazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `viloxazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits norepinephrine reuptake, often alongside serotonin effects; blood pressure and discontinuation effects require attention.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Viloxazine*](https://en.wikipedia.org/w/index.php?title=Viloxazine&oldid=1374847014) (revision 1374847014, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–5 h | IR: 2–5 hours; ER: 7.02 ± 4.74 hours |
| Protein binding | 76–82 % | 76–82% |
| Metabolism | hepatic | Hydroxylation (CYP2D6), glucuronidation (UGT1A9, UGT2B15) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 5-Hydroxyviloxazine glucuronide |
| Excretion | mainly urinary | Urine (~90%), feces (<1%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
