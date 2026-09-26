---
type: compound
schema-version: 2
compound-id: ostarine-compound
name: Ostarine (MK-2866)
aliases:
- Ostarine
- MK-2866
cluster: Androgens SARMs and PCT
group: sarms
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
  value: 14.0
  value-max: 24.0
  unit: h
  notes: 14–24 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 100.0
  value-max: null
  notes: 100% (rats)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Feces (70%), urine (21–25%) (rats)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4, UGT1A1, UGT2B7
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
- identity-contamination
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/sarms
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Enobosarm
  url: https://en.wikipedia.org/w/index.php?title=Enobosarm&oldid=1375979110
  revision: 1375979110
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ostarine (MK-2866)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ostarine-compound`
- **Source group:** SARMs (`sarms`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Ostarine, MK-2866

## Source summary

Selective androgen receptor modulator (SARM) studied for muscle wasting, with milder side effects than steroids.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enobosarm*](https://en.wikipedia.org/w/index.php?title=Enobosarm&oldid=1375979110) (revision 1375979110, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–24 h | 14–24 hours |
| Bioavailability | 100 % | 100% (rats) |
| Metabolism | hepatic | CYP3A4, UGT1A1, UGT2B7 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Enobosarm glucuronide |
| Excretion | mainly urinary | Feces (70%), urine (21–25%) (rats) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `identity-contamination`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
