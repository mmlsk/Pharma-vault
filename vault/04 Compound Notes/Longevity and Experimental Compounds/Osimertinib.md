---
type: compound
schema-version: 2
compound-id: osimertinib-compound
name: Osimertinib
aliases: []
cluster: Longevity and Experimental Compounds
group: longevity
class: null
subclass: null
mechanism: Epidermal growth factor receptor erbB1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL3353410
chembl-max-phase: 4
half-life:
  value: 48.0
  value-max: null
  unit: h
  notes: 48 hours
protein-binding:
  value: null
  value-max: null
  unit: null
  notes: Probably high
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (68%), urine (14%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Oxidation (CYP3A)
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
- evidence-limited
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/longevity
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Osimertinib
  url: https://en.wikipedia.org/w/index.php?title=Osimertinib&oldid=1372172312
  revision: 1372172312
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL3353410
  pref-name: OSIMERTINIB
  molecule-type: Small molecule
  first-approval: 2015
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - L01EB04
  targets:
  - id: CHEMBL203
    name: Epidermal growth factor receptor
    action: INHIBITOR
  properties:
    full-mwt: 499.62
    mw-freebase: 499.62
    alogp: 4.51
    psa: 87.55
    hba: 8
    hbd: 2
    rtb: 10
    num-ro5-violations: 0
    qed-weighted: 0.31
    full-molformula: C28H33N7O2
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Osimertinib

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `osimertinib-compound`
- **Source group:** Longevity & Metabolic (`longevity`)
- **Cluster:** [[Longevity and Experimental Compounds]]
- **ChEMBL:** [CHEMBL3353410](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL3353410/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

Inhibits oncogenic EGFR-family signaling; activity depends on tumor genotype and acquired resistance.

## Mechanism

Epidermal growth factor receptor erbB1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2015
- **ATC L01EB04:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › PROTEIN KINASE INHIBITORS › Epidermal growth factor receptor (EGFR) tyrosine kinase inhibitors

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 499.62 | 4.51 | 87.55 | 2/8 | 0 | C28H33N7O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Epidermal growth factor receptor (CHEMBL203)|Epidermal growth factor receptor]] - inhibitor · SINGLE PROTEIN

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Osimertinib*](https://en.wikipedia.org/w/index.php?title=Osimertinib&oldid=1372172312) (revision 1372172312, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 48 h | 48 hours |
| Protein binding | - | Probably high |
| Metabolism | hepatic | Oxidation (CYP3A) |
| Excretion | mainly non-renal | Feces (68%), urine (14%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Cudc-101]] (Epidermal growth factor receptor), [[Dacomitinib]] (Epidermal growth factor receptor), [[Gefitinib]] (Epidermal growth factor receptor)
- **Same ATC subgroup:** [[Afatinib]], [[Dacomitinib]], [[Erlotinib]], [[Gefitinib]]

## Safety routing

Group-level triage (not compound-specific): `evidence-limited`

- [[Stacking and Interaction Risks]]
- [[Experimental and Evidence-Limited Compounds]]
