---
type: compound
schema-version: 2
compound-id: azathioprine-compound
name: Azathioprine
aliases: []
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Amidophosphoribosyltransferase inhibitor; DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1542
chembl-max-phase: 4
half-life:
  value: 26.0
  value-max: 80.0
  unit: min
  notes: 26–80 minutes (azathioprine); 3–5 hours (drug plus metabolites)
protein-binding:
  value: 20.0
  value-max: 30.0
  unit: percent
  notes: 20–30%
bioavailability:
  value: 60.0
  value-max: null
  notes: 60±31%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, 98% as metabolites
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Activated non-enzymatically, deactivated mainly by xanthine oxidase
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
  title: Azathioprine
  url: https://en.wikipedia.org/w/index.php?title=Azathioprine&oldid=1369727378
  revision: 1369727378
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1542
  pref-name: AZATHIOPRINE
  molecule-type: Small molecule
  first-approval: 1968
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L04AX01
  targets:
  - id: CHEMBL2362992
    name: Amidophosphoribosyltransferase
    action: INHIBITOR
  - id: CHEMBL2311221
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 277.27
    mw-freebase: 277.27
    alogp: 1.15
    psa: 115.42
    hba: 8
    hbd: 1
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C9H7N7O2S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 5116b22b-1460-5535-e063-6394a90acbe5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5116b22b-1460-5535-e063-6394a90acbe5
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Jayempi
  ema-number: EMEA/H/C/005055
  url: https://www.ema.europa.eu/en/documents/product-information/jayempi-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/jayempi-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Azathioprine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azathioprine-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1542](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1542/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Thiopurine prodrug used in inflammatory bowel disease, autoimmune hepatitis and transplantation, and the reason TPMT genotyping exists.

## Mechanism

Amidophosphoribosyltransferase inhibitor; DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1968
- **Flags:** black-box warning, prodrug
- **ATC L04AX01:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › IMMUNOSUPPRESSANTS › Other immunosuppressants

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 277.27 | 1.15 | 115.42 | 1/8 | 0 | C9H7N7O2S |

**Targets (ChEMBL curated mechanisms):**

- [[Amidophosphoribosyltransferase (CHEMBL2362992)|Amidophosphoribosyltransferase]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azathioprine*](https://en.wikipedia.org/w/index.php?title=Azathioprine&oldid=1369727378) (revision 1369727378, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 26–80 min | 26–80 minutes (azathioprine); 3–5 hours (drug plus metabolites) |
| Protein binding | 20–30 % | 20–30% |
| Bioavailability | 60 % | 60±31% |
| Metabolism | - | Activated non-enzymatically, deactivated mainly by xanthine oxidase |
| Excretion | mainly urinary | Kidney, 98% as metabolites |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 5116b22b…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5116b22b-1460-5535-e063-6394a90acbe5), label version 20260505. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1, 2, 5)
> - protein-binding: consistent (label values: 30)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Jayempi*](https://www.ema.europa.eu/en/documents/product-information/jayempi-epar-product-information_en.pdf) (EMEA/H/C/005055) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/jayempi-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.9, 2, 3, 5)
> - protein-binding: consistent (SmPC values: 30)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[5-Fluorouracil]] (DNA), [[Azacitidine]] (DNA), [[Capecitabine (Xeloda)]] (DNA), [[Decitabine]] (DNA), [[Methoxsalen (8-MOP)]] (DNA)
- **Same ATC subgroup:** [[Lenalidomide]], [[Methotrexate]], [[Pomalidomide]], [[Thalidomide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
