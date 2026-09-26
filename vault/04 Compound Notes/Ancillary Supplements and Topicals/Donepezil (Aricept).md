---
type: compound
schema-version: 2
compound-id: donepezil-compound
name: Donepezil (Aricept)
aliases:
- Donepezil
- Aricept
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
  value: 70.0
  value-max: null
  unit: h
  notes: 70 hours Around 100 hours in elderly patients.
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%, albumin (about 75%) and alpha1-acid glycoprotein (21%).
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.17
  notes: 0.11–0.13 (L/h/kg); excreted mostly by the kidneys. Around 17% is excreted unchanged in the urine. About 15% to 20% is excreted in feces. Steady-state clearance is similar at all ages.
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP2D6, CYP3A4, and glucuronidation. Four major metabolites, two of which are active.
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Donepezil
  url: https://en.wikipedia.org/w/index.php?title=Donepezil&oldid=1356481650
  revision: 1356481650
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Donepezil (Aricept)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `donepezil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Donepezil, Aricept

## Source summary

Reversible, centrally selective acetylcholinesterase inhibitor; the most widely prescribed drug for Alzheimer's dementia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Donepezil*](https://en.wikipedia.org/w/index.php?title=Donepezil&oldid=1356481650) (revision 1356481650, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 70 h | 70 hours Around 100 hours in elderly patients. |
| Protein binding | 96 % | 96%, albumin (about 75%) and alpha1-acid glycoprotein (21%). |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | CYP2D6, CYP3A4, and glucuronidation. Four major metabolites, two of which are active. |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - · fe 0.17 | 0.11–0.13 (L/h/kg); excreted mostly by the kidneys. Around 17% is excreted unchanged in the urine. About 15% to 20% is excreted in feces. Steady-state clearance is similar at all ages. |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
