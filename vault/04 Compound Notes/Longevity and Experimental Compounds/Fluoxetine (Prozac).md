---
type: compound
schema-version: 2
compound-id: fluoxetine-compound
name: Fluoxetine (Prozac)
aliases:
- Fluoxetine
- Prozac
cluster: Longevity and Experimental Compounds
group: longevity
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
  value-max: 3.0
  unit: d
  notes: 1–3 days (acute); 4–6 days (chronic)
protein-binding:
  value: 94.0
  value-max: 95.0
  unit: percent
  notes: 94–95%
bioavailability:
  value: 60.0
  value-max: 80.0
  notes: 60–80%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (80%), feces (15%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mostly CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Fluoxetine
  url: https://en.wikipedia.org/w/index.php?title=Fluoxetine&oldid=1373682188
  revision: 1373682188
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Fluoxetine (Prozac)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluoxetine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Fluoxetine, Prozac

## Source summary

Long-half-life SSRI for depression and related disorders; sexual dysfunction, activation, and serotonergic interactions matter.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluoxetine*](https://en.wikipedia.org/w/index.php?title=Fluoxetine&oldid=1373682188) (revision 1373682188, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–3 d | 1–3 days (acute); 4–6 days (chronic) |
| Protein binding | 94–95 % | 94–95% |
| Bioavailability | 60–80 % | 60–80% |
| Metabolism | hepatic | Liver (mostly CYP2D6-mediated) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Norfluoxetine (desmethylfluoxetine) ; • Seproxetine (S-norfluoxetine, S-desmethylfluoxetine) |
| Excretion | mainly urinary | Urine (80%), feces (15%) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
