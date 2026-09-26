---
type: compound
schema-version: 2
compound-id: linagliptin-compound
name: Linagliptin (Tradjenta)
aliases:
- Linagliptin
- Tradjenta
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
  value: 24.0
  value-max: null
  unit: h
  notes: ~24 hours
protein-binding:
  value: 75.0
  value-max: 99.0
  unit: percent
  notes: 75–99% (concentration-dependent)
bioavailability:
  value: 30.0
  value-max: null
  notes: ~30% (Tmax = 1.5 hours)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (80%), urine (5%)
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Minimal (~10% metabolized)
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
  title: Linagliptin
  url: https://en.wikipedia.org/w/index.php?title=Linagliptin&oldid=1329259847
  revision: 1329259847
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Linagliptin (Tradjenta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `linagliptin-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Linagliptin, Tradjenta

## Source summary

DPP-4 inhibitor for type 2 diabetes, unusual in requiring no renal dose adjustment; weight-neutral rather than a weight-loss drug.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Linagliptin*](https://en.wikipedia.org/w/index.php?title=Linagliptin&oldid=1329259847) (revision 1329259847, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 24 h | ~24 hours |
| Protein binding | 75–99 % | 75–99% (concentration-dependent) |
| Bioavailability | 30 % | ~30% (Tmax = 1.5 hours) |
| Metabolism | - | Minimal (~10% metabolized) |
| Metabolites | - | Pharmacologically inactive |
| Excretion | mainly non-renal | Feces (80%), urine (5%) |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
