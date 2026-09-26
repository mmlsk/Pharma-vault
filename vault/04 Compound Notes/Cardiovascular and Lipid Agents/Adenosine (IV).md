---
type: compound
schema-version: 2
compound-id: adenosine-compound
name: Adenosine (IV)
aliases:
- Adenosine
- IV
cluster: Cardiovascular and Lipid Agents
group: cardio
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
  value: null
  value-max: null
  unit: null
  notes: 'cleared plasma <30 seconds; half-life <10 seconds [not stored as a number: non-human or sub-minute data]'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: 'No'
bioavailability:
  value: null
  value-max: null
  notes: Rapidly cleared from circulation via enzyme degradation
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: can leave cell intact or can be degraded to hypoxanthine, xanthine, and ultimately uric acid
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Rapidly converted to inosine and adenosine monophosphate
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Adenosine
  url: https://en.wikipedia.org/w/index.php?title=Adenosine&oldid=1376143840
  revision: 1376143840
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Adenosine (IV)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `adenosine-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **Aliases:** Adenosine, IV

## Source summary

Endogenous nucleoside given as a rapid intravenous bolus to terminate AV-nodal reentrant tachycardia, with a half-life of under ten seconds.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Adenosine*](https://en.wikipedia.org/w/index.php?title=Adenosine&oldid=1376143840) (revision 1376143840, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | cleared plasma <30 seconds; half-life <10 seconds [not stored as a number: non-human or sub-minute data] |
| Protein binding | - | No |
| Bioavailability | - | Rapidly cleared from circulation via enzyme degradation |
| Metabolism | - | Rapidly converted to inosine and adenosine monophosphate |
| Excretion | - | can leave cell intact or can be degraded to hypoxanthine, xanthine, and ultimately uric acid |

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
