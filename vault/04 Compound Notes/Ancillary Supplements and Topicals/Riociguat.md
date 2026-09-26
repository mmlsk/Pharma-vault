---
type: compound
schema-version: 2
compound-id: riociguat-compound
name: Riociguat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Soluble guanylate cyclase positive allosteric modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2107834
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 h (patients); 7 h (healthy people)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 94.0
  value-max: null
  notes: 94%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 33–45% via kidney,; 48–59% via bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP1A1, CYP3A4, CYP2C8, CYP2J2
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A1
  - CYP2C8
  - CYP2J2
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A1, CYP2C8, CYP2J2, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Riociguat
  url: https://en.wikipedia.org/w/index.php?title=Riociguat&oldid=1370555009
  revision: 1370555009
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Riociguat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `riociguat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL2107834](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2107834/) · max phase 4

## Source summary

Soluble guanylate cyclase positive allosteric modulator; approved/marketed compound catalogued by ChEMBL (CHEMBL2107834).

## Mechanism

Soluble guanylate cyclase positive allosteric modulator _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Riociguat*](https://en.wikipedia.org/w/index.php?title=Riociguat&oldid=1370555009) (revision 1370555009, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 h (patients); 7 h (healthy people) |
| Protein binding | 95 % | 95% |
| Bioavailability | 94 % | 94% |
| Metabolism | hepatic | CYP1A1, CYP3A4, CYP2C8, CYP2J2 |
| CYP (metabolised by) | CYP1A1, CYP2C8, CYP2J2, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethylriociguat (active), glucuronide (inactive) |
| Excretion | mainly non-renal | 33–45% via kidney,; 48–59% via bile duct |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
