---
type: compound
schema-version: 2
compound-id: sertindole-compound
name: Sertindole
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
  value: 3.0
  value-max: null
  unit: d
  notes: 3 days
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
bioavailability:
  value: 75.0
  value-max: null
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: 0.01
  notes: Faecal (the majority), Kidney (4% metabolites; 1% unchanged)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly via CYP2D6 and CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sertindole
  url: https://en.wikipedia.org/w/index.php?title=Sertindole&oldid=1362889706
  revision: 1362889706
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sertindole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sertindole-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Atypical antipsychotic withdrawn and reinstated with restrictions because of QT prolongation and sudden death reports.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sertindole*](https://en.wikipedia.org/w/index.php?title=Sertindole&oldid=1362889706) (revision 1362889706, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 d | 3 days |
| Protein binding | 99.5 % | 99.5% |
| Bioavailability | 75 % | 75% |
| Metabolism | hepatic | Liver (mostly via CYP2D6 and CYP3A4) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal · fe 0.01 | Faecal (the majority), Kidney (4% metabolites; 1% unchanged) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
