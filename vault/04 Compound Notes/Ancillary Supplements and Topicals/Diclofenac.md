---
type: compound
schema-version: 2
compound-id: diclofenac-compound
name: Diclofenac
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Cyclooxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL139
chembl-max-phase: 4
half-life:
  value: 1.2
  value-max: 2.0
  unit: h
  notes: 1.2–2 h (35% of the drug enters enterohepatic recirculation)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: More than 99%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 35% bile, 65% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, oxidative, primarily by CYP2C9, also by CYP2C8, CYP3A4, as well as conjugative by glucuronidation (UGT2B7) and sulfation; no active metabolites exist
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Diclofenac
  url: https://en.wikipedia.org/w/index.php?title=Diclofenac&oldid=1370369641
  revision: 1370369641
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Diclofenac

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diclofenac-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL139](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL139/) · max phase 4

## Source summary

Cyclooxygenase inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL139).

## Mechanism

Cyclooxygenase inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Diclofenac*](https://en.wikipedia.org/w/index.php?title=Diclofenac&oldid=1370369641) (revision 1370369641, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.2–2 h | 1.2–2 h (35% of the drug enters enterohepatic recirculation) |
| Protein binding | 99 % | More than 99% |
| Metabolism | hepatic | Liver, oxidative, primarily by CYP2C9, also by CYP2C8, CYP3A4, as well as conjugative by glucuronidation (UGT2B7) and sulfation; no active metabolites exist |
| CYP (metabolised by) | CYP2C8, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | 35% bile, 65% urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
