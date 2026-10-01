---
type: compound
schema-version: 2
compound-id: bremelanotide-compound
name: Bremelanotide
aliases: []
cluster: Metabolic and Incretin Agents
group: glp1
class: null
subclass: null
mechanism: Melanocortin receptor 4 agonist
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2070241
chembl-max-phase: 4
half-life:
  value: 2.7
  value-max: null
  unit: h
  notes: 2.7 hours
protein-binding:
  value: 21.0
  value-max: null
  unit: percent
  notes: 21%
bioavailability:
  value: 100.0
  value-max: null
  notes: 'SC: ~100%'
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: 'Urine: 64.8%; Feces: 22.8%'
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysis of peptide bonds
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
- glucose-metabolism
- gastrointestinal
source-status: partially-verified
last-reviewed: null
tags:
- compound
- source-derived
- group/glp1
- stub
- pk-auto
- chembl-profile
- pk-fda-consistent
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Bremelanotide
  url: https://en.wikipedia.org/w/index.php?title=Bremelanotide&oldid=1376322571
  revision: 1376322571
  retrieved: '2026-09-26'
  chembl-confirmed: true
chembl:
  identity-source: catalogue
  parent-id: CHEMBL2070241
  pref-name: BREMELANOTIDE
  molecule-type: Protein
  first-approval: 2019
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - G02CX05
  targets:
  - id: CHEMBL259
    name: Melanocortin receptor 4
    action: AGONIST
  properties:
    full-mwt: 1025.18
    mw-freebase: 1025.18
    full-molformula: C50H68N14O10
pk-verification:
  source: fda-label
  status: consistent
  set-id: f1d0c1b5-2f39-4bad-a6a4-0066e3ad5dcf
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f1d0c1b5-2f39-4bad-a6a4-0066e3ad5dcf
  checked: '2026-10-01'
  fields:
    half-life: consistent
    protein-binding: no-label-value
---

# Bremelanotide

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `bremelanotide-compound`
- **Source group:** GLP-1 & Body (`glp1`)
- **Cluster:** [[Metabolic and Incretin Agents]]
- **ChEMBL:** [CHEMBL2070241](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2070241/) · max phase 4 · id via source catalogue

## Source summary

Melanocortin receptor 4 agonist; approved/marketed compound catalogued by ChEMBL (CHEMBL2070241).

## Mechanism

Melanocortin receptor 4 agonist _(ChEMBL curated mechanism, as quoted by the source)._

## ChEMBL profile

- **Molecule type:** Protein
- **First approval (ChEMBL):** 2019
- **ATC G02CX05:** GENITO URINARY SYSTEM AND SEX HORMONES › OTHER GYNECOLOGICALS › Other gynecologicals

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 1025.18 | - | - | -/- | - | C50H68N14O10 |

**Targets (ChEMBL curated mechanisms):**

- [[Melanocortin receptor 4 (CHEMBL259)|Melanocortin receptor 4]] - agonist · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Bremelanotide*](https://en.wikipedia.org/w/index.php?title=Bremelanotide&oldid=1376322571) (revision 1376322571, retrieved 2026-09-26); ChEMBL id matches the catalogue. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2.7 h | 2.7 hours |
| Protein binding | 21 % | 21% |
| Bioavailability | 100 % | SC: ~100% |
| Metabolism | - | Hydrolysis of peptide bonds |
| Excretion | mainly urinary | Urine: 64.8%; Feces: 22.8% |

> [!success] FDA label cross-check: **consistent**
> Automated comparison with the [US prescribing information (DailyMed set f1d0c1b5…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=f1d0c1b5-2f39-4bad-a6a4-0066e3ad5dcf), label version 20251113. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: consistent (label values: 1.9, 2.7, 4)
> - protein-binding: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[PT-141 (Bremelanotide)]]
- **Shared target:** [[PT-141 (Bremelanotide)]] (Melanocortin receptor 4), [[Setmelanotide (Imcivree)]] (Melanocortin receptor 4)
- **Same ATC subgroup:** [[PT-141 (Bremelanotide)]]

## Safety routing

Group-level triage (not compound-specific): `glucose-metabolism`, `gastrointestinal`

- [[Stacking and Interaction Risks]]
- [[Glucose and Incretin Signaling]]
