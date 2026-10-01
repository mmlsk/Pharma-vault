---
type: compound
schema-version: 2
compound-id: abrocitinib-compound
name: Abrocitinib (Cibinqo)
aliases:
- Abrocitinib
- Cibinqo
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: Tyrosine-protein kinase JAK1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3655081
chembl-max-phase: 4
half-life:
  value: 2.8
  value-max: 5.2
  unit: h
  notes: 2.8–5.2 h
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: 0.044
  notes: 1.0–4.4% unchanged in urine
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
- identity-stereo-check
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Abrocitinib
  url: https://en.wikipedia.org/w/index.php?title=Abrocitinib&oldid=1352069148
  revision: 1352069148
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL3655081
  pref-name: ABROCITINIB
  molecule-type: Small molecule
  first-approval: 2021
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D11AH08
  targets:
  - id: CHEMBL2835
    name: Tyrosine-protein kinase JAK1
    action: INHIBITOR
  properties:
    full-mwt: 323.42
    mw-freebase: 323.42
    alogp: 1.25
    psa: 90.98
    hba: 5
    hbd: 2
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.83
    full-molformula: C14H21N5O2S
  identity-check: connectivity-match
pk-verification:
  source: fda-label
  status: consistent
  set-id: 3f6d6fcd-e9f9-42c8-bfa2-bb2cfc9ed258
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f6d6fcd-e9f9-42c8-bfa2-bb2cfc9ed258
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Cibinqo
  ema-number: EMEA/H/C/005452
  url: https://www.ema.europa.eu/en/documents/product-information/cibinqo-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/cibinqo-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Abrocitinib (Cibinqo)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `abrocitinib-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Abrocitinib, Cibinqo
- **ChEMBL:** [CHEMBL3655081](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3655081/) · max phase 4 · id via Wikipedia infobox · structure check: ⚠️ same skeleton, stereo/isotope layer differs

## Source summary

Oral JAK1 inhibitor for refractory atopic dermatitis carrying JAK-class boxed warnings.

## Mechanism

Tyrosine-protein kinase JAK1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2021
- **Flags:** black-box warning
- **ATC D11AH08:** DERMATOLOGICALS › OTHER DERMATOLOGICAL PREPARATIONS › Agents for dermatitis, excluding corticosteroids

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 323.42 | 1.25 | 90.98 | 2/5 | 0 | C14H21N5O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Tyrosine-protein kinase JAK1 (CHEMBL2835)|Tyrosine-protein kinase JAK1]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Abrocitinib*](https://en.wikipedia.org/w/index.php?title=Abrocitinib&oldid=1352069148) (revision 1352069148, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.8–5.2 h | 2.8–5.2 h |
| Excretion | - · fe 0.044 | 1.0–4.4% unchanged in urine |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 3f6d6fcd…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=3f6d6fcd-e9f9-42c8-bfa2-bb2cfc9ed258), label version 20260909. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3, 5, 216)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Cibinqo*](https://www.ema.europa.eu/en/documents/product-information/cibinqo-epar-product-information_en.pdf) (EMEA/H/C/005452) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/cibinqo-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 5)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Baricitinib (oral, Olumiant)]] (Tyrosine-protein kinase JAK1), [[Brepocitinib]] (Tyrosine-protein kinase JAK1), [[Cerdulatinib]] (Tyrosine-protein kinase JAK1), [[Filgotinib]] (Tyrosine-protein kinase JAK1), [[Golidocitinib]] (Tyrosine-protein kinase JAK1), [[Momelotinib]] (Tyrosine-protein kinase JAK1)
- **Same ATC subgroup:** [[Alitretinoin]], [[Alitretinoin (oral, Toctino)]], [[Crisaborole (topical 2% ointment, Eucrisa)]], [[Delgocitinib]], [[Deuruxolitinib (Leqselvi)]], [[Dupilumab (Dupixent, subcutaneous)]], [[Lebrikizumab (Ebglyss)]], [[Nemolizumab]], [[Pimecrolimus]], [[Ruxolitinib]], [[Ruxolitinib (topical)]], [[Ruxolitinib cream 1.5% (Opzelura)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
