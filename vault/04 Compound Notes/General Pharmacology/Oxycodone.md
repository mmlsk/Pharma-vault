---
type: compound
schema-version: 2
compound-id: oxycodone-compound
name: Oxycodone
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
  value: 2.0
  value-max: 3.0
  unit: h
  notes: ': 2–3 hours; : 4.5 hours'
protein-binding:
  value: 45.0
  value-max: null
  unit: percent
  notes: 45%
bioavailability:
  value: 60.0
  value-max: 87.0
  notes: 'By mouth: 60–87%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (83%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: mainly CYP3A, and, to a much lesser extent, CYP2D6 (~5%); 95% metabolized (i.e., 5% excreted unchanged)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Oxycodone
  url: https://en.wikipedia.org/w/index.php?title=Oxycodone&oldid=1373295533
  revision: 1373295533
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Oxycodone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `oxycodone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Semi-synthetic opioid with high oral bioavailability, and the drug at the centre of the North American opioid epidemic.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Oxycodone*](https://en.wikipedia.org/w/index.php?title=Oxycodone&oldid=1373295533) (revision 1373295533, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | : 2–3 hours; : 4.5 hours |
| Protein binding | 45 % | 45% |
| Bioavailability | 60–87 % | By mouth: 60–87% |
| Metabolism | hepatic | Liver: mainly CYP3A, and, to a much lesser extent, CYP2D6 (~5%); 95% metabolized (i.e., 5% excreted unchanged) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Noroxycodone (25%); • Noroxymorphone (15%, free and conjugated); • Oxymorphone (11%, conjugated); • Others (e.g., minor metabolites) |
| Excretion | mainly urinary | Urine (83%) |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
