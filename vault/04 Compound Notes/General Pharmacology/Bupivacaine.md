---
type: compound
schema-version: 2
compound-id: bupivacaine-compound
name: Bupivacaine
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
  value: 3.1
  value-max: null
  unit: h
  notes: 3.1 hours (adults); 8.1 hours (neonates)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, 4–10%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
  title: Bupivacaine
  url: https://en.wikipedia.org/w/index.php?title=Bupivacaine&oldid=1366642920
  revision: 1366642920
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Bupivacaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bupivacaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Long-acting amide local anaesthetic and the classic cardiotoxin of the class, which is why the levo-enantiomer was developed.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bupivacaine*](https://en.wikipedia.org/w/index.php?title=Bupivacaine&oldid=1366642920) (revision 1366642920, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.1 h | 3.1 hours (adults); 8.1 hours (neonates) |
| Protein binding | 95 % | 95% |
| Bioavailability | - | N/A |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney, 4–10% |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
