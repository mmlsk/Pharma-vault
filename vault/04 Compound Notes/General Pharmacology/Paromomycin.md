---
type: compound
schema-version: 2
compound-id: paromomycin-compound
name: Paromomycin
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
chembl-id: CHEMBL370143
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
  value: null
  value-max: null
  notes: Poorly absorbed in the GI tract
active-metabolites: []
renal-clearance:
  primary-route: false
  fraction-excreted-unchanged: null
  notes: Fecal
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Not available
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Paromomycin
  url: https://en.wikipedia.org/w/index.php?title=Paromomycin&oldid=1374394030
  revision: 1374394030
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL370143
  pref-name: PAROMOMYCIN
  molecule-type: Small molecule
  first-approval: 1969
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - A07AA06
  targets: []
  properties:
    full-mwt: 615.63
    mw-freebase: 615.63
    alogp: -8.86
    psa: 347.32
    hba: 19
    hbd: 13
    rtb: 9
    num-ro5-violations: 3
    qed-weighted: 0.11
    full-molformula: C23H45N5O14
  identity-check: structure-confirmed
---

# Paromomycin

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `paromomycin-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL370143](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL370143/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Aminoglycoside given orally for luminal amoebiasis and by injection for visceral leishmaniasis, exploiting its near-zero absorption.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1969
- **ATC A07AA06:** ALIMENTARY TRACT AND METABOLISM › INTESTINAL ANTIINFECTIVES › Antibiotics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 615.63 | -8.86 | 347.32 | 13/19 | 3 | C23H45N5O14 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Paromomycin*](https://en.wikipedia.org/w/index.php?title=Paromomycin&oldid=1374394030) (revision 1374394030, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Bioavailability | - | Poorly absorbed in the GI tract |
| Metabolism | - | Not available |
| Excretion | mainly non-renal | Fecal |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Amphotericin B]], [[Fidaxomicin]], [[Polymyxin B]], [[Rifaximin]], [[Vancomycin]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
