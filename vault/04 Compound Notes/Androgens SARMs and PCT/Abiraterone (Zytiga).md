---
type: compound
schema-version: 2
compound-id: abiraterone-compound
name: Abiraterone (Zytiga)
aliases:
- Abiraterone
- Zytiga
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
  value: 12.0
  value-max: 24.0
  unit: h
  notes: 'Abiraterone: 12–24 hours'
protein-binding:
  value: 99.8
  value-max: null
  unit: percent
  notes: 'Abiraterone: ~99.8% (to albumin and α1-AGp)'
bioavailability:
  value: 50.0
  value-max: null
  notes: Unknown, but may be 50% at most on empty stomach
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 88%; Urine: 5%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Esterases, CYP3A4, SULT2A1
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
  title: Abiraterone acetate
  url: https://en.wikipedia.org/w/index.php?title=Abiraterone_acetate&oldid=1354022007
  revision: 1354022007
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Abiraterone (Zytiga)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `abiraterone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Abiraterone, Zytiga

## Source summary

CYP17 inhibitor that blocks androgen biosynthesis at its source (testes, adrenals, and prostate tumor tissue itself), used for advanced prostate cancer.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Abiraterone acetate*](https://en.wikipedia.org/w/index.php?title=Abiraterone_acetate&oldid=1354022007) (revision 1354022007, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12–24 h | Abiraterone: 12–24 hours |
| Protein binding | 99.8 % | Abiraterone: ~99.8% (to albumin and α1-AGp) |
| Bioavailability | 50 % | Unknown, but may be 50% at most on empty stomach |
| Metabolism | hepatic | Esterases, CYP3A4, SULT2A1 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Abiraterone, others |
| Excretion | mainly non-renal | Feces: 88%; Urine: 5% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
