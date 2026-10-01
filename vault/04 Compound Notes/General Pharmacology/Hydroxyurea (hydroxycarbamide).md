---
type: compound
schema-version: 2
compound-id: hydroxyurea-compound
name: Hydroxyurea (hydroxycarbamide)
aliases:
- Hydroxyurea
- hydroxycarbamide
cluster: General Pharmacology
group: oncology
class: null
subclass: null
mechanism: Ribonucleoside-diphosphate reductase RR1 inhibitor
pathways: []
indications: []
off-label-contexts: []
regulatory-status: null
evidence-level: null
review-status: stub
chembl-id: CHEMBL467
chembl-max-phase: 4
half-life:
  value: 2.0
  value-max: 4.0
  unit: h
  notes: 2–4 hours
protein-binding:
  value: null
  unit: percent
  notes: null
active-metabolites: []
renal-clearance:
  primary-route: true
  fraction-excreted-unchanged: null
  notes: Kidney and lungs
hepatic-clearance:
  primary-route: true
  extraction-ratio: null
  notes: Liver (to CO2 and urea)
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
- cytotoxicity
source-status: auto-extracted
last-reviewed: null
tags:
- compound
- source-derived
- group/oncology
- stub
- pk-auto
- chembl-profile
pk-source:
  type: wikipedia-infobox
  title: Hydroxycarbamide
  url: https://en.wikipedia.org/w/index.php?title=Hydroxycarbamide&oldid=1357232741
  revision: 1357232741
  retrieved: '2026-09-26'
  chembl-confirmed: false
chembl:
  identity-source: wikipedia-infobox
  parent-id: CHEMBL467
  pref-name: HYDROXYUREA
  molecule-type: Small molecule
  first-approval: 1967
  black-box-warning: true
  withdrawn: false
  atc-codes:
  - L01XX05
  targets:
  - id: CHEMBL2095215
    name: Ribonucleoside-diphosphate reductase RR1
    action: INHIBITOR
  properties:
    full-mwt: 76.05
    mw-freebase: 76.05
    alogp: -0.96
    psa: 75.35
    hba: 2
    hbd: 3
    rtb: 0
    num-ro5-violations: 0
    qed-weighted: 0.26
    full-molformula: CH4N2O2
pk-verification:
  source: fda-label
  status: no-label-value
  set-id: e76fd60e-7644-48c5-9857-3608a045000b
  url: https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e76fd60e-7644-48c5-9857-3608a045000b
  checked: '2026-10-01'
  fields:
    half-life: no-label-value
---

# Hydroxyurea (hydroxycarbamide)

> [!warning] Source-derived stub
> Generated from the source catalogue. Not reviewed. Not medical advice; contains no dosing guidance.
> Change `review-status` from `stub` once curated - the generator will then never overwrite this note.

## Identity

- **Compound ID:** `hydroxyurea-compound`
- **Source group:** Oncology & Cytotoxics (`oncology`)
- **Cluster:** [[General Pharmacology]]
- **Aliases:** Hydroxyurea, hydroxycarbamide
- **ChEMBL:** [CHEMBL467](https://www.ebi.ac.uk/chembl/compound_report_card/CHEMBL467/) · max phase 4 · id via Wikipedia infobox

## Source summary

A ribonucleotide reductase inhibitor that raises fetal haemoglobin and is the only disease-modifying drug in sickle cell disease with a mortality benefit. Also used in myeloproliferative disease as a cytoreductive agent.

## Mechanism

Ribonucleoside-diphosphate reductase RR1 inhibitor _(ChEMBL curated mechanism of the parent molecule, via ChEMBL API)._

## ChEMBL profile

- **Molecule type:** Small molecule
- **First approval (ChEMBL):** 1967
- **Flags:** black-box warning
- **ATC L01XX05:** ANTINEOPLASTIC AND IMMUNOMODULATING AGENTS › OTHER ANTINEOPLASTIC AGENTS › Other antineoplastic agents

| MW (free base) | ALogP | PSA | HBD/HBA | Ro5 violations | Formula |
|---|---|---|---|---|---|
| 76.05 | -0.96 | 75.35 | 3/2 | 0 | CH4N2O2 |

**Targets (ChEMBL curated mechanisms):**

- [[Ribonucleoside-diphosphate reductase RR1 (CHEMBL2095215)|Ribonucleoside-diphosphate reductase RR1]] - inhibitor · PROTEIN COMPLEX GROUP

## Evidence boundaries

- Evidence tier: _not assigned_ - see [[Evidence Tiers]].
- A catalogue or vendor listing is not evidence of efficacy, purity, legality or safety.

## Pharmacokinetics

> [!info] Auto-extracted - verify before use
> Parsed from the [Wikipedia infobox of *Hydroxycarbamide*](https://en.wikipedia.org/w/index.php?title=Hydroxycarbamide&oldid=1357232741) (revision 1357232741, retrieved 2026-09-26); identity matched by name. Confirm against the SmPC / FDA label before relying on it.

| Parameter | Parsed | Source text |
|---|---|---|
| Elimination t½ | 2–4 h | 2–4 hours |
| Metabolism | hepatic | Liver (to CO2 and urea) |
| Excretion | mainly urinary | Kidney and lungs |

> [!note] FDA label cross-check: **no-label-value**
> Automated comparison with the [US prescribing information (DailyMed set e76fd60e…)](https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=e76fd60e-7644-48c5-9857-3608a045000b), label version 20260527. Tolerance: t½ ×0.5–1.5, protein binding ±10 pp.
> - half-life: no-label-value (label values: -)

## Related compounds (auto)

_Navigational links derived from ChEMBL targets, ATC classes and CYP substrate lists - not interaction claims._

- **Same ATC subgroup:** [[Anagrelide]], [[Celecoxib]], [[Masoprocol]], [[Mitotane]], [[Navitoclax (ABT-263)]], [[Tazemetostat]], [[Venetoclax]]

## Safety routing

Group-level triage (not compound-specific): `cytotoxicity`

- [[Stacking and Interaction Risks]]
