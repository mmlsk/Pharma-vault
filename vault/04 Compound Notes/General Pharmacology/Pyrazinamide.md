---
type: compound
schema-version: 2
compound-id: pyrazinamide-compound
name: Pyrazinamide
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: 70S ribosome inhibitor; Fatty acid synthase inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL614
chembl-max-phase: 4
half-life:
  value: 9.0
  value-max: 10.0
  unit: h
  notes: 9 to 10 hours
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 90.0
  value-max: null
  notes: '&gt;90%'
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
- identity-confirmed
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Pyrazinamide
  url: https://en.wikipedia.org/w/index.php?title=Pyrazinamide&oldid=1375390898
  revision: 1375390898
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL614
  pref-name: PYRAZINAMIDE
  molecule-type: Small molecule
  first-approval: 1971
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - J04AK01
  targets:
  - id: CHEMBL2011
    name: Fatty acid synthase
    action: INHIBITOR
  - id: CHEMBL2363965
    name: 70S ribosome
    action: INHIBITOR
  properties:
    full-mwt: 123.11
    mw-freebase: 123.11
    alogp: -0.42
    psa: 68.87
    hba: 3
    hbd: 1
    rtb: 1
    num-ro5-violations: 0
    qed-weighted: 0.55
    full-molformula: C5H5N3O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: consistent
  set-id: 262d8829-728c-48db-b89b-88d13b87e684
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684
  checked: '2026-10-01'
  fields:
    half-life: consistent
---

# Pyrazinamide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `pyrazinamide-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL614](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL614/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

The sterilising drug of short-course tuberculosis therapy, active only at acid pH inside the phagosome, which is why it shortened treatment from nine months to six.

## Mechanism

70S ribosome inhibitor; Fatty acid synthase inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1971
- **Flags:** prodrug
- **ATC J04AK01:** ANTIINFECTIVES FOR SYSTEMIC USE › DRUGS FOR TREATMENT OF TUBERCULOSIS › Other drugs for treatment of tuberculosis

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 123.11 | -0.42 | 68.87 | 1/3 | 0 | C5H5N3O |

**Targets (ChEMBL curated mechanisms):**

- [[Fatty acid synthase (CHEMBL2011)|Fatty acid synthase]] - inhibitor · SINGLE PROTEIN
- [[70S ribosome (CHEMBL2363965)|70S ribosome]] - inhibitor · PROTEIN NUCLEIC-ACID COMPLEX

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Pyrazinamide*](https://en.wikipedia.org/w/index.php?title=Pyrazinamide&oldid=1375390898) (revision 1375390898, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 9–10 h | 9 to 10 hours |
| Bioavailability | 90 % | &gt;90% |
| Metabolism | hepatic | Liver |
| Excretion | mainly urinary | Kidney |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 262d8829…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=262d8829-728c-48db-b89b-88d13b87e684), label version 20260302. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 9, 10)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bedaquiline]], [[Delamanid]], [[Ethambutol]], [[Pretomanid]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
