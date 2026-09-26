---
type: compound
schema-version: 2
compound-id: bicalutamide-compound
name: Bicalutamide (Casodex)
aliases:
- Bicalutamide
- Casodex
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
  value: 5.8
  value-max: null
  unit: d
  notes: 'Single-dose: 5.8 days; Continuous: 7–10 days; <!--'
protein-binding:
  value: 96.1
  value-max: null
  unit: percent
  notes: 'Racemate: 96.1%; (R)-Isomer: 99.6%; (Mainly to albumin)'
bioavailability:
  value: null
  value-max: null
  notes: Well-absorbed; absolute bioavailability unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Feces: 43%; Urine: 34%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (extensively):; • Hydroxylation (CYP3A4); • Glucuronidation (UGT1A9)
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
  title: Bicalutamide
  url: https://en.wikipedia.org/w/index.php?title=Bicalutamide&oldid=1371710878
  revision: 1371710878
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Bicalutamide (Casodex)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bicalutamide-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Bicalutamide, Casodex

## Source summary

Nonsteroidal antiandrogen that competitively blocks testosterone and DHT at the androgen receptor, used in prostate cancer and sometimes for anti-androgen effect.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bicalutamide*](https://en.wikipedia.org/w/index.php?title=Bicalutamide&oldid=1371710878) (revision 1371710878, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5.8 d | Single-dose: 5.8 days; Continuous: 7–10 days; <!-- |
| Protein binding | 96.1 % | Racemate: 96.1%; (R)-Isomer: 99.6%; (Mainly to albumin) |
| Bioavailability | - | Well-absorbed; absolute bioavailability unknown |
| Metabolism | hepatic | Liver (extensively):; • Hydroxylation (CYP3A4); • Glucuronidation (UGT1A9) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Bicalutamide glucuronide; • Hydroxybicalutamide; • Hydroxybicalutamide gluc.; (All inactive); <!-- |
| Excretion | - | Feces: 43%; Urine: 34% |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
