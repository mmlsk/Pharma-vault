---
type: compound
schema-version: 2
compound-id: pemetrexed-compound
name: Pemetrexed (Alimta)
aliases:
- Pemetrexed
- Alimta
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: Dihydrofolate reductase inhibitor; GAR transformylase inhibitor; Thymidylate synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL225072
chembl-max-phase: 4
half-life:
  value: 3.5
  value-max: null
  unit: h
  notes: 3.5 hours
protein-binding:
  value: 81.0
  value-max: null
  unit: percent
  notes: 81%
bioavailability:
  value: null
  value-max: null
  notes: NA
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Negligible
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
  title: Pemetrexed
  url: https://en.wikipedia.org/w/index.php?title=Pemetrexed&oldid=1329362768
  revision: 1329362768
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL225072
  pref-name: PEMETREXED
  molecule-type: Small molecule
  first-approval: 2004
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01BA04
  targets:
  - id: CHEMBL202
    name: Dihydrofolate reductase
    action: INHIBITOR
  - id: CHEMBL1952
    name: Thymidylate synthase
    action: INHIBITOR
  - id: CHEMBL3972
    name: Trifunctional purine biosynthetic protein adenosine-3
    action: INHIBITOR
  properties:
    full-mwt: 427.42
    mw-freebase: 427.42
    alogp: 0.67
    psa: 191.26
    hba: 6
    hbd: 6
    rtb: 9
    num-ro5-violations: 1
    qed-weighted: 0.29
    full-molformula: C20H21N5O6
pk-verification:
  source: fda-label
  status: consistent
  set-id: caef07ce-066b-4c48-98dc-974b05ebbbe0
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=caef07ce-066b-4c48-98dc-974b05ebbbe0
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pemetrexed (Alimta)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pemetrexed-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Pemetrexed, Alimta
- **ChEMBL:** [CHEMBL225072](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL225072/) · max phase 4 · id via Wikipedia infobox

## Source summary

A multitargeted antifolate hitting thymidylate synthase, dihydrofolate reductase and GARFT. Mandatory folate and B12 supplementation cuts its haematological toxicity without reducing efficacy.

## Mechanism

Dihydrofolate reductase inhibitor; GAR transformylase inhibitor; Thymidylate synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2004
- **ATC L01BA04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › ANTIMETABOLITES › Folic acid analogues

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 427.42 | 0.67 | 191.26 | 6/6 | 1 | C20H21N5O6 |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydrofolate reductase (CHEMBL202)|Dihydrofolate reductase]] - inhibitor · SINGLE PROTEIN
- [[Thymidylate synthase (CHEMBL1952)|Thymidylate synthase]] - inhibitor · SINGLE PROTEIN
- [[Trifunctional purine biosynthetic protein adenosine-3 (CHEMBL3972)|Trifunctional purine biosynthetic protein adenosine-3]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pemetrexed*](https://en.wikipedia.org/w/index.php?title=Pemetrexed&oldid=1329362768) (revision 1329362768, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 3.5 h | 3.5 hours |
| Protein binding | 81 % | 81% |
| Bioavailability | - | NA |
| Metabolism | - | Negligible |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set caef07ce…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=caef07ce-066b-4c48-98dc-974b05ebbbe0), label version 20260618. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 3.5)
> - protein-binding: consistent (label values: 81)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[5-Fluorouracil]] (Thymidylate synthase), [[Capecitabine (Xeloda)]] (Thymidylate synthase), [[Methotrexate]] (Dihydrofolate reductase)
- **Same ATC subgroup:** [[Methotrexate]]

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
