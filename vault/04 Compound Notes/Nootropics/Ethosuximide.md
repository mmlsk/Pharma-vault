---
type: compound
schema-version: 2
compound-id: ethosuximide-compound
name: Ethosuximide
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
  value: 53.0
  value-max: null
  unit: h
  notes: 53 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 93.0
  value-max: null
  notes: 93%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (20%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver (CYP3A4, CYP2E1)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2E1
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2E1, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Ethosuximide
  url: https://en.wikipedia.org/w/index.php?title=Ethosuximide&oldid=1338566097
  revision: 1338566097
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Ethosuximide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ethosuximide-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

The drug of choice for childhood absence epilepsy, and the cleanest example of a seizure type defined by one channel.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ethosuximide*](https://en.wikipedia.org/w/index.php?title=Ethosuximide&oldid=1338566097) (revision 1338566097, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 53 h | 53 hours |
| Bioavailability | 93 % | 93% |
| Metabolism | hepatic | liver (CYP3A4, CYP2E1) |
| CYP (metabolised by) | CYP2E1, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | kidney (20%) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
