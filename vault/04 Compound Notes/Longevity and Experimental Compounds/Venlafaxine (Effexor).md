---
type: compound
schema-version: 2
compound-id: venlafaxine-compound
name: Venlafaxine (Effexor)
aliases:
- Venlafaxine
- Effexor
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
  value: 2.0
  value-max: null
  unit: h
  notes: 5±2 h (parent compound for immediate release preparations), 15±6 h (parent compound for extended-release preparations), 11±2 h (active metabolite)
protein-binding:
  value: 2.0
  value-max: null
  unit: percent
  notes: 27±2% (parent compound), 30±12% (active metabolite, desvenlafaxine)
bioavailability:
  value: 15.0
  value-max: null
  notes: 42±15%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.05
  notes: Kidney (87%; 5% as unchanged drug; 29% as desvenlafaxine and 53% as other metabolites)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Extensively metabolised by the liver, primarily via CYP2D6
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
  title: Venlafaxine
  url: https://en.wikipedia.org/w/index.php?title=Venlafaxine&oldid=1371433947
  revision: 1371433947
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Venlafaxine (Effexor)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `venlafaxine-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **Aliases:** Venlafaxine, Effexor

## Source summary

SNRI with dose-related blood-pressure effects and a prominent discontinuation syndrome.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Venlafaxine*](https://en.wikipedia.org/w/index.php?title=Venlafaxine&oldid=1371433947) (revision 1371433947, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2 h | 5±2 h (parent compound for immediate release preparations), 15±6 h (parent compound for extended-release preparations), 11±2 h (active metabolite) |
| Protein binding | 2 % | 27±2% (parent compound), 30±12% (active metabolite, desvenlafaxine) |
| Bioavailability | 15 % | 42±15% |
| Metabolism | hepatic | Extensively metabolised by the liver, primarily via CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | O-desmethylvenlafaxine (ODV), see desvenlafaxine |
| Excretion | - · fe 0.05 | Kidney (87%; 5% as unchanged drug; 29% as desvenlafaxine and 53% as other metabolites) |

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
- [[CYP450 Metabolism]]
