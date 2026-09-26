---
type: compound
schema-version: 2
compound-id: sildenafil-compound
name: Sildenafil (Viagra)
aliases:
- Sildenafil
- Viagra
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
  value: 3.0
  value-max: 4.0
  unit: h
  notes: 3–4 hours
protein-binding:
  value: 96.0
  value-max: null
  unit: percent
  notes: ~96%
bioavailability:
  value: 41.0
  value-max: null
  notes: 41% (mean)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (~80%), urine (~13%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: 'Liver: CYP3A4 (major route), CYP2C9 (minor route)'
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP2C9
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP2C9, CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Sildenafil
  url: https://en.wikipedia.org/w/index.php?title=Sildenafil&oldid=1376217569
  revision: 1376217569
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Sildenafil (Viagra)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sildenafil-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Sildenafil, Viagra

## Source summary

The original PDE5 inhibitor; short-acting, and separately licensed for pulmonary hypertension.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sildenafil*](https://en.wikipedia.org/w/index.php?title=Sildenafil&oldid=1376217569) (revision 1376217569, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–4 h | 3–4 hours |
| Protein binding | 96 % | ~96% |
| Bioavailability | 41 % | 41% (mean) |
| Metabolism | hepatic | Liver: CYP3A4 (major route), CYP2C9 (minor route) |
| CYP (metabolised by) | CYP2C9, CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | N-desmethylsildenafil (~50% potency for PDE5) |
| Excretion | mainly non-renal | Feces (~80%), urine (~13%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
