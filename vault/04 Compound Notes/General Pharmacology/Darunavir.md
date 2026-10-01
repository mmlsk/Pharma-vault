---
type: compound
schema-version: 2
compound-id: darunavir-compound
name: Darunavir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Human immunodeficiency virus type 1 protease inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1323
chembl-max-phase: 4
half-life:
  value: 15.0
  value-max: null
  unit: h
  notes: 15 hours (with ritonavir)
protein-binding:
  value: 95.0
  value-max: null
  unit: percent
  notes: 95%
bioavailability:
  value: 37.0
  value-max: null
  notes: 37% (without ritonavir), 82% (with ritonavir)
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (80%), urine (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A4)
dosage-ranges: {}
cyp-interactions:
  substrates:
  - CYP3A4
  inhibitors: []
  inducers: []
  transporters: []
  notes: Metabolised by CYP3A4 (from metabolism field); inhibitor/inducer roles not assessed
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
  title: Darunavir
  url: https://en.wikipedia.org/w/index.php?title=Darunavir&oldid=1368876372
  revision: 1368876372
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1323
  pref-name: DARUNAVIR
  molecule-type: Small molecule
  first-approval: 2006
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J05AE10
  targets:
  - id: CHEMBL243
    name: Human immunodeficiency virus type 1 protease
    action: INHIBITOR
  properties:
    full-mwt: 547.67
    mw-freebase: 547.67
    alogp: 2.38
    psa: 140.42
    hba: 8
    hbd: 3
    rtb: 11
    num-ro5-violations: 1
    qed-weighted: 0.36
    full-molformula: C27H37N3O7S
pk-verification:
  source: fda-label
  status: consistent
  set-id: e80e44f8-1987-4b78-a63d-a4e4d5122ddb
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e80e44f8-1987-4b78-a63d-a4e4d5122ddb
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Darunavir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `darunavir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1323](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1323/) · max phase 4 · id via Wikipedia infobox

## Source summary

The most robust HIV protease inhibitor, retaining activity against multiply resistant virus because of the number of backbone hydrogen bonds it forms.

## Mechanism

Human immunodeficiency virus type 1 protease inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2006
- **ATC J05AE10:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Protease inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 547.67 | 2.38 | 140.42 | 3/8 | 1 | C27H37N3O7S |

**Targets (ChEMBL curated mechanisms):**

- [[Human immunodeficiency virus type 1 protease (CHEMBL243)|Human immunodeficiency virus type 1 protease]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Darunavir*](https://en.wikipedia.org/w/index.php?title=Darunavir&oldid=1368876372) (revision 1368876372, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 15 h | 15 hours (with ritonavir) |
| Protein binding | 95 % | 95% |
| Bioavailability | 37 % | 37% (without ritonavir), 82% (with ritonavir) |
| Metabolism | hepatic | Liver (CYP3A4) |
| CYP (metabolised by) | CYP3A4 | roles as inhibitor/inducer not assessed |
| Excretion | mainly non-renal | Feces (80%), urine (14%) |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set e80e44f8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e80e44f8-1987-4b78-a63d-a4e4d5122ddb), label version 20260311. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 15)
> - protein-binding: consistent (label values: 95)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Lopinavir]] (Human immunodeficiency virus type 1 protease), [[Ritonavir]] (Human immunodeficiency virus type 1 protease), [[Saquinavir]] (Human immunodeficiency virus type 1 protease)
- **Same ATC subgroup:** [[Atazanavir]], [[Ensitrelvir]], [[Fosamprenavir]], [[Ritonavir]], [[Saquinavir]]
- **Shared CYP substrate pool:** CYP3A4 (+204 others) → [[CYP450 Metabolism]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
