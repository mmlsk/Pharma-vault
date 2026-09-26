---
type: compound
schema-version: 2
compound-id: spironolactone-compound
name: Spironolactone
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
  value: 1.4
  value-max: null
  unit: h
  notes: 'Spironolactone: 1.4 hrs; 7α-TMS: 13.8 hours; 6β-OH-7α-TMS: 15.0 hrs; Canrenone: 16.5 hours'
protein-binding:
  value: 88.0
  value-max: null
  unit: percent
  notes: 'Spironolactone: 88% (to albumin and AGP); Canrenone: 99.2% (to albumin)'
bioavailability:
  value: 60.0
  value-max: 90.0
  notes: 60–90%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, others:; • Deacetylation via CES; • S-Oxygenation via FOM; • S-Methylation via TMT; • Dethioacetylation; • Hydroxylation via CYP3A4; • Lactone hydrolysis via PON3
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
  title: Spironolactone
  url: https://en.wikipedia.org/w/index.php?title=Spironolactone&oldid=1369649243
  revision: 1369649243
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Spironolactone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `spironolactone-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

Potassium-sparing diuretic with real antiandrogenic activity at the androgen receptor, commonly used off-label for hormonal acne and hirsutism.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Spironolactone*](https://en.wikipedia.org/w/index.php?title=Spironolactone&oldid=1369649243) (revision 1369649243, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.4 h | Spironolactone: 1.4 hrs; 7α-TMS: 13.8 hours; 6β-OH-7α-TMS: 15.0 hrs; Canrenone: 16.5 hours |
| Protein binding | 88 % | Spironolactone: 88% (to albumin and AGP); Canrenone: 99.2% (to albumin) |
| Bioavailability | 60–90 % | 60–90% |
| Metabolism | hepatic | Liver, others:; • Deacetylation via CES; • S-Oxygenation via FOM; • S-Methylation via TMT; • Dethioacetylation; • Hydroxylation via CYP3A4; • Lactone hydrolysis via PON3 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 7α-TS, 7α-TMS, 6β-OH-7α-TMS, canrenone, others; (All three active) |
| Excretion | - | Urine, bile |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
