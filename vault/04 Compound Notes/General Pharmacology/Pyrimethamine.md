---
type: compound
schema-version: 2
compound-id: pyrimethamine-compound
name: Pyrimethamine
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Dihydrofolate reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL36
chembl-max-phase: 4
half-life:
  value: 96.0
  value-max: null
  unit: h
  notes: 96 hours
protein-binding:
  value: 87.0
  value-max: null
  unit: percent
  notes: 87%
bioavailability:
  value: null
  value-max: null
  notes: well-absorbed
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney
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
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pyrimethamine
  url: https://en.wikipedia.org/w/index.php?title=Pyrimethamine&oldid=1338328453
  revision: 1338328453
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL36
  pref-name: PYRIMETHAMINE
  molecule-type: Small molecule
  first-approval: 1953
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - P01BD01
  - P01BD51
  targets:
  - id: CHEMBL1939
    name: Bifunctional dihydrofolate reductase-thymidylate synthase
    action: INHIBITOR
  properties:
    full-mwt: 248.72
    mw-freebase: 248.72
    alogp: 2.52
    psa: 77.82
    hba: 4
    hbd: 2
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.86
    full-molformula: C12H13ClN4
pk-verification:
  source: fda-label
  status: consistent
  set-id: 7aca002e-a538-4715-9121-a17bdb7f200c
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7aca002e-a538-4715-9121-a17bdb7f200c
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Pyrimethamine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pyrimethamine-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL36](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL36/) · max phase 4 · id via Wikipedia infobox

## Source summary

Antifolate for toxoplasmosis and, historically, malaria, always given with folinic acid rescue to protect the host marrow.

## Mechanism

Dihydrofolate reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1953
- **ATC P01BD01:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Diaminopyrimidines
- **ATC P01BD51:** ANTIPARASITIC PRODUCTS, INSECTICIDES AND REPELLENTS › ANTIMALARIALS › Diaminopyrimidines

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 248.72 | 2.52 | 77.82 | 2/4 | 0 | C12H13ClN4 |

**Targets (ChEMBL curated mechanisms):**

- [[Bifunctional dihydrofolate reductase-thymidylate synthase (CHEMBL1939)|Bifunctional dihydrofolate reductase-thymidylate synthase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pyrimethamine*](https://en.wikipedia.org/w/index.php?title=Pyrimethamine&oldid=1338328453) (revision 1338328453, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 96 h | 96 hours |
| Protein binding | 87 % | 87% |
| Bioavailability | - | well-absorbed |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 7aca002e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=7aca002e-a538-4715-9121-a17bdb7f200c), label version 20240119. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 96)
> - protein-binding: consistent (label values: 87)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
