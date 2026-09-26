---
type: compound
schema-version: 2
compound-id: galantamine-compound
name: Galantamine (Reminyl / Razadyne)
aliases:
- Galantamine
- Reminyl
- Razadyne
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
  value: 7.0
  value-max: null
  unit: h
  notes: 7 hours
protein-binding:
  value: 18.0
  value-max: null
  unit: percent
  notes: 18%
bioavailability:
  value: 80.0
  value-max: 100.0
  notes: 80–100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: 0.32
  notes: Kidney (95%, of which 32% unchanged), fecal (5%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver partially CYP450:CYP2D6/3A4 substrate
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
  title: Galantamine
  url: https://en.wikipedia.org/w/index.php?title=Galantamine&oldid=1354799288
  revision: 1354799288
  retrieved: '2026-09-26'
  chembl-confirmed: false
---

# Galantamine (Reminyl / Razadyne)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `galantamine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Galantamine, Reminyl, Razadyne

## Source summary

Alkaloid cholinesterase inhibitor that is also a positive allosteric modulator of nicotinic acetylcholine receptors.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Galantamine*](https://en.wikipedia.org/w/index.php?title=Galantamine&oldid=1354799288) (revision 1354799288, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 7 h | 7 hours |
| Protein binding | 18 % | 18% |
| Bioavailability | 80–100 % | 80–100% |
| Metabolism | hepatic | Liver partially CYP450:CYP2D6/3A4 substrate |
| CYP (metabolised by) | CYP2D6 | roles as inhibitor/inducer not assessed |
| Excretion | mainly urinary · fe 0.32 | Kidney (95%, of which 32% unchanged), fecal (5%) |

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
- [[Cholinergic Load]]
- [[CYP450 Metabolism]]
