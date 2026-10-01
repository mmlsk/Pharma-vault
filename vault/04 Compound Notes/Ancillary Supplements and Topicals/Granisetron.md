---
type: compound
schema-version: 2
compound-id: granisetron-compound
name: Granisetron
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
  value: 3.0
  value-max: 14.0
  unit: h
  notes: 3–14 hours
protein-binding:
  value: 65.0
  value-max: null
  unit: percent
  notes: 65%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Renal 11–12%, faecal 38%
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Hepatic
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Granisetron
  url: https://en.wikipedia.org/w/index.php?title=Granisetron&oldid=1335737669
  revision: 1335737669
  retrieved: '2026-09-26'
  chembl-confirmed: false
pk-verification:
  source: fda-label
  status: discrepant
  set-id: f7c7ffdd-8270-4030-bc1e-a1cb28a6de56
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f7c7ffdd-8270-4030-bc1e-a1cb28a6de56
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Sancuso
  ema-number: EMEA/H/C/002296
  url: https://www.ema.europa.eu/en/documents/product-information/sancuso-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Granisetron

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `granisetron-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]

## Source summary

Antagonises 5-HT3 receptors on vagal afferents and in the area postrema; QT effects vary by agent.

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Granisetron*](https://en.wikipedia.org/w/index.php?title=Granisetron&oldid=1335737669) (revision 1335737669, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–14 h | 3–14 hours |
| Protein binding | 65 % | 65% |
| Bioavailability | 60 % | 60% |
| Metabolism | hepatic | Hepatic |
| Excretion | - | Renal 11–12%, faecal 38% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set f7c7ffdd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f7c7ffdd-8270-4030-bc1e-a1cb28a6de56), label version 20260430. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 24)
> - protein-binding: consistent (label values: 65)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Sancuso*](https://www.ema.europa.eu/en/documents/product-information/sancuso-epar-product-information_en.pdf) (EMEA/H/C/002296). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 4, 6, 9, 12, 36)
> - protein-binding: consistent (SmPC values: 65)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
