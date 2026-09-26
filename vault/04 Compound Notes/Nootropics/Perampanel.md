---
type: compound
schema-version: 2
compound-id: perampanel-compound
name: Perampanel
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
  value: 105.0
  value-max: null
  unit: h
  notes: 105 hours, 295 hours (moderate hepatic impairment)
protein-binding:
  value: 95.0
  value-max: 96.0
  unit: percent
  notes: 95–96%
bioavailability:
  value: null
  value-max: null
  notes: 116%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 70% faeces, 30% urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, mostly via CYP3A4 and/or CYP3A5
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  - CYP3A5
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4, CYP3A5 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Perampanel
  url: https://en.wikipedia.org/w/index.php?title=Perampanel&oldid=1373296477
  revision: 1373296477
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Perampanel

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `perampanel-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Selective non-competitive AMPA receptor antagonist, the first of its class, carrying a boxed warning for aggression.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Perampanel*](https://en.wikipedia.org/w/index.php?title=Perampanel&oldid=1373296477) (revision 1373296477, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 105 h | 105 hours, 295 hours (moderate hepatic impairment) |
| Protein binding | 95–96 % | 95–96% |
| Bioavailability | - | 116% |
| Metabolism | hepatic | Liver, mostly via CYP3A4 and/or CYP3A5 |
| CYP (metabolised by) | CYP3A4, CYP3A5 | roles as inhibitor/inducer not assessed |
| Excretion | - | 70% faeces, 30% urine |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
