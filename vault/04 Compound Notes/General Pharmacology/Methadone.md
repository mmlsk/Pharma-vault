---
type: compound
schema-version: 2
compound-id: methadone-compound
name: Methadone
aliases: []
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
  value: 15.0
  value-max: 55.0
  unit: h
  notes: 15–55 hours
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85–90%
bioavailability:
  value: 76.0
  value-max: null
  notes: 'Rectal: 76%; SC: 79% ;; Oral: 41–99%; IV/IM: 100%'
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4, CYP2B6 and CYP2D6-mediated)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Methadone
  url: https://en.wikipedia.org/w/index.php?title=Methadone&oldid=1376375440
  revision: 1376375440
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Methadone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `methadone-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Long-acting opioid used for maintenance therapy and for complex pain, with a half-life that varies tenfold between individuals.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Methadone*](https://en.wikipedia.org/w/index.php?title=Methadone&oldid=1376375440) (revision 1376375440, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15–55 h | 15–55 hours |
| Protein binding | 85–90 % | 85–90% |
| Bioavailability | 76 % | Rectal: 76%; SC: 79% ;; Oral: 41–99%; IV/IM: 100% |
| Metabolism | hepatic | Liver (CYP3A4, CYP2B6 and CYP2D6-mediated) |
| CYP (metabolised by) | CYP2B6, CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • EDDP; • EDMP; • para-Hydroxymethadone |
| Excretion | - | Urine, faeces |

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
- [[CYP450 Metabolism]]
