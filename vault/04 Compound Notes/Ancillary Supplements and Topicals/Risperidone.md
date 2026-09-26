---
type: compound
schema-version: 2
compound-id: risperidone-compound
name: Risperidone
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
  value-max: null
  unit: h
  notes: 20 hours (by mouth), 3–6 days (IM)
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: 90% (parent compound), 77% (active metabolite)
bioavailability:
  value: 70.0
  value-max: null
  notes: 70% (by mouth)
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urinary (70%) feces (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP2D6 mediated to 9-hydroxyrisperidone)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2D6
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2D6 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Risperidone
  url: https://en.wikipedia.org/w/index.php?title=Risperidone&oldid=1375738316
  revision: 1375738316
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Risperidone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `risperidone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Risperidone*](https://en.wikipedia.org/w/index.php?title=Risperidone&oldid=1375738316) (revision 1375738316, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 20 h | 20 hours (by mouth), 3–6 days (IM) |
| Protein binding | 90 % | 90% (parent compound), 77% (active metabolite) |
| Bioavailability | 70 % | 70% (by mouth) |
| Metabolism | hepatic | Liver (CYP2D6 mediated to 9-hydroxyrisperidone) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary | Urinary (70%) feces (14%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
