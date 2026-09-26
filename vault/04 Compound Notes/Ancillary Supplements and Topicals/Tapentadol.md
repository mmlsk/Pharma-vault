---
type: compound
schema-version: 2
compound-id: tapentadol-compound
name: Tapentadol
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Norepinephrine transporter inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201776
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hours
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 32.0
  value-max: null
  notes: 32% (oral)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine and faeces (1%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (mostly via glucuronidation but also by CYP2C9, CYP2C19, CYP2D6)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2C9
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2C9, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Tapentadol
  url: https://en.wikipedia.org/w/index.php?title=Tapentadol&oldid=1373295674
  revision: 1373295674
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Tapentadol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tapentadol-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201776](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201776/) · max phase 4

## Source summary

Norepinephrine transporter inhibitor; approved/marketed compound catalogued by ChEMBL (CHEMBL1201776).

## Mechanism

Norepinephrine transporter inhibitor _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tapentadol*](https://en.wikipedia.org/w/index.php?title=Tapentadol&oldid=1373295674) (revision 1373295674, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hours |
| Protein binding | 20 % | 20% |
| Bioavailability | 32 % | 32% (oral) |
| Metabolism | hepatic | Hepatic (mostly via glucuronidation but also by CYP2C9, CYP2C19, CYP2D6) |
| CYP (metabolised by) | CYP2C19, CYP2C9, CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Urine and faeces (1%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
