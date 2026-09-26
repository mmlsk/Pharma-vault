---
type: compound
schema-version: 2
compound-id: midazolam-compound
name: Midazolam
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
chembl-id: CHEMBL655
chembl-max-phase: 4
half-life:
  value: 1.5
  value-max: 2.5
  unit: h
  notes: 1.5–2.5 hours
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 40.0
  value-max: null
  notes: 'By mouth: variable, around 40%; Intramuscular: ≥90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP3A3, CYP3A4, CYP3A5'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A3
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A3, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Midazolam
  url: https://en.wikipedia.org/w/index.php?title=Midazolam&oldid=1368778567
  revision: 1368778567
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Midazolam

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `midazolam-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL655](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL655/) · max phase 4

## Source summary

GABA-A receptor; anion channel positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL655).

## Mechanism

GABA-A receptor; anion channel positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Midazolam*](https://en.wikipedia.org/w/index.php?title=Midazolam&oldid=1368778567) (revision 1368778567, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.5–2.5 h | 1.5–2.5 hours |
| Protein binding | 97 % | 97% |
| Bioavailability | 40 % | By mouth: variable, around 40%; Intramuscular: ≥90% |
| Metabolism | hepatic | Liver: CYP3A3, CYP3A4, CYP3A5 |
| CYP (metabolised by) | CYP3A3, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
