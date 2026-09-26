---
type: compound
schema-version: 2
compound-id: buprenorphine-compound
name: Buprenorphine
aliases: []
cluster: General Pharmacology
group: analgesia
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
  value: 37.0
  value-max: null
  unit: h
  notes: 37 hours (range 20–70 hours)
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: 96%
bioavailability:
  value: 30.0
  value-max: null
  notes: 'Sublingual: 30%; Intranasal: 48%; Buccal: 65%; IV/IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct and kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2C8)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C8
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C8, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Buprenorphine
  url: https://en.wikipedia.org/w/index.php?title=Buprenorphine&oldid=1375171241
  revision: 1375171241
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Buprenorphine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `buprenorphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

High-affinity partial mu agonist with a ceiling on respiratory depression, the safety property that makes it a first-line maintenance treatment.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Buprenorphine*](https://en.wikipedia.org/w/index.php?title=Buprenorphine&oldid=1375171241) (revision 1375171241, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 37 h | 37 hours (range 20–70 hours) |
| Protein binding | 96 % | 96% |
| Bioavailability | 30 % | Sublingual: 30%; Intranasal: 48%; Buccal: 65%; IV/IM: 100% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2C8) |
| CYP (metabolised by) | CYP2C8, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Norbuprenorphine, Hydroxybuprenorphine, Hydroxynorbuprenorphine, Buprenorphine glucuronide |
| Excretion | mainly non-renal | Bile duct and kidney |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
