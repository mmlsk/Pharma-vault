---
type: compound
schema-version: 2
compound-id: adalimumab-compound
name: Adalimumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: TNF-alpha inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201580
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 20.0
  unit: d
  notes: 10–20 days
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 64.0
  value-max: null
  notes: 64% (subcutaneous), 0% (by mouth)
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
pk-source:
  type: wikipedia-infobox
  title: Adalimumab
  url: https://en.wikipedia.org/w/index.php?title=Adalimumab&oldid=1376394101
  revision: 1376394101
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201580
  pref-name: ADALIMUMAB
  molecule-type: Antibody
  first-approval: 2002
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AB04
  targets:
  - id: CHEMBL1825
    name: Tumor necrosis factor
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: 2488b0bc-7b8f-4cc8-91ea-48e7ea5e8915
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2488b0bc-7b8f-4cc8-91ea-48e7ea5e8915
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: no-smpc-value
  product: Humira
  ema-number: EMEA/H/C/000481
  url: https://www.ema.europa.eu/en/documents/product-information/humira-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/humira-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Adalimumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `adalimumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201580](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201580/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Neutralizes TNF or its receptor signaling to suppress systemic inflammation, increasing susceptibility to selected infections.

## Mechanism

TNF-alpha inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2002
- **Flags:** black-box warning
- **ATC L04AB04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Tumor necrosis factor alpha (TNF-alpha) inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Tumor necrosis factor (CHEMBL1825)|Tumor necrosis factor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Adalimumab*](https://en.wikipedia.org/w/index.php?title=Adalimumab&oldid=1376394101) (revision 1376394101, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–20 d | 10–20 days |
| Bioavailability | 64 % | 64% (subcutaneous), 0% (by mouth) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 2488b0bc…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=2488b0bc-7b8f-4cc8-91ea-48e7ea5e8915), label version 20260108. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 240, 480)

> [!note] EU SmPC cross-check: **no-smpc-value**
> Automated comparison with section 5.2 of the [EU SmPC of *Humira*](https://www.ema.europa.eu/en/documents/product-information/humira-epar-product-information_en.pdf) (EMEA/H/C/000481) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/humira-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Afelimomab]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Certolizumab Pegol]] (Tumor necrosis factor), [[Etanercept]] (Tumor necrosis factor), [[Golimumab]] (Tumor necrosis factor), [[Infliximab]] (Tumor necrosis factor), [[Infliximab-abda]] (Tumor necrosis factor), [[Onercept]] (Tumor necrosis factor), [[Ozoralizumab]] (Tumor necrosis factor)
- **Same ATC subgroup:** [[Afelimomab]], [[Certolizumab Pegol]], [[Certolizumab Pegol]], [[Etanercept]], [[Golimumab]], [[Infliximab]], [[Infliximab-abda]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
