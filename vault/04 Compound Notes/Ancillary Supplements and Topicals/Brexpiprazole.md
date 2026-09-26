---
type: compound
schema-version: 2
compound-id: brexpiprazole-compound
name: Brexpiprazole
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
  value: 91.0
  value-max: null
  unit: h
  notes: 91 hours (brexpiprazole), 86 hours (major metabolite)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 95.0
  value-max: null
  notes: 95% (Tmax = 4 hours)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Feces (46%), urine (25%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (mainly mediated by CYP3A4 and CYP2D6)
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
  title: Brexpiprazole
  url: https://en.wikipedia.org/w/index.php?title=Brexpiprazole&oldid=1368777849
  revision: 1368777849
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Brexpiprazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `brexpiprazole-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonizes or partially agonizes dopamine D2 receptors; movement, metabolic, and prolactin effects depend on receptor profile.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Brexpiprazole*](https://en.wikipedia.org/w/index.php?title=Brexpiprazole&oldid=1368777849) (revision 1368777849, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 91 h | 91 hours (brexpiprazole), 86 hours (major metabolite) |
| Protein binding | 99 % | >99% |
| Bioavailability | 95 % | 95% (Tmax = 4 hours) |
| Metabolism | hepatic | Liver (mainly mediated by CYP3A4 and CYP2D6) |
| CYP (metabolised by) | CYP2D6, CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | - | Feces (46%), urine (25%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
