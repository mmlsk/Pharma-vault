---
type: compound
schema-version: 2
compound-id: domperidone-compound
name: Domperidone
aliases: []
cluster: General Pharmacology
group: gi
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
  value: 7.0
  value-max: 9.0
  unit: h
  notes: 7–9 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: ~92%
bioavailability:
  value: 13.0
  value-max: 17.0
  notes: 'Oral: 13–17%; Intramuscular: 90%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 66%; Urine: 32%; Breast milk: small quantities'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4/5) and intestinal (first-pass)
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
- group/gi
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Domperidone
  url: https://en.wikipedia.org/w/index.php?title=Domperidone&oldid=1376277051
  revision: 1376277051
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Domperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `domperidone-compound`
- **Source group:** Gastrointestinal & Hepatic (`gi`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Peripheral dopamine antagonist prokinetic that does not cross the blood-brain barrier, so it lacks the extrapyramidal effects of metoclopramide.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Domperidone*](https://en.wikipedia.org/w/index.php?title=Domperidone&oldid=1376277051) (revision 1376277051, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7–9 h | 7–9 hours |
| Protein binding | 92 % | ~92% |
| Bioavailability | 13–17 % | Oral: 13–17%; Intramuscular: 90% |
| Metabolism | hepatic | Hepatic (CYP3A4/5) and intestinal (first-pass) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | All inactive |
| Excretion | mainly non-renal | Feces: 66%; Urine: 32%; Breast milk: small quantities |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
