---
type: compound
schema-version: 2
compound-id: zopiclone-compound
name: Zopiclone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: GABA-A receptor; agonist GABA site positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL135400
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: null
  unit: h
  notes: ~5 hours (3.5–6.5 hours) ; ~7–9 hours for 65+ years old
protein-binding:
  value: 52.0
  value-max: 59.0
  unit: percent
  notes: 52–59%
bioavailability:
  value: 75.0
  value-max: 80.0
  notes: 75–80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic through CYP3A4 and CYP2E1
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zopiclone
  url: https://en.wikipedia.org/w/index.php?title=Zopiclone&oldid=1369948564
  revision: 1369948564
  retrieved: '2026-09-26'
  chembl-confirmed: true
---

# Zopiclone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zopiclone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL135400](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL135400/) · max phase 4

## Source summary

GABA-A receptor; agonist GABA site positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL135400).

## Mechanism

GABA-A receptor; agonist GABA site positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zopiclone*](https://en.wikipedia.org/w/index.php?title=Zopiclone&oldid=1369948564) (revision 1369948564, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5 h | ~5 hours (3.5–6.5 hours) ; ~7–9 hours for 65+ years old |
| Protein binding | 52–59 % | 52–59% |
| Bioavailability | 75–80 % | 75–80% |
| Metabolism | hepatic | Hepatic through CYP3A4 and CYP2E1 |
| CYP (metabolised by) | CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (80%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
