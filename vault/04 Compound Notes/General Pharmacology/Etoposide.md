---
type: compound
schema-version: 2
compound-id: etoposide-compound
name: Etoposide
aliases: []
cluster: General Pharmacology
group: oncology
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
  value-max: null
  unit: h
  notes: 'Oral: 6 h., IV: 6-12 h., IV in children: 3 h.'
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%
bioavailability:
  value: 25.0
  value-max: 75.0
  notes: Highly variable, 25 to 75%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4 involved)
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Etoposide
  url: https://en.wikipedia.org/w/index.php?title=Etoposide&oldid=1366097537
  revision: 1366097537
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Etoposide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `etoposide-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

A podophyllotoxin-derived topoisomerase II poison that stabilises the enzyme-DNA cleavage complex, producing double-strand breaks. Its therapy-related leukaemia risk is a direct consequence of that mechanism.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Etoposide*](https://en.wikipedia.org/w/index.php?title=Etoposide&oldid=1366097537) (revision 1366097537, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6 h | Oral: 6 h., IV: 6-12 h., IV in children: 3 h. |
| Protein binding | 97 % | 97% |
| Bioavailability | 25–75 % | Highly variable, 25 to 75% |
| Metabolism | hepatic | Liver (CYP3A4 involved) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
