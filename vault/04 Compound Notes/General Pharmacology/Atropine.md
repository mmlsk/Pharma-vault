---
type: compound
schema-version: 2
compound-id: atropine-compound
name: Atropine
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
  value-max: null
  unit: h
  notes: 2 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: null
  notes: 25%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.5
  notes: 15–50% excreted unchanged in urine
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: ≥50% hydrolysed to tropine and tropic acid
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
  title: Atropine
  url: https://en.wikipedia.org/w/index.php?title=Atropine&oldid=1350610693
  revision: 1350610693
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Atropine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atropine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

The reference antimuscarinic, used for bradycardia, as an antisialagogue and as the antidote to organophosphate poisoning.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atropine*](https://en.wikipedia.org/w/index.php?title=Atropine&oldid=1350610693) (revision 1350610693, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 2 hours |
| Bioavailability | 25 % | 25% |
| Metabolism | - | ≥50% hydrolysed to tropine and tropic acid |
| Excretion | mainly urinary · fe 0.5 | 15–50% excreted unchanged in urine |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[Cholinergic Load]]
