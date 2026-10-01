---
type: compound
schema-version: 2
compound-id: rifabutin-compound
name: Rifabutin
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: Bacterial DNA-directed RNA polymerase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL444633
chembl-max-phase: 4
half-life:
  value: 28.0
  value-max: 62.0
  unit: h
  notes: 28 to 62 hours (mean)
protein-binding:
  value: 85.0
  value-max: null
  unit: percent
  notes: 85%
bioavailability:
  value: 85.0
  value-max: null
  notes: 85%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: Kidney and fecal
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
  title: Rifabutin
  url: https://en.wikipedia.org/w/index.php?title=Rifabutin&oldid=1369532616
  revision: 1369532616
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL444633
  pref-name: RIFABUTIN
  molecule-type: Small molecule
  first-approval: 1992
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AB04
  targets:
  - id: CHEMBL2364672
    name: Bacterial DNA-directed RNA polymerase
    action: INHIBITOR
  properties:
    full-mwt: 847.02
    mw-freebase: 847.02
    alogp: 4.62
    psa: 205.55
    hba: 14
    hbd: 5
    rtb: 4
    num-ro5-violations: 2
    qed-weighted: 0.26
    full-molformula: C46H62N4O11
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 25a60937-cbbe-4a50-994f-2ce15203f589
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=25a60937-cbbe-4a50-994f-2ce15203f589
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Rifabutin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `rifabutin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL444633](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL444633/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Rifamycin preferred over rifampicin in HIV coinfection because it induces CYP3A4 far less, at the cost of uveitis at higher doses.

## Mechanism

Bacterial DNA-directed RNA polymerase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1992
- **ATC J04AB04:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 847.02 | 4.62 | 205.55 | 5/14 | 2 | C46H62N4O11 |

**Targets (ChEMBL curated mechanisms):**

- [[Bacterial DNA-directed RNA polymerase (CHEMBL2364672)|Bacterial DNA-directed RNA polymerase]] - inhibitor · PROTEIN COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Rifabutin*](https://en.wikipedia.org/w/index.php?title=Rifabutin&oldid=1369532616) (revision 1369532616, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 28–62 h | 28 to 62 hours (mean) |
| Protein binding | 85 % | 85% |
| Bioavailability | 85 % | 85% |
| Metabolism | hepatic | Liver |
| Excretion | - | Kidney and fecal |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 25a60937…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=25a60937-cbbe-4a50-994f-2ce15203f589), label version 20260901. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 16, 69)
> - protein-binding: consistent (label values: 85)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Rifampicin]] (Bacterial DNA-directed RNA polymerase), [[Rifaximin]] (Bacterial DNA-directed RNA polymerase)
- **Same ATC subgroup:** [[Capreomycin]], [[Cycloserine]], [[Rifampicin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
