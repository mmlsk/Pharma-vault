---
type: compound
schema-version: 2
compound-id: naloxegol-compound
name: Naloxegol
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL2219418
chembl-max-phase: 4
half-life:
  value: 6.0
  value-max: 11.0
  unit: h
  notes: 6–11 h
protein-binding:
  value: 4.2
  value-max: null
  unit: percent
  notes: ~4.2%
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Feces (68%), urine (16%)
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (CYP3A)
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
- sedation-respiratory-depression
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/analgesia
- stub
- pk-auto
- chembl-profile
- chembl-name-match
pk-source:
  type: wikipedia-infobox
  title: Naloxegol
  url: https://en.wikipedia.org/w/index.php?title=Naloxegol&oldid=1322744851
  revision: 1322744851
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL2219418
  pref-name: NALOXEGOL
  molecule-type: Small molecule
  first-approval: 2014
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A06AH03
  targets: []
  properties:
    full-mwt: 651.79
    mw-freebase: 651.79
    alogp: 1.86
    psa: 126.77
    hba: 12
    hbd: 2
    rtb: 24
    num-ro5-violations: 2
    qed-weighted: 0.13
    full-molformula: C34H53NO11
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Naloxegol

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `naloxegol-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL2219418](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL2219418/) · max phase 4 · id via exact ChEMBL name match - confirm

## Source summary

PEGylated naloxone derivative for opioid-induced constipation, kept out of the brain by both its size and P-glycoprotein.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2014
- **ATC A06AH03:** ALIMENTARY TRACT AND METABOLISM › DRUGS FOR CONSTIPATION › Peripheral opioid receptor antagonists

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 651.79 | 1.86 | 126.77 | 2/12 | 2 | C34H53NO11 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Naloxegol*](https://en.wikipedia.org/w/index.php?title=Naloxegol&oldid=1322744851) (revision 1322744851, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 6–11 h | 6–11 h |
| Protein binding | 4.2 % | ~4.2% |
| Metabolism | hepatic | Liver (CYP3A) |
| Excretion | mainly non-renal | Feces (68%), urine (16%) |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Naloxone]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
