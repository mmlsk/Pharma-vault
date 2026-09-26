---
type: compound
schema-version: 2
compound-id: sibutramine-compound
name: Sibutramine
aliases: []
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
  value: 1.0
  value-max: null
  unit: h
  notes: 1 hour (sibutramine), 14 hours (M1) & 16 hours (M2)
protein-binding:
  value: 97.0
  value-max: null
  unit: percent
  notes: 97%, (94% for its desmethyl metabolites, M1 & M2)
bioavailability:
  value: 77.0
  value-max: null
  notes: Absorption 77%, considerable first-pass metabolism
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (77%), feces (8%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4-mediated)
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
  title: Sibutramine
  url: https://en.wikipedia.org/w/index.php?title=Sibutramine&oldid=1374492573
  revision: 1374492573
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sibutramine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sibutramine-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

Withdrawn monoamine-reuptake appetite suppressant; cardiovascular-event risk makes it especially important to recognize in adulterated weight-loss products.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sibutramine*](https://en.wikipedia.org/w/index.php?title=Sibutramine&oldid=1374492573) (revision 1374492573, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1 h | 1 hour (sibutramine), 14 hours (M1) & 16 hours (M2) |
| Protein binding | 97 % | 97%, (94% for its desmethyl metabolites, M1 & M2) |
| Bioavailability | 77 % | Absorption 77%, considerable first-pass metabolism |
| Metabolism | hepatic | Hepatic (CYP3A4-mediated) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urine (77%), feces (8%) |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
- [[Glucose and Incretin Signaling]]
