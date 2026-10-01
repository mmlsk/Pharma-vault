---
type: compound
schema-version: 2
compound-id: prilocaine-compound
name: Prilocaine
aliases: []
cluster: General Pharmacology
group: analgesia
class: null
subclass: null
mechanism: Sodium channel alpha subunit blocker
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL1194
chembl-max-phase: 4
half-life:
  value: 10.0
  value-max: 150.0
  unit: min
  notes: 10-150 minutes, longer with impaired liver or kidney function
protein-binding:
  value: 55.0
  value-max: null
  unit: percent
  notes: 55%
active-metabolites: []
renal-clearance:
  primary-route: null
  fraction-excreted-unchanged: null
  notes: null
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver and kidney
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
- identity-confirmed
pk-source:
  type: wikipedia-infobox
  title: Prilocaine
  url: https://en.wikipedia.org/w/index.php?title=Prilocaine&oldid=1329364863
  revision: 1329364863
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL1194
  pref-name: PRILOCAINE
  molecule-type: Small molecule
  first-approval: 1965
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - N01BB04
  - N01BB54
  targets:
  - id: CHEMBL2331043
    name: Sodium channel alpha subunit
    action: BLOCKER
  properties:
    full-mwt: 220.32
    mw-freebase: 220.32
    alogp: 2.32
    psa: 41.13
    hba: 2
    hbd: 2
    rtb: 5
    num-ro5-violations: 0
    qed-weighted: 0.8
    full-molformula: C13H20N2O
  identity-check: structure-confirmed
pk-verification:
  source: fda-label
  status: no-label
  set-id: null
  url: null
  checked: '2026-10-01'
  fields: {}
---

# Prilocaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `prilocaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL1194](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL1194/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

Amide local anaesthetic with the lowest systemic toxicity of the class, but a metabolite that causes methaemoglobinaemia.

## Mechanism

Sodium channel alpha subunit blocker _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1965
- **ATC N01BB04:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides
- **ATC N01BB54:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Amides

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 220.32 | 2.32 | 41.13 | 2/2 | 0 | C13H20N2O |

**Targets (ChEMBL curated mechanisms):**

- [[Sodium channel alpha subunit (CHEMBL2331043)|Sodium channel alpha subunit]] - blocker · PROTEIN FAMILY

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Prilocaine*](https://en.wikipedia.org/w/index.php?title=Prilocaine&oldid=1329364863) (revision 1329364863, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 10–150 min | 10-150 minutes, longer with impaired liver or kidney function |
| Protein binding | 55 % | 55% |
| Metabolism | hepatic | Liver and kidney |

_No FDA label found for automated cross-check (not US-approved, or different name)._

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Shared target:** [[Carbamazepine]] (Sodium channel alpha subunit), [[Cenobamate]] (Sodium channel alpha subunit), [[Eslicarbazepine Acetate]] (Sodium channel alpha subunit), [[Evenamide]] (Sodium channel alpha subunit), [[Lacosamide]] (Sodium channel alpha subunit), [[Lamotrigine]] (Sodium channel alpha subunit), [[Lidocaine]] (Sodium channel alpha subunit), [[Oxcarbazepine]] (Sodium channel alpha subunit), [[Phenytoin]] (Sodium channel alpha subunit), [[Primidone]] (Sodium channel alpha subunit), [[Ralfinamide]] (Sodium channel alpha subunit), [[Riluzole (Rilutek)]] (Sodium channel alpha subunit)
- **Same ATC subgroup:** [[Articaine]], [[Bupivacaine]], [[Lidocaine]], [[Mepivacaine]], [[Ropivacaine]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
