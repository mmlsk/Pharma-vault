---
type: compound
schema-version: 2
compound-id: cariprazine-compound
name: Cariprazine
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
  value: 2.0
  value-max: 4.0
  unit: d
  notes: 2–4 days for parent drug, and 1–3 weeks for active metabolites
protein-binding:
  value: 91.0
  value-max: 97.0
  unit: percent
  notes: 91–97%
bioavailability:
  value: null
  value-max: null
  notes: High
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine (21%), bile
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver via CYP3A4 and to a lesser extent CYP2D6
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Cariprazine
  url: https://en.wikipedia.org/w/index.php?title=Cariprazine&oldid=1375757853
  revision: 1375757853
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Cariprazine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `cariprazine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Cariprazine*](https://en.wikipedia.org/w/index.php?title=Cariprazine&oldid=1375757853) (revision 1375757853, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 d | 2–4 days for parent drug, and 1–3 weeks for active metabolites |
| Protein binding | 91–97 % | 91–97% |
| Bioavailability | - | High |
| Metabolism | hepatic | Liver via CYP3A4 and to a lesser extent CYP2D6 |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | desmethylcariprazine, didesmethylcariprazine |
| Excretion | - | Urine (21%), bile |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
