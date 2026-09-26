---
type: compound
schema-version: 2
compound-id: letrozole-compound
name: Femara (Letrozole)
aliases:
- Femara
- Letrozole
cluster: Androgens SARMs and PCT
group: pct
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
  value: 2.0
  value-max: null
  unit: d
  notes: 2 days
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%, mainly to albumin
bioavailability:
  value: 99.9
  value-max: null
  notes: 99.9%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: pharmacologically-inactive metabolites Bis(4-cyanophenyl)methanol and 4,4'-dicyanobenzophenone.
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Letrozole
  url: https://en.wikipedia.org/w/index.php?title=Letrozole&oldid=1356902222
  revision: 1356902222
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Femara (Letrozole)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `letrozole-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Femara, Letrozole

## Source summary

Highly potent non-steroidal aromatase inhibitor, more aggressive than anastrozole at suppressing estrogen.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Letrozole*](https://en.wikipedia.org/w/index.php?title=Letrozole&oldid=1356902222) (revision 1356902222, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 d | 2 days |
| Protein binding | 60 % | 60%, mainly to albumin |
| Bioavailability | 99.9 % | 99.9% |
| Metabolism | - | pharmacologically-inactive metabolites Bis(4-cyanophenyl)methanol and 4,4'-dicyanobenzophenone. |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
