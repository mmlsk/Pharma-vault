---
type: compound
schema-version: 2
compound-id: naltrexone-compound
name: Naltrexone
aliases: []
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
  value: 4.0
  value-max: null
  unit: h
  notes: 'Oral (Revia):; • Naltrexone: 4 hours; • 6β-Naltrexol: 13 hours; Oral (Contrave):; • Naltrexone: 5 hours; IM (Vivitrol):; • Naltrexone: 5–10 days; • 6β-Naltrexol: 5–10 days'
protein-binding:
  value: 20.0
  value-max: null
  unit: percent
  notes: 20%
bioavailability:
  value: 5.0
  value-max: 60.0
  notes: 5–60%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (non-CYP450)
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
  title: Naltrexone
  url: https://en.wikipedia.org/w/index.php?title=Naltrexone&oldid=1370715111
  revision: 1370715111
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Naltrexone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naltrexone-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]

## Source summary

Opioid-receptor antagonist used for alcohol and opioid-use disorders and paired with bupropion for weight management; blocks opioid analgesia.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naltrexone*](https://en.wikipedia.org/w/index.php?title=Naltrexone&oldid=1370715111) (revision 1370715111, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | Oral (Revia):; • Naltrexone: 4 hours; • 6β-Naltrexol: 13 hours; Oral (Contrave):; • Naltrexone: 5 hours; IM (Vivitrol):; • Naltrexone: 5–10 days; • 6β-Naltrexol: 5–10 days |
| Protein binding | 20 % | 20% |
| Bioavailability | 5–60 % | 5–60% |
| Metabolism | hepatic | Liver (non-CYP450) |
| Metabolites | - | 6β-Naltrexol, others |
| Excretion | mainly urinary | Urine |

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
