---
type: compound
schema-version: 2
compound-id: fluorouracil-compound
name: 5-Fluorouracil
aliases: []
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
chembl-id: CHEMBL185
chembl-max-phase: 4
half-life:
  value: 16.0
  value-max: null
  unit: min
  notes: 16 minutes
protein-binding:
  value: 8.0
  value-max: 12.0
  unit: percent
  notes: 8 to 12%
bioavailability:
  value: 28.0
  value-max: 100.0
  notes: 28 to 100%
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Intracellular and liver (CYP-mediated)
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
  title: Fluorouracil
  url: https://en.wikipedia.org/w/index.php?title=Fluorouracil&oldid=1351404942
  revision: 1351404942
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL185
  pref-name: FLUOROURACIL
  molecule-type: Small molecule
  first-approval: 1962
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01BC02
  - L01BC52
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
    full-mwt: 130.08
    mw-freebase: 130.08
    alogp: -0.8
    psa: 65.72
    hba: 2
    hbd: 2
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.48
    full-molformula: C4H3FN2O2
pk-verification:
  source: fda-label
  status: consistent
  set-id: f0b60247-89ff-42b5-a55b-61980c282749
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b60247-89ff-42b5-a55b-61980c282749
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# 5-Fluorouracil

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `fluorouracil-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL185](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL185/) · max phase 4 · id via Wikipedia infobox

## Source summary

A fluoropyrimidine whose active metabolite forms a covalent ternary complex with thymidylate synthase and folate. Patients deficient in DPD clear it poorly and can suffer life-threatening toxicity from a standard dose.

## Mechanism

DNA inhibitor; RNA inhibitor; Thymidylate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1962
- **ATC L01BC02:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Pyrimidine analogues
- **ATC L01BC52:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Pyrimidine analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 130.08 | -0.8 | 65.72 | 2/2 | 0 | C4H3FN2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Thymidylate synthase (CHEMBL1952)|Thymidylate synthase]] - inhibitor · SINGLE PROTEIN
- [[DNA (CHEMBL2311221)|DNA]] - inhibitor · NUCLEIC-ACID
- [[RNA (CHEMBL2311222)|RNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Fluorouracil*](https://en.wikipedia.org/w/index.php?title=Fluorouracil&oldid=1351404942) (revision 1351404942, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 16 min | 16 minutes |
| Protein binding | 8–12 % | 8 to 12% |
| Bioavailability | 28–100 % | 28 to 100% |
| Metabolism | hepatic | Intracellular and liver (CYP-mediated) |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f0b60247…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f0b60247-89ff-42b5-a55b-61980c282749), label version 20260814. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 0.133, 0.333)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Capecitabine (Xeloda)]] (DNA; RNA; Thymidylate synthase), [[Azacitidine]] (DNA; RNA), [[Azathioprine]] (DNA), [[Decitabine]] (DNA), [[Methoxsalen (8-MOP)]] (DNA), [[Pemetrexed (Alimta)]] (Thymidylate synthase)
- **Same ATC subgroup:** [[Azacitidine]], [[Capecitabine (Xeloda)]], [[Decitabine]]

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
