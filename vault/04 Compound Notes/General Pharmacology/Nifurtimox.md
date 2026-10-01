---
type: compound
schema-version: 2
compound-id: nifurtimox-compound
name: Nifurtimox
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: DNA inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL290960
chembl-max-phase: 4
half-life:
  value: 2.95
  value-max: null
  unit: h
  notes: 2.95 ± 1.19 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: Low
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney, very low
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (Cytochrome P450 oxidase (CYP) involved)
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
- cyp-interactions
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Nifurtimox
  url: https://en.wikipedia.org/w/index.php?title=Nifurtimox&oldid=1373219699
  revision: 1373219699
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL290960
  pref-name: NIFURTIMOX
  molecule-type: Small molecule
  first-approval: 2020
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01CC01
  targets:
  - id: CHEMBL4495551
    name: DNA
    action: INHIBITOR
  properties:
    full-mwt: 287.3
    mw-freebase: 287.3
    alogp: 0.64
    psa: 106.02
    hba: 7
    hbd: 0
    rtb: 3
    num-ro5-violations: 0
    qed-weighted: 0.46
    full-molformula: C10H13N3O5S
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 90d09714-a8b1-4696-8ada-f99dc54d0721
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=90d09714-a8b1-4696-8ada-f99dc54d0721
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Nifurtimox

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `nifurtimox-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL290960](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL290960/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Nitrofuran for Chagas disease and, combined with eflornithine, for late-stage African trypanosomiasis.

## Mechanism

DNA inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2020
- **ATC P01CC01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › AGENTS AGAINST LEISHMANIASIS AND TRYPANOSOMIASIS › Nitrofuran derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 287.3 | 0.64 | 106.02 | 0/7 | 0 | C10H13N3O5S |

**Targets (ChEMBL curated mechanisms):**

- [[DNA (CHEMBL4495551)|DNA]] - inhibitor · NUCLEIC-ACID

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Nifurtimox*](https://en.wikipedia.org/w/index.php?title=Nifurtimox&oldid=1373219699) (revision 1373219699, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.95 h | 2.95 ± 1.19 hours |
| Bioavailability | - | Low |
| Metabolism | hepatic | Liver (Cytochrome P450 oxidase (CYP) involved) |
| Excretion | mainly urinary | Kidney, very low |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 90d09714…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=90d09714-a8b1-4696-8ada-f99dc54d0721), label version 20260303. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 2.4, 3.6, 10, 28)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
