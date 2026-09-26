---
type: compound
schema-version: 2
compound-id: asenapine-compound
name: Asenapine
aliases: []
cluster: Nootropics
group: neuropsych
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
  value: 24.0
  value-max: null
  unit: h
  notes: 24 hours (sublingual), 30 hours (transdermal), 33.9 hours (transdermal)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 35.0
  value-max: null
  notes: 35% (sublingual), <2% (oral), transdermal bioavailability is significantly higher than sublingual
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.16
  notes: Kidney (50%), Fecal (40%; ~5–16% as unchanged drug in feces)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: hepatic (glucurinodation by UGT1A4 and oxidative metabolism by CYP1A2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- serotonergic-or-dopaminergic-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/neuropsych
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Asenapine
  url: https://en.wikipedia.org/w/index.php?title=Asenapine&oldid=1375768934
  revision: 1375768934
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Asenapine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `asenapine-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Sublingual atypical antipsychotic with an exceptionally broad receptor profile, given sublingually because oral bioavailability is under two percent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Asenapine*](https://en.wikipedia.org/w/index.php?title=Asenapine&oldid=1375768934) (revision 1375768934, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | 24 hours (sublingual), 30 hours (transdermal), 33.9 hours (transdermal) |
| Protein binding | 95 % | 95% |
| Bioavailability | 35 % | 35% (sublingual), <2% (oral), transdermal bioavailability is significantly higher than sublingual |
| Metabolism | hepatic | hepatic (glucurinodation by UGT1A4 and oxidative metabolism by CYP1A2) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.16 | Kidney (50%), Fecal (40%; ~5–16% as unchanged drug in feces) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
