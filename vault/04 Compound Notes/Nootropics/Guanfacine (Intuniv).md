---
type: compound
schema-version: 2
compound-id: guanfacine-compound
name: Guanfacine (Intuniv)
aliases:
- Guanfacine
- Intuniv
cluster: Nootropics
group: nootropic
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
  value: 10.0
  value-max: 17.0
  unit: h
  notes: 'IR: 10–17 hours; XR: 17 hours (10–30) in adults & adolescents and 14 hours in children'
protein-binding:
  value: 70.0
  value-max: null
  unit: percent
  notes: 70%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100% (IR), 58% (XR)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.75
  notes: 'Kidney (80%; 50% [range: 40–75%] as unchanged drug)'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A4
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
- cns-activity
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/nootropic
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Guanfacine
  url: https://en.wikipedia.org/w/index.php?title=Guanfacine&oldid=1373933768
  revision: 1373933768
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Guanfacine (Intuniv)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `guanfacine-compound`
- **Source group:** Nootropics & Cognition (`nootropic`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Guanfacine, Intuniv

## Source summary

Alpha-2A adrenergic agonist. Improves working memory by closing prefrontal HCN channels rather than by raising catecholamines, which is why it is non-stimulant and sedating rather than activating.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Guanfacine*](https://en.wikipedia.org/w/index.php?title=Guanfacine&oldid=1373933768) (revision 1373933768, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–17 h | IR: 10–17 hours; XR: 17 hours (10–30) in adults & adolescents and 14 hours in children |
| Protein binding | 70 % | 70% |
| Bioavailability | 80–100 % | 80–100% (IR), 58% (XR) |
| Metabolism | hepatic | CYP3A4 |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.75 | Kidney (80%; 50% [range: 40–75%] as unchanged drug) |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
