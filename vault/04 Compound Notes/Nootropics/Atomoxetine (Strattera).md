---
type: compound
schema-version: 2
compound-id: atomoxetine-compound
name: Atomoxetine (Strattera)
aliases:
- Atomoxetine
- Strattera
cluster: Nootropics
group: nootropic
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
  value: 4.5
  value-max: 5.3
  unit: h
  notes: '2D6 EMs: 4.5–5.3h; 2D6 PMs: 19–22h'
protein-binding:
  value: 98.7
  value-max: null
  unit: percent
  notes: 'ATX: 98.7%; 4-OH-ATX: 66.6%; N-DM-ATX: 99.1%'
bioavailability:
  value: 94.0
  value-max: null
  notes: '2D6 EMs: 94%; 2D6 PMs: 63%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: '2D6 EMs: urine (>96%), feces (1–2%); 2D6 PMs: urine (80%), feces (13–22%)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: ring hydroxylation (CYP2D6, others), benzylic hydroxylation, N-demethylation (CYP2C19), glucuronidation (UGTs)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19, CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Atomoxetine
  url: https://en.wikipedia.org/w/index.php?title=Atomoxetine&oldid=1375538637
  revision: 1375538637
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Atomoxetine (Strattera)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `atomoxetine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Atomoxetine, Strattera

## Source summary

Selective noradrenaline reuptake inhibitor for ADHD. Non-stimulant and non-scheduled, with a slow onset over weeks rather than hours -- a genuinely different clinical shape from the stimulants.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Atomoxetine*](https://en.wikipedia.org/w/index.php?title=Atomoxetine&oldid=1375538637) (revision 1375538637, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–5.3 h | 2D6 EMs: 4.5–5.3h; 2D6 PMs: 19–22h |
| Protein binding | 98.7 % | ATX: 98.7%; 4-OH-ATX: 66.6%; N-DM-ATX: 99.1% |
| Bioavailability | 94 % | 2D6 EMs: 94%; 2D6 PMs: 63% |
| Metabolism | hepatic | Liver: ring hydroxylation (CYP2D6, others), benzylic hydroxylation, N-demethylation (CYP2C19), glucuronidation (UGTs) |
| CYP (metabolised by) | CYP2C19, CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 4-Hydroxyatomoxetine; • N-Desmethylatomoxetine; ; • N-Desmethyl-4-hydroxyatomoxetine; • Glucuronide conjugates |
| Excretion | mainly urinary | 2D6 EMs: urine (>96%), feces (1–2%); 2D6 PMs: urine (80%), feces (13–22%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
