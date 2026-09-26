---
type: compound
schema-version: 2
compound-id: selegiline-oral-compound
name: Selegiline (oral)
aliases:
- Selegiline
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
  value: 1.2
  value-max: 3.5
  unit: h
  notes: '• S (single): 1.2–3.5h; • S (multi): 7.7–9.7h; • DMS (single): 2.2–3.8h; • DMS (multi): 9.5h; • L-MA: 14–21h; • L-A: 16–18h; ; • S (single): 1.3h; • S (multi): 10h; ; • S: 20h'
protein-binding:
  value: 85.0
  value-max: 90.0
  unit: percent
  notes: 85–90%
bioavailability:
  value: 4.0
  value-max: 10.0
  notes: 'Oral: 4–10%; ODT: ~5–8× oral; Transdermal: 75%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine (87%):; • L-MA: 20–63%; • L-A: 9–26%; • DMS: 1%; • S: 0.01–0.03%; Feces: 15%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver, other tissues (CYP2B6, CYP2C19, others)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2B6
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2B6, CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Selegiline
  url: https://en.wikipedia.org/w/index.php?title=Selegiline&oldid=1369810254
  revision: 1369810254
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Selegiline (oral)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `selegiline-oral-compound`
- **Source group:** Neurology & Psychiatry (`neuropsych`)
- **Cluster:** [[Nootropics]]
- **Aliases:** Selegiline

## Source summary

Selective MAO-B inhibitor for Parkinson disease, losing its selectivity at higher doses and metabolised to amphetamine derivatives.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Selegiline*](https://en.wikipedia.org/w/index.php?title=Selegiline&oldid=1369810254) (revision 1369810254, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1.2–3.5 h | • S (single): 1.2–3.5h; • S (multi): 7.7–9.7h; • DMS (single): 2.2–3.8h; • DMS (multi): 9.5h; • L-MA: 14–21h; • L-A: 16–18h; ; • S (single): 1.3h; • S (multi): 10h; ; • S: 20h |
| Protein binding | 85–90 % | 85–90% |
| Bioavailability | 4–10 % | Oral: 4–10%; ODT: ~5–8× oral; Transdermal: 75% |
| Metabolism | hepatic | Liver, other tissues (CYP2B6, CYP2C19, others) |
| CYP (metabolised by) | CYP2B6, CYP2C19 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • Desmethylselegiline (DMS); • Levomethamphetamine (L-MA); • Levoamphetamine (L-A) |
| Excretion | mainly urinary | Urine (87%):; • L-MA: 20–63%; • L-A: 9–26%; • DMS: 1%; • S: 0.01–0.03%; Feces: 15% |

## Safety routing

Group-level triage (not compound-specific): `cns-activity`, `serotonergic-or-dopaminergic-load`

- [[Stacking and Interaction Risks]]
- [[Serotonin Toxicity]]
- [[CYP450 Metabolism]]
