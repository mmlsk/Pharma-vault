---
type: compound
schema-version: 2
compound-id: eculizumab-compound
name: Eculizumab
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Complement C5 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201828
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 15.0
  unit: d
  notes: 8 to 15 days (mean 11 days)
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
  title: Eculizumab
  url: https://en.wikipedia.org/w/index.php?title=Eculizumab&oldid=1345105804
  revision: 1345105804
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201828
  pref-name: ECULIZUMAB
  molecule-type: Antibody
  first-approval: 2007
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AJ01
  targets:
  - id: CHEMBL2364163
    name: Complement C5
    action: INHIBITOR
  properties: {}
  identity-check: inn-match-ema
pk-verification:
  source: fda-label
  status: consistent
  set-id: ebcd67fa-b4d1-4a22-b33d-ee8bf6b9c722
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ebcd67fa-b4d1-4a22-b33d-ee8bf6b9c722
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Soliris
  ema-number: EMEA/H/C/000791
  url: https://www.ema.europa.eu/en/documents/product-information/soliris-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/soliris-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Eculizumab

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `eculizumab-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201828](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201828/) · max phase 4 · id via Wikipedia infobox · structure check: INN matches an EU-authorised product (no comparable structure)

## Source summary

Inhibits a step of the complement cascade; blocking terminal complement raises encapsulated-organism risk and requires meningococcal vaccination; C5 inhibitor.

## Mechanism

Complement C5 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Antibody
- **First approval (ChEMBL):** 2007
- **Flags:** black-box warning
- **ATC L04AJ01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Complement inhibitors

**Targets (ChEMBL curated mechanisms):**

- [[Complement C5 (CHEMBL2364163)|Complement C5]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Eculizumab*](https://en.wikipedia.org/w/index.php?title=Eculizumab&oldid=1345105804) (revision 1345105804, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–15 d | 8 to 15 days (mean 11 days) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set ebcd67fa…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=ebcd67fa-b4d1-4a22-b33d-ee8bf6b9c722), label version 20260708. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 90.2, 141, 882)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Soliris*](https://www.ema.europa.eu/en/documents/product-information/soliris-epar-product-information_en.pdf) (EMEA/H/C/000791) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/soliris-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 1, 52.4, 271.2, 297, 297.6, 348)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Crovalimab]] (Complement C5), [[Ravulizumab]] (Complement C5), [[Zilucoplan]] (Complement C5)
- **Same ATC subgroup:** [[Avacopan]], [[Crovalimab]], [[Danicopan]], [[Iptacopan]], [[Pegcetacoplan]], [[Ravulizumab]], [[Sutimlimab]], [[Zilucoplan]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
