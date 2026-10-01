---
type: compound
schema-version: 2
compound-id: lamivudine-compound
name: Lamivudine
aliases: []
cluster: Ancillary Supplements and Topicals
group: ancillary
class: null
subclass: null
mechanism: DNA inhibitor; DNA polymerase/reverse transcriptase inhibitor; Human immunodeficiency virus type 1 reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL141
chembl-max-phase: 4
half-life:
  value: 5.0
  value-max: 7.0
  unit: h
  notes: 5 to 7 hours
protein-binding:
  value: 36.0
  value-max: null
  unit: percent
  notes: Less than 36%
bioavailability:
  value: 86.0
  value-max: null
  notes: 86%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney (circa 70%)
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
- pk-ema-discrepant
pk-source:
  type: wikipedia-infobox
  title: Lamivudine
  url: https://en.wikipedia.org/w/index.php?title=Lamivudine&oldid=1363895172
  revision: 1363895172
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL141
  pref-name: LAMIVUDINE
  molecule-type: Small molecule
  first-approval: 1995
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF05
  targets:
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  - id: CHEMBL2363048
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2363046
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2363047
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2362994
    name: DNA polymerase/reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 229.26
    mw-freebase: 229.26
    alogp: -0.59
    psa: 90.37
    hba: 7
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.7
    full-molformula: C8H11N3O3S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: discrepant
  set-id: 6bd6b9da-df69-46db-813e-4e7f3bdecf95
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6bd6b9da-df69-46db-813e-4e7f3bdecf95
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
pk-verification-ema:
  source: ema-smpc
  status: discrepant
  product: Epivir
  ema-number: EMEA/H/C/000107
  url: https://www.ema.europa.eu/en/documents/product-information/epivir-epar-product-information_en.pdf
  chpl-url: null
  checked: '2026-10-01'
  fields:
    half-life: discrepant
    protein-binding: consistent
---

# Lamivudine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `lamivudine-compound`
- **Source group:** Ancillaries & Support (`ancillary`)
- **Cluster:** [[Ancillary Supplements and Topicals]]
- **ChEMBL:** [CHEMBL141](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL141/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Inhibits HIV reverse transcriptase and is used only as part of a resistance-aware antiretroviral regimen.

## Mechanism

DNA inhibitor; DNA polymerase/reverse transcriptase inhibitor; Human immunodeficiency virus type 1 reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1995
- **Flags:** black-box warning, prodrug
- **ATC J05AF05:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 229.26 | -0.59 | 90.37 | 2/7 | 0 | C8H11N3O3S |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2363048)|DNA]] - inhibitor · NUCLEIC-ACID
- [[DNA (CHEMBL2363046)|DNA]] - inhibitor · NUCLEIC-ACID
- [[DNA (CHEMBL2363047)|DNA]] - inhibitor · NUCLEIC-ACID
- [[DNA polymerase-reverse transcriptase (CHEMBL2362994)|DNA polymerase/reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Lamivudine*](https://en.wikipedia.org/w/index.php?title=Lamivudine&oldid=1363895172) (revision 1363895172, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 5–7 h | 5 to 7 hours |
| Protein binding | 36 % | Less than 36% |
| Bioavailability | 86 % | 86% |
| Excretion | mainly urinary | Kidney (circa 70%) |

> [!danger] FDA label cross-check: **discrepant**
> Automated comparison with the [US prescribing information (DailyMed set 6bd6b9da…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=6bd6b9da-df69-46db-813e-4e7f3bdecf95), label version 20260729. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (label values: 13, 19, 72)
> - protein-binding: consistent (label values: 36)

> [!danger] EU SmPC cross-check: **discrepant**
> Automated comparison with section 5.2 of the [EU SmPC of *Epivir*](https://www.ema.europa.eu/en/documents/product-information/epivir-epar-product-information_en.pdf) (EMEA/H/C/000107). Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: discrepant (SmPC values: 16, 18, 19)
> - protein-binding: consistent (SmPC values: 5, 10, 16, 36)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Adefovir]] (DNA polymerase/reverse transcriptase), [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Islatravir]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Telbivudine]] (DNA polymerase/reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)
- **Same ATC subgroup:** [[Abacavir]], [[Emtricitabine]], [[Telbivudine]], [[Tenofovir]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]], [[Zidovudine]]

## Safety routing

Group-level triage (not compound-specific): `needs-compound-review`

- [[Stacking and Interaction Risks]]
