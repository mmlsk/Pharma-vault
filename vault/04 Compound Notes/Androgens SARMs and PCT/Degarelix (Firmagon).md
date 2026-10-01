---
type: compound
schema-version: 2
compound-id: degarelix-compound
name: Degarelix (Firmagon)
aliases:
- Degarelix
- Firmagon
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
  value: 23.0
  value-max: 61.0
  unit: d
  notes: 23–61 days
protein-binding:
  value: 90.0
  value-max: null
  unit: percent
  notes: ~90%
bioavailability:
  value: 30.0
  value-max: 40.0
  notes: 30–40%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: 'Feces: 70–80%; Urine: 20–30%'
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Subject to common peptidic degradation during passage through the hepato-biliary system; not a substrate for the human CYP450 system
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
- endocrine-feedback-disruption
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/pct
- stub
- pk-auto
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Degarelix
  url: https://en.wikipedia.org/w/index.php?title=Degarelix&oldid=1329009348
  revision: 1329009348
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: consistent
  set-id: ab11dd8a-0fd9-4013-89ab-e114557c7e4b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab11dd8a-0fd9-4013-89ab-e114557c7e4b
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Firmagon
  ema-number: EMEA/H/C/000986
  url: https://www.ema.europa.eu/en/documents/product-information/firmagon-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/firmagon-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Degarelix (Firmagon)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `degarelix-compound`
- **Source group:** SERMs, AIs & Antiandrogens (`pct`)
- **Cluster:** [[Androgens SARMs and PCT]]
- **Aliases:** Degarelix, Firmagon

## Source summary

GnRH antagonist that drops testosterone in days without the testosterone surge agonists cause.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Degarelix*](https://en.wikipedia.org/w/index.php?title=Degarelix&oldid=1329009348) (revision 1329009348, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 23–61 d | 23–61 days |
| Protein binding | 90 % | ~90% |
| Bioavailability | 30–40 % | 30–40% |
| Metabolism | hepatic | Subject to common peptidic degradation during passage through the hepato-biliary system; not a substrate for the human CYP450 system |
| Excretion | - | Feces: 70–80%; Urine: 20–30% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ab11dd8a…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ab11dd8a-0fd9-4013-89ab-e114557c7e4b), label version 20240130. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1272)
> - protein-binding: consistent (label values: 90)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Firmagon*](https://www.ema.europa.eu/en/documents/product-information/firmagon-epar-product-information_en.pdf) (EMEA/H/C/000986) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/firmagon-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 696)
> - protein-binding: consistent (SmPC values: 90)

## Safety routing

Group-level triage (not compound-specific): `endocrine-feedback-disruption`

- [[Stacking and Interaction Risks]]
- [[Hormonal Axis Suppression]]
- [[HPG and GH-IGF-1 Axes]]
