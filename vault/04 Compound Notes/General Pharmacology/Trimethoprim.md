---
type: compound
schema-version: 2
compound-id: trimethoprim-compound
name: Trimethoprim
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial dihydrofolate reductase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL22
chembl-max-phase: 4
half-life:
  value: 8.0
  value-max: 12.0
  unit: h
  notes: 8–12 hours
protein-binding:
  value: 44.0
  value-max: null
  unit: percent
  notes: 44%
bioavailability:
  value: 90.0
  value-max: 100.0
  notes: 90–100%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney (50–60%), faeces (4%)
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Trimethoprim
  url: https://en.wikipedia.org/w/index.php?title=Trimethoprim&oldid=1376490173
  revision: 1376490173
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL22
  pref-name: TRIMETHOPRIM
  molecule-type: Small molecule
  first-approval: 1973
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J01EA01
  targets:
  - id: CHEMBL2364669
    name: Dihydrofolate reductase
    action: INHIBITOR
  properties:
    full-mwt: 290.32
    mw-freebase: 290.32
    alogp: 1.26
    psa: 105.51
    hba: 7
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.85
    full-molformula: C14H18N4O3
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 249e938d-f181-47c4-a082-372d65462f33
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=249e938d-f181-47c4-a082-372d65462f33
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Trimethoprim

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `trimethoprim-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL22](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL22/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Bacterial dihydrofolate reductase inhibitor used alone for urinary infection and with sulfamethoxazole for broader cover.

## Mechanism

Bacterial dihydrofolate reductase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1973
- **ATC J01EA01:** ANTIINFECTIVES FOR SYSTEMIC USE › SULFONAMIDES AND TRIMETHOPRIM › Trimethoprim and derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 290.32 | 1.26 | 105.51 | 2/7 | 0 | C14H18N4O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Dihydrofolate reductase (CHEMBL2364669)|Dihydrofolate reductase]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Trimethoprim*](https://en.wikipedia.org/w/index.php?title=Trimethoprim&oldid=1376490173) (revision 1376490173, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 8–12 h | 8–12 hours |
| Protein binding | 44 % | 44% |
| Bioavailability | 90–100 % | 90–100% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney (50–60%), faeces (4%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 249e938d…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=249e938d-f181-47c4-a082-372d65462f33), label version 20240604. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 8, 10)
> - protein-binding: consistent (label values: 44)

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
