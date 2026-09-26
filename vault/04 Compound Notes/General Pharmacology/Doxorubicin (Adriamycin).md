---
type: compound
schema-version: 2
compound-id: doxorubicin-compound
name: Doxorubicin (Adriamycin)
aliases:
- Doxorubicin
- Adriamycin
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
  value: 12.0
  value-max: null
  unit: min
  notes: 'Triphasic; 12 minutes, 3.3 hours, 30 hours. Mean: 1–3 hours'
protein-binding:
  value: 75.0
  value-max: null
  unit: percent
  notes: 75%
bioavailability:
  value: 5.0
  value-max: null
  notes: 5% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (5–12%), faeces (40–50%)
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
  title: Doxorubicin
  url: https://en.wikipedia.org/w/index.php?title=Doxorubicin&oldid=1369613446
  revision: 1369613446
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Doxorubicin (Adriamycin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `doxorubicin-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Doxorubicin, Adriamycin

## Source summary

An anthracycline that intercalates DNA, poisons topoisomerase II and generates iron-dependent free radicals. The last of those is why its cardiotoxicity is cumulative and dose-limited rather than reversible.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Doxorubicin*](https://en.wikipedia.org/w/index.php?title=Doxorubicin&oldid=1369613446) (revision 1369613446, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 min | Triphasic; 12 minutes, 3.3 hours, 30 hours. Mean: 1–3 hours |
| Protein binding | 75 % | 75% |
| Bioavailability | 5 % | 5% (by mouth) |
| Metabolism | hepatic | Liver |
| Excretion | - | Urine (5–12%), faeces (40–50%) |

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
