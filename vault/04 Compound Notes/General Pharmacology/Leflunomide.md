---
type: compound
schema-version: 2
compound-id: leflunomide-compound
name: Leflunomide
aliases: []
cluster: General Pharmacology
group: immunology
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
  value: 14.0
  value-max: 18.0
  unit: d
  notes: 14–18 days
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99%'
bioavailability:
  value: 80.0
  value-max: null
  notes: 80%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Faeces (48%), urine (43%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: GI mucosa and liver
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
- immunosuppression-infection
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Leflunomide
  url: https://en.wikipedia.org/w/index.php?title=Leflunomide&oldid=1363895358
  revision: 1363895358
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Leflunomide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `leflunomide-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Pyrimidine synthesis inhibitor for rheumatoid arthritis with an active metabolite that recirculates enterohepatically for months.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Leflunomide*](https://en.wikipedia.org/w/index.php?title=Leflunomide&oldid=1363895358) (revision 1363895358, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 14–18 d | 14–18 days |
| Protein binding | 99 % | >99% |
| Bioavailability | 80 % | 80% |
| Metabolism | hepatic | GI mucosa and liver |
| Metabolites | - | Teriflunomide |
| Excretion | - | Faeces (48%), urine (43%) |

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
