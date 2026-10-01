---
type: compound
schema-version: 2
compound-id: ivacaftor-compound
name: Ivacaftor (Kalydeco)
aliases:
- Ivacaftor
- Kalydeco
cluster: General Pharmacology
group: immunology
class: null
subclass: null
mechanism: Cystic fibrosis transmembrane conductance regulator positive modulator
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2010601
chembl-max-phase: 4
half-life:
  value: 12.0
  value-max: null
  unit: h
  notes: 12 hrs (single dose)
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: 99%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: 88% faeces
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: CYP3A
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
- immunosuppression-infection
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/immunology
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
pk-source:
  type: wikipedia-infobox
  title: Ivacaftor
  url: https://en.wikipedia.org/w/index.php?title=Ivacaftor&oldid=1353014600
  revision: 1353014600
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL2010601
  pref-name: IVACAFTOR
  molecule-type: Small molecule
  first-approval: 2012
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - R07AX02
  targets:
  - id: CHEMBL4051
    name: Cystic fibrosis transmembrane conductance regulator
    action: POSITIVE MODULATOR
  properties:
    full-mwt: 392.5
    mw-freebase: 392.5
    alogp: 5.08
    psa: 82.19
    hba: 3
    hbd: 3
    rtb: 2
    num-ro5-violations: 1
    qed-weighted: 0.57
    full-molformula: C24H28N2O3
pk-verification:
  source: fda-label
  status: consistent
  set-id: 0ab0c9f8-3eee-4e0f-9f3f-c1e16aaffe25
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0ab0c9f8-3eee-4e0f-9f3f-c1e16aaffe25
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: consistent
---

# Ivacaftor (Kalydeco)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `ivacaftor-compound`
- **Source group:** Immunology & Biologics (`immunology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Ivacaftor, Kalydeco
- **ChEMBL:** [CHEMBL2010601](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2010601/) · max phase 4 · id via Wikipedia infobox

## Source summary

A CFTR potentiator that increases the open probability of channels already at the cell surface. It transformed outcomes for gating mutations such as G551D and was the first drug to treat the underlying defect in cystic fibrosis rather than its consequences.

## Mechanism

Cystic fibrosis transmembrane conductance regulator positive modulator _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2012
- **ATC R07AX02:** RESPIRATORY SYSTEM › OTHER RESPIRATORY SYSTEM PRODUCTS › Other respiratory system products

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 392.5 | 5.08 | 82.19 | 3/3 | 1 | C24H28N2O3 |

**Targets (ChEMBL curated mechanisms):**

- [[Cystic fibrosis transmembrane conductance regulator (CHEMBL4051)|Cystic fibrosis transmembrane conductance regulator]] - positive modulator · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Ivacaftor*](https://en.wikipedia.org/w/index.php?title=Ivacaftor&oldid=1353014600) (revision 1353014600, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 12 h | 12 hrs (single dose) |
| Protein binding | 99 % | 99% |
| Metabolism | hepatic | CYP3A |
| Excretion | mainly non-renal | 88% faeces |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set 0ab0c9f8…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=0ab0c9f8-3eee-4e0f-9f3f-c1e16aaffe25), label version 20260323. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 12)
> - protein-binding: consistent (label values: 99)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Elexacaftor]] (Cystic fibrosis transmembrane conductance regulator), [[Lumacaftor]] (Cystic fibrosis transmembrane conductance regulator), [[Tezacaftor]] (Cystic fibrosis transmembrane conductance regulator)
- **Same ATC subgroup:** [[Nitric Oxide]]

## Safety routing

Group-level triage (not compound-specific): `immunosuppression-infection`

- [[Stacking and Interaction Risks]]
