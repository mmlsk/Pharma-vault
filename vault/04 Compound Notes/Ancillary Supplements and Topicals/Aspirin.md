---
type: compound
schema-version: 2
compound-id: aspirin-compound
name: Aspirin
aliases:
- Acetylsalicylic acid
- ASA
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
  value: 2.0
  value-max: 3.0
  unit: h
  notes: Dose-dependent; 2–3h for low doses (100mg or less), 15–30h for larger doses.
protein-binding:
  value: 80.0
  value-max: 90.0
  unit: percent
  notes: 80–90%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Urine (80–100%), sweat, saliva, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2C19 and possibly CYP3A), some is also hydrolysed to salicylate in the gut wall.
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C19
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C19 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Aspirin
  url: https://en.wikipedia.org/w/index.php?title=Aspirin&oldid=1376620634
  revision: 1376620634
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Aspirin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `aspirin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Acetylsalicylic acid, ASA

## Source summary

Irreversible platelet COX-1 inhibitor used for secondary cardiovascular prevention; bleeding risk usually outweighs benefit for unsupervised primary prevention.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Aspirin*](https://en.wikipedia.org/w/index.php?title=Aspirin&oldid=1376620634) (revision 1376620634, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | Dose-dependent; 2–3h for low doses (100mg or less), 15–30h for larger doses. |
| Protein binding | 80–90 % | 80–90% |
| Bioavailability | 80–100 % | 80–100% |
| Metabolism | hepatic | Liver (CYP2C19 and possibly CYP3A), some is also hydrolysed to salicylate in the gut wall. |
| CYP (metabolised by) | CYP2C19 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Urine (80–100%), sweat, saliva, feces |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
