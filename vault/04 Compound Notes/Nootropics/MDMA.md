---
type: compound
schema-version: 2
compound-id: mdma-compound
name: MDMA
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
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Unknown
bioavailability:
  value: null
  value-max: null
  notes: 'Oral: Unknown'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, CYP450 extensively involved, including CYP2D6
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
  title: MDMA
  url: https://en.wikipedia.org/w/index.php?title=MDMA&oldid=1372730107
  revision: 1372730107
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# MDMA

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `mdma-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

A substituted amphetamine that reverses the serotonin transporter, releasing serotonin rather than merely blocking reuptake. Trialled as an adjunct in PTSD; the FDA declined approval in 2024 over trial conduct and functional unblinding.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *MDMA*](https://en.wikipedia.org/w/index.php?title=MDMA&oldid=1372730107) (revision 1372730107, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | - | Unknown |
| Bioavailability | - | Oral: Unknown |
| Metabolism | hepatic | Liver, CYP450 extensively involved, including CYP2D6 |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | MDA, HMMA, HMA, HHMA, HHA, THMA, THA, MDP2P, MDOH 3-MMOTI |
| Excretion | mainly urinary | Kidney |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
