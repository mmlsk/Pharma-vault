---
type: compound
schema-version: 2
compound-id: anastrozole-compound
name: Arimidex (Anastrozole)
aliases:
- Arimidex
- Anastrozole
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
  value: 40.0
  value-max: 50.0
  unit: h
  notes: 40–50 hours
protein-binding:
  value: 40.0
  value-max: null
  unit: percent
  notes: 40%
bioavailability:
  value: null
  value-max: null
  notes: Unknown (but well-absorbed in animals)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (11%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (~85%) (N-dealkylation, hydroxylation, glucuronidation)
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
  title: Anastrozole
  url: https://en.wikipedia.org/w/index.php?title=Anastrozole&oldid=1356471610
  revision: 1356471610
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Arimidex (Anastrozole)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `anastrozole-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Arimidex, Anastrozole

## Source summary

Non-steroidal aromatase inhibitor used to control estrogen-related side effects during anabolic steroid use.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Anastrozole*](https://en.wikipedia.org/w/index.php?title=Anastrozole&oldid=1356471610) (revision 1356471610, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 40–50 h | 40–50 hours |
| Protein binding | 40 % | 40% |
| Bioavailability | - | Unknown (but well-absorbed in animals) |
| Metabolism | hepatic | Liver (~85%) (N-dealkylation, hydroxylation, glucuronidation) |
| Excretion | mainly urinary | Urine (11%) |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
