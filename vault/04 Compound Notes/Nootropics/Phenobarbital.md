---
type: compound
schema-version: 2
compound-id: phenobarbital-compound
name: Phenobarbital
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
  value-max: 118.0
  unit: h
  notes: 53–118 hours
protein-binding:
  value: 20.0
  value-max: 45.0
  unit: percent
  notes: 20 to 45%
bioavailability:
  value: 95.0
  value-max: null
  notes: '>95%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2C19)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Phenobarbital
  url: https://en.wikipedia.org/w/index.php?title=Phenobarbital&oldid=1376696621
  revision: 1376696621
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Phenobarbital

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `phenobarbital-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

The oldest anticonvulsant still in use, a barbiturate that remains first-line for neonatal seizures and in low-resource settings.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Phenobarbital*](https://en.wikipedia.org/w/index.php?title=Phenobarbital&oldid=1376696621) (revision 1376696621, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 53–118 h | 53–118 hours |
| Protein binding | 20–45 % | 20 to 45% |
| Bioavailability | 95 % | >95% |
| Metabolism | hepatic | Liver (mostly CYP2C19) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | - | Kidney and fecal |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
