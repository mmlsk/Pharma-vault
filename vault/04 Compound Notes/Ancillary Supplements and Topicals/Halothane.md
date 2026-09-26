---
type: compound
schema-version: 2
compound-id: halothane-compound
name: Halothane
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; anion channel positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL931
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, respiratory
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP2E1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Halothane
  url: https://en.wikipedia.org/w/index.php?title=Halothane&oldid=1360742906
  revision: 1360742906
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Halothane

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `halothane-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL931](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL931/) · max phase 4

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL931).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Halothane*](https://en.wikipedia.org/w/index.php?title=Halothane&oldid=1360742906) (revision 1360742906, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Metabolism | hepatic | Hepatic (CYP2E1) |
| CYP (metabolised by) | CYP2E1 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney, respiratory |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
