---
type: compound
schema-version: 2
compound-id: bupropion-compound
name: Bupropion (Wellbutrin)
aliases:
- Bupropion
- Wellbutrin
cluster: Metabolic and Incretin Agents
group: glp1
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
  value: 11.0
  value-max: null
  unit: h
  notes: 'Bupropion:; *alpha: 0.5–1.04; *beta: 11h; Hydroxybupropion:20h; Threohydrobupropion:37h; Erythrohydrobupropion:33h'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Unknown
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, intestines (CYP2B6, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- glucose-metabolism
- gastrointestinal
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Bupropion
  url: https://en.wikipedia.org/w/index.php?title=Bupropion&oldid=1375206575
  revision: 1375206575
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Bupropion (Wellbutrin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bupropion-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Bupropion, Wellbutrin

## Source summary

Norepinephrine/dopamine reuptake inhibitor used for depression and smoking cessation and combined with naltrexone for obesity; can raise blood pressure and seizure risk.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bupropion*](https://en.wikipedia.org/w/index.php?title=Bupropion&oldid=1375206575) (revision 1375206575, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 11 h | Bupropion:; *alpha: 0.5–1.04; *beta: 11h; Hydroxybupropion:20h; Threohydrobupropion:37h; Erythrohydrobupropion:33h |
| Bioavailability | - | Unknown |
| Metabolism | hepatic | Liver, intestines (CYP2B6, others) |
| CYP (metabolised by) | CYP2B6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxybupropion; Threohydrobupropion; Erythrohydrobupropion; Others |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
