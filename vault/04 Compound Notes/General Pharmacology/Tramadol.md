---
type: compound
schema-version: 2
compound-id: tramadol-compound
name: Tramadol
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
  value: 1.4
  value-max: null
  unit: h
  notes: 6.3 ± 1.4 h
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 68.0
  value-max: null
  notes: 68% (by mouth), 77% (rectal), 100% (IM)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (95%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver-mediated demethylation and glucuronidation via CYP2D6 & CYP3A4
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
  title: Tramadol
  url: https://en.wikipedia.org/w/index.php?title=Tramadol&oldid=1376793549
  revision: 1376793549
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Tramadol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tramadol-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Weak opioid with substantial monoaminergic activity, marketed as low-risk and responsible for a great deal of serotonin syndrome and seizure.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tramadol*](https://en.wikipedia.org/w/index.php?title=Tramadol&oldid=1376793549) (revision 1376793549, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4 h | 6.3 ± 1.4 h |
| Protein binding | 20 % | 20% |
| Bioavailability | 68 % | 68% (by mouth), 77% (rectal), 100% (IM) |
| Metabolism | hepatic | Liver-mediated demethylation and glucuronidation via CYP2D6 & CYP3A4 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethyltramadol; N-desmethyltramadol |
| Excretion | mainly urinary | Urine (95%) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
