---
type: compound
schema-version: 2
compound-id: danazol-compound
name: Danazol
aliases: []
cluster: Androgens SARMs and PCT
group: steroids
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
  value-max: 10.0
  unit: h
  notes: 'Acute: 3–10 hours; Chronic: 24–26 hours'
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: To albumin, SHBG, CBG
bioavailability:
  value: null
  value-max: null
  notes: Saturable with dosage, higher with food intake
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Urine, feces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
contraindications: []
major-interactions: []
monitoring: []
risk-domains: []
group-risk-triage:
- endocrine-feedback-disruption
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/steroids
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Danazol
  url: https://en.wikipedia.org/w/index.php?title=Danazol&oldid=1354397142
  revision: 1354397142
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Danazol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `danazol-compound`
- **Source group:** Anabolic Steroids (`steroids`)
- **Cluster:** [[Androgens SARMs and PCT]]

## Source summary

Synthetic attenuated androgen used for endometriosis and hereditary angioedema; binds the androgen receptor and displaces hormones from SHBG.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Danazol*](https://en.wikipedia.org/w/index.php?title=Danazol&oldid=1354397142) (revision 1354397142, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–10 h | Acute: 3–10 hours; Chronic: 24–26 hours |
| Protein binding | - | To albumin, SHBG, CBG |
| Bioavailability | - | Saturable with dosage, higher with food intake |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Metabolites | - | • 2-OHM-Ethisterone; • Ethisterone |
| Excretion | - | Urine, feces |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`, `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[Stimulant and Cardiovascular Load]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
