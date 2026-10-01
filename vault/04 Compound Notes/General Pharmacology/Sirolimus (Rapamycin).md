---
type: compound
schema-version: 2
compound-id: sirolimus-compound
name: Sirolimus (Rapamycin)
aliases:
- Sirolimus
- Rapamycin
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
chembl-id: CHEMBL413
chembl-max-phase: 4
half-life:
  value: 57.0
  value-max: 63.0
  unit: h
  notes: 57–63 hours
protein-binding:
  value: 92.0
  value-max: null
  unit: percent
  notes: 92%
bioavailability:
  value: 14.0
  value-max: null
  notes: 14% (oral solution), lower with high-fat meals; 18% (tablet), higher with high-fat meals
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Mostly fecal
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
- immunosuppression-infection
source-status: auto-extracted
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
- pk-ema-discrepant
- pk-sources-disagree
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Sirolimus
  url: https://en.wikipedia.org/w/index.php?title=Sirolimus&oldid=1368796458
  revision: 1368796458
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL413
  pref-name: SIROLIMUS
  molecule-type: Small molecule
  first-approval: 1999
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01EG04
  - L04AH01
  - S01XA23
  targets:
  - id: CHEMBL1902
    name: Peptidyl-prolyl cis-trans isomerase FKBP1A
    action: INHIBITOR
  properties:
    full-mwt: 914.19
    mw-freebase: 914.19
    alogp: 6.18
    psa: 195.43
    hba: 13
    hbd: 3
    rtb: 6
    num-ro5-violations: 3
    qed-weighted: 0.16
    full-molformula: C51H79NO13
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: fc81cb86-61e1-4622-b2ce-cde263143aa0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc81cb86-61e1-4622-b2ce-cde263143aa0
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Rapamune
  ema-number: EMEA/H/C/000273
  url: https://www.ema.europa.eu/en/documents/product-information/rapamune-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/rapamune-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
---

# Sirolimus (Rapamycin)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sirolimus-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Sirolimus, Rapamycin
- **ChEMBL:** [CHEMBL413](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL413/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

mTOR inhibitor used in transplantation, in lymphangioleiomyomatosis and on drug-eluting stents, and the most studied candidate longevity drug in mammals.

## Mechanism

FK506-binding protein 1A inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1999
- **Flags:** black-box warning
- **ATC L01EG04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Mammalian target of rapamycin (mTOR) kinase inhibitors
- **ATC L04AH01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Mammalian target of rapamycin (mTOR) kinase inhibitors
- **ATC S01XA23:** SENSORY ORGANS › OTHER OPHTHALMOLOGICALS › Other ophthalmologicals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 914.19 | 6.18 | 195.43 | 3/13 | 3 | C51H79NO13 |

**Targets (ChEMBL curated mechanisms):**

- [[Peptidyl-prolyl cis-trans isomerase FKBP1A (CHEMBL1902)|Peptidyl-prolyl cis-trans isomerase FKBP1A]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sirolimus*](https://en.wikipedia.org/w/index.php?title=Sirolimus&oldid=1368796458) (revision 1368796458, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 57–63 h | 57–63 hours |
| Protein binding | 92 % | 92% |
| Bioavailability | 14 % | 14% (oral solution), lower with high-fat meals; 18% (tablet), higher with high-fat meals |
| Metabolism | hepatic | Liver |
| Excretion | - | Mostly fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set fc81cb86…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=fc81cb86-61e1-4622-b2ce-cde263143aa0), label version 20260720. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 61.3, 62, 72.3)
> - protein-binding: consistent (label values: 92, 97)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Rapamune*](https://www.ema.europa.eu/en/documents/product-information/rapamune-epar-product-information_en.pdf) (EMEA/H/C/000273) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/rapamune-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 16, 120, 168)
> - protein-binding: no-label-value (SmPC values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Rapamycin (Sirolimus)]]
- **Shared target:** [[Everolimus]] (Peptidyl-prolyl cis-trans isomerase FKBP1A), [[Pimecrolimus]] (Peptidyl-prolyl cis-trans isomerase FKBP1A), [[Rapamycin (Sirolimus)]] (Peptidyl-prolyl cis-trans isomerase FKBP1A)
- **Same ATC subgroup:** [[Alteplase]], [[Avacincaptad Pegol]], [[Cyclosporine]], [[Everolimus]], [[NAC (N-Acetylcysteine)]], [[Pegcetacoplan]], [[Potassium Iodide (SSKI-KI)|Potassium Iodide (SSKI/KI)]], [[Rapamycin (Sirolimus)]], [[Retinol]], [[Vitamin C (Ascorbic Acid)]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
