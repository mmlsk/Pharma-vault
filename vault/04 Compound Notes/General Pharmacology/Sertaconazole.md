---
type: compound
schema-version: 2
compound-id: sertaconazole-compound
name: Sertaconazole
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
chembl-id: CHEMBL1201196
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: 99.0
  value-max: null
  unit: percent
  notes: '>99% to plasma'
bioavailability:
  value: null
  value-max: null
  notes: Negligible
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: null
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
  title: Sertaconazole
  url: https://en.wikipedia.org/w/index.php?title=Sertaconazole&oldid=1370371824
  revision: 1370371824
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1201196
  pref-name: SERTACONAZOLE
  molecule-type: Small molecule
  first-approval: 2003
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - D01AC14
  - G01AF19
  targets: []
  properties:
    full-mwt: 437.78
    mw-freebase: 437.78
    alogp: 7.02
    psa: 27.05
    hba: 4
    hbd: 0
    rtb: 6
    num-ro5-violations: 1
    qed-weighted: 0.32
    full-molformula: C20H15Cl3N2OS
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Sertaconazole

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `sertaconazole-compound`
- **Source group:** Anti-infectives (`antiinfective`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1201196](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1201196/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Topical imidazole for tinea with an additional direct membrane action beyond ergosterol synthesis blockade.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 2003
- **ATC D01AC14:** DERMATOLOGICALS › ANTIFUNGALS FOR TOPICAL USE › Imidazole and triazole derivatives
- **ATC G01AF19:** GENITO URINARY SYSTEM AND SEX HORMONES › ANTIINFECTIVES AND ANTISEPTICS, EXCL. COMBINATIONS WITH CORTICOSTEROIDS › Imidazole derivatives

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 437.78 | 7.02 | 27.05 | 0/4 | 1 | C20H15Cl3N2OS |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Sertaconazole*](https://en.wikipedia.org/w/index.php?title=Sertaconazole&oldid=1370371824) (revision 1370371824, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Protein binding | 99 % | >99% to plasma |
| Bioavailability | - | Negligible |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Bifonazole]], [[Econazole]], [[Fluconazole]], [[Metronidazole]], [[Tioconazole]]

## Safety routing

Group-level triage (not compound-specific): `cyp-interactions`

- [[Stacking and Interaction Risks]]
- [[CYP450 Metabolism]]
