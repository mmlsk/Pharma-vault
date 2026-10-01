---
type: compound
schema-version: 2
compound-id: tipranavir-compound
name: Tipranavir
aliases: []
cluster: General Pharmacology
group: antiinfective
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
  value: 4.8
  value-max: 6.0
  unit: h
  notes: 4.8–6 hours
protein-binding:
  value: 99.9
  value-max: null
  unit: percent
  notes: 99.9%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (82.3%), urine (4.4%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Tipranavir
  url: https://en.wikipedia.org/w/index.php?title=Tipranavir&oldid=1357072460
  revision: 1357072460
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Aptivus
  ema-number: EMEA/H/C/000631
  url: https://www.ema.europa.eu/en/documents/product-information/aptivus-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Tipranavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tipranavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]

## Source summary

Non-peptidic HIV protease inhibitor reserved for multidrug-resistant virus, carrying a hepatotoxicity and intracranial haemorrhage warning.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tipranavir*](https://en.wikipedia.org/w/index.php?title=Tipranavir&oldid=1357072460) (revision 1357072460, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.8–6 h | 4.8–6 hours |
| Protein binding | 99.9 % | 99.9% |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Feces (82.3%), urine (4.4%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Aptivus*](https://www.ema.europa.eu/en/documents/product-information/aptivus-epar-product-information_en.pdf) (EMEA/H/C/000631). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4.8, 6)
> - protein-binding: consistent (SmPC values: 99.9)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
