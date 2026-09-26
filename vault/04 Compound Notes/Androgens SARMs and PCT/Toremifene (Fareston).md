---
type: compound
schema-version: 2
compound-id: toremifene-compound
name: Toremifene (Fareston)
aliases:
- Toremifene
- Fareston
cluster: Androgens SARMs and PCT
group: pct
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
  value: 3.0
  value-max: 7.0
  unit: d
  notes: 'Toremifene: 3–7 days; Metabolites: 4–21 days'
protein-binding:
  value: 99.7
  value-max: null
  unit: percent
  notes: 99.7%
bioavailability:
  value: 100.0
  value-max: null
  notes: Good/~100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 70% (as metabolites)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
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
  title: Toremifene
  url: https://en.wikipedia.org/w/index.php?title=Toremifene&oldid=1328755055
  revision: 1328755055
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Toremifene (Fareston)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `toremifene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Toremifene, Fareston

## Source summary

Triphenylethylene SERM closely related to tamoxifen, used for estrogen-receptor-positive breast cancer and sometimes for on-cycle estrogen management.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Toremifene*](https://en.wikipedia.org/w/index.php?title=Toremifene&oldid=1328755055) (revision 1328755055, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–7 d | Toremifene: 3–7 days; Metabolites: 4–21 days |
| Protein binding | 99.7 % | 99.7% |
| Bioavailability | 100 % | Good/~100% |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyltoremifene; 4-Hydroxytoremifene; Ospemifene |
| Excretion | mainly non-renal | Feces: 70% (as metabolites) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
