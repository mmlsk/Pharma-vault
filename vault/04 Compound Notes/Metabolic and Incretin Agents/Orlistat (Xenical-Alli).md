---
type: compound
schema-version: 2
compound-id: orlistat-compound
name: Orlistat (Xenical/Alli)
aliases:
- Orlistat
- Xenical
- Alli
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
  value-max: 2.0
  unit: h
  notes: 1 to 2 hours
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: null
  value-max: null
  notes: Negligible
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: In the GI tract
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
  title: Orlistat
  url: https://en.wikipedia.org/w/index.php?title=Orlistat&oldid=1367132106
  revision: 1367132106
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Orlistat (Xenical/Alli)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `orlistat-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **Aliases:** Orlistat, Xenical, Alli

## Source summary

Gastrointestinal lipase inhibitor that reduces dietary-fat absorption; produces modest weight loss and can impair fat-soluble vitamin absorption.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Orlistat*](https://en.wikipedia.org/w/index.php?title=Orlistat&oldid=1367132106) (revision 1367132106, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1 to 2 hours |
| Protein binding | 99 % | >99% |
| Bioavailability | - | Negligible |
| Metabolism | - | In the GI tract |
| Excretion | mainly non-renal | Fecal |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
