---
type: compound
schema-version: 2
compound-id: suvorexant-compound
name: Suvorexant (Belsomra)
aliases:
- Suvorexant
- Belsomra
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
  value: 12.2
  value-max: null
  unit: h
  notes: 12.2 hours (8–19 hours) (40 mg)
protein-binding:
  value: 99.5
  value-max: null
  unit: percent
  notes: 99.5%
bioavailability:
  value: 82.0
  value-max: null
  notes: 82% (10 mg; lower at higher doses)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 'Feces: 66%; Urine: 23%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A major, CYP2C19 minor)
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
  title: Suvorexant
  url: https://en.wikipedia.org/w/index.php?title=Suvorexant&oldid=1368799943
  revision: 1368799943
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Suvorexant (Belsomra)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `suvorexant-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Suvorexant, Belsomra

## Source summary

Dual orexin-receptor antagonist approved for insomnia; can cause next-day impairment, abnormal sleep behaviors, and additive sedation.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Suvorexant*](https://en.wikipedia.org/w/index.php?title=Suvorexant&oldid=1368799943) (revision 1368799943, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12.2 h | 12.2 hours (8–19 hours) (40 mg) |
| Protein binding | 99.5 % | 99.5% |
| Bioavailability | 82 % | 82% (10 mg; lower at higher doses) |
| Metabolism | hepatic | Liver (CYP3A major, CYP2C19 minor) |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Hydroxysuvorexant (inactive) |
| Excretion | mainly non-renal | Feces: 66%; Urine: 23% |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
