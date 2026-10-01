---
type: compound
schema-version: 2
compound-id: nitisinone-compound
name: Nitisinone
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: 4-hydroxyphenylpyruvate dioxygenase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1337
chembl-max-phase: 4
half-life:
  value: 54.0
  value-max: null
  unit: h
  notes: 'Approximately 54 h (Range: 39 to 86 hours)'
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
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Nitisinone
  url: https://en.wikipedia.org/w/index.php?title=Nitisinone&oldid=1329361321
  revision: 1329361321
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1337
  pref-name: NITISINONE
  molecule-type: Small molecule
  first-approval: 2002
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A16AX04
  targets:
  - id: CHEMBL1861
    name: 4-hydroxyphenylpyruvate dioxygenase
    action: INHIBITOR
  properties:
    full-mwt: 329.23
    mw-freebase: 329.23
    alogp: 2.73
    psa: 94.35
    hba: 5
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.37
    full-molformula: C14H10F3NO5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 437868f5-1c9e-4b0f-8a03-77df8ac0900d
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=437868f5-1c9e-4b0f-8a03-77df8ac0900d
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Orfadin
  ema-number: EMEA/H/C/000555
  url: https://www.ema.europa.eu/en/documents/product-information/orfadin-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/orfadin-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nitisinone

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nitisinone-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1337](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1337/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Enzyme inhibitor for hereditary tyrosinaemia type 1 that works by deliberately blocking a step upstream of the toxic metabolite.

## Mechanism

4-hydroxyphenylpyruvate dioxygenase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2002
- **ATC A16AX04:** ALIMENTARY TRACT AND METABOLISM › OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS › Various alimentary tract and metabolism products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 329.23 | 2.73 | 94.35 | 0/5 | 0 | C14H10F3NO5 |

**Targets (ChEMBL curated mechanisms):**

- [[4-hydroxyphenylpyruvate dioxygenase (CHEMBL1861)|4-hydroxyphenylpyruvate dioxygenase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nitisinone*](https://en.wikipedia.org/w/index.php?title=Nitisinone&oldid=1329361321) (revision 1329361321, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 54 h | Approximately 54 h (Range: 39 to 86 hours) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 437868f5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=437868f5-1c9e-4b0f-8a03-77df8ac0900d), label version 20260806. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 54)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Orfadin*](https://www.ema.europa.eu/en/documents/product-information/orfadin-epar-product-information_en.pdf) (EMEA/H/C/000555) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/orfadin-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 39, 52.1, 54, 86)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alpha-Lipoic Acid (ALA)]], [[Eliglustat]], [[Glycerol Phenylbutyrate]], [[Lonafarnib (Zokinvy)]], [[Migalastat]], [[Miglustat]], [[Sodium Phenylbutyrate]], [[Teduglutide]], [[Trientine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
