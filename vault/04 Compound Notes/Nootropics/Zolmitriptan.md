---
type: compound
schema-version: 2
compound-id: zolmitriptan-compound
name: Zolmitriptan
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
  value: 3.0
  value-max: null
  unit: h
  notes: 'Zolmitriptan: 3hours; N-Desmethylzolmitriptan: 3.5hours'
protein-binding:
  value: 25.0
  value-max: null
  unit: percent
  notes: 25%
bioavailability:
  value: 40.0
  value-max: null
  notes: 'Oral: 40%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: ~65%; Feces: ~30%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP1A2-mediated, to active metabolite; also MAO-A)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP1A2
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP1A2 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Zolmitriptan
  url: https://en.wikipedia.org/w/index.php?title=Zolmitriptan&oldid=1362428117
  revision: 1362428117
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Zolmitriptan

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `zolmitriptan-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]

## Source summary

Triptan available orally and as a nasal spray, with an active metabolite that prolongs its effect.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Zolmitriptan*](https://en.wikipedia.org/w/index.php?title=Zolmitriptan&oldid=1362428117) (revision 1362428117, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3 h | Zolmitriptan: 3hours; N-Desmethylzolmitriptan: 3.5hours |
| Protein binding | 25 % | 25% |
| Bioavailability | 40 % | Oral: 40% |
| Metabolism | hepatic | Liver (CYP1A2-mediated, to active metabolite; also MAO-A) |
| CYP (metabolised by) | CYP1A2 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • N-Desmethylzolmitriptan; • Zolmitriptan N-oxide; • Indole acetic acid derivative |
| Excretion | mainly urinary | Urine: ~65%; Feces: ~30% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
