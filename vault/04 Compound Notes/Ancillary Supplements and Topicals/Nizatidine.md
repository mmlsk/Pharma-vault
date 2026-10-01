---
type: compound
schema-version: 2
compound-id: nizatidine-compound
name: Nizatidine
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
  value: 1.0
  value-max: 2.0
  unit: h
  notes: 1–2 hours
protein-binding:
  value: 35.0
  value-max: null
  unit: percent
  notes: 35%
bioavailability:
  value: 70.0
  value-max: null
  notes: '>70%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
  title: Nizatidine
  url: https://en.wikipedia.org/w/index.php?title=Nizatidine&oldid=1366288761
  revision: 1366288761
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: e9957997-8b85-48a0-9bb3-b878cb223236
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e9957997-8b85-48a0-9bb3-b878cb223236
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Nizatidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nizatidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Blocks parietal-cell H2 receptors to reduce stimulated gastric acid secretion.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nizatidine*](https://en.wikipedia.org/w/index.php?title=Nizatidine&oldid=1366288761) (revision 1366288761, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 1–2 h | 1–2 hours |
| Protein binding | 35 % | 35% |
| Bioavailability | 70 % | >70% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e9957997…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e9957997-8b85-48a0-9bb3-b878cb223236), label version 20250102. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 3.5, 11)
> - protein-binding: consistent (label values: 35)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
