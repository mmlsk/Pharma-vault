---
type: compound
schema-version: 2
compound-id: migalastat-compound
name: Migalastat
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Alpha-galactosidase A stabiliser
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL110458
chembl-max-phase: 4
half-life:
  value: 3.0
  value-max: 5.0
  unit: h
  notes: 3–5 hours (single dose)
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: None
bioavailability:
  value: 75.0
  value-max: null
  notes: 75%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Urine (77%), feces (20%)
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
- pk-ema-consistent
pk-source:
  type: wikipedia-infobox
  title: Migalastat
  url: https://en.wikipedia.org/w/index.php?title=Migalastat&oldid=1370389401
  revision: 1370389401
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL110458
  pref-name: MIGALASTAT
  molecule-type: Small molecule
  first-approval: 2016
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A16AX14
  targets:
  - id: CHEMBL2524
    name: Alpha-galactosidase A
    action: STABILISER
  properties:
    full-mwt: 163.17
    mw-freebase: 163.17
    alogp: -2.97
    psa: 92.95
    hba: 5
    hbd: 5
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.28
    full-molformula: C6H13NO4
  identity-check: structure-confirmed
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
  product: Galafold
  ema-number: EMEA/H/C/004059
  url: https://www.ema.europa.eu/en/documents/product-information/galafold-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/galafold-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Migalastat

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `migalastat-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL110458](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL110458/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Oral pharmacological chaperone for Fabry disease, stabilising a patient's own mutant enzyme rather than replacing it.

## Mechanism

Alpha-galactosidase A stabiliser _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2016
- **ATC A16AX14:** ALIMENTARY TRACT AND METABOLISM › OTHER ALIMENTARY TRACT AND METABOLISM PRODUCTS › Various alimentary tract and metabolism products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 163.17 | -2.97 | 92.95 | 5/5 | 0 | C6H13NO4 |

**Targets (ChEMBL curated mechanisms):**

- [[Alpha-galactosidase A (CHEMBL2524)|Alpha-galactosidase A]] - stabiliser · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Migalastat*](https://en.wikipedia.org/w/index.php?title=Migalastat&oldid=1370389401) (revision 1370389401, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3–5 h | 3–5 hours (single dose) |
| Protein binding | - | None |
| Bioavailability | 75 % | 75% |
| Metabolites | - | O-glucuronides (<15%) |
| Excretion | mainly urinary | Urine (77%), feces (20%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Galafold*](https://www.ema.europa.eu/en/documents/product-information/galafold-epar-product-information_en.pdf) (EMEA/H/C/004059) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/galafold-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 3, 5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Alpha-Lipoic Acid (ALA)]], [[Eliglustat]], [[Glycerol Phenylbutyrate]], [[Lonafarnib (Zokinvy)]], [[Miglustat]], [[Nitisinone]], [[Sodium Phenylbutyrate]], [[Teduglutide]], [[Trientine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
