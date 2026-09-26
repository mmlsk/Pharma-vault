---
type: compound
schema-version: 2
compound-id: cyproterone-acetate-compound
name: Cyproterone Acetate
aliases: []
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
  value: 1.6
  value-max: 4.3
  unit: d
  notes: 'Oral: 1.6–4.3 days; IM: 3–4.3 days'
protein-binding:
  value: 93.0
  value-max: null
  unit: percent
  notes: 'Albumin: 93%; Free: 7%'
bioavailability:
  value: 68.0
  value-max: 100.0
  notes: 'Oral: 68–100%'
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 70%; Urine: 30%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4)
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
  title: Cyproterone acetate
  url: https://en.wikipedia.org/w/index.php?title=Cyproterone_acetate&oldid=1376024299
  revision: 1376024299
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cyproterone Acetate

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cyproterone-acetate-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

Steroidal antiandrogen and progestin that blocks the androgen receptor and suppresses LH/testosterone production, used for antiandrogen therapy and as a contraceptive component.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cyproterone acetate*](https://en.wikipedia.org/w/index.php?title=Cyproterone_acetate&oldid=1376024299) (revision 1376024299, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.6–4.3 d | Oral: 1.6–4.3 days; IM: 3–4.3 days |
| Protein binding | 93 % | Albumin: 93%; Free: 7% |
| Bioavailability | 68–100 % | Oral: 68–100% |
| Metabolism | hepatic | Hepatic (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 15β-OH-CPA (major); • Cyproterone (minor); • Acetic acid (minor) |
| Excretion | mainly non-renal | Feces: 70%; Urine: 30% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
