---
type: compound
schema-version: 2
compound-id: fluorouracil-compound
name: 5-Fluorouracil
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
  value: 16.0
  value-max: null
  unit: min
  notes: 16 minutes
protein-binding:
  value: 8.0
  value-max: 12.0
  unit: percent
  notes: 8 to 12%
bioavailability:
  value: 28.0
  value-max: 100.0
  notes: 28 to 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Intracellular and liver (CYP-mediated)
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
  title: Fluorouracil
  url: https://en.wikipedia.org/w/index.php?title=Fluorouracil&oldid=1351404942
  revision: 1351404942
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# 5-Fluorouracil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluorouracil-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

A fluoropyrimidine whose active metabolite forms a covalent ternary complex with thymidylate synthase and folate. Patients deficient in DPD clear it poorly and can suffer life-threatening toxicity from a standard dose.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluorouracil*](https://en.wikipedia.org/w/index.php?title=Fluorouracil&oldid=1351404942) (revision 1351404942, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16 min | 16 minutes |
| Protein binding | 8–12 % | 8 to 12% |
| Bioavailability | 28–100 % | 28 to 100% |
| Metabolism | hepatic | Intracellular and liver (CYP-mediated) |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
