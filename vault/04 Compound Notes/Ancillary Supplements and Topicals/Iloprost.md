---
type: compound
schema-version: 2
compound-id: iloprost-compound
name: Iloprost
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
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
  value: 20.0
  value-max: 30.0
  unit: min
  notes: 20–30 minutes
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: 60%
bioavailability:
  value: null
  value-max: null
  notes: Not determined
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (68%) and fecal (12%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Via β-oxidation to inactive tetranor-iloprost
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
- needs-compound-review
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Iloprost
  url: https://en.wikipedia.org/w/index.php?title=Iloprost&oldid=1329257849
  revision: 1329257849
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: 34036fc0-6832-d066-e063-6394a90a18a4
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Iloprost

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `iloprost-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Synthetic prostacyclin analogue, inhaled or intravenous, for pulmonary arterial hypertension.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Iloprost*](https://en.wikipedia.org/w/index.php?title=Iloprost&oldid=1329257849) (revision 1329257849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20–30 min | 20–30 minutes |
| Protein binding | 60 % | 60% |
| Bioavailability | - | Not determined |
| Metabolism | hepatic | Via β-oxidation to inactive tetranor-iloprost |
| Excretion | mainly urinary | Kidney (68%) and fecal (12%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 34036fc0…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=34036fc0-6832-d066-e063-6394a90a18a4), label version 20260813. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.333, 0.5)
> - protein-binding: consistent (label values: 60)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
