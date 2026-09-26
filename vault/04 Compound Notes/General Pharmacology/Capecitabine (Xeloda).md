---
type: compound
schema-version: 2
compound-id: capecitabine-compound
name: Capecitabine (Xeloda)
aliases:
- Capecitabine
- Xeloda
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
  value: 38.0
  value-max: 45.0
  unit: min
  notes: 38–45 minutes
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: < 60%
bioavailability:
  value: null
  value-max: null
  notes: Extensive
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (95.5%), faecal (2.6%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver, to 5'-DFCR, 5'-DFUR (inactive); neoplastic tissue, 5'-DFUR to active fluorouracil
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
  title: Capecitabine
  url: https://en.wikipedia.org/w/index.php?title=Capecitabine&oldid=1360414026
  revision: 1360414026
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Capecitabine (Xeloda)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `capecitabine-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Capecitabine, Xeloda

## Source summary

An oral prodrug converted to 5-fluorouracil in three enzymatic steps, the last by thymidine phosphorylase which is enriched in tumour tissue. That last step is the basis for its relative tumour selectivity.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Capecitabine*](https://en.wikipedia.org/w/index.php?title=Capecitabine&oldid=1360414026) (revision 1360414026, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 38–45 min | 38–45 minutes |
| Protein binding | 60 % | < 60% |
| Bioavailability | - | Extensive |
| Metabolism | hepatic | liver, to 5'-DFCR, 5'-DFUR (inactive); neoplastic tissue, 5'-DFUR to active fluorouracil |
| Excretion | mainly urinary | kidney (95.5%), faecal (2.6%) |

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
