---
type: compound
schema-version: 2
compound-id: clomiphene-compound
name: Clomid (Clomiphene)
aliases:
- Clomid
- Clomiphene
cluster: Androgens SARMs and PCT
group: pct
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
  value: 4.0
  value-max: 7.0
  unit: d
  notes: '4–7 days ;; active metabolites: ;; 4-OH-CLO : 13–34 hrs ;; 4-OH-DE-CLO : 15–37 hrs'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: High (>90%)
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mainly feces, some in urine
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver CYP2D6 (with enterohepatic circulation)
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
- endocrine-feedback-disruption
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
pk-source:
  type: wikipedia-infobox
  title: Clomifene
  url: https://en.wikipedia.org/w/index.php?title=Clomifene&oldid=1368196377
  revision: 1368196377
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Clomid (Clomiphene)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clomiphene-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Clomid, Clomiphene

## Source summary

Selective estrogen receptor modulator used post-cycle to restart endogenous LH/FSH and testosterone production.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clomifene*](https://en.wikipedia.org/w/index.php?title=Clomifene&oldid=1368196377) (revision 1368196377, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4–7 d | 4–7 days ;; active metabolites: ;; 4-OH-CLO : 13–34 hrs ;; 4-OH-DE-CLO : 15–37 hrs |
| Bioavailability | 90 % | High (>90%) |
| Metabolism | hepatic | Liver CYP2D6 (with enterohepatic circulation) |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Metabolites | - | 4-Hydroxyclomiphene (4-OH-CLO), 4-Hydroxy-N-desethylclomiphene (4-OH-DE-CLO) |
| Excretion | - | Mainly feces, some in urine |

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[CYP450 Metabolism]]
- [[HPG and GH-IGF-1 Axes]]
