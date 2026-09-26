---
type: compound
schema-version: 2
compound-id: nimesulide-compound
name: Nimesulide
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
  value: 1.8
  value-max: 4.7
  unit: h
  notes: 1.8–4.7h
protein-binding:
  value: 97.5
  value-max: null
  unit: percent
  notes: '>97.5%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal (50%), fecal (29%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (via CYP2C9)
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
  title: Nimesulide
  url: https://en.wikipedia.org/w/index.php?title=Nimesulide&oldid=1364936004
  revision: 1364936004
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Nimesulide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nimesulide-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

COX-2-preferential NSAID withdrawn in several countries over hepatotoxicity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nimesulide*](https://en.wikipedia.org/w/index.php?title=Nimesulide&oldid=1364936004) (revision 1364936004, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.8–4.7 h | 1.8–4.7h |
| Protein binding | 97.5 % | >97.5% |
| Metabolism | hepatic | Hepatic (via CYP2C9) |
| CYP (metabolised by) | CYP2C9 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Renal (50%), fecal (29%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
