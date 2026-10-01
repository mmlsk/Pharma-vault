---
type: compound
schema-version: 2
compound-id: everolimus-compound
name: Everolimus
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: FK506-binding protein 1A inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1908360
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: h
  notes: ~30 hours
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
- pk-ema-consistent
- pk-2-regulators
pk-source:
  type: wikipedia-infobox
  title: Everolimus
  url: https://en.wikipedia.org/w/index.php?title=Everolimus&oldid=1369115271
  revision: 1369115271
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1908360
  pref-name: EVEROLIMUS
  molecule-type: Small molecule
  first-approval: 2009
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EG02
  - L04AH02
  targets:
  - id: CHEMBL1902
    name: Peptidyl-prolyl cis-trans isomerase FKBP1A
    action: INHIBITOR
  properties:
    full-mwt: 958.24
    mw-freebase: 958.24
    alogp: 6.2
    psa: 204.66
    hba: 14
    hbd: 3
    rtb: 9
    num-ro5-violations: 3
    qed-weighted: 0.13
    full-molformula: C53H83NO14
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5aaf2fb7-93f6-40d6-941a-9583a3794ce7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5aaf2fb7-93f6-40d6-941a-9583a3794ce7
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Afinitor
  ema-number: EMEA/H/C/001038
  url: https://www.ema.europa.eu/en/documents/product-information/afinitor-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Everolimus

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `everolimus-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1908360](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1908360/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Hydroxyethyl derivative of sirolimus with a shorter half-life, used in transplantation, oncology and tuberous sclerosis.

## Mechanism

FK506-binding protein 1A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2009
- **Flags:** black-box warning
- **ATC L01EG02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Mammalian target of rapamycin (mTOR) kinase inhibitors
- **ATC L04AH02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Mammalian target of rapamycin (mTOR) kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 958.24 | 6.2 | 204.66 | 3/14 | 3 | C53H83NO14 |

**Targets (ChEMBL curated mechanisms):**

- [[Peptidyl-prolyl cis-trans isomerase FKBP1A (CHEMBL1902)|Peptidyl-prolyl cis-trans isomerase FKBP1A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Everolimus*](https://en.wikipedia.org/w/index.php?title=Everolimus&oldid=1369115271) (revision 1369115271, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 h | ~30 hours |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5aaf2fb7…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5aaf2fb7-93f6-40d6-941a-9583a3794ce7), label version 20260814. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 30)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Afinitor*](https://www.ema.europa.eu/en/documents/product-information/afinitor-epar-product-information_en.pdf) (EMEA/H/C/001038). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Pimecrolimus]] (Peptidyl-prolyl cis-trans isomerase FKBP1A), [[Rapamycin (Sirolimus)]] (Peptidyl-prolyl cis-trans isomerase FKBP1A), [[Sirolimus (Rapamycin)]] (Peptidyl-prolyl cis-trans isomerase FKBP1A)
- **Same ATC subgroup:** [[Rapamycin (Sirolimus)]], [[Sirolimus (Rapamycin)]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
