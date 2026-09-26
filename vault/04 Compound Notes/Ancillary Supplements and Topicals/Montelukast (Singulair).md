---
type: compound
schema-version: 2
compound-id: montelukast-compound
name: Montelukast (Singulair)
aliases:
- Montelukast
- Singulair
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
  value: 2.7
  value-max: 5.5
  unit: h
  notes: 2.7–5.5 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 63.0
  value-max: 73.0
  notes: 63–73%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C8-major, CYP3A4 and CYP2C9-minor)
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
  title: Montelukast
  url: https://en.wikipedia.org/w/index.php?title=Montelukast&oldid=1363159792
  revision: 1363159792
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Montelukast (Singulair)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `montelukast-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Montelukast, Singulair

## Source summary

Leukotriene-receptor antagonist for asthma and allergic rhinitis carrying a boxed warning for serious neuropsychiatric effects.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Montelukast*](https://en.wikipedia.org/w/index.php?title=Montelukast&oldid=1363159792) (revision 1363159792, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.7–5.5 h | 2.7–5.5 hours |
| Protein binding | 99 % | 99% |
| Bioavailability | 63–73 % | 63–73% |
| Metabolism | hepatic | Liver (CYP2C8-major, CYP3A4 and CYP2C9-minor) |
| CYP (metabolised by) | CYP2C8, CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Bile duct |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
