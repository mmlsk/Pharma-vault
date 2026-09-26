---
type: compound
schema-version: 2
compound-id: phenprocoumon-compound
name: Phenprocoumon
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
  value: 6.0
  value-max: 7.0
  unit: d
  notes: 6–7 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
bioavailability:
  value: 100.0
  value-max: null
  notes: 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C9, CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Phenprocoumon
  url: https://en.wikipedia.org/w/index.php?title=Phenprocoumon&oldid=1334264213
  revision: 1334264213
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Phenprocoumon

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenprocoumon-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits vitamin K epoxide reductase so clotting factors are undercarboxylated; effect is delayed, diet-sensitive and needs INR monitoring; longer half-life, used in Europe.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenprocoumon*](https://en.wikipedia.org/w/index.php?title=Phenprocoumon&oldid=1334264213) (revision 1334264213, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–7 d | 6–7 days |
| Protein binding | 99 % | 99% |
| Bioavailability | 100 % | 100% |
| Metabolism | hepatic | Liver (CYP2C9, CYP3A4) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxyl derivatives, glucuronides |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
