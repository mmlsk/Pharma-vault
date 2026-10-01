---
type: compound
schema-version: 2
compound-id: procaine-compound
name: Procaine
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
chembl-id: CHEMBL569
chembl-max-phase: 4
half-life:
  value: null
  value-max: null
  unit: null
  notes: '40–84 seconds [not stored as a number: non-human or sub-minute data]'
protein-binding:
  value: null
  unit: percent
  notes: null
bioavailability:
  value: null
  value-max: null
  notes: N/A
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Renal; <!--
hepatic-clearance:
  primary-route: null
  extraction-ratio: null
  notes: Hydrolysis by plasma esterases
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
  title: Procaine
  url: https://en.wikipedia.org/w/index.php?title=Procaine&oldid=1351167068
  revision: 1351167068
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL569
  pref-name: PROCAINE
  molecule-type: Small molecule
  first-approval: 1954
  black-box-warning: false
  withdrawn: false
  atc-codes:
  - C05AD05
  - N01BA02
  - N01BA52
  - S01HA05
  targets: []
  properties:
    full-mwt: 236.31
    mw-freebase: 236.31
    alogp: 1.77
    psa: 55.56
    hba: 4
    hbd: 1
    rtb: 6
    num-ro5-violations: 0
    qed-weighted: 0.6
    full-molformula: C13H20N2O2
  identity-check: structure-confirmed
---

# Procaine

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `procaine-compound`
- **Source group:** Analgesia & Anaesthesia (`analgesia`)
- **Cluster:** [[General Pharmacology]]
- **ChEMBL:** [CHEMBL569](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL569/) · max phase 4 · id via Wikipedia infobox · structure check: ✅ InChIKey matches PubChem

## Source summary

An ester local anaesthetic that also binds CpG-rich DNA and inhibits DNA methyltransferase, producing demethylation in cancer cell lines. The concentrations required are far above anaesthetic ones, so it is a mechanistic curiosity rather than a therapy.

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1954
- **ATC C05AD05:** CARDIOVASCULAR SYSTEM › AGENTS FOR TREATMENT OF HEMORRHOIDS AND ANAL FISSURES FOR TOPICAL USE › Local anesthetics
- **ATC N01BA02:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Esters of aminobenzoic acid
- **ATC N01BA52:** NERVOUS SYSTEM › ANESTHETICS, LOCAL › Esters of aminobenzoic acid
- **ATC S01HA05:** SENSORY ORGANS › LOCAL ANESTHETICS › Local anesthetics

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 236.31 | 1.77 | 55.56 | 1/4 | 0 | C13H20N2O2 |

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Procaine*](https://en.wikipedia.org/w/index.php?title=Procaine&oldid=1351167068) (revision 1351167068, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | - | 40–84 seconds [not stored as a number: non-human or sub-minute data] |
| Bioavailability | - | N/A |
| Metabolism | - | Hydrolysis by plasma esterases |
| Excretion | mainly urinary | Renal; <!-- |

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Benzocaine]], [[Chloroprocaine]], [[Lidocaine]], [[Tetracaine]]

## Safety routing

Group-level triage (not compound-specific): `sedation-respiratory-depression`

- [[Stacking and Interaction Risks]]
- [[Respiratory Depression and Fatal Overdose]]
