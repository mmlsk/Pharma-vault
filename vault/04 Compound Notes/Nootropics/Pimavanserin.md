---
type: compound
schema-version: 2
compound-id: pimavanserin-compound
name: Pimavanserin
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
  value: 54.0
  value-max: 57.0
  unit: h
  notes: 'Pimavanserin: 54–57h; N-Desmethyl-pimavanserin (active): 200h'
protein-binding:
  value: 94.0
  value-max: 97.0
  unit: percent
  notes: 94–97%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic (CYP3A4, CYP3A5, CYP2J2)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2J2
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2J2, CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pimavanserin
  url: https://en.wikipedia.org/w/index.php?title=Pimavanserin&oldid=1358505193
  revision: 1358505193
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pimavanserin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pimavanserin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Selective 5-HT2A inverse agonist for Parkinson disease psychosis, treating psychosis without any dopamine receptor blockade.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pimavanserin*](https://en.wikipedia.org/w/index.php?title=Pimavanserin&oldid=1358505193) (revision 1358505193, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 54–57 h | Pimavanserin: 54–57h; N-Desmethyl-pimavanserin (active): 200h |
| Protein binding | 94–97 % | 94–97% |
| Metabolism | hepatic | Hepatic (CYP3A4, CYP3A5, CYP2J2) |
| CYP (metabolised by) | CYP2J2, CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-Desmethyl-pimavanserin |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
