---
type: compound
schema-version: 2
compound-id: edoxaban-compound
name: Edoxaban (Savaysa/Lixiana)
aliases:
- Edoxaban
- Savaysa
- Lixiana
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
  value: 10.0
  value-max: 14.0
  unit: h
  notes: 10–14 hours
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55%
bioavailability:
  value: 62.0
  value-max: null
  notes: 62%; Tmax 1–2 hours
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 62% feces, 35% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: minimal CES1, CYP3A4/5, hydrolysis, glucuronidation
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Edoxaban
  url: https://en.wikipedia.org/w/index.php?title=Edoxaban&oldid=1337833755
  revision: 1337833755
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Edoxaban (Savaysa/Lixiana)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `edoxaban-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Edoxaban, Savaysa, Lixiana

## Source summary

Once-daily factor Xa inhibitor whose dosing depends on renal function and indication.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Edoxaban*](https://en.wikipedia.org/w/index.php?title=Edoxaban&oldid=1337833755) (revision 1337833755, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–14 h | 10–14 hours |
| Protein binding | 55 % | 55% |
| Bioavailability | 62 % | 62%; Tmax 1–2 hours |
| Metabolism | hepatic | minimal CES1, CYP3A4/5, hydrolysis, glucuronidation |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | 62% feces, 35% urine |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
