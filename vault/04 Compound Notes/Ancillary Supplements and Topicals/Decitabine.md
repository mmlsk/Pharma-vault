---
type: compound
schema-version: 2
compound-id: decitabine-compound
name: Decitabine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: DNA (cytosine-5)-methyltransferase 1 inhibitor; DNA (cytosine-5)-methyltransferase 3A inhibitor; DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1201129
chembl-max-phase: 4
half-life:
  value: 30.0
  value-max: null
  unit: min
  notes: 30 minutes
protein-binding:
  value: 1.0
  value-max: null
  unit: percent
  notes: <1%
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
- pk-fda-discrepant
- pk-ema-consistent
- pk-sources-disagree
pk-source:
  type: wikipedia-infobox
  title: Decitabine
  url: https://en.wikipedia.org/w/index.php?title=Decitabine&oldid=1356899033
  revision: 1356899033
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201129
  pref-name: DECITABINE
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01BC08
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
  properties:
    full-mwt: 228.21
    mw-freebase: 228.21
    alogp: -2.14
    psa: 123.49
    hba: 8
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.53
    full-molformula: C8H12N4O4
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 5975fa81-1e29-4d56-e063-6394a90a9cd5
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5975fa81-1e29-4d56-e063-6394a90a9cd5
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: no-label-value
pk-verification-ema:
  source: ema-smpc
  status: consistent
  product: Dacogen
  ema-number: EMEA/H/C/002221
  url: https://www.ema.europa.eu/en/documents/product-information/dacogen-epar-product-information_en.pdf
  chpl-url: https://www.ema.europa.eu/pl/documents/product-information/dacogen-epar-product-information_pl.pdf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Decitabine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `decitabine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL1201129](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201129/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Deoxy analogue of azacitidine incorporating only into DNA.

## Mechanism

DNA (cytosine-5)-methyltransferase 1 inhibitor; DNA (cytosine-5)-methyltransferase 3A inhibitor; DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC L01BC08:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Pyrimidine analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 228.21 | -2.14 | 123.49 | 3/8 | 0 | C8H12N4O4 |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (cytosine-5)-methyltransferase 3A (CHEMBL1992)|DNA (cytosine-5)-methyltransferase 3A]] - inhibitor · SINGLE PROTEIN
- [[DNA (cytosine-5)-methyltransferase 1 (CHEMBL1993)|DNA (cytosine-5)-methyltransferase 1]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Decitabine*](https://en.wikipedia.org/w/index.php?title=Decitabine&oldid=1356899033) (revision 1356899033, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 30 min | 30 minutes |
| Protein binding | 1 % | <1% |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 5975fa81…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=5975fa81-1e29-4d56-e063-6394a90a9cd5), label version 20260820. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 8, 72, 120)
> - protein-binding: no-label-value (label values: -)

> [!success] EU SmPC cross-check: **consistent**
> Automated comparison with section 5.2 of the [EU SmPC of *Dacogen*](https://www.ema.europa.eu/en/documents/product-information/dacogen-epar-product-information_en.pdf) (EMEA/H/C/002221) · [ChPL po polsku](https://www.ema.europa.eu/pl/documents/product-information/dacogen-epar-product-information_pl.pdf). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (SmPC values: 0.5, 120)
> - protein-binding: consistent (SmPC values: 1)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Azacitidine]] (DNA; DNA (cytosine-5)-methyltransferase 1; DNA (cytosine-5)-methyltransferase 3A), [[5-Fluorouracil]] (DNA), [[Azathioprine]] (DNA), [[Capecitabine (Xeloda)]] (DNA), [[Methoxsalen (8-MOP)]] (DNA)
- **Same ATC subgroup:** [[5-Fluorouracil]], [[Azacitidine]], [[Capecitabine (Xeloda)]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
