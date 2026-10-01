---
type: compound
schema-version: 2
compound-id: clindamycin-topical-compound
name: Clindamycin (topical, 1% solution/gel)
aliases:
- Clindamycin
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
chembl-id: CHEMBL1753
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 3.0
  unit: h
  notes: 2–3 hour
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 90.0
  value-max: null
  notes: 90% (by mouth); 4–5% (topical)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Bile duct and kidney (around 20%)
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
- needs-compound-review
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/ancillary
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Clindamycin
  url: https://en.wikipedia.org/w/index.php?title=Clindamycin&oldid=1366744202
  revision: 1366744202
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1753
  pref-name: CLINDAMYCIN
  molecule-type: Small molecule
  first-approval: 1970
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - D10AF01
  - G01AA10
  - J01FF01
  targets: []
  properties:
    full-mwt: 424.99
    mw-freebase: 424.99
    alogp: 0.39
    psa: 102.26
    hba: 7
    hbd: 4
    rtb: 7
    num-ro5-violations: 0
    qed-weighted: 0.44
    full-molformula: C18H33ClN2O5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: f7b4e985-719a-4547-b624-94612d520991
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f7b4e985-719a-4547-b624-94612d520991
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
    protein-binding: no-label-value
---

# Clindamycin (topical, 1% solution/gel)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `clindamycin-topical-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **Aliases:** Clindamycin
- **ChEMBL:** [CHEMBL1753](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1753/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Topical lincosamide antibiotic for acne; the workhorse of fixed combinations and the classic driver of C. acnes resistance.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1970
- **Flags:** black-box warning
- **ATC D10AF01:** DERMATOLOGICALS › ANTI-ACNE PREPARATIONS FOR TOPICAL USE › Antiinfectives for treatment of acne
- **ATC G01AA10:** GENITO URINARY SYSTEM AND SEX HORMONES › ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS › Antibiotics
- **ATC J01FF01:** ANTIINFECTIVES FOR SYSTEMIC USE › MACROLIDES, LINCOSAMIDES AND STREPTOGRAMINS › Lincosamides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 424.99 | 0.39 | 102.26 | 4/7 | 0 | C18H33ClN2O5S |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Clindamycin*](https://en.wikipedia.org/w/index.php?title=Clindamycin&oldid=1366744202) (revision 1366744202, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–3 h | 2–3 hour |
| Protein binding | 95 % | 95% |
| Bioavailability | 90 % | 90% (by mouth); 4–5% (topical) |
| Metabolism | hepatic | Liver |
| Excretion | mainly non-renal | Bile duct and kidney (around 20%) |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set f7b4e985…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f7b4e985-719a-4547-b624-94612d520991), label version 20200101. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Clindamycin]]
- **Same ATC subgroup:** [[Amphotericin B]], [[Chloramphenicol]], [[Clindamycin]], [[Erythromycin]], [[Minocycline]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
