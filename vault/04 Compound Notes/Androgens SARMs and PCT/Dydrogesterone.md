---
type: compound
schema-version: 2
compound-id: dydrogesterone-compound
name: Dydrogesterone
aliases: []
cluster: Androgens SARMs and PCT
group: pct
class: null
subclass: null
mechanism: Progesterone receptor agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1200853
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 'Parent: 5–7 hours; Metabolite: 14–17 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: '? (probably to albumin)'
bioavailability:
  value: 28.0
  value-max: null
  notes: 28%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Hepatic: AKR1C1, AKR1C3, CYP3A4'
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Dydrogesterone
  url: https://en.wikipedia.org/w/index.php?title=Dydrogesterone&oldid=1328989710
  revision: 1328989710
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Dydrogesterone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dydrogesterone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **ChEMBL:** [CHEMBL1200853](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1200853/) · max phase 4

## Source summary

Progesterone receptor agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL1200853).

## Mechanism

Progesterone receptor agonist _(ChEMBL curated mechanism, as quoted by the source)._

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dydrogesterone*](https://en.wikipedia.org/w/index.php?title=Dydrogesterone&oldid=1328989710) (revision 1328989710, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | Parent: 5–7 hours; Metabolite: 14–17 hours |
| Protein binding | - | ? (probably to albumin) |
| Bioavailability | 28 % | 28% |
| Metabolism | hepatic | Hepatic: AKR1C1, AKR1C3, CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 20α-DHD (exclusively via AKR1C1 and AKRC13) |
| Excretion | mainly urinary | Urine |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
