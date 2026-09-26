---
type: compound
schema-version: 2
compound-id: pregabalin-compound
name: Pregabalin
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
  value: 4.5
  value-max: 7.0
  unit: h
  notes: 4.5–7 hours (mean 6.3 hours)
protein-binding:
  value: 1.0
  value-max: null
  unit: percent
  notes: <1%
bioavailability:
  value: 90.0
  value-max: null
  notes: 'Oral: ≥90%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Less than 2% is metabolized
dosage-ranges: {}
cyp-interactions:
  substrates: []
  inhibitors: []
  inducers: []
  transporters: []
  notes: null
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
  title: Pregabalin
  url: https://en.wikipedia.org/w/index.php?title=Pregabalin&oldid=1374816232
  revision: 1374816232
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pregabalin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pregabalin-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Alpha-2-delta ligand with linear pharmacokinetics, licensed for neuropathic pain, generalised anxiety and fibromyalgia, and now a controlled drug in several countries.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pregabalin*](https://en.wikipedia.org/w/index.php?title=Pregabalin&oldid=1374816232) (revision 1374816232, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5–7 h | 4.5–7 hours (mean 6.3 hours) |
| Protein binding | 1 % | <1% |
| Bioavailability | 90 % | Oral: ≥90% |
| Metabolism | - | Less than 2% is metabolized |
| Metabolites | - | N-methylpregabalin |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
