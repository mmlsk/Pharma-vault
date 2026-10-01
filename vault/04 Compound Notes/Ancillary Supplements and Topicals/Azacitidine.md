---
type: compound
schema-version: 2
compound-id: azacitidine-compound
name: Azacitidine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: DNA (cytosine-5)-methyltransferase 1 inhibitor; DNA (cytosine-5)-methyltransferase 3A inhibitor; DNA inhibitor; RNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1489
chembl-max-phase: 4
half-life:
  value: 4.0
  value-max: null
  unit: h
  notes: 4 hr.
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
- pk-fda-consistent
- pk-ema-discrepant
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Azacitidine
  url: https://en.wikipedia.org/w/index.php?title=Azacitidine&oldid=1372676030
  revision: 1372676030
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1489
  pref-name: AZACITIDINE
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01BC07
  targets:
  - id: CHEMBL1992
    name: DNA (cytosine-5)-methyltransferase 3A
    action: INHIBITOR
  - id: CHEMBL1993
    name: DNA (cytosine-5)-methyltransferase 1
    action: INHIBITOR
  - id: CHEMBL2311221
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2311222
    name: RNA
    action: INHIBITOR
  properties:
    full-mwt: 244.21
    mw-freebase: 244.21
    alogp: -3.17
    psa: 143.72
    hba: 9
    hbd: 4
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.43
    full-molformula: C8H12N4O5
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: a6a5ca37-37e8-ab65-bc0b-9c0682ab52f7
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6a5ca37-37e8-ab65-bc0b-9c0682ab52f7
  checked: '2026-10-01'
  fields:
    half-life: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Vidaza
  ema-number: EMEA/H/C/000978
  url: https://www.ema.europa.eu/en/documents/product-information/vidaza-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/vidaza-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: discrepant
---

# Azacitidine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `azacitidine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1489](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1489/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Hypomethylating agent incorporated into RNA and DNA, depleting DNMT1; standard in myelodysplastic syndrome.

## Mechanism

DNA (cytosine-5)-methyltransferase 1 inhibitor; DNA (cytosine-5)-methyltransferase 3A inhibitor; DNA inhibitor; RNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **Flags:** prodrug
- **ATC L01BC07:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Pyrimidine analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 244.21 | -3.17 | 143.72 | 4/9 | 0 | C8H12N4O5 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (cytosine-5)-methyltransferase 3A (CHEMBL1992)|DNA (cytosine-5)-methyltransferase 3A]] - inhibitor · SINGLE PROTEIN
- [[DNA (cytosine-5)-methyltransferase 1 (CHEMBL1993)|DNA (cytosine-5)-methyltransferase 1]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID
- [[RNA (CHEMBL2311222)|RNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Azacitidine*](https://en.wikipedia.org/w/index.php?title=Azacitidine&oldid=1372676030) (revision 1372676030, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 4 h | 4 hr. |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set a6a5ca37…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a6a5ca37-37e8-ab65-bc0b-9c0682ab52f7), label version 20260908. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.683, 4)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Vidaza*](https://www.ema.europa.eu/en/documents/product-information/vidaza-epar-product-information_en.pdf) (EMEA/H/C/000978) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/vidaza-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 0.09, 0.3, 0.38, 0.4, 0.683)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Decitabine]] (DNA; DNA (cytosine-5)-methyltransferase 1; DNA (cytosine-5)-methyltransferase 3A), [[5-Fluorouracil]] (DNA; RNA), [[Capecitabine (Xeloda)]] (DNA; RNA), [[Azathioprine]] (DNA), [[Methoxsalen (8-MOP)]] (DNA)
- **Same ATC subgroup:** [[5-Fluorouracil]], [[Capecitabine (Xeloda)]], [[Decitabine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
