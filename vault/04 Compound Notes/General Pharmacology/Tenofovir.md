---
type: compound
schema-version: 2
compound-id: tenofovir-compound
name: Tenofovir
aliases: []
cluster: General Pharmacology
group: antiinfective
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1538
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: 25.0
  value-max: null
  notes: 25%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Ester hydrolysis
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
- possible-duplicate
pk-source:
  type: wikipedia-infobox
  title: Tenofovir disoproxil
  url: https://en.wikipedia.org/w/index.php?title=Tenofovir_disoproxil&oldid=1356054623
  revision: 1356054623
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1538
  pref-name: TENOFOVIR DISOPROXIL
  molecule-type: Small molecule
  first-approval: 2001
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - J05AF07
  targets: []
  properties:
    full-mwt: 519.45
    mw-freebase: 519.45
    alogp: 3.04
    psa: 185.44
    hba: 15
    hbd: 1
    rtb: 13
    num-ro5-violations: 2
    qed-weighted: 0.23
    full-molformula: C19H30N5O10P
---

# Tenofovir

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `tenofovir-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1538](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1538/) · max phase 4 · id via Wikipedia infobox

## Source summary

Nucleotide reverse transcriptase inhibitor at the centre of HIV therapy and of pre-exposure prophylaxis, also active against hepatitis B.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2001
- **Flags:** black-box warning, prodrug
- **ATC J05AF07:** ANTIINFECTIVES FOR SYSTEMIC USE › DIRECT ACTING ANTIVIRALS › Nucleoside and nucleotide reverse transcriptase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 519.45 | 3.04 | 185.44 | 1/15 | 2 | C19H30N5O10P |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Tenofovir disoproxil*](https://en.wikipedia.org/w/index.php?title=Tenofovir_disoproxil&oldid=1356054623) (revision 1356054623, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | 25 % | 25% |
| Metabolism | - | Ester hydrolysis |
| Metabolites | - | Tenofovir |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- ⚠️ **Same molecule in ChEMBL (formulation variant or possible duplicate):** [[Tenofovir Disoproxil]]
- **Same ATC subgroup:** [[Abacavir]], [[Emtricitabine]], [[Lamivudine]], [[Telbivudine]], [[Tenofovir Alafenamide]], [[Tenofovir Disoproxil]], [[Zidovudine]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
