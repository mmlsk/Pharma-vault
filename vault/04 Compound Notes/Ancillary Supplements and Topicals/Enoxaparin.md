---
type: compound
schema-version: 2
compound-id: enoxaparin-compound
name: Enoxaparin
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
chembl-id: CHEMBL1201685
chembl-max-phase: null
half-life:
  value: 4.5
  value-max: null
  unit: h
  notes: 4.5 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-inn-ema
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Enoxaparin sodium
  url: https://en.wikipedia.org/w/index.php?title=Enoxaparin_sodium&oldid=1317751792
  revision: 1317751792
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201685
  pref-name: ENOXAPARIN
  molecule-type: Oligosaccharide
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets: []
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: 45a66675-b159-42b8-9f18-ff80f28e1503
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=45a66675-b159-42b8-9f18-ff80f28e1503
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Inhixa
  ema-number: EMEA/H/C/004264
  url: https://www.ema.europa.eu/en/documents/product-information/inhixa-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Enoxaparin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `enoxaparin-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201685](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201685/) · max phase n/a · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Low-molecular-weight heparin anticoagulant; renal dosing and bleeding surveillance are essential.

## ChEMBL profile

- **Molecule type:** Oligosaccharide

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Enoxaparin sodium*](https://en.wikipedia.org/w/index.php?title=Enoxaparin_sodium&oldid=1317751792) (revision 1317751792, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4.5 h | 4.5 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 45a66675…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=45a66675-b159-42b8-9f18-ff80f28e1503), label version 20260902. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 4.5, 7)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Inhixa*](https://www.ema.europa.eu/en/documents/product-information/inhixa-epar-product-information_en.pdf) (EMEA/H/C/004264). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5, 7)

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
