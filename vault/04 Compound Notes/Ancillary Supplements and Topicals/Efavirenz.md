---
type: compound
schema-version: 2
compound-id: efavirenz-compound
name: Efavirenz
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
  value: 52.0
  value-max: 76.0
  unit: h
  notes: 'Single-dose: 52–76h; Multi-dose: 40–55h'
protein-binding:
  value: 99.5
  value-max: 99.75
  unit: percent
  notes: 99.5–99.75%
bioavailability:
  value: 40.0
  value-max: 45.0
  notes: 40–45% (under fasting conditions)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (14–34%) and feces (16–61%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2A6 and CYP2B6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2A6
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2A6, CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Efavirenz
  url: https://en.wikipedia.org/w/index.php?title=Efavirenz&oldid=1373477952
  revision: 1373477952
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Efavirenz

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `efavirenz-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Efavirenz*](https://en.wikipedia.org/w/index.php?title=Efavirenz&oldid=1373477952) (revision 1373477952, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 52–76 h | Single-dose: 52–76h; Multi-dose: 40–55h |
| Protein binding | 99.5–99.75 % | 99.5–99.75% |
| Bioavailability | 40–45 % | 40–45% (under fasting conditions) |
| Metabolism | hepatic | Liver (CYP2A6 and CYP2B6-mediated) |
| CYP (metabolised by) | CYP2A6, CYP2B6 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney (14–34%) and feces (16–61%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
