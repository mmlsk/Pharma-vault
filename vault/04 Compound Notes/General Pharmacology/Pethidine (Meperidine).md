---
type: compound
schema-version: 2
compound-id: meperidine-compound
name: Pethidine (Meperidine)
aliases:
- Pethidine
- Meperidine
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
  value: 2.5
  value-max: 4.0
  unit: h
  notes: 2.5–4 hours, 7–11 hours (liver disease)
protein-binding:
  value: 65.0
  value-max: 75.0
  unit: percent
  notes: 65–75%
bioavailability:
  value: 50.0
  value-max: 60.0
  notes: 50–60% (Oral), 80–90% (Oral, in cases of hepatic impairment)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP2B6, CYP3A4, CYP2C19, Carboxylesterase 1'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Pethidine
  url: https://en.wikipedia.org/w/index.php?title=Pethidine&oldid=1373295642
  revision: 1373295642
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Pethidine (Meperidine)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `meperidine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Pethidine, Meperidine

## Source summary

Old synthetic opioid largely abandoned because its normeperidine metabolite is a proconvulsant that accumulates.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pethidine*](https://en.wikipedia.org/w/index.php?title=Pethidine&oldid=1373295642) (revision 1373295642, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.5–4 h | 2.5–4 hours, 7–11 hours (liver disease) |
| Protein binding | 65–75 % | 65–75% |
| Bioavailability | 50–60 % | 50–60% (Oral), 80–90% (Oral, in cases of hepatic impairment) |
| Metabolism | hepatic | Liver: CYP2B6, CYP3A4, CYP2C19, Carboxylesterase 1 |
| CYP (metabolised by) | CYP2B6, CYP2C19, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | Norpethidine; Pethidinic acid; others |
| Excretion | mainly urinary | Renal |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
