---
type: compound
schema-version: 2
compound-id: diamorphine-compound
name: Diamorphine (Heroin)
aliases:
- Diamorphine
- Heroin
cluster: General Pharmacology
group: analgesia
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
  value-max: 3.0
  unit: min
  notes: 2–3 minutes
protein-binding:
  value: 0.0
  value-max: null
  unit: percent
  notes: 0% (morphine metabolite 35%)
bioavailability:
  value: 35.0
  value-max: null
  notes: <35% (by mouth), 44–61% (inhalation)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 90% kidney as glucuronides, rest bile duct
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Heroin
  url: https://en.wikipedia.org/w/index.php?title=Heroin&oldid=1376264455
  revision: 1376264455
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Diamorphine (Heroin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `diamorphine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Diamorphine, Heroin

## Source summary

Diacetylmorphine, a prodrug of morphine used clinically in the United Kingdom for acute severe pain and in supervised injectable treatment programmes.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Heroin*](https://en.wikipedia.org/w/index.php?title=Heroin&oldid=1376264455) (revision 1376264455, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 min | 2–3 minutes |
| Protein binding | 0 % | 0% (morphine metabolite 35%) |
| Bioavailability | 35 % | <35% (by mouth), 44–61% (inhalation) |
| Metabolism | hepatic | Liver |
| Metabolites | - | 6-Monoacetylmorphine, morphine |
| Excretion | mainly urinary | 90% kidney as glucuronides, rest bile duct |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
