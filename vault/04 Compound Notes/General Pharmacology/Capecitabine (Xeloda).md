---
type: compound
schema-version: 2
compound-id: capecitabine-compound
name: Capecitabine (Xeloda)
aliases:
- Capecitabine
- Xeloda
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: DNA inhibitor; RNA inhibitor; Thymidylate synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1773
chembl-max-phase: 4
half-life:
  value: 38.0
  value-max: 45.0
  unit: min
  notes: 38–45 minutes
protein-binding:
  value: 60.0
  value-max: null
  unit: percent
  notes: < 60%
bioavailability:
  value: null
  value-max: null
  notes: Extensive
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: kidney (95.5%), faecal (2.6%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: liver, to 5'-DFCR, 5'-DFUR (inactive); neoplastic tissue, 5'-DFUR to active fluorouracil
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
- cytotoxicity
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Capecitabine
  url: https://en.wikipedia.org/w/index.php?title=Capecitabine&oldid=1360414026
  revision: 1360414026
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1773
  pref-name: CAPECITABINE
  molecule-type: Small molecule
  first-approval: 1998
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01BC06
  targets:
  - id: CHEMBL1952
    name: Thymidylate synthase
    action: INHIBITOR
  - id: CHEMBL2311221
    name: DNA
    action: INHIBITOR
  - id: CHEMBL2311222
    name: RNA
    action: INHIBITOR
  properties:
    full-mwt: 359.35
    mw-freebase: 359.35
    alogp: 0.76
    psa: 122.91
    hba: 8
    hbd: 3
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.64
    full-molformula: C15H22FN3O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0b59e98c-5b34-4b93-90f6-20526f4d4f88
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0b59e98c-5b34-4b93-90f6-20526f4d4f88
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Capecitabine (Xeloda)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `capecitabine-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Capecitabine, Xeloda
- **ChEMBL:** [CHEMBL1773](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1773/) · max phase 4 · id via Wikipedia infobox

## Source summary

An oral prodrug converted to 5-fluorouracil in three enzymatic steps, the last by thymidine phosphorylase which is enriched in tumour tissue. That last step is the basis for its relative tumour selectivity.

## Mechanism

DNA inhibitor; RNA inhibitor; Thymidylate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1998
- **Flags:** black-box warning, prodrug
- **ATC L01BC06:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Pyrimidine analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 359.35 | 0.76 | 122.91 | 3/8 | 0 | C15H22FN3O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Thymidylate synthase (CHEMBL1952)|Thymidylate synthase]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID
- [[RNA (CHEMBL2311222)|RNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Capecitabine*](https://en.wikipedia.org/w/index.php?title=Capecitabine&oldid=1360414026) (revision 1360414026, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 38–45 min | 38–45 minutes |
| Protein binding | 60 % | < 60% |
| Bioavailability | - | Extensive |
| Metabolism | hepatic | liver, to 5'-DFCR, 5'-DFUR (inactive); neoplastic tissue, 5'-DFUR to active fluorouracil |
| Excretion | mainly urinary | kidney (95.5%), faecal (2.6%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0b59e98c…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0b59e98c-5b34-4b93-90f6-20526f4d4f88), label version 20260721. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.75)
> - protein-binding: consistent (label values: 60)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[5-Fluorouracil]] (DNA; RNA; Thymidylate synthase), [[Azacitidine]] (DNA; RNA), [[Azathioprine]] (DNA), [[Decitabine]] (DNA), [[Methoxsalen (8-MOP)]] (DNA), [[Pemetrexed (Alimta)]] (Thymidylate synthase)
- **Same ATC subgroup:** [[5-Fluorouracil]], [[Azacitidine]], [[Decitabine]]

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
