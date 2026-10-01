---
type: compound
schema-version: 2
compound-id: dopamine-drug-compound
name: Dopamine (IV infusion)
aliases:
- Dopamine
- IV infusion
cluster: Cardiovascular and Lipid Agents
group: cardio
class: null
subclass: null
mechanism: null
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL59
chembl-max-phase: 4
half-life:
  value: null
  unit: null
  notes: null
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: MAO, COMT
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
- cardiovascular-load
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/cardio
- stub
- pk-auto
- chembl-profile
- chembl-name-match
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Dopamine
  url: https://en.wikipedia.org/w/index.php?title=Dopamine&oldid=1376384476
  revision: 1376384476
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: chembl-name-match
  parent-id: CHEMBL59
  pref-name: DOPAMINE
  molecule-type: Small molecule
  first-approval: 1974
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C01CA04
  targets: []
  properties:
    full-mwt: 153.18
    mw-freebase: 153.18
    alogp: 0.6
    psa: 66.48
    hba: 3
    hbd: 3
    rtb: 2
    num-ro5-violations: 0
    qed-weighted: 0.54
    full-molformula: C8H11NO2
  identity-check: structure-confirmed
---

# Dopamine (IV infusion)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `dopamine-drug-compound`
- **Source group:** Cardiovascular (`cardio`)
- **Cluster:** [[Cardiovascular and Lipid Agents]]
- **Aliases:** Dopamine, IV infusion
- **ChEMBL:** [CHEMBL59](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL59/) · max phase 4 · id via exact ChEMBL name match · structure check: ✅ InChIKey matches PubChem

## Source summary

Inotrope and vasopressor whose receptor profile changes with infusion rate, now largely displaced by noradrenaline in shock.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1974
- **ATC C01CA04:** CARDIOVASCULAR SYSTEM › CARDIAC STIMULANTS EXCL. CARDIAC GLYCOSIDES › Adrenergic and dopaminergic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 153.18 | 0.6 | 66.48 | 3/3 | 0 | C8H11NO2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Dopamine*](https://en.wikipedia.org/w/index.php?title=Dopamine&oldid=1376384476) (revision 1376384476, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Metabolism | - | MAO, COMT |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Adrenaline (Epinephrine)]], [[Dobutamine]], [[Ephedrine]], [[Noradrenaline (Norepinephrine, IV)]], [[p-Synephrine (Bitter Orange)]], [[Phenylephrine]]

## Safety routing

Group-level triage (not compound-specific): `cardiovascular-load`

- [[Stacking and Interaction Risks]]
- [[Stimulant and Cardiovascular Load]]
