---
type: compound
schema-version: 2
compound-id: islatravir-compound
name: Islatravir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 reverse transcriptase inhibitor; Reverse transcriptase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL517231
chembl-max-phase: 3
half-life:
  value: 50.0
  value-max: 60.0
  unit: h
  notes: ~50–60 hours (parent drug)
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Limited; intracellular phosphorylation to active metabolite (ISL-TP)
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
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/antiinfective
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Islatravir
  url: https://en.wikipedia.org/w/index.php?title=Islatravir&oldid=1362098777
  revision: 1362098777
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL517231
  pref-name: ISLATRAVIR
  molecule-type: Small molecule
  first-approval: null
  black-box-warning: false
  withdrawn: false
  atc-codes: []
  targets:
  - id: CHEMBL1681630
    name: Reverse transcriptase
    action: INHIBITOR
  - id: CHEMBL247
    name: Human immunodeficiency virus type 1 reverse transcriptase
    action: INHIBITOR
  properties:
    full-mwt: 293.26
    mw-freebase: 293.26
    alogp: -0.81
    psa: 119.31
    hba: 8
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.49
    full-molformula: C12H12FN5O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Islatravir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `islatravir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL517231](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL517231/) · max phase 3 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Nucleoside reverse transcriptase translocation inhibitor with an intracellular half-life long enough to support monthly or longer dosing.

## Mechanism

Human immunodeficiency virus type 1 reverse transcriptase inhibitor; Reverse transcriptase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 293.26 | -0.81 | 119.31 | 3/8 | 0 | C12H12FN5O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Reverse transcriptase (CHEMBL1681630)|Reverse transcriptase]] - inhibitor · SINGLE PROTEIN
- [[Human immunodeficiency virus type 1 reverse transcriptase (CHEMBL247)|Human immunodeficiency virus type 1 reverse transcriptase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Islatravir*](https://en.wikipedia.org/w/index.php?title=Islatravir&oldid=1362098777) (revision 1362098777, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 50–60 h | ~50–60 hours (parent drug) |
| Metabolism | - | Limited; intracellular phosphorylation to active metabolite (ISL-TP) |
| Excretion | mainly urinary | Renal |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Doravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Efavirenz]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Emtricitabine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Etravirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Lamivudine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Nevirapine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Rilpivirine]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Tenofovir Alafenamide]] (Human immunodeficiency virus type 1 reverse transcriptase), [[Zidovudine]] (Human immunodeficiency virus type 1 reverse transcriptase)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
