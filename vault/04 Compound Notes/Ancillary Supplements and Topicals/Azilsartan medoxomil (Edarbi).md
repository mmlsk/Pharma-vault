---
type: compound
schema-version: 2
compound-id: azilsartan-compound
name: Azilsartan medoxomil (Edarbi)
aliases:
- Azilsartan medoxomil
- Edarbi
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
  value: 11.0
  value-max: null
  unit: h
  notes: 11 hrs
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 55% feces, 42% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2C9
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Azilsartan
  url: https://en.wikipedia.org/w/index.php?title=Azilsartan&oldid=1355215444
  revision: 1355215444
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Azilsartan medoxomil (Edarbi)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azilsartan-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Azilsartan medoxomil, Edarbi

## Source summary

The most recently approved angiotensin receptor blocker, with unusually slow dissociation from the AT1 receptor.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azilsartan*](https://en.wikipedia.org/w/index.php?title=Azilsartan&oldid=1355215444) (revision 1355215444, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | 11 hrs |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | CYP2C9 |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | - | 55% feces, 42% urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
